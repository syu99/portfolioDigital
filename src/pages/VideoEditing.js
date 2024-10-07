// src/pages/VideoEditing.js

import React from 'react';
import { videos } from '../data';

const VideoItem = ({ title, src }) => (
  <div>
    <h2 className="text-xl mb-2">{title}</h2>
    <video controls className="w-full">
      <source src={src} type="video/mp4" />
      Votre navigateur ne supporte pas l'élément vidéo.
    </video>
  </div>
);

const VideoEditing = () => (
  <div className="bg-background text-foreground p-4 min-h-screen">
    <h1 className="text-3xl font-bold text-purple mb-6">Projets de Montage Vidéo</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {videos.map((video, index) => (
        <VideoItem key={index} {...video} />
      ))}
    </div>
  </div>
);

export default VideoEditing;
