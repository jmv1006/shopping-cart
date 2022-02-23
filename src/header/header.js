import './header.css'
import { Link } from "react-router-dom";

const Header = (props) => {
    return(
        <div id='headerContainer'>
            <div id='title'>SOLES</div>
            <div id='linksContainer'>
                <Link to='/'>Home</Link>
                <Link to='/shop'>Shop</Link>
                <Link to='/cart'>Cart: {props.cartItems}</Link>
            </div>
        </div>
    )
}

export default Header;