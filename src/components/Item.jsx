import React, { useContext } from "react";
import { cartContext } from "../context/Cart";

const Item = (props) => {
  const cart = useContext(cartContext);
  const handleAddToCart = () => {
    if (!Array.isArray(cart.items)) {
      cart.setItems([]); // Or initialize in your context
    }
    cart.setItems([...cart.items, { name: props.name, price: props.price }]);
  };
  console.log("Cart", cart);
  return (
    <div className="item-card">
      <h4>{props.name}</h4>
      <p>Price: ${props.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default Item;
