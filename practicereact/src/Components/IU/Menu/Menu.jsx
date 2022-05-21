import "./Menu.css"
import { NavLink } from 'react-router-dom';
export const Menu =()=>{
    return(
        <>
        <header>
            <nav className="nav">
                <div className="logo">Practice</div>
                <ul className="menu">
                    {/* <li><a href="">Home</a></li>
                    <li><a href="">About us</a></li>
                    <li><a href="">Contact us</a></li> */}
                    <NavLink className="navlink" to="/"><li>Home</li></NavLink> 
                    <NavLink className="navlink" to="/AboutUs"><li>About Us</li></NavLink> 
                    <NavLink className="navlink" to="/ContactUs"><li>Contact Us</li></NavLink> 

                </ul>
            </nav>
        </header>
  
        </>
    )

}