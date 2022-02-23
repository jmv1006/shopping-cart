import { useOutletContext, useNavigate } from "react-router-dom";
import './cart.css'

const Cart = () => {
    const Navigate = useNavigate();
    const [cartItems, addCartItems] = useOutletContext();
    
    const items = cartItems.map((item) => 
        <div key={item.number}>{item.name}</div>
    )


    return(
        <div id='cartContentContainer'>
            {items}
        </div>
    )
}

export default Cart;