import { FieldsData } from "./FieldsData"
import {motion} from 'framer-motion'


const FieldCard = ({themeToggle}) => {

    const cardStyles = {
        cardContainer : "rounded-md border-slate-800 p-4 dark:bg-slate-800 hover:text-gray-500 cursor-pointer ",
        cardHeader: "font-bold text-xl my-4 dark:text-blue-600"
    
    }

    const variants = {
        hidden: {x: -100, opacity:0},
        visible: {x:0, opacity:1},
        
    }

    return (
        <> 
            {
                FieldsData.map((field, index) => (
                    <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    transition={{duration: 1}}
                    variants={variants}
                        
                    key={index}
                    className={`rounded-md ${themeToggle ? "border-slate-800 p-4 dark:bg-slate-800 hover:text-gray-500" : ""} shadow-xl  cursor-pointer `
                    
                    }>
                    
                    <div className=' md:flex gap-8  p-2 '>
                        <img className='w-full h-72' src={field.image} loading="lazy" />

                        <div
                          
                        >
                        <h5 className={cardStyles.cardHeader}>{field.header}</h5>
                            <p>{field.description}</p>
                        </div>
                        
    
                        
                    </div>
                </motion.div>
                ) )
            }   
        </>
        
    )
}


export default FieldCard