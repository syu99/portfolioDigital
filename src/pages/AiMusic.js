// src/pages/AiMusic.js

import React from 'react';
import { tracks } from '../data';

const TrackItem = ({ title, src, cover }) => (
  <div className="mb-6 flex items-center">
    <img src={cover} alt={`Pochette de ${title}`} className="w-24 h-24 mr-4" />
    <div>
      <h2 className="text-xl mb-2">{title}</h2>
      <audio controls className="w-full">
        <source src={src} type="audio/mpeg" />
        Votre navigateur ne supporte pas l'élément audio.
      </audio>
    </div>
  </div>
);

const AiMusic = () => (
  <div className="bg-background text-foreground p-4 min-h-screen pt-20">
    <h1 className="text-3xl font-bold text-purple mb-6 text-center">
      Musique Générée par IA
    </h1>
    <div className="space-y-6">
      {tracks.map((track, index) => (
        <TrackItem key={index} {...track} />
      ))}
    </div>
  </div>
);

export default AiMusic;
