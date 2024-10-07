// server/server.js

const express = require('express');
const Stripe = require('stripe');
const cors = require('cors');
const dotenv = require('dotenv');

// Charger les variables d'environnement
dotenv.config();

const app = express();
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); // Utiliser la clé API secrète de Stripe

app.use(cors());
app.use(express.json());

app.post('/create-checkout-session', async (req, res) => {
  try {
    // Créer une session de paiement avec Stripe
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: req.body.items.map((item) => ({
        price_data: {
          currency: 'eur',
          product_data: {
            name: item.title,
            description: item.description,
          },
          unit_amount: item.price * 100, // Prix en centimes
        },
        quantity: item.quantity,
      })),
      mode: 'payment',
      success_url: `${process.env.FRONTEND_URL}/success`, // Redirection en cas de succès
      cancel_url: `${process.env.FRONTEND_URL}/cancel`,   // Redirection en cas d'annulation
    });

    res.json({ id: session.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Lancer le serveur sur le port défini dans les variables d'environnement ou sur 4242 par défaut
const PORT = process.env.PORT || 4242;
app.listen(PORT, () => console.log(`Serveur Stripe en écoute sur le port ${PORT}`));
