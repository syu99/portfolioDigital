// src/pages/AiMusic.js

import React from 'react';
import { tracks } from '../data';

const TrackItem = ({ title, src, cover }) => (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md">
      <img src={cover} alt={`Pochette de ${title}`} className="w-full h-48 object-cover rounded-md mb-4" />
      <h2 className="text-2xl mb-2">{title}</h2>
      <audio controls className="w-full">
        <source src={src} type="audio/mpeg" />
        Votre navigateur ne supporte pas l'élément audio.
      </audio>
    </div>
  );
  

  const AiMusic = () => (
    <div className="bg-background text-foreground p-4 min-h-screen pt-20">
      <h1 className="text-3xl font-bold text-purple mb-6 text-center">
        Musique Générée par IA
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {tracks.map((track, index) => (
          <TrackItem key={index} {...track} />
        ))}
      </div>
    </div>
  );
  

export default AiMusic;
