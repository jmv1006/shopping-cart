import './header.css'
import { Link } from "react-router-dom";

const Header = (props) => {
    return(
        <div id='headerContainer'>
            <div id='title'>SOLES</div>
            <div id='linksContainer'>
                <Link to='/' className='navButton'>Home</Link>
                <Link to='/shop' className='navButton'>Shop</Link>
                <Link to='/cart' className='navButton'>Cart: {props.cartItems}</Link>
            </div>
        </div>
    )
}

export default Header;