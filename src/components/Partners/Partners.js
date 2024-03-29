import React from 'react'
import { partnerLogos } from './PartnerLogos'
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'

const Partners = () => {

    const variants = {
        hidden: {opacity: 0, x: -200},
        visible: {opacity: 1, x: 200},

    }
  return (
    <motion.div
        initial="hidden"
        animate="visible"
        transition={{ duration: 5, repeat: Infinity}}
        variants={variants}
        className=' flex gap-3'>
        {partnerLogos.map((logo) => (
        <a href={logo.link}>
             <img className=' w-14 md:w-40'  src={logo.logo} />
    
        </a>
            ))}
           
    </motion.div>
  )
}

export default Partners