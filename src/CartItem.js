import React, { useState } from "react";

const CartItem = (props) => {
    const [price, setPrice] = useState(props.price);
    const [title, setTitle] = useState(props.title);
    const [qty, setQty] = useState(props.qty);
    const [img, setImg] = useState(props.img);

    const styles = {
        image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: "#ccc",
        },
    };

    return (
        <div className="cart-item">
            <div className="left-block">
                <img src={img} style={styles.image} alt="item pic" />
            </div>
            <div className="right-block">
                <div style={{ fontSize: 25 }}>{title}</div>
                <div style={{ color: "#777" }}>Rs {price}</div>
                <div style={{ color: "#777" }}>Qty: {qty}</div>
                <div className="cart-item-actions">
                {/* Buttons */}
                    <img
                        alt="decrease"
                        onClick={() => setQty((qty - 1))}
                        className="action-items"
                        src="https://cdn-icons-png.flaticon.com/512/9694/9694621.png"
                    />
                    <img
                        alt="increase"
                        onClick={() => setQty((qty + 1))}
                        className="action-items"
                        src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
                    />
                    <img
                        alt="delete"
                        className="action-items"
                        src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
                    />
                </div>
            </div>
        </div>
    );
};

export default CartItem;
