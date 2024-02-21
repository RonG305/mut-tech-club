import React from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import ProgramsCard from './ProgramCard'


const Programs = ({themeToggle}) => {

  return (
    <div>
        <div>
            <h3 className=' font-extrabold text-2xl mb-4 md:text-4xl text-center my-4'>Our Programs</h3>

            <div className=' flex items-center  justify-center gap-3 flex-wrap'>
                <ProgramsCard themeToggle={themeToggle} />
            </div>
            
        </div>
    </div>
  )
}

export default Programs