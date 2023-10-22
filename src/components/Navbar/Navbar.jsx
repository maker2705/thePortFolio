import Sidebar from '../Sidebar/Sidebar';
import InstagramImage from '../../assets/instagram.png';
import "./navbar.scss"
import { motion } from 'framer-motion';


const Navbar = () => {
  return (
    <div className='navbar' >
    
    {/* Sidebar */}
      <Sidebar/>

      <div className="wrapper">
        <motion.span 
        initial= {{opacity:0, scale:0.5}}  
        animate= {{opacity:1, scale:1}}
        transition={{duration:0.2}}
          >Ankit</motion.span>
          <div className="social" >
              <a href="#"> <img src={InstagramImage} alt="instagram" /> </a>
              <a href="#"> <img src={InstagramImage} alt="instagram" /> </a>
              <a href="#"> <img src={InstagramImage} alt="instagram" /> </a>
          </div>
      </div>

    </div>
  )
}

export default Navbar