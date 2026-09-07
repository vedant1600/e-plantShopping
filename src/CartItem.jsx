import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "./CartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  // Calculate total cost of all items in the cart
  const calculateTotalAmount = () => {
    return cartItems.reduce(
      (total, cartItem) =>
        total + cartItem.price * cartItem.quantity,
      0
    );
  };

  // Calculate total cost for the current item
  const calculateItemTotal = () => {
    return item.price * item.quantity;
  };

  const handleIncrease = () => {
    dispatch(increaseQuantity(item.id));
  };

  const handleDecrease = () => {
    dispatch(decreaseQuantity(item.id));
  };

  const handleDelete = () => {
    dispatch(removeFromCart(item.id));
  };

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />

      <div className="cart-item-info">
        <h2>{item.name}</h2>

        <p>
          Unit Price: ${item.price.toFixed(2)}
        </p>

        <div className="quantity-controls">
          <button onClick={handleDecrease}>
            −
          </button>

          <span className="quantity">
            {item.quantity}
          </span>

          <button onClick={handleIncrease}>
            +
          </button>
        </div>

        <p>
          Quantity: <strong>{item.quantity}</strong>
        </p>

        <p className="item-total">
          Item Total: ${calculateItemTotal().toFixed(2)}
        </p>

        <button
          className="delete-button"
          onClick={handleDelete}
        >
          Delete
        </button>

        {/* Total cart amount */}
        <p className="grand-total">
          Total Cart Amount: ${calculateTotalAmount().toFixed(2)}
        </p>
      </div>
    </div>
  );
}

export default CartItem;