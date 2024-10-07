// src/pages/Cart.js

import React, { useContext } from 'react';
import { CartContext } from '../CartContext';

const Cart = () => {
  const { cartItems, updateItemQuantity, removeFromCart, clearCart } = useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-background text-foreground p-4 min-h-screen pt-20">
      <h1 className="text-3xl font-bold text-purple mb-6 text-center">
        Votre Panier
      </h1>
      {cartItems.length === 0 ? (
        <p className="text-center">Votre panier est vide.</p>
      ) : (
        <div className="max-w-4xl mx-auto">
          <table className="w-full mb-6">
            <thead>
              <tr>
                <th className="text-left">Produit</th>
                <th className="text-right">Prix</th>
                <th className="text-center">Quantité</th>
                <th className="text-right">Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.title} - {item.description}</td>
                  <td className="text-right">{item.price} €</td>
                  <td className="text-center">
                    <button
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity - 1)
                      }
                      className="bg-gray-700 text-white px-2 py-1 rounded-l"
                    >
                      -
                    </button>
                    <span className="px-2">{item.quantity}</span>
                    <button
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity + 1)
                      }
                      className="bg-gray-700 text-white px-2 py-1 rounded-r"
                    >
                      +
                    </button>
                  </td>
                  <td className="text-right">{item.price * item.quantity} €</td>
                  <td className="text-right">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500"
                    >
                      Supprimer
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="text-right mb-6">
            <p className="text-xl font-bold">Total : {totalPrice} €</p>
          </div>
          <div className="flex justify-end space-x-4">
            <button
              onClick={clearCart}
              className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
            >
              Vider le Panier
            </button>
            <button
              onClick={() => {
                // Gérer le processus de paiement
                // Voir la section sur l'intégration du paiement ci-dessous
              }}
              className="bg-purple hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
            >
              Procéder au Paiement
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
