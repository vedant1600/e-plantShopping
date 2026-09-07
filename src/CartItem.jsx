import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart
} from "./CartSlice";

export default function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalCost = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <main className="page cart-page">
      <div className="page-heading">
        <p className="eyebrow">YOUR SHOPPING CART</p>
        <h1>Shopping Cart</h1>
        <p>{totalItems} item(s) in your cart</p>
      </div>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <h2>Your cart is empty 🌱</h2>
          <p>Add some beautiful plants to get started.</p>
          <Link to="/plants" className="primary-button">Continue Shopping</Link>
        </div>
      ) : (
        <>
          <div className="cart-layout">
            <section className="cart-items">
              {cartItems.map((item) => (
                <article className="cart-item" key={item.id}>
                  <img src={item.image} alt={item.name} />
                  <div className="cart-item-info">
                    <h2>{item.name}</h2>
                    <p>Unit price: ${item.price.toFixed(2)}</p>
                    <p>
                      Total for this plant:{" "}
                      <strong>${(item.price * item.quantity).toFixed(2)}</strong>
                    </p>

                    <div className="quantity-controls">
                      <button onClick={() => dispatch(decreaseQuantity(item.id))}>−</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                    </div>

                    <button
                      className="delete-button"
                      onClick={() => dispatch(removeFromCart(item.id))}
                    >
                      Delete
                    </button>
                  </div>
                </article>
              ))}
            </section>

            <aside className="cart-summary">
              <h2>Order Summary</h2>
              <p>Total plants: <strong>{totalItems}</strong></p>
              <p className="grand-total">
                Total cost: <strong>${totalCost.toFixed(2)}</strong>
              </p>
              <button
                className="primary-button checkout"
                onClick={() => alert("Checkout Coming Soon!")}
              >
                Checkout
              </button>
              <Link to="/plants" className="secondary-button">
                Continue Shopping
              </Link>
            </aside>
          </div>
        </>
      )}
    </main>
  );
}