import { Outlet, useOutletContext} from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../header/header";
import './main.css'

function App() {
  const [cartItems, addCartItems] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    //console.log(cartItems)
  })

  const itemsAmount = cartItems.map(item => item.quantity).reduce((prev, curr) => prev + curr, 0);

  return (
    <div id='App'>
      <Header cartItems={itemsAmount}/>
      <Outlet context={[count, setCount]} context={[cartItems, addCartItems]}/> {/*this is where our cart, shop, or home show up*/}
      {/* footer here */}
    </div>
  );
}

export default App;
