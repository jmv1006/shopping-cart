import { useState } from 'react';
import { Link } from 'react-router-dom';
import './footer.css'

const Footer = () => {

    const [email, setEmail] = useState('');

    const handleChange = (e) => {
       setEmail(e.target.value)
    };

    const submitEmail = (e) => {
        e.preventDefault()
        setEmail('')
    };

    const sendToGithub = () => {
        window.open('https://github.com/jmv1006')
    }

    return(
        <div id='footerContainer'>
            <Link to='/about'>About</Link>
            <Link to='/shop'>Shop</Link>
            <div id='emailContainer'>
                Join Our Mailing List!
                <form onSubmit={submitEmail} id='emailForm'>
                    <input type='text' value={email} onChange={handleChange} placeholder='Email'></input>
                    <button type='submit'>Submit</button>
                </form>
            </div>
            <div id='myInfo'>
                Designed by Jonathan Andrade Valenzuela 
                <div id='gitLogoContainer'>
                    <img onClick={sendToGithub} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
                </div>
            </div>
        </div>
    )
}

export default Footer;
