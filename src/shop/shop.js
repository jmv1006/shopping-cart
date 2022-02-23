import { useState } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
import items from './items';
import './shop.css'

const Shop = () => {

    const Navigate = useNavigate();
    const [cartItems, addCartItems] = useOutletContext();


    const addItemToCart = (item) => {
        if(cartItems.some(e => e.name === item.name)) {
            console.log('duplicate')
            let index = cartItems.findIndex(e => e.name === item.name);
            let editedArr = cartItems;
            editedArr[index].quantity++;
            console.log(editedArr)
            addCartItems(cartItems => [...cartItems, editedArr]);
        } else {
            addCartItems(cartItems.concat(item));
        }
        //Navigate('/cart')
    };


    const things = items.map((item) => 
        <div className='item' key={item.number}>
            <img className='image' key='item.number' src={item.img}></img>
            <div className='itemTitle'>{item.name}</div>
            <div className='itemPrice'>{item.price}</div>
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