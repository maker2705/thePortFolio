import { motion } from "framer-motion"

const ToggleButton = ({setOpen}) => {
  return (
    <button onClick={ () => setOpen( (prev) => !prev ) } >
    
    <svg width="23" height="23" viewBox="0 0 23 23">
      <motion.path strokeWidth="3" stroke="black" strokeLinecap="round" variants={{closed: {d:"M 2 2.5 L 20 2.5"}, open: {} }} />
      <motion.path strokeWidth="3" stroke="black" strokeLinecap= "round"/>
      <motion.path strokeWidth="3" stroke="black" strokeLinecap="round" />
    </svg>

    </button>
  )
}

export default ToggleButton