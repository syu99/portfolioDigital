// src/pages/Home.js

import React from 'react';
import { FaLinkedin } from 'react-icons/fa';

const Home = () => (
  <div className="bg-background text-foreground min-h-screen flex flex-col items-center p-4 pt-20">
    <h1 className="text-4xl font-bold text-purple mb-4 text-center">
      Bienvenue sur le Portfolio de Yoann
    </h1>
    <p className="text-xl mb-4 text-center max-w-2xl">
      Je suis un développeur passionné par les technologies d'intelligence
      artificielle, la musique et le montage vidéo. Ce portfolio présente mes
      créations générées par IA, mes compositions musicales et mes projets de
      montage vidéo.
    </p>
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
    <div className="mt-8 w-full max-w-md">
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
