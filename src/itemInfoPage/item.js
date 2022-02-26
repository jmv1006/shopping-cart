import './itemInfo.css'
import { useOutletContext, useParams, useNavigate } from "react-router-dom";
import items from '../shop/items';
import { useState } from 'react';

const Item = () => {
    const [cartItems, addCartItems] = useOutletContext();
    const [size, setSize] = useState('');

    const Navigate = useNavigate();
    let params = useParams();
    let index = items.findIndex(item => item.number == (params.itemNumber))
    const chosenItem = items[index];

    const name = chosenItem.name;
    const price = chosenItem.price;
    const img = chosenItem.img;
    const desc = chosenItem.desc;

    const addItemToCart = (item) => {

        if(size === '') {
            alert('Choose a Size!')
        } else {
            item.size = size;
            if(cartItems.some(e => e.name === item.name && e.size === item.size)) {
                let index = cartItems.findIndex(e => e.name === item.name && e.size === item.size)
                let editedArr = cartItems;
                editedArr[index].quantity++;
                addCartItems([...editedArr])
            } else {
                let newItem = {
                    name: item.name,
                    price: item.price,
                    desc: item.desc,
                    img: item.img,
                    quantity: 0,
                    number: item.number,
                    size: item.size
                }
                newItem.quantity++;
                addCartItems(cartItems.concat(newItem));
            }
            Navigate('/cart');
        };
    };


    const chooseSize = (e) => {
        setSize(e.target.id);

        const btns = document.getElementsByClassName('sizeBtn');
        for(let i = 0; i < btns.length; i++) {
            btns[i].style.backgroundColor = '';
            btns[i].style.color = 'black';
        }

        e.target.style.backgroundColor = '#404040';
        e.target.style.color = 'white';
    }

    const sizes = [7.0,7.5,8.0,8.5,9.0,9.5,10,10.5,11,11.5,12,12.5]
    const sizesDisplay = sizes.map((size) => 
        <button id={size} onClick={chooseSize} key={size} className='sizeBtn'>{size}</button>
    )

    return(
        <div id='itemInfoFullPageWrapper'>
            <div className='itemImageContainer'>
                <img className='itemPageImage' src={img}></img>
            </div> 
            <div className='itemInfoContainer'>
                <div className='itemInfoName'>{name}</div>
                <div className='itemInfoPrice'>${price}.00</div>
                <div className='itemInfoDesc'>{desc}</div>
                Sizes (US):
                <div className='sizesDisplay'>
                    {sizesDisplay}
                </div>
                <button onClick={() => addItemToCart(chosenItem)} className='addToCartBtn'>Add To Cart</button>
            </div>
        </div>
    )
}

export default Item;