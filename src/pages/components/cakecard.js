// src/components/CakeCard.js
import React, { startTransition } from 'react';
import './CakeCard.css'; // Ensure you have a CSS file for styling

function CakeCard({ cake, onAddToCart }) {
  const { name, price, image } = cake;

  return (
    <div className="cake-card">
      <img src={image} alt={name} className="cake-card__image" />
      <h3 className="cake-card__name">{name}</h3>
      <p className="cake-card__price">${price.toFixed(2)}</p>
      <button className="cake-card__button" onClick={() => onAddToCart(cake)}>
        Add to Cart
      </button>
    </div>
  );
}

export default CakeCard;
