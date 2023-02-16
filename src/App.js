import React, { useState } from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";

function App() {
  let [items, setItems] = useState([
    {
      price: 10999,
      title: "Phone",
      qty: 1,
      img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
      id: 1,
    },
    {
      price: 69999,
      title: "Laptop",
      qty: 1,
      img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
      id: 2,
    },
    {
      price: 9999,
      title: "Watch",
      qty: 1,
      img: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      id: 3,
    },
    {
      price: 2999,
      title: "Monitor",
      qty: 1,
      img: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      id: 4,
    },
  ]);

  const handleIncreaseQty = (item) => {
    let index = items.indexOf(item);
    items = items.map((item) => {
      if (items.indexOf(item) == index) {
        item.qty += 1;
        return item;
      }

      return item;
    });

    setItems(items);
  };

  const handleDecreaseQty = (item) => {
    let index = items.indexOf(item);

    if (items[index].qty === 0) return;

    items = items.map((item) => {
      if (items.indexOf(item) == index) {
        item.qty -= 1;
        return item;
      }

      return item;
    });

    setItems(items);
  };

  const handleDeleteItem = (id) => {
    items = items.filter((item) => item.id !== id);
    setItems(items);
  };

  const getCartCount = () => {
    let itemCount = 0;

    for(let item of items){
      itemCount += item.qty;
    }

    return itemCount;
  };

  const getCartTotal = () => {
    let totalCost = 0

    items.forEach(item => totalCost += (item.price * item.qty));

    return totalCost;
  }

  return (
    <div className="App">
      <Navbar count={getCartCount()} />
      <Cart
      items={items} 
      handleIncreaseQty={handleIncreaseQty}
      handleDecreaseQty={handleDecreaseQty}
      handleDeleteItem={handleDeleteItem}
      />
      <div style={{fontSize: 20, padding: 10}}>
        TOTAL: { getCartTotal() }
      </div>
    </div>
  );
}

export default App;
