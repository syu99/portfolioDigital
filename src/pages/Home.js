// src/pages/Home.js

import React, { useContext, useState } from 'react';
import { CartContext } from '../CartContext';
import { FaLinkedin } from 'react-icons/fa';

const Home = () => {
  const { addToCart } = useContext(CartContext);

  // Définition des packs
  const packs = [
    {
      id: 'pack-decouverte',
      title: 'Pack Découverte',
      price: 149,
      features: [
        "5 visuels d'art IA personnalisés",
        'Montage vidéo court (30s)',
        'Formats horizontal et vertical',
        'Livraison en 48 heures',
      ],
    },
    {
      id: 'pack-essentiel',
      title: 'Pack Essentiel',
      price: 299,
      features: [
        "10 visuels d'art IA",
        'Morceau musical court (1-2 min)',
        'Montage vidéo dynamique (1 min)',
        'Sous-titrage en une langue',
        'Formats horizontal et vertical',
      ],
    },
    {
      id: 'pack-professionnel',
      title: 'Pack Professionnel',
      price: 499,
      features: [
        "15 visuels d'art IA",
        'Morceau musical complet (3-4 min)',
        'Montage vidéo dynamique (2 min)',
        'Sous-titrage multilingue (2 langues)',
        'Formats horizontal, vertical et carré',
      ],
    },
  ];

  // Définition des services à la carte
  const services = [
    {
      id: 'service-art-ia',
      title: "Génération de Visuels d'Art IA",
      options: [
        { id: 'art-ia-5', description: '5 € par image', price: 5 },
        { id: 'art-ia-10', description: 'Forfait de 10 images : 45 €', price: 45 },
        { id: 'art-ia-20', description: 'Forfait de 20 images : 80 €', price: 80 },
      ],
    },
    {
      id: 'service-production-musicale',
      title: 'Production Musicale',
      options: [
        { id: 'music-court', description: 'Morceau court (1-2 min) : 80 €', price: 80 },
        { id: 'music-complet', description: 'Morceau complet (3-4 min) : 150 €', price: 150 },
      ],
    },
    {
      id: 'service-montage-video',
      title: 'Montage Vidéo Dynamique',
      options: [
        { id: 'video-minute', description: '30 € par minute de vidéo finalisée', price: 30 },
      ],
    },
    {
      id: 'service-sous-titrage',
      title: 'Sous-Titrage',
      options: [
        { id: 'sous-titrage-une-langue', description: '2 € par minute de vidéo (une langue)', price: 2 },
        { id: 'sous-titrage-multi', description: '3 € par minute pour le sous-titrage multilingue (par langue)', price: 3 },
      ],
    },
    {
      id: 'service-video-multi-format',
      title: 'Vidéo Multi-Format',
      options: [
        { id: 'format-supplementaire', description: '15 € par format supplémentaire', price: 15 },
        { id: 'forfait-multi-formats', description: 'Forfait multi-formats (horizontal, vertical, carré) : 35 €', price: 35 },
      ],
    },
  ];

  // État pour les quantités des services à la carte
  const [serviceQuantities, setServiceQuantities] = useState({});

  // Gestion du changement de quantité
  const handleQuantityChange = (serviceId, optionId, change) => {
    setServiceQuantities((prevQuantities) => {
      const key = `${serviceId}-${optionId}`;
      const newQuantity = (prevQuantities[key] || 0) + change;
      if (newQuantity < 0) return prevQuantities;
      return {
        ...prevQuantities,
        [key]: newQuantity,
      };
    });
  };

  // Ajout des services au panier
  const handleAddServiceToCart = (serviceId) => {
    services.forEach((service) => {
      if (service.id === serviceId) {
        service.options.forEach((option) => {
          const key = `${serviceId}-${option.id}`;
          const quantity = serviceQuantities[key] || 0;
          if (quantity > 0) {
            addToCart({
              id: option.id,
              title: service.title,
              description: option.description,
              price: option.price,
              quantity,
            });
          }
        });
      }
    });
  };

  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col items-center p-4 pt-20">
      {/* Présentation personnelle */}
      <h1 className="text-4xl font-bold text-purple mb-4 text-center">
        Bienvenue sur le Portfolio de Yoann
      </h1>
      <p className="text-xl mb-4 text-center max-w-2xl">
        Je suis un développeur passionné par les technologies d'intelligence
        artificielle, la musique et le montage vidéo. Ce portfolio présente mes
        créations générées par IA, mes compositions musicales et mes projets de
        montage vidéo.
      </p>
      {/* Lien LinkedIn */}
      <div className="flex space-x-6 mt-4">
        <a
          href="https://www.linkedin.com/in/votre-profil/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl text-blue-600 hover:text-blue-800"
        >
          <FaLinkedin />
        </a>
      </div>

      {/* Section "Mes Offres et Tarifs" */}
      <div className="mt-8 w-full max-w-4xl">
        <h2 className="text-3xl font-bold text-purple mb-6 text-center">
          Mes Offres et Tarifs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packs.map((pack) => (
            <div key={pack.id} className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-pink mb-4 text-center">
                {pack.title}
              </h3>
              <p className="text-4xl font-bold text-center mb-4">{pack.price} €</p>
              <ul className="mb-6 space-y-2">
                {pack.features.map((feature, index) => (
                  <li key={index}>- {feature}</li>
                ))}
              </ul>
              <button
                onClick={() => addToCart({ ...pack, quantity: 1 })}
                className="w-full bg-purple hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
              >
                Commander
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Section "Services à la Carte" */}
      <div className="mt-12 w-full max-w-4xl">
        <h2 className="text-3xl font-bold text-purple mb-6 text-center">
          Services à la Carte
        </h2>
        <div className="space-y-6">
          {services.map((service) => (
            <div key={service.id} className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-pink mb-4">
                {service.title}
              </h3>
              {service.options.map((option) => {
                const key = `${service.id}-${option.id}`;
                const quantity = serviceQuantities[key] || 0;
                return (
                  <div
                    key={option.id}
                    className="flex items-center justify-between mb-2"
                  >
                    <span>{option.description}</span>
                    <div className="flex items-center">
                      <button
                        onClick={() => handleQuantityChange(service.id, option.id, -1)}
                        className="bg-gray-700 text-white px-2 py-1 rounded-l"
                      >
                        -
                      </button>
                      <span className="px-4">{quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(service.id, option.id, 1)}
                        className="bg-gray-700 text-white px-2 py-1 rounded-r"
                      >
                        +
                      </button>
                    </div>
                  </div>
                );
              })}
              <button
                onClick={() => handleAddServiceToCart(service.id)}
                className="mt-4 w-full bg-purple hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
              >
                Ajouter au Panier
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Formulaire de contact */}
      <div className="mt-12 w-full max-w-md">
        <form
          action="https://formspree.io/f/xnnqagqn"
          method="POST"
          className="bg-gray-800 p-6 rounded-lg shadow-md"
        >
          <h2 className="text-2xl mb-4">Contactez-moi</h2>
          <div className="mb-4">
            <label className="block text-sm mb-2" htmlFor="email">
              Votre email :
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="w-full p-2 rounded bg-gray-700 text-foreground"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-2" htmlFor="message">
              Votre message :
            </label>
            <textarea
              name="message"
              id="message"
              required
              className="w-full p-2 rounded bg-gray-700 text-foreground"
              rows="5"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-purple hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
          >
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
