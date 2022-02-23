import { useOutletContext, useNavigate } from "react-router-dom";
import './home.css'

const Home = () => {
    const Navigate = useNavigate();

    const sendToShop = () => {
        Navigate('/shop');
    }

    return(
        <div id="homePageContainer">
            <div id='homePageText'>
                Exclusive sneakers at exclusive prices. Only at SOLES.
            </div>
            <div id='goToStoreBtn'>
                <button onClick={sendToShop}>Shop Now</button>
            </div>
        </div>
    )
}

export default Home;