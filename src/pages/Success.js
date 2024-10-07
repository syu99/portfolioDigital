// src/pages/Success.js

import React from 'react';
import { Link } from 'react-router-dom';

const Success = () => (
  <div className="bg-background text-foreground p-4 min-h-screen pt-20 flex flex-col items-center justify-center">
    <h1 className="text-3xl font-bold text-purple mb-6 text-center">
      Paiement Réussi !
    </h1>
    <p className="text-center max-w-md">
      Merci pour votre achat. Nous vous contacterons bientôt pour les prochaines étapes.
    </p>
    <Link
      to="/"
      className="mt-6 bg-purple hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
    >
      Retour à l'Accueil
    </Link>
  </div>
);

export default Success;
