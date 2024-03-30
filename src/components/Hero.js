import React from 'react'

import {motion} from 'framer-motion'
import Partners from './Partners/Partners';

const Hero = () => {


  const textVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.5}, }
  };

  const imageVariants = {
    hidden: { opacity: 0 , y: -100},
    
    visible: { opacity: 1, y: 0, transition: { duration: 4, delay: 0.5 , repeat: Infinity }, scale: [1, 1.5, 1.5, 0.5, 1], rotate: [0, 0, 270, 270, 0],
    
    }
  };


  return (
    <>
    <div className=' lg:h-[85vh] gap-5  lg:flex items-center justify-between mb-8'>
      <motion.div
         variants={textVariants}
         initial='hidden'
         animate='visible'
          id='home'
      className=' w-full lg:w-1/2'>
        <motion.p
          variants={{hidden: {opacity: 0}, visible: {opacity: 1}}}
          className=' text-sky-400 font-bold  mb-4'
        >MUT TEC CLUB</motion.p>
          <motion.h3
                variants={{hidden: {opacity: 0}, visible: {opacity: 1}}}
               className=' font-extrabold text-3xl md:text-6xl mb-4'
               >Building Technology For Fairness and <span className=' dark:text-blue-600'>Empowerment</span> 
               
          </motion.h3>

          <motion.p
                variants={{hidden: {opacity: 0}, visible: {opacity: 1}}}
                className=' font-medium my-4'>
              We're pioneering fair and empowering technology solutions. Our mission is to harness technology for the betterment of all, prioritizing equity and empowerment. Join us in building a future where technology serves everyone, promoting fairness and empowerment in every aspect of our digital world.

        </motion.p>

        <motion.button
           variants={{hidden: {opacity: 0}, visible: {opacity: 1}}}
           className=' rounded-md px-3 py-2 bg-blue-600 '
        >
          Learn more
        </motion.button>

      </motion.div>

      
      <motion.div 
        variants={imageVariants}
        initial='hidden'
        animate='visible'
      className='w-full lg:w-1/2 rounded-full z-0'>
        <img  className=' rounded-full' src='/ai.jpg' loading='lazy' alt='world globe'  />
      </motion.div>


     
      
    </div>
    <div className=' '>
      <Partners />
    </div>
   
    </>
  )
}

export default Hero