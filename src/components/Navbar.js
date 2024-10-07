// src/components/Navbar.js

import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const navItems = [
    { name: 'Accueil', path: '/' },
    { name: 'Art IA', path: '/ai-art' },
    { name: 'Musique IA', path: '/ai-music' },
    { name: 'Montage Vidéo', path: '/video-editing' },
  ];

  return (
    <nav className="bg-background p-4">
      <ul className="flex space-x-4 text-foreground">
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
