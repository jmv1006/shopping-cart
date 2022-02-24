import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from './mainApp/App';
import Shop from './shop/shop';
import Cart from './cart/cart';
import ItemInfo from './itemInfoPage/itemInfo';
import Home from './homePage/home';
import Item from './itemInfoPage/item';
import './mainApp/main.css'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename='/shopping-cart' >
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="cart" element={<Cart />} />
          <Route path="iteminfo" element={<ItemInfo />}>
            <Route path=':itemNumber' element={<Item />} />
          </Route>
          {/*Here goes the route to the item info pages, or the invoices*/}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);