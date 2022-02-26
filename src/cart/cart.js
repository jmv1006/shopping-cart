import { useOutletContext, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import './cart.css'

const Cart = () => {
    const Navigate = useNavigate();
    const [cartItems, addCartItems] = useOutletContext();
    const [subTotal, setSubTotal] = useState(0);
    const [tax, setTax] = useState(0);
    const [total, setTotal] = useState(0)

    
    const navigateToItem = (number) => {
        Navigate(`/iteminfo/${number}`);
    };
    

    const removeItem = (item) => {
        let index = cartItems.findIndex(e => e.name === item.name && e.size === item.size)
        let editedArr = cartItems;
        editedArr[index].quantity--;
        addCartItems([...editedArr]);
        checkForZero();
    };

    const checkForZero = () => {
        for(let i = 0; i < cartItems.length; i++) {
            if(cartItems[i].quantity == 0) {
                let editedArr = cartItems;
                editedArr.splice(i, 1)
                addCartItems([...editedArr])
            }
        };
    };

    const addItem = (item) => {
        let index = cartItems.findIndex(e => e.name === item.name && e.size === item.size)
        let editedArr = cartItems;
        editedArr[index].quantity++;
        addCartItems([...editedArr]);
    }
    
    const calculateTotal = () => {
        let editedArr = cartItems;
        let seperatePrices = [];
        editedArr.map((item) => 
            seperatePrices.push(item.quantity * item.price)
        );

        const finalPrice = seperatePrices.reduce((partialSum, a) => partialSum + a, 0);

        setSubTotal(Math.round(finalPrice));

        setTax(Math.round(finalPrice * 0.095));

        setTotal(Math.round(subTotal + tax));
    };

    useEffect(() => {
        calculateTotal();
    });

    const items = cartItems.map((item) => 
        <div className='cartItem' key={item.size}>
            <img onClick={() => navigateToItem(item.number)} className='cartItemImage' src={item.img}></img>
            <div className='cartItemTitle'>{item.name}</div>
            <div className='cartItemPrice'>${item.price}.00</div>
            <div className='cartItemPrice'>Size: {item.size}</div>
            <div id='quantityCont'>
                <div className="increment" onClick={() => removeItem(item)} id={item.number}>-</div>
                <div className="itemQuantity"> {item.quantity} </div>
                <div className="increment" onClick={() => addItem(item)} id={item.number}>+</div>
            </div>
        </div>
    )

    return(
        <div id='cartContentContainer'>
            <div id='cartTitle'>Your Cart</div>
            <div id='checkoutAndItemsContainer'>
                <div id='cartItemsContainer'>
                    <div className="itemSum">Item Summary</div>
                    {items}
                </div>
                <div id='checkoutContainer'>
                    <div id='checkoutPricingContainer'>
                        <div id='checkoutTitle'>Summary</div>
                        <div id='subtotal'>Subtotal: ${subTotal}</div>
                        <div id='tax'>Tax: ${tax}</div>
                        <div id='total'>Total: ${total}</div>
                    </div>
                    <button id='checkoutButton'>Checkout</button>
                </div>
            </div>
        </div>
    )
}

export default Cart;