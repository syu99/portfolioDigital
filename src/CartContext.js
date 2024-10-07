// src/CartContext.js

import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Fonction pour ajouter un article au panier
  const addToCart = (item) => {
    setCartItems((prevItems) => {
      // Vérifie si l'article est déjà dans le panier
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem) {
        // Incrémente la quantité si l'article existe
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
        );
      } else {
        // Ajoute un nouvel article avec la quantité spécifiée
        return [...prevItems, item];
      }
    });
  };

  // Fonction pour supprimer un article du panier
  const removeFromCart = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== itemId)
    );
  };

  // Fonction pour mettre à jour la quantité d'un article
  const updateItemQuantity = (itemId, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity } : item
      )
    );
  };

  // Fonction pour vider le panier
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateItemQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
