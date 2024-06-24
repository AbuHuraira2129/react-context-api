import { useState, useContext } from "react";
import "./App.css";
import Item from "./components/Item";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <h1>Items</h1>
      <Item name="MacBook Pro" price={100000} />
      <Item name="Pendrive" price={4000} />
      <Item name="Mobile" price={35000} />
      <Cart />
    </>
  );
}

export default App;
