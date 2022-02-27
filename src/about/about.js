import './about.css'
import img from './sneakers.jpeg'

const About = () => {

    const submitContact =(e) => {
        e.preventDefault();
    }
    return(
        <div id='aboutPageContainer'>
            <div id='aboutPageImgContainer'>
                <img src={img} id='aboutPageImg'></img>
            </div>
            <div className='textContainer'>
                <div className='aboutPageTitle'>Our Story</div>
                <div id='text'>
                    The core mission of SOLES is to deliver quality sneakers at a face value to
                    our customers. Growing up, our founder, Jonathan Andrade Valenzuela, was a sneakerhead. He
                    was always looking to be a trend setter, to set himself apart from others. He always ensured that 
                    the pair of shoes he had on his feet were unique, as they were a part of his personality. Here at SOLES, we 
                    live by the same values, to set ourselves apart. We work hard to ensure that we are able to provide the most
                    exclusive sneakers to our customers at FACE PRICE. Sneaker culture belongs to those who are passionate, not resellers
                    who are just looking to make a quick profit on a sneaker.
                </div>
            </div>
            <div className='textContainer'>
                <div className='aboutPageTitle'>About Us</div>
                <div id='text'>
                    The team at SOLES works exclusively with major sneaker brands such as NIKE and ADIDAS in order to acquire product
                    to sell at face value to our customers. We are a small team of 4 individuals who all share a passion for sneakers 
                    and are dedicated to helping all individuals gain fair access to purchase exclusive sneakers. The list of sneakers we
                    sell will continue growing, and if there is a specific sneaker that we don't carry that you think we should, feel free
                    to contact us below.
                </div>
            </div>
            <div id='contactContainer'>
                <div className='aboutPageTitle'>Contact</div>
                <form id='contactForm' onSubmit={submitContact}>
                    <label htmlFor='name'>Name</label>
                    <input type='text' name='name' placeholder='Name...'></input>
                    <label htmlFor='phone'>Phone</label>
                    <input type='tel' name='phone' placeholder='Phone Number...'></input>
                    <label htmlFor='email'>Email</label>
                    <input type='email' name='email' placeholder='Email...'></input>
                    <label htmlFor='message'>Message</label>
                    <textarea id="text" name="message" rows="5" cols="25" id='messageBox' placeholder='Message'></textarea>
                    <button id='contactSubmitButton' type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
};

export default About;