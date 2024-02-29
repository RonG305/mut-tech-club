import React from 'react'
import FieldCard from './FieldCard'


const OurFields = ({themeToggle}) => {

    
  return (
    <div className=' my-20'>
        <div className=' text-center my-4'>
            <h4 className=' text-2xl font-extrabold md:text-4xl'>Our Fields</h4>
            <p className=' text-sky-400'>Our club covers all interesting Felds in the tech industry</p>
        </div>

        <div>
            <div className=' flex flex-col gap-3'>
                <FieldCard themeToggle={themeToggle} />
            </div>
        </div>
        
    </div>
  )
}

export default OurFields