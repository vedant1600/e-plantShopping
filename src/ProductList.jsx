import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./CartSlice";

const plants = [
  {
    id: 1,
    name: "Snake Plant",
    price: 25,
    category: "Air Purifying Plants",
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Peace Lily",
    price: 30,
    category: "Air Purifying Plants",
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Spider Plant",
    price: 20,
    category: "Air Purifying Plants",
    image:
      "https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Areca Palm",
    price: 35,
    category: "Air Purifying Plants",
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "Aloe Vera",
    price: 22,
    category: "Air Purifying Plants",
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    name: "Rubber Plant",
    price: 32,
    category: "Air Purifying Plants",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 7,
    name: "Monstera",
    price: 40,
    category: "Tropical Plants",
    image:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    name: "Bird of Paradise",
    price: 45,
    category: "Tropical Plants",
    image:
      "https://images.unsplash.com/photo-1597055181300-df90f7d0f9a7?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 9,
    name: "Calathea",
    price: 38,
    category: "Tropical Plants",
    image:
      "https://images.unsplash.com/photo-1601987172724-cf7b7b7a8a9f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 10,
    name: "Philodendron",
    price: 34,
    category: "Tropical Plants",
    image:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 11,
    name: "Bamboo Palm",
    price: 36,
    category: "Tropical Plants",
    image:
      "https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 12,
    name: "Fiddle Leaf Fig",
    price: 42,
    category: "Tropical Plants",
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 13,
    name: "Rose Plant",
    price: 28,
    category: "Flowering Plants",
    image:
      "https://images.unsplash.com/photo-1496062031456-07b8f162a322?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 14,
    name: "Orchid",
    price: 35,
    category: "Flowering Plants",
    image:
      "https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 15,
    name: "African Violet",
    price: 24,
    category: "Flowering Plants",
    image:
      "https://images.unsplash.com/photo-1455582916367-25f75bfc6710?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 16,
    name: "Anthurium",
    price: 33,
    category: "Flowering Plants",
    image:
      "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 17,
    name: "Begonia",
    price: 27,
    category: "Flowering Plants",
    image:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 18,
    name: "Jasmine Plant",
    price: 29,
    category: "Flowering Plants",
    image:
      "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=800&q=80",
  },
];

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const categories = [
    "Air Purifying Plants",
    "Tropical Plants",
    "Flowering Plants",
  ];

  const isInCart = (id) => {
    return cartItems.some((item) => item.id === id);
  };

  return (
    <div className="page">
      <div className="page-heading">
        <h1>Our Plants</h1>

        <p>
          Explore our collection of beautiful plants for your home and
          office.
        </p>
      </div>

      {categories.map((category) => {
        const categoryPlants = plants.filter(
          (plant) => plant.category === category
        );

        return (
          <section className="category-section" key={category}>
            <h2>{category}</h2>

            <div className="product-grid">
              {categoryPlants.map((plant) => (
                <div className="product-card" key={plant.id}>
                  <img
                    src={plant.image}
                    alt={plant.name}
                  />

                  <div className="product-info">
                    <h3>{plant.name}</h3>

                    <p className="price">
                      ${plant.price.toFixed(2)}
                    </p>

                    <button
                      className="primary-button small"
                      disabled={isInCart(plant.id)}
                      onClick={() => dispatch(addToCart(plant))}
                    >
                      {isInCart(plant.id)
                        ? "Added to Cart"
                        : "Add to Cart"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}

export default ProductList;