import { useOutletContext, useNavigate } from "react-router-dom";
import './home.css'
import image from './homepageimg.png'

const Home = () => {
    const Navigate = useNavigate();

    const sendToShop = () => {
        Navigate('/shop');
    }

    return(
        <div id="homePageContainer">
            <div id='homePageImgContainer'>
                <img id='homePageImg' src={image}/>
            </div>
            <div id='homePageText'>
                SOLES is the premier destination for all kinds of sneakers at retail
                prices. Click "Shop Now" to find your next pair.
            </div>
            <div id='goToStoreBtn'>
                <button id='shopNow' onClick={sendToShop}>Shop Now</button>
            </div>
        </div>
    )
}

export default Home;