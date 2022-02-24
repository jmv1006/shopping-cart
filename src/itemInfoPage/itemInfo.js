import './itemInfo.css'
import { useOutletContext, useNavigate, Link, Outlet } from "react-router-dom";


const ItemInfo = () => {
    const [cartItems, addCartItems] = useOutletContext();

    const item = cartItems.map((item) => (
        <Link to={`/iteminfo/${item.number}`} key={item.number}>{item.name}</Link>
    ))

    return(
        <div id='infoPageContainer'>
            <Outlet />
        </div>
    )
}

export default ItemInfo;