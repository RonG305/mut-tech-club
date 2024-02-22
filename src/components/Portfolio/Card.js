import React from 'react';
import {motion} from 'framer-motion'

const Card = ({project, index}) => {
    const textVariants = {
        hidden: { opacity: 0, y: 200},
        visible: {opacity: 1, y: 0},
        
        

    }
    
  return (
    <motion.div
    key={index}
        whileHover={{scale: 1.05}}
      className=''
      style={{
        backgroundImage: `url('/smartphone.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '300px',
        borderRadius: '10px'
      }}
    >
      <div className='p-4 '>
        <h4 className='font-bold mb-4 text-blue-900 text-xl'>{project.projectTitle}</h4>
        <motion.p
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            transition={{duration: 1, delay:0.5}}
            className=' line-clamp-3 md:line-clamp-none'>
                {project.projectDescription}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Card;
