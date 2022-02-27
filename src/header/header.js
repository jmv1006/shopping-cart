import './header.css'
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Header = (props) => {

    const Navigate = useNavigate();
    const sendHome = () => {
        Navigate('/')
    };
    
    return(
        <div id='headerContainer'>
            <div onClick={sendHome} id='title'>SOLES</div>
            <div id='linksContainer'>
                <Link to='/' className='navButton'>Home</Link>
                <Link to='/shop' className='navButton'>Shop</Link>
                <Link to='/about' className='navButton'>About</Link>
                <Link to='/cart' className='navButton'><FontAwesomeIcon icon={faShoppingCart} /> {props.cartItems} </Link>
            </div>
        </div>
    )
}

export default Header;