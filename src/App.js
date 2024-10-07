// src/App.js

import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { CartProvider } from './CartContext';

const Home = lazy(() => import('./pages/Home'));
const AiArt = lazy(() => import('./pages/AiArt'));
const AiMusic = lazy(() => import('./pages/AiMusic'));
const VideoEditing = lazy(() => import('./pages/VideoEditing'));
const Cart = lazy(() => import('./pages/Cart'));

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <div className="pt-20 bg-background min-h-screen">
          <Suspense fallback={<div className="text-foreground">Chargement...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/ai-art" element={<AiArt />} />
              <Route path="/ai-music" element={<AiMusic />} />
              <Route path="/video-editing" element={<VideoEditing />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </Suspense>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
