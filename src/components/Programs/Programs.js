import React from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import ProgramsCard from './ProgramCard'


const Programs = ({themeToggle}) => {

  return (
    <div>
        <div id='programs' className=' text-center'>
            <h3 className=' font-extrabold text-2xl mb-4 md:text-4xl text-center mt-10'>Our Programs</h3>
            <p className=' text-blue-600 font-semibold mb-4'>Our Club dives into these programs for advancement of our technology</p>
            </div>  
            <div className='lg:grid grid-cols-2 gap-2 flex flex-col items-center  justify-center  '>
                <ProgramsCard themeToggle={themeToggle} />
            </div>
            
    </div>
  )
}

export default Programs