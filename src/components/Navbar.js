import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-background p-4">
      <ul className="flex space-x-4 text-foreground">
        <li><a href="/">Home</a></li>
        <li><a href="/ai-art">AI Art</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
