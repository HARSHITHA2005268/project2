// src/pages/ProductDetails.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function ProductDetails() {
  const { cakeId } = useParams(); // Get the cakeId from the URL
  const navigate = useNavigate();

  // Sample cakes data
  const [cake, setCake] = useState(null);

  // Simulated cakes data (this would usually come from an API or database)
  const cakesData = [
    {
      id: 1,
      name: 'Chocolate Cake',
      description: 'A rich and moist chocolate cake.',
      price: 20.99,
      image: '/assets/cakes/chocolate-cake.jpg',
    },
    {
      id: 2,
      name: 'Vanilla Cake',
      description: 'A classic, soft vanilla cake.',
      price: 18.99,
      image: '/assets/cakes/vanilla-/pages/cake1.jpg',
    },
    {
      id: 3,
      name: 'Strawberry Cake',
      description: 'A sweet and fruity strawberry cake.',
      price: 22.99,
      image: '/assets/cakes/strawberry-/pages/cake2.jpg',
    },
  ];

  // Use useEffect to find the specific cake based on cakeId
  useEffect(() => {
    const selectedCake = cakesData.find(cake => cake.id === parseInt(cakeId));
    if (selectedCake) {
      setCake(selectedCake);
    } else {
      // If no cake found, navigate to the home page (or display a 404 message)
      navigate('/');
    }
  }, [cakeId, navigate]);

  // Handle adding the cake to the cart
  const handleAddToCart = () => {
    console.log('Added to cart:', cake);
    // Add your cart functionality here
  };

  if (!cake) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-details">
      <h1>{cake.name}</h1>
      <img src={cake.image} alt={cake.name} className="product-details__image" />
      <p className="product-details__description">{cake.description}</p>
      <p className="product-details__price">${cake.price.toFixed(2)}</p>
      <button className="product-details__button" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductDetails;
