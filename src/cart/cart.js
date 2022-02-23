import { useOutletContext, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import './cart.css'

const Cart = () => {
    const Navigate = useNavigate();
    const [cartItems, addCartItems] = useOutletContext();
    const [count, setCount] = useState(0)

    useEffect(() => {
        //change
    })


    const removeItem = (e) => {
        let index = cartItems.findIndex(item => item.number == e.target.id)
        cartItems[index].quantity--;
        setCount(count + 1)
        checkForZero();
    }

    const checkForZero = () => {
        for(let i = 0; i < cartItems.length; i++) {
            if(cartItems[i].quantity == 0) {
                cartItems.splice(i, 1)
            }
        };
    };

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