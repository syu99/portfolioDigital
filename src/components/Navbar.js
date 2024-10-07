// src/components/Navbar.js

import React from 'react';
import { NavLink } from 'react-router-dom';
import { navItems } from '../data';

const Navbar = () => {
  return (
    <nav className="bg-background p-4 fixed w-full top-0 z-10">
      <ul className="flex justify-center space-x-8 text-foreground">
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
    </nav>
  );
};

export default Navbar;
