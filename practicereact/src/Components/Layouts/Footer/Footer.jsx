import './Footer.css'
import {FaFacebookF} from 'react-icons/fa';
import {FaTwitch} from 'react-icons/fa';
import {IoLogoWhatsapp} from 'react-icons/io';
export const Footer =()=>{
    return(
        <>
        <footer>
            <ul>
                <li><a href="">Karen</a></li>
                <li><a href="">Linkedin</a></li>
                <li><a href="">Github</a></li>
            </ul>
            <div className='socialmedia'>
            <FaFacebookF/>
            <IoLogoWhatsapp/>
            <FaTwitch/>
            </div>

        </footer>
        </>
    )
}