import React, { useState } from "react";

const CartItem = ({details}) => {
    // eslint-disable-next-line
    const [price, setPrice] = useState(details.price);
    // eslint-disable-next-line
    const [title, setTitle] = useState(details.title);
    const [qty, setQty] = useState(details.qty);
    // eslint-disable-next-line
    const [img, setImg] = useState(details.img);

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
                        onClick={(qty === 0) ? () => setQty(0) : () => setQty((qty - 1))}   // if qty is 0 set qty to 0 instead of -1, -2, -3, ...
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
