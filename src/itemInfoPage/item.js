import './itemInfo.css'
import { useOutletContext, useParams, useNavigate } from "react-router-dom";
import items from '../shop/items';

const Item = () => {

    const [cartItems, addCartItems] = useOutletContext();

    const Navigate = useNavigate();
    let params = useParams();
    let index = items.findIndex(item => item.number == (params.itemNumber))
    
    const chosenItem = items[index];

    const name = chosenItem.name;
    const price = chosenItem.price;
    const img = chosenItem.img;
    const desc = chosenItem.desc;

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
        Navigate('/cart');
    };

    return(
        <div id='itemInfoFullPageWrapper'>
            <div className='itemImageContainer'>
                <img className='itemPageImage' src={img}></img>
            </div> 
            <div className='itemInfoContainer'>
                <div className='itemInfoName'>{name}</div>
                <div className='itemInfoPrice'>${price}.00</div>
                <div className='itemInfoDesc'>{desc}</div>
                <button onClick={() => addItemToCart(chosenItem)} className='addBtn'>Add To Cart</button>
            </div>
        </div>
    )
}

export default Item;