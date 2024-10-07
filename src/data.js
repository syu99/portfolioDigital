// src/data.js

// Navigation items pour la barre de navigation
export const navItems = [
    { name: 'Accueil', path: '/' },
    { name: 'Art IA', path: '/ai-art' },
    { name: 'Musique IA', path: '/ai-music' },
    { name: 'Montage Vidéo', path: '/video-editing' },
  ];
  
  // Liste des œuvres d'art IA
  export const artworks = [
    // Catégorie Fantasy
    {
      src: '/assets/ai-art/fantasy/fantasy_1.png',
      category: 'Fantasy',
      alt: 'Image de Guerrier Elfe',
    },
    {
      src: '/assets/ai-art/fantasy/fantasy_2.png',
      category: 'Fantasy',
      alt: 'Image de Guerrier Elfe',
    },
    {
      src: '/assets/ai-art/fantasy/fantasy_3.png',
      category: 'Fantasy',
      alt: 'Image de Guerrier Elfe',
    },
  
    // Catégorie Hyper Realistic
    {
      src: '/assets/ai-art/hyper-realistic/real_1.png',
      category: 'Hyper Realistic',
      alt: 'Portrait Hyper Réaliste',
    },
    {
      src: '/assets/ai-art/hyper-realistic/real_2.png',
      category: 'Hyper Realistic',
      alt: 'Portrait Hyper Réaliste',
    },
    {
      src: '/assets/ai-art/hyper-realistic/real_3.png',
      category: 'Hyper Realistic',
      alt: 'Portrait Hyper Réaliste',
    },
  
    // Catégorie Abstract
    {
      src: '/assets/ai-art/abstract/abstract-shapes.png',
      category: 'Abstract',
      alt: 'Formes Abstraites',
    },
  
    // Ajoutez d'autres œuvres ici
  ];
  
  // Liste des morceaux de musique IA
  export const tracks = [
    {
      title: 'Oriental Feel',
      src: '/assets/music/oriental_feel.wav',
      cover: '/assets/music/covers/cover_2.png',
    },
    {
      title: 'Panic in the Sky',
      src: '/assets/music/panic_in_the_sky.mp3',
      cover: '/assets/music/covers/cover_1.png',
    },
    // Ajoutez d'autres morceaux ici
  ];
  
  // Liste des vidéos
  export const videos = [
    {
      title: 'Projet Vidéo 1',
      src: '/assets/videos/fear_is_my_friend.mp4',
    },
    // Ajoutez d'autres vidéos ici
  ];
  