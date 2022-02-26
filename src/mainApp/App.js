import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import './main.css'

function App() {
  const [cartItems, addCartItems] = useState([]);

  useEffect(() => {
   
  })

  const itemsAmount = cartItems.map(item => item.quantity).reduce((prev, curr) => prev + curr, 0);

  return (
    <div id='App'>
      <Header cartItems={itemsAmount}/>
      <Outlet context={[cartItems, addCartItems]}/> {/*this is where our cart, shop, or home show up*/}
      <Footer />
    </div>
  );
}

export default App;
