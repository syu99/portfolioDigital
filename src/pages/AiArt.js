// src/pages/AiArt.js

import React from 'react';
import { artworks } from '../data';

const uniqueCategories = [...new Set(artworks.map((art) => art.category))];

const ArtItem = ({ src, alt }) => (
  <div>
    <img src={src} alt={alt} className="w-full" />
  </div>
);

const AiArt = () => (
  <div className="bg-background text-foreground p-4 min-h-screen pt-20">
    <h1 className="text-4xl font-bold text-purple mb-8 text-center">
      Art Généré par IA
    </h1>
    {uniqueCategories.map((category) => {
      const filteredArtworks = artworks.filter((art) => art.category === category);

      return (
        <section key={category} className="mb-12">
          <h2 className="text-3xl font-semibold text-pink mb-6">{category}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {filteredArtworks.map((art, index) => (
              <ArtItem key={index} src={art.src} alt={art.alt} />
            ))}
          </div>
        </section>
      );
    })}
  </div>
);

export default AiArt;
