import React, { useState } from "react";
import CartItem from "./CartItem";

const Cart = ({ items, handleIncreaseQty, handleDecreaseQty, handleDeleteItem }) => {
    return (
        <div className="cart">
            { items.map((item) => {
                return <CartItem
                item = {item}
                key={item.id}
                onIncreaseQuantity = {handleIncreaseQty}
                onDecreaseQuantity = {handleDecreaseQty}
                onDeleteItem = {handleDeleteItem}
                />
            }) }
        </div>
    );
};

export default Cart;
