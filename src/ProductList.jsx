import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./CartSlice";

const fallbackImage =
  "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=500&q=80";

const products = [
  {
    id: 1,
    name: "Snake Plant",
    category: "Low Maintenance",
    price: 18,
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 2,
    name: "ZZ Plant",
    category: "Low Maintenance",
    price: 20,
    image:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 3,
    name: "Aloe Vera",
    category: "Low Maintenance",
    price: 15,
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 4,
    name: "Pothos",
    category: "Low Maintenance",
    price: 16,
    image:
      "https://images.unsplash.com/photo-1614594895304-fe7116ac3b26?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 5,
    name: "Spider Plant",
    category: "Low Maintenance",
    price: 14,
    image:
      "https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 6,
    name: "Jade Plant",
    category: "Low Maintenance",
    price: 19,
    image:
      "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=500&q=80",
  },

  {
    id: 7,
    name: "Peace Lily",
    category: "Air Purifying",
    price: 22,
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 8,
    name: "Rubber Plant",
    category: "Air Purifying",
    price: 24,
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 9,
    name: "Areca Palm",
    category: "Air Purifying",
    price: 28,
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 10,
    name: "Boston Fern",
    category: "Air Purifying",
    price: 21,
    image:
      "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 11,
    name: "Calathea",
    category: "Air Purifying",
    price: 26,
    image:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 12,
    name: "Dracaena",
    category: "Air Purifying",
    price: 23,
    image:
      "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?auto=format&fit=crop&w=500&q=80",
  },

  {
    id: 13,
    name: "Anthurium",
    category: "Flowering Plants",
    price: 25,
    image:
      "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 14,
    name: "Orchid",
    category: "Flowering Plants",
    price: 30,
    image:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 15,
    name: "African Violet",
    category: "Flowering Plants",
    price: 17,
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 16,
    name: "Bromeliad",
    category: "Flowering Plants",
    price: 27,
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 17,
    name: "Kalanchoe",
    category: "Flowering Plants",
    price: 16,
    image:
      "https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 18,
    name: "Gerbera",
    category: "Flowering Plants",
    price: 20,
    image:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=500&q=80",
  },
];

const categories = [
  "Low Maintenance",
  "Air Purifying",
  "Flowering Plants",
];

export default function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const isInCart = (id) => {
    return cartItems.some((item) => item.id === id);
  };

  return (
    <main className="page">
      <div className="page-heading">
        <p className="eyebrow">OUR COLLECTION</p>

        <h1>Houseplants</h1>

        <p>
          Choose your favourite plant and add it to your shopping cart.
        </p>
      </div>

      {categories.map((category) => (
        <section className="category-section" key={category}>
          <h2>{category}</h2>

          <div className="product-grid">
            {products
              .filter((product) => product.category === category)
              .map((product) => (
                <article className="product-card" key={product.id}>
                  <img
                    src={product.image}
                    alt={product.name}
                    onError={(event) => {
                      event.currentTarget.src = fallbackImage;
                    }}
                  />

                  <div className="product-info">
                    <h3>{product.name}</h3>

                    <p className="price">
                      ${product.price.toFixed(2)}
                    </p>

                    <button
                      className="primary-button small"
                      disabled={isInCart(product.id)}
                      onClick={() => dispatch(addToCart(product))}
                    >
                      {isInCart(product.id)
                        ? "Added to Cart"
                        : "Add to Cart"}
                    </button>
                  </div>
                </article>
              ))}
          </div>
        </section>
      ))}
    </main>
  );
}