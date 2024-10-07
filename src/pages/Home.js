// src/pages/Home.js

import React from 'react';
import { FaLinkedin } from 'react-icons/fa';

const Home = () => (
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
        {/* Pack Découverte */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-pink mb-4 text-center">
            Pack Découverte
          </h3>
          <p className="text-4xl font-bold text-center mb-4">149 €</p>
          <ul className="mb-6 space-y-2">
            <li>- 5 visuels d'art IA personnalisés</li>
            <li>- Montage vidéo court (30s)</li>
            <li>- Formats horizontal et vertical</li>
            <li>- Livraison en 48 heures</li>
          </ul>
          <button className="w-full bg-purple hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
            Commander
          </button>
        </div>
        {/* Pack Essentiel */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-pink mb-4 text-center">
            Pack Essentiel
          </h3>
          <p className="text-4xl font-bold text-center mb-4">299 €</p>
          <ul className="mb-6 space-y-2">
            <li>- 10 visuels d'art IA</li>
            <li>- Morceau musical court (1-2 min)</li>
            <li>- Montage vidéo dynamique (1 min)</li>
            <li>- Sous-titrage en une langue</li>
            <li>- Formats horizontal et vertical</li>
          </ul>
          <button className="w-full bg-purple hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
            Commander
          </button>
        </div>
        {/* Pack Professionnel */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-pink mb-4 text-center">
            Pack Professionnel
          </h3>
          <p className="text-4xl font-bold text-center mb-4">499 €</p>
          <ul className="mb-6 space-y-2">
            <li>- 15 visuels d'art IA</li>
            <li>- Morceau musical complet (3-4 min)</li>
            <li>- Montage vidéo dynamique (2 min)</li>
            <li>- Sous-titrage multilingue (2 langues)</li>
            <li>- Formats horizontal, vertical et carré</li>
          </ul>
          <button className="w-full bg-purple hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
            Commander
          </button>
        </div>
      </div>
    </div>

    {/* Section "Services à la Carte" */}
    <div className="mt-12 w-full max-w-4xl">
      <h2 className="text-3xl font-bold text-purple mb-6 text-center">
        Services à la Carte
      </h2>
      <div className="space-y-6">
        {/* Génération de Visuels d'Art IA */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-pink mb-4">
            Génération de Visuels d'Art IA
          </h3>
          <ul className="mb-4 space-y-2">
            <li>- 5 € par image</li>
            <li>- Forfait de 10 images : 45 €</li>
            <li>- Forfait de 20 images : 80 €</li>
          </ul>
        </div>
        {/* Production Musicale */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-pink mb-4">
            Production Musicale
          </h3>
          <ul className="mb-4 space-y-2">
            <li>- Morceau court (1-2 min) : 80 €</li>
            <li>- Morceau complet (3-4 min) : 150 €</li>
          </ul>
        </div>
        {/* Montage Vidéo Dynamique */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-pink mb-4">
            Montage Vidéo Dynamique
          </h3>
          <ul className="mb-4 space-y-2">
            <li>- 30 € par minute de vidéo finalisée</li>
          </ul>
        </div>
        {/* Sous-Titrage */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-pink mb-4">
            Sous-Titrage
          </h3>
          <ul className="mb-4 space-y-2">
            <li>- 2 € par minute de vidéo (une langue)</li>
            <li>- 3 € par minute pour le sous-titrage multilingue (par langue)</li>
          </ul>
        </div>
        {/* Vidéo Multi-Format */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-pink mb-4">
            Vidéo Multi-Format
          </h3>
          <ul className="mb-4 space-y-2">
            <li>- 15 € par format supplémentaire</li>
            <li>- Forfait multi-formats (horizontal, vertical, carré) : 35 €</li>
          </ul>
        </div>
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

export default Home;
