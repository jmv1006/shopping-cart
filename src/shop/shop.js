import { useState } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
import items from './items';
import './shop.css'

const Shop = () => {
    const Navigate = useNavigate();
    const [cartItems, addCartItems] = useOutletContext();


    const addItemToCart = (item) => {
        if(cartItems.some(e => e.name === item.name)) {
            let index = cartItems.findIndex(e => e.name === item.name);
            let editedArr = cartItems;
            editedArr[index].quantity++;
            addCartItems([...editedArr])
        } else {
            item.quantity++;
            addCartItems(cartItems.concat(item));
        }
        Navigate('/cart')
    };

    const sendToItemInfo = (item) => {
        //setCurrentItem(currentItem => item);
        //setCurrentItem(currentItem + 1);
       // Navigate('/iteminfo')
    }

    const things = items.map((item) => 
        <div className='item' key={item.number}>
            <div id='imgContainer'>
                <img onClick={() => sendToItemInfo(item)} className='image' key='item.number' src={item.img}></img>
            </div>
            <div id='nameAndPriceContainer'>
                <div className='itemTitle'>{item.name}</div>
                <div className='itemPrice'>${item.price}.00</div>
            </div>
            <button onClick={() => addItemToCart(item)} className='addBtn'>Add To Cart</button>
        </div>
    );

    return(
        <div id='mainShopContainer'>
            <div id='shopTitle'>Shop</div>
            <div id='itemsDisplay'>
                {things}
            </div>
        </div>
    )
}

export default Shop;