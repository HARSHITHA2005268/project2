import React from 'react';

 

const Homepage = () => {
  return (
    <div className="homepage">
      <h1>🎂 Welcome to Cake Junction – The Sweetest Place on Earth! 🍰</h1>
      <h2>At Cake Junction, we don't just bake cakes – we create moments of joy, love, and happiness. Every cake is a masterpiece, crafted with the finest ingredients, passion, and creativity.
        Whether you’re celebrating a milestone or simply treating yourself to a delightful dessert, we promise our cakes will make your day extra special.
        Because life is short, and you deserve a slice of happiness! 🍰✨
      </h2>

      <h2>Select a Cake</h2>


        {cakes.map((cake) => (
          <div key={cake.id} className="./components/cakecard.js">
            <img src={cake.image} alt={cake.name} width="300" height="200" />
            <h3>{cake.name}</h3>
            
          </div>
        ))}
      </div>
    
  );
};

export default Homepage;

