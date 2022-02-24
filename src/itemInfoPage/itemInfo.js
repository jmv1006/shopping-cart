import './itemInfo.css'
import { Outlet, useOutletContext } from "react-router-dom";


const ItemInfo = () => {

    const [cartItems, addCartItems] = useOutletContext();

    return(
        <div id='infoPageContainer'>
            <Outlet context={[cartItems, addCartItems]} />
        </div>
    )
}

export default ItemInfo;