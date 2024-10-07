// src/pages/Cancel.js

import React from 'react';
import { Link } from 'react-router-dom';

const Cancel = () => (
  <div className="bg-background text-foreground p-4 min-h-screen pt-20 flex flex-col items-center justify-center">
    <h1 className="text-3xl font-bold text-purple mb-6 text-center">
      Paiement Annulé
    </h1>
    <p className="text-center max-w-md">
      Votre paiement a été annulé. Vous pouvez continuer vos achats ou nous contacter pour plus d'informations.
    </p>
    <Link
      to="/"
      className="mt-6 bg-purple hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
    >
      Retour à l'Accueil
    </Link>
  </div>
);

export default Cancel;
