import React, { useState } from 'react';
import CartItem from "./CartItem"

function App() {
  return (
    <div className="App">
      <CartItem price={999} title={'Phone'} qty={1} img={'https://picsum.photos/110'} />
    </div>
  );
}

export default App;
