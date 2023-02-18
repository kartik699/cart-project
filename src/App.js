import React, { useState, useEffect } from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
import { collection, addDoc, updateDoc, deleteDoc, onSnapshot, doc, orderBy, query, where } from "firebase/firestore";
import db from "./firebase";

function App() {
  let [items, setItems] = useState([]);
  let [loading, setLoading] = useState(true);

  const productsRef = collection(db, 'products');
  const q = query(productsRef, orderBy('price'));

  useEffect(() => 
    onSnapshot(q, productsRef, (snapshot) => {
      setItems(snapshot.docs.map(doc => ({...doc.data(), id: doc.id})));   // returning an object with doc data and id
      setLoading(false);
    })
  , []);

  const handleIncreaseQty = (item) => {
    let index = items.indexOf(item);

    updateDoc(doc(db, `products/${item.id}`), {
      qty: items[index].qty + 1
    })
      .then(() => console.log("Product updated"))
      .catch(err => console.log(err));
  };

  const handleDecreaseQty = (item) => {
    let index = items.indexOf(item);

    if (items[index].qty === 0) return;

    updateDoc(doc(db, `products/${item.id}`), {
      qty: items[index].qty - 1
    })
      .then(() => console.log("Product updated"))
      .catch(err => console.log(err));
  };

  const handleDeleteItem = (id) => {
    deleteDoc(doc(db, `products/${id}`))
      .then(() => console.log("product Deleted"))
      .catch((err) => console.log(err));
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
  };

  const addProduct = () => {
    addDoc(collection(db, 'products'), {
      img: "https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Washing Machine",
      qty: 1,
      price: 7999
    })
    .then(() => console.log("Product Added"))
    .catch(err => console.log(err));
  };

  return (
    <div className="App">
      <Navbar count={getCartCount()} />
      {/* adds a new product, hardcoded for now as washing machine */}
      {/* <button onClick={addProduct} style={{padding: 15, fontSize: 15, borderRadius: 10, cursor: 'pointer'}}>Add a Product</button> */}
      <Cart
      items={items} 
      handleIncreaseQty={handleIncreaseQty}
      handleDecreaseQty={handleDecreaseQty}
      handleDeleteItem={handleDeleteItem}
      />
      {loading && <h1>Loading Products...</h1>}  {/* loader while products are being fetched from firestore */}
      <div style={{fontSize: 20, padding: 10}}>
        TOTAL: { getCartTotal() }
      </div>
    </div>
  );
}

export default App;
