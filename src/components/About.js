import React from 'react'

import {motion} from 'framer-motion'

const About = () => {
  return (
    <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}

    className=' md:h-[90vh] md:flex flex-row-reverse gap-4 items-center justify-between '>
        <div className=' md:w-1/2'>
            <p className='  font-bold text-cyan-500 text-2xl uppercase my-4'>About Us</p>
            <h3>Welcome to Murang'a University Technology Club</h3>
            <p className=' uppercase text-cyan-500 font-bold my-4 '>code, create, conquer</p>
            <p className=''>Welcome to Murang'a Technology club whre innovation meets community!. We are a dynamic tech enthusiats dedicated to explaoring ever-evolving world of technology. Whether you are a coding prodigy, a hardware oficionado, or simply tech curious, our club provides a vibrant platform to collaborate, learn, and grow together.</p>
        </div>

        <div className=' border-slate-700 p-4 border-rounded rotate-6   md:1/2'>
            <img className=' w-full h-full rounded-md' src='/man.png' />
        </div>
    </motion.div>
  )
}

export default About