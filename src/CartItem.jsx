import React from "react";
import { useDispatch } from "react-redux";

import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "./CartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  const totalCost = item.price * item.quantity;

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />

      <div className="cart-item-info">
        <h2>{item.name}</h2>

        <p>
          Unit Price: ${item.price.toFixed(2)}
        </p>

        <div className="quantity-controls">
          <button
            onClick={() => dispatch(decreaseQuantity(item.id))}
          >
            −
          </button>

          <span className="quantity">
            {item.quantity}
          </span>

          <button
            onClick={() => dispatch(increaseQuantity(item.id))}
          >
            +
          </button>
        </div>

        <p className="item-total">
          Total: ${totalCost.toFixed(2)}
        </p>

        <button
          className="delete-button"
          onClick={() => dispatch(removeFromCart(item.id))}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default CartItem;