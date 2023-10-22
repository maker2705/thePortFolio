import "./hero.scss"
import heroImage from '../../assets/hero.png';
import scrollerImage from '../../assets/scroll.png'
import { motion } from "framer-motion";

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition:{
            duration:1,
            staggerChildren: 0.1,

        },
    },
    scrollButton: {
        opacity:0,
        y:10,
        transition: {
            duration: 2,
            repeat: Infinity
        },
    },
}
const sliderVariants = {
    initial: {
        x: 0,
        // opacity: 0,
    },
    animate: {
        x: "-220%",
        // opacity: 1,
        transition:{
            repeat: Infinity,
            repeatType:"mirrror",
            duration:20,
            // staggerChildren: 0.1,

        },
    },
    scrollButton: {
        opacity:0,
        y:10,
        transition: {
            duration: 2,
            repeat: Infinity
        },
    },
}


const Hero = () => {
  return (
    <div className='hero' >
     <div className="wrapper" >

        <motion.div className="textContainer" 
        variants={textVariants} 
        initial= "initial" 
        animate= "animate"
        >
            <motion.h2 variants={textVariants} >ANKIT</motion.h2>
            <motion.h1 variants={textVariants} >Frontend Developer</motion.h1>
            <motion.div variants={textVariants}  className="buttons" >
                <motion.button variants={textVariants} >See the latest Works</motion.button>
                <motion.button variants={textVariants} >Contact Me</motion.button>
            </motion.div>
            <motion.img variants={textVariants}
              src={scrollerImage} 
              animate="scrollButton"
              ></motion.img>
        </motion.div>
     </div>
     <motion.div className="slidingTextContainer" 
     variants={sliderVariants}
     initial="initial"
     animate="animate"
      >
        Frontend Developer
     </motion.div>
        <div className="imageContainer" >
            <img src={heroImage} alt="my Picture" ></img>
        </div>
    </div>
  )
}

export default Hero