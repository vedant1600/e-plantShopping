import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import AboutUs from "./AboutUs";
import ProductList from "./ProductList";
import CartItem from "./CartItem";

function Navbar() {
  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navbar">
      <Link to="/" className="brand">🌿 Paradise Nursery</Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/plants">Plants</Link>
        <Link to="/cart" className="cart-link">
          🛒 Cart <span className="cart-count">{cartCount}</span>
        </Link>
      </div>
    </nav>
  );
}

function Home() {
  return (
    <main className="home-page">
      <section className="hero">
        <div className="hero-overlay">
          <p className="eyebrow">WELCOME TO PARADISE NURSERY</p>
          <h1>Bring Nature Into Your Home</h1>
          <p>
            Beautiful indoor plants, carefully selected to make your home
            fresher, greener, and happier.
          </p>
          <Link to="/plants" className="primary-button">Get Started</Link>
        </div>
      </section>

      <section className="about-preview">
        <h2>About Paradise Nursery</h2>
        <p>
          Paradise Nursery is an online plant shop offering healthy,
          easy-to-care-for houseplants for every type of home.
        </p>
        <Link to="/about" className="text-link">Learn more about us →</Link>
      </section>
    </main>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </>
  );
}