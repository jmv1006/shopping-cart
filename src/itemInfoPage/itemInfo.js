import './itemInfo.css'
import items from '../shop/items';
import { useOutletContext, useNavigate, Link, Outlet } from "react-router-dom";


const ItemInfo = () => {
    const [cartItems, addCartItems] = useOutletContext();



    return(
        <div id='infoPageContainer'>
            <Outlet />
        </div>
    )
}

export default ItemInfo;