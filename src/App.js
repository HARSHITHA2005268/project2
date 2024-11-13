import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './pages/Navbar.jsx'; // Corrected path
import Home from './'; // Corrected path (if 'home.jsx' is lowercase)
import ProductDetails from './pages/page components/product details.js'; // Corrected path
import Cart from './pages/page components/cart.js'; // Corrected path

function App() {
  return (
    
      <Router>
        <Navbar />
        <div className="app-container">
          <Routes>
            <Route path="/" element={<home />} />
            <Route path="/product/:cakeId" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </Router>
   
  );
}

export default App;

