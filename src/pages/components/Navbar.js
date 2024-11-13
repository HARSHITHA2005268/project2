// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import cartIcon from '../assets/icons/cart.svg'; // Use relative path

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__logo">
        <Link to="/">Cake Shop</Link>
      </div>
      <nav className="navbar__links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/feedback">Feedback</Link>
        <Link to="/cart">
          <img src={cartIcon} alt="Cart" className="navbar__cart-icon" />
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;


