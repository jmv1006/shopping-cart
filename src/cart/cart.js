import { useOutletContext, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import './cart.css'

const Cart = () => {
    const Navigate = useNavigate();
    const [cartItems, addCartItems] = useOutletContext();

    const removeItem = (e) => {
        let index = cartItems.findIndex(item => item.number == e.target.id)
        let editedArr = cartItems;
        editedArr[index].quantity--;
        addCartItems([...editedArr]);
        checkForZero();
    }

    const checkForZero = () => {
        for(let i = 0; i < cartItems.length; i++) {
            if(cartItems[i].quantity == 0) {
                let editedArr = cartItems;
                editedArr.splice(i, 1)
                addCartItems([...editedArr])
            }
        };
    };

    const addItem = (e) => {
        let index = cartItems.findIndex(item => item.number == e.target.id)
        let editedArr = cartItems;
        editedArr[index].quantity++;
        addCartItems([...editedArr]);
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