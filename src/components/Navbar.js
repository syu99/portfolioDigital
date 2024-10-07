// src/components/Navbar.js

import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { navItems } from '../data';
import { FaShoppingCart } from 'react-icons/fa';
import { CartContext } from '../CartContext';

const Navbar = () => {
  const { cartItems } = useContext(CartContext);
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="bg-background p-4 fixed w-full top-0 z-10 flex justify-between items-center">
      <ul className="flex space-x-8 text-foreground">
        {navItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive ? 'text-purple font-bold' : 'hover:text-purple'
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="flex items-center">
        <NavLink
          to="/cart"
          className="text-xl flex items-center ml-4 hover:text-yellow-400"
        >
          {/* Icon explicitly set to Dracula green */}
          <FaShoppingCart className="mr-2" style={{ color: '#50fa7b' }} /> {/* Icon in green */}
          {/* Text in yellow */}
          <span className="text-yellow-400">Panier ({totalItems})</span> {/* Panier text in yellow */}
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
