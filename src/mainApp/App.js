import { Outlet, useOutletContext} from "react-router-dom";
import { useState } from "react";
import Header from "../header/header";
import './main.css'

function App() {
  const [cartItems, addCartItems] = useState([]);

  return (
    <div id='App'>
      <Header cartItems={cartItems.length}/>
      <Outlet context={[cartItems, addCartItems]}/> {/*this is where our cart, shop, or home show up*/}
      {/* footer here */}
    </div>
  );
}

export default App;
