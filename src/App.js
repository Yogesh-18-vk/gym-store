import { useState } from "react";
import "./App.css";

import dumbbell from "./images/dumbbell.png";
import protein from "./images/protein.png";
import mat from "./images/mat.png";
import kettle from "./images/kettle.png";
import band from "./images/band.png";

const products = [
  { id: 1, name: "Dumbbell", price: 800, img: dumbbell },
  { id: 2, name: "Protein Powder", price: 1200, img: protein },
  { id: 3, name: "Yoga Mat", price: 500, img: mat },
  { id: 4, name: "Kettlebell", price: 900, img: kettle },
  { id: 5, name: "Resistance Band", price: 300, img: band }
];

function App() {
  const [quantity, setQuantity] = useState({});
  const [total, setTotal] = useState(0);

  const increment = (id) => {
    setQuantity({ ...quantity, [id]: (quantity[id] || 0) + 1 });
  };

  const decrement = (id) => {
    if ((quantity[id] || 0) > 0) {
      setQuantity({ ...quantity, [id]: quantity[id] - 1 });
    }
  };

  const addToCart = (product) => {
    const qty = quantity[product.id] || 0;
    setTotal(total + qty * product.price);
    setQuantity({ ...quantity, [product.id]: 0 });
  };

  return (
    <div className="container">
      <h1>Gym Store</h1>

      <div className="grid">
        {products.slice(0, 4).map((p) => (
          <div className="card" key={p.id}>
            <img src={p.img} alt={p.name} />
            <h3>{p.name}</h3>
            <p>₹{p.price}</p>

            <button onClick={() => decrement(p.id)}>-</button>
            {quantity[p.id] || 0}
            <button onClick={() => increment(p.id)}>+</button>

            <br />
            <button onClick={() => addToCart(p)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <div className="center">
        {products.slice(4).map((p) => (
          <div className="card" key={p.id}>
            <img src={p.img} alt={p.name} />
            <h3>{p.name}</h3>
            <p>₹{p.price}</p>

            <button onClick={() => decrement(p.id)}>-</button>
            {quantity[p.id] || 0}
            <button onClick={() => increment(p.id)}>+</button>

            <br />
            <button onClick={() => addToCart(p)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <div className="total">
        Total Payment Amount: ₹{total}
      </div>
    </div>
  );
}

export default App;
