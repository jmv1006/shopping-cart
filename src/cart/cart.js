import { useOutletContext, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import './cart.css'

const Cart = () => {
    const Navigate = useNavigate();
    const [cartItems, addCartItems] = useOutletContext();

    useEffect(() => {
        console.log('cart changed')
    })


    const removeItem = (e) => {
   
    }

    const addItem = () => {

    }
    
    const items = cartItems.map((item) => 
        <div className='cartItem' key={item.number}>
            <img className='cartItemImage' src={item.img}></img>
            <div className='cartItemTitle'>{item.name}</div>
            <div className='cartItemPrice'>{item.price}</div>
            <div id='quantityCont'>
                <div className="increment" onClick={removeItem} id={item.number}>-</div>
                <div className="itemQuantity"> {item.quantity} </div>
                <div className="increment" onClick={addItem} id={item.number}>+</div>
            </div>
            
        </div>
    )

    return(
        <div id='cartContentContainer'>
            {items}
        </div>
    )
}

export default Cart;