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
    src: `${process.env.PUBLIC_URL}/assets/ai-art/fantasy/fantasy_1.png`,
    category: 'Fantasy',
    alt: 'Image de Guerrier Elfe',
  },
  {
    src: `${process.env.PUBLIC_URL}/assets/ai-art/fantasy/fantasy_2.png`,
    category: 'Fantasy',
    alt: 'Image de Guerrier Elfe',
  },
  {
    src: `${process.env.PUBLIC_URL}/assets/ai-art/fantasy/fantasy_3.png`,
    category: 'Fantasy',
    alt: 'Image de Guerrier Elfe',
  },

  // Catégorie Hyper Realistic
  {
    src: `${process.env.PUBLIC_URL}/assets/ai-art/hyper-realistic/real_1.png`,
    category: 'Hyper Realistic',
    alt: 'Portrait Hyper Réaliste',
  },
  {
    src: `${process.env.PUBLIC_URL}/assets/ai-art/hyper-realistic/real_2.png`,
    category: 'Hyper Realistic',
    alt: 'Portrait Hyper Réaliste',
  },
  {
    src: `${process.env.PUBLIC_URL}/assets/ai-art/hyper-realistic/real_3.png`,
    category: 'Hyper Realistic',
    alt: 'Portrait Hyper Réaliste',
  },

  // Catégorie Abstract
  {
    src: `${process.env.PUBLIC_URL}/assets/ai-art/abstract/abstract-shapes.png`,
    category: 'Abstract',
    alt: 'Formes Abstraites',
  },
];

// Liste des morceaux de musique IA
export const tracks = [
  {
    title: 'Oriental Feel',
    src: `${process.env.PUBLIC_URL}/assets/music/oriental_feel.wav`,
    cover: `${process.env.PUBLIC_URL}/assets/music/covers/cover_2.png`,
  },
  {
    title: 'Panic in the Sky',
    src: `${process.env.PUBLIC_URL}/assets/music/panic_in_the_sky.mp3`,
    cover: `${process.env.PUBLIC_URL}/assets/music/covers/cover_1.png`,
  },
];

// Liste des vidéos
export const videos = [
  {
    title: 'Projet Vidéo 1',
    src: `${process.env.PUBLIC_URL}/assets/videos/fear_is_my_friend.mp4`,
  },
];
