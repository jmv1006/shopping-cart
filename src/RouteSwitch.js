import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./shop/shop";
import App from "./mainApp/App";

const RouteSwitch = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path='shop' element={<Shop />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch;