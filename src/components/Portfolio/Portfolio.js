import React from 'react'
import Card from './Card'
import { PortfolioData } from './PortfolioData'
import {motion} from 'framer-motion'

const Portfolio = () => {


  const containerStyle = "h-fit overflow-hidden my-8"
  const subContainerStyle = " text-center my-4"
  const header = "Our Portfolio"
  const headerStyle= "md:text-4xl text-2xl font-extrabold"
  const portfolioDescr = "Talk about creativity, This is some of our members achievements"

  const variants = {
    hidden: {opacity: 0, y: 300},
    visible: {opacity: 1, y: 0}
  }


  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{duration: 1, delay: 0.5}}
    className={containerStyle}>
        <div className={subContainerStyle}>
            <h3 className={headerStyle}>{header}</h3>
            <p className=' text-blue-400 '>{portfolioDescr}</p>
        </div>
        <div className=' grid grid-cols-2 gap-3'>
            {PortfolioData.map((project, index) => (
                <Card project={project} index={index} /> 
            ))}
         
        </div>
       
        
    </motion.div>
  )
}

export default Portfolio