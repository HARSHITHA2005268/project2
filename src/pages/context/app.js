import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importing Router, Routes, and Route for routing
import { CartProvider } from './context/CartContext'; // Importing CartProvider from context for cart state management
import Navbar from './components/Navbar'; // Importing Navbar component
import Home from './pages/Home'; // Importing Home page
import ProductDetails from './pages/ProductDetails'; // Importing ProductDetails page
import Cart from './pages/Cart'; // Importing Cart page
import Footer from './components/Footer'; // Importing Footer component

function App() {
  return (
    <CartProvider> {/* Wrapping the entire app with CartProvider to manage cart state */}
      <Router> {/* Setting up React Router for page navigation */}
        <Navbar /> {/* Navbar component for navigation */}
        <div className="app-container"> {/* A wrapper for your app's content */}
          <Routes> {/* React Router's Routes to define page routes */}
            <Route path="/" element={<Home />} /> {/* Home route */}
            <Route path="/product/:cakeId" element={<ProductDetails />} /> {/* Dynamic route for product details based on cakeId */}
            <Route path="/cart" element={<Cart />} /> {/* Cart route */}
          </Routes>
        </div>
        <Footer /> {/* Footer component */}
      </Router>
    </CartProvider>
  );
}

export default App;
