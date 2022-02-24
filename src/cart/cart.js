import { useOutletContext, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import './cart.css'

const Cart = () => {
    const Navigate = useNavigate();
    const [cartItems, addCartItems] = useOutletContext();
    const [currentItem, setCurrentItem] = useOutletContext();
    const [subTotal, setSubTotal] = useState(0);
    const [tax, setTax] = useState(0);
    const [total, setTotal] = useState(0)

    const removeItem = (e) => {
        let index = cartItems.findIndex(item => item.number == e.target.id)
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

    const addItem = (e) => {
        let index = cartItems.findIndex(item => item.number == e.target.id)
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

        setSubTotal(Math.round(finalPrice) * 1);

        setTax(Math.round((finalPrice * 0.095) * 1));

        setTotal(subTotal + tax);
    };

    useEffect(() => {
        calculateTotal();
    });

    const items = cartItems.map((item) => 
        <div className='cartItem' key={item.number}>
            <img className='cartItemImage' src={item.img}></img>
            <div className='cartItemTitle'>{item.name}</div>
            <div className='cartItemPrice'>${item.price}.00</div>
            <div id='quantityCont'>
                <div className="increment" onClick={removeItem} id={item.number}>-</div>
                <div className="itemQuantity"> {item.quantity} </div>
                <div className="increment" onClick={addItem} id={item.number}>+</div>
            </div>
        </div>
    )

    return(
        <div id='cartContentContainer'>
            <div id='cartTitle'>Your Cart</div>
            <div id='checkoutAndItemsContainer'>
                <div id='cartItemsContainer'>
                    <h1>Item Summary</h1>
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