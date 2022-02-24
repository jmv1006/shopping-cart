import './itemInfo.css'
import { useOutletContext, Link, useParams } from "react-router-dom";
import items from '../shop/items';

const Item = () => {

    let params = useParams();
    let index = items.findIndex(item => item.number == (params.itemNumber))
    
    const chosenItem = items[index];

    const name = chosenItem.name;
    const price = chosenItem.price;

    return(
        <div>
            {name}
            {price}
        </div>
    )
}

export default Item;