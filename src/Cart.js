import React from "react";
import CartItem from "./CartItem";

const Cart = () => {
    let items = {
        phone: {
            price: 10999,
            title: "Phone",
            qty: 1,
            img: "https://picsum.photos/110"
        },
        laptop: {
            price: 69999,
            title: "Laptop",
            qty: 1,
            img: "https://picsum.photos/110"
        },
        monitor: {
            price: 2999,
            title: "Monitor",
            qty: 1,
            img: "https://picsum.photos/110"
        }
    };

  return (
    <div className="cart">
      <CartItem details = {items.phone} />
      <CartItem details = {items.laptop} />
      <CartItem details = {items.monitor} />
    </div>
  );
};

export default Cart;
