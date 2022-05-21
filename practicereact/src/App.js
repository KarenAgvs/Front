import logo from './logo.svg';
import { Menu } from './Components/IU/Menu/Menu.jsx'
import {Body} from './Components/Layouts/Body/Body.jsx'
import { Footer } from './Components/Layouts/Footer/Footer';
import {Home} from './Components/Pages/Home/Home.jsx';
import { About } from './Components/Pages/About us/About.jsx';
import { Contact } from './Components/Pages/Contact/Contact.jsx';
import {Routes,Route,BrowserRouter} from "react-router-dom";
import './App.css';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/AboutUs' element={<About/>}/>
      <Route path='/ContactUs' element= {<Contact/>}/>
    </Routes>
    </BrowserRouter>
    {/* <Menu/>
    <Body/>
    <Footer/> */}
    </>
      
  );
}

export default App;
