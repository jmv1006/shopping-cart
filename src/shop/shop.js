import { useOutletContext, useNavigate } from "react-router-dom";
import items from './items';
import './shop.css'

const Shop = () => {

    const Navigate = useNavigate();
    const [cartItems, addCartItems] = useOutletContext();

    const addItemToCart = (item) => {
        addCartItems(cartItems.concat(item))
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