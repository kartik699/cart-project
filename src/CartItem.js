import React from "react";

const CartItem = ({ item, onIncreaseQuantity, onDecreaseQuantity, onDeleteItem }) => {
    // const [qty, setQty] = useState(item.qty);

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
                <img src={item.img} style={styles.image} alt="item pic" />
            </div>
            <div className="right-block">
                <div style={{ fontSize: 25 }}>{item.title}</div>
                <div style={{ color: "#777" }}>Rs {item.price}</div>
                <div style={{ color: "#777" }}>Qty: {item.qty}</div>
                <div className="cart-item-actions">
                {/* Buttons */}
                    <img
                        alt="decrease"
                        onClick={() => onDecreaseQuantity(item)}   // if qty is 0 set qty to 0 instead of -1, -2, -3, ...
                        className="action-items"
                        src="https://cdn-icons-png.flaticon.com/512/9694/9694621.png"
                    />
                    <img
                        alt="increase"
                        onClick={() => onIncreaseQuantity(item)}
                        className="action-items"
                        src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
                    />
                    <img
                        alt="delete"
                        onClick={() => onDeleteItem(item.id)}
                        className="action-items"
                        src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
                    />
                </div>
            </div>
        </div>
    );
};

export default CartItem;
