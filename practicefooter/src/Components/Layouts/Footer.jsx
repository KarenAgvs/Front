import './Footer/Footer.css'
import {FaFacebookF} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa'
import { FaTwitter} from 'react-icons/fa'
import Logo1 from '../../images/Logo1.png'
export const Footer=()=>{
    return (
        <>
        <footer>
            <div className='logoAppDiv'>
                <img  className='logoAppimg'src={Logo1} alt="logo" />
                <p>Necesitas ayuda? Escríbenos<br/> <span>EasyHouseRent02@gmail.com</span></p>
            </div>
            <div className='containers'>
                <div className='Cont'>
                    <h3>Términos y condiciones</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quam commodi, id tempora fuga et deleniti quaerat quod! Corrupti cae.</p>
                </div>

                <div className='Cont'>
                    <h3>Políticas de privacidad</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quam commodi, id tempora fuga et deleniti quaerat quod! Corrupti ae.</p>
                </div>
                <div className='Cont'>
                    <h3>Políticas de privacidad</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quam commodi, id tempora fuga et deleniti quaerat quod! Corrupti .</p>
                </div>
            </div>

            <div className='redes'>
                <p className='textcentrado'>Contáctanos</p>
                    <div className='containerRedes'>
                        <li className='icons '><FaFacebookF color='#FFFF'/></li>  
                        <li className='icons'><FaInstagram color='#FFFF'/></li> 
                        <li className='icons' ><FaTwitter color='#FFFF'/></li>
                    </div>
                
            </div>
            <p className='textcentrado'>EasyHouseRent  - Copyright©2022</p>
        </footer>
        </>
    )
}