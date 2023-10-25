import { useRef } from "react"
import "./portfolio.scss"

import { motion, useScroll, useSpring, useTransform } from "framer-motion"


const items = [
  { 
   id:1,
   title: "Project 1",
   img:"https://images.pexels.com/photos/18847930/pexels-photo-18847930/free-photo-of-venice.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
   desc: "ipsum dolor sit amet consectetur adipisicing elit. Pariatur ipsa enim quasi nam deleniti veritatis sapiente error dolorem recusandae quisquam in voluptates culpa atque quo et, repudiandae est. Similique, quia.",
},
  { 
   id:2,
   title: "Project 2",
   img:"https://images.pexels.com/photos/18767549/pexels-photo-18767549/free-photo-of-dried-herbs-and-spices-in-a-market-in-morocco.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
   desc: "ipsum dolor sit amet consectetur adipisicing elit. Pariatur ipsa enim quasi nam deleniti veritatis sapiente error dolorem recusandae quisquam in voluptates culpa atque quo et, repudiandae est. Similique, quia.",
},
  { 
   id:3,
   title: "Project 3",
   img:"https://images.pexels.com/photos/18401184/pexels-photo-18401184/free-photo-of-a-man-standing-head-to-head-with-a-horse.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
   desc: "ipsum dolor sit amet consectetur adipisicing elit. Pariatur ipsa enim quasi nam deleniti veritatis sapiente error dolorem recusandae quisquam in voluptates culpa atque quo et, repudiandae est. Similique, quia.",
},
  { 
   id:4,
   title: "Project 4",
   img:"https://images.pexels.com/photos/18675720/pexels-photo-18675720/free-photo-of-model-looking-down.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
   desc: "ipsum dolor sit amet consectetur adipisicing elit. Pariatur ipsa enim quasi nam deleniti veritatis sapiente error dolorem recusandae quisquam in voluptates culpa atque quo et, repudiandae est. Similique, quia.",
},
  
]

const Single = ({item}) => {
  const ref = useRef();

  const {scrollYProgress} = useScroll({
    target:ref,
    
  });
  const y = useTransform(scrollYProgress, [0,1], [-250, 250] )

    return <section  >
        <div className="container">
        <div className="wrapper">
        <div className="imageContainer"
        ref={ref}
        >
          <img src={item.img} alt="" />
        </div>
          <motion.div className="textContainer" 
          style={{y}}
          >
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
        </div>
      </section>
    
}

const Portfolio = () => {
  const ref = useRef()

  const {scrollYProgress} = useScroll({
    target:ref,
    offset: ["end end", "start start"]
  })


  const scaleX = useSpring(scrollYProgress,{

    stiffness:100,
    damping:30,
  })

  return (
    <div className="portfolio" ref={ref} >
      
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div className="progressBar" style={{scaleX}} >   
        </motion.div>
      </div>
      {
        items.map(item=>(
          <Single item={item} key={item.id} />
        ))
      }
    </div>
  )
}

export default Portfolio