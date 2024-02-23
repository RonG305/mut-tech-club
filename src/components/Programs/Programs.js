import React from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import ProgramsCard from './ProgramCard'


const Programs = ({themeToggle}) => {

  return (
    <div>
        <div className=' text-center'>
            <h3 className=' font-extrabold text-2xl mb-4 md:text-4xl text-center mt-10'>Our Programs</h3>
            <p className=' text-sky-400 mb-4'>Our Club dives into these programs for advancement of our technology</p>
            </div>  
            <div className=' flex items-center  justify-center gap-3 flex-wrap'>
                <ProgramsCard themeToggle={themeToggle} />
            </div>
            
    </div>
  )
}

export default Programs