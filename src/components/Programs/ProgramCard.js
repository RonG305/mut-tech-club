import { ProgramsData } from "./ProgramsData"
import {motion} from 'framer-motion'

const ProgramsCard = ({themeToggle}) => {
    const variants = {
        hidden: { opacity:0, },
        visible: { opacity:1, rotate: [0, 30, 30, 0, ]},
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
                className={` ${themeToggle ? "bg-slate-800 shadow-slate-700" : "text-slate-800 "} rounded-md px-3 py-4 w-full lg:w-96 shadow-lg  `}>
             <h4 className=' font-bold text-cyan-500 text-2xl mb-4'>{program.title}</h4>
 
             <p
                initial="hidden"
                whileInView="visible"
             >{program.description}
             
             </p>
 
             <button className=' my-4 font-bold px-3 py-1 text-white bg-cyan-500 rounded-md'>learn more</button>
         </motion.div>
        ))}
       

    </>   
    )
    }
export default ProgramsCard    

