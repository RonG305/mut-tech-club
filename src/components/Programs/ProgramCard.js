import { ProgramsData } from "./ProgramsData"
import {motion} from 'framer-motion'

const ProgramsCard = ({themeToggle}) => {
    const variants = {
        hidden: { opacity:0, },
        visible: { opacity:1, rotate: [0, 5, 5, 0, ]},
    }

    const textVariants = {
        hidden: {opacity: 0}, 
        visible: {opacity: 1}
    }
    return (

    <>

        {ProgramsData.map((program, index) => (
             <motion.div 
                key={index}
                initial="hidden"
                whileInView="visible"
                transition={{duration: 2}}
                variants={variants}
                className={` ${themeToggle ? " border-gray-700" : "border-gray-300 "} rounded-md border  px-3 py-4 w-full lg:w-full shadow-lg  `}>
             <h4 className=' font-bold text-blue-600 text-xl mb-4'>{program.title}</h4>
 
             <p
                initial="hidden"
                whileInView="visible"
                
             >{program.description}
             
             </p>
 
             <button className=' my-4 font-bold px-3 py-1 text-white bg-blue-500 rounded-md'>learn more</button>
         </motion.div>
        ))}
       

    </>   
    )
    }
export default ProgramsCard    

