import React from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import ProductList from "./ProductList";
import CartItem from "./CartItem";
import AboutUs from "./AboutUs";

import "./App.css";

function Navbar() {
  const cartItems = useSelector((state) => state.cart.items);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="navbar">
      <Link to="/" className="brand">
        🌿 Paradise Nursery
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>

        <Link to="/plants">Plants</Link>

        <Link to="/about">About Us</Link>

        <Link to="/cart" className="cart-link">
          🛒 Cart
          <span className="cart-count">{cartCount}</span>
        </Link>
      </div>
    </nav>
  );
}

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <section className="hero background-image">
        <div className="hero-overlay">
          <p className="eyebrow">WELCOME TO PARADISE NURSERY</p>

          <h1>Bring Nature Into Your Home</h1>

          <p>
            Beautiful indoor plants, carefully selected to make your home
            fresher, greener, and happier.
          </p>

          <button
            className="primary-button"
            onClick={() => navigate("/plants")}
          >
            Get Started
          </button>
        </div>
      </section>

      <section className="about-preview">
        <h2>About Paradise Nursery</h2>

        <p>
          Paradise Nursery is an online plant shop offering beautiful,
          healthy, and affordable houseplants for homes and offices.
        </p>

        <p>
          Our goal is to make it easy for everyone to bring more nature
          into their everyday life.
        </p>

        <Link to="/about" className="secondary-button">
          Learn More About Us
        </Link>
      </section>
    </div>
  );
}

function CartPage() {
  const cartItems = useSelector((state) => state.cart.items);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="page">
      <div className="page-heading">
        <h1>Shopping Cart</h1>

        <p>
          {totalItems} {totalItems === 1 ? "item" : "items"} in your cart
        </p>
      </div>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <h2>Your cart is empty</h2>

          <p>
            You have not added any plants to your shopping cart yet.
          </p>

          <Link to="/plants" className="primary-button">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="cart-layout">
          <div className="cart-items">
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <div className="cart-summary">
            <h2>Cart Summary</h2>

            <p>
              Total number of plants: <strong>{totalItems}</strong>
            </p>

            <p className="grand-total">
              Total Cost: ${totalAmount.toFixed(2)}
            </p>

            <button
              className="primary-button checkout"
              onClick={() => alert("Coming Soon")}
            >
              Checkout
            </button>

            <Link to="/plants" className="secondary-button">
              Continue Shopping
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
  );
}

export default App;