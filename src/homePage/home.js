import { useOutletContext } from "react-router-dom";

const Home = () => {

    const [count, setCount] = useOutletContext();
    const handleClick = () => setCount(count + 1)


    return(
        <div>
            Home
            <button onClick={handleClick}>Click</button>
        </div>
    )
}

export default Home;