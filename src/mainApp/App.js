import { Outlet, useOutletContext} from "react-router-dom";
import { useState } from "react";
import Header from "../header/header";
import './main.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div id='App'>
      <Header cartItems={count}/>
      <Outlet context={[count, setCount]}/> {/*this is where our cart, shop, or home show up*/}
      {/* footer here */}
      {count}
    </div>
  );
}

export default App;
