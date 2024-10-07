// src/pages/AiMusic.js

import React from 'react';
import { tracks } from '../data';

const TrackItem = ({ title, src }) => (
  <div className="mb-6">
    <h2 className="text-xl mb-2">{title}</h2>
    <audio controls className="w-full">
      <source src={src} type="audio/mpeg" />
      Votre navigateur ne supporte pas l'élément audio.
    </audio>
  </div>
);

const AiMusic = () => (
  <div className="bg-background text-foreground p-4 min-h-screen">
    <h1 className="text-3xl font-bold text-purple mb-6">Musique Générée par IA</h1>
    {tracks.map((track, index) => (
      <TrackItem key={index} {...track} />
    ))}
  </div>
);

export default AiMusic;
