import './header.css'
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <div id='headerContainer'>
            <h2>header</h2>
            <Link to='shop'>Shop</Link>
        </div>
    )
}

export default Header;