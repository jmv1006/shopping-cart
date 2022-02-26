import { useState } from "react";
import { useOutletContext, useNavigate, Link } from "react-router-dom";
import items from './items';
import './shop.css'

const Shop = () => {
    const things = items.map((item) => 
        <div className='item' key={item.number}>
            <div id='imgContainer'>
                <Link to={`/iteminfo/${item.number}`} key={item.number}>
                    <img className='image' key='item.number' src={item.img}></img>
                </Link>
            </div>
            <div id='nameAndPriceContainer'>
                <div className='itemTitle'>{item.name}</div>
                <div className='itemPrice'>${item.price}.00</div>
            </div>
            <Link to={`/iteminfo/${item.number}`} key={item.number}>
                    <button className="viewBtn">View</button>
            </Link>
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