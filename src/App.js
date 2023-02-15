import CartItem from "./CartItem"

function App() {
  return (
    <div className="App">
      <CartItem price={10999} title={'Phone'} qty={1} img={'https://picsum.photos/110'} />
      <CartItem price={69999} title={'Laptop'} qty={1} img={'https://picsum.photos/110'} />
      <CartItem price={2999} title={'Monitor'} qty={1} img={'https://picsum.photos/110'} />
    </div>
  );
}

export default App;
