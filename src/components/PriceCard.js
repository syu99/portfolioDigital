// src/components/PriceCard.js

import React from 'react';

const PriceCard = ({ title, price, features }) => (
  <div className="bg-gray-800 p-6 rounded-lg shadow-md">
    <h3 className="text-2xl font-semibold text-pink mb-4 text-center">
      {title}
    </h3>
    <p className="text-4xl font-bold text-center mb-4">{price}</p>
    <ul className="mb-6 space-y-2">
      {features.map((feature, index) => (
        <li key={index}>- {feature}</li>
      ))}
    </ul>
    <button className="w-full bg-purple hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
      Commander
    </button>
  </div>
);

export default PriceCard;
