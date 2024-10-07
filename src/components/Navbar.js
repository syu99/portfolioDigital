// src/components/Navbar.js

import React from 'react';
import { NavLink } from 'react-router-dom';
import { navItems } from '../data';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
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
          className="text-xl hover:text-purple flex items-center ml-4"
        >
          <FaShoppingCart className="mr-2" />
          Panier
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
