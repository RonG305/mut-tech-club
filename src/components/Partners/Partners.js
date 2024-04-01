import React from 'react'
import { partnerLogos } from './PartnerLogos'
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'

const Partners = ({themeToggle}) => {

    const variants = {
        hidden: {opacity: 0, x: -200},
        visible: {opacity: 1, x: 200},

    }
  return (
    <motion.div
        
        id='partners'
        className=' flex flex-wrap gap-3'>
        {partnerLogos.map((logo) => (
          <span className={` ${themeToggle? ' border border-slate-700': ' border-slate-300'} border  rounded-md px-3 py-1 flex items-center cursor-pointer gap-3 w-fit hover:bg-slate-950  transition-all delay-150 hover:translate-x-1 `}>
               <a href={logo.link} >
             <img className=' ' style={{width: "45px"}}  src={logo.logo} />
    
        </a>
        {logo.name}
          </span>
       
            ))}
           
    </motion.div>
  )
}

export default Partners