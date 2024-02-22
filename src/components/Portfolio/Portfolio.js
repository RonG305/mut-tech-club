import React from 'react'
import Card from './Card'
import { PortfolioData } from './PortfolioData'

const Portfolio = () => {


  const containerStyle = "h-fit overflow-hidden my-8"
  const subContainerStyle = " text-center my-4"
  const header = "Our Portfolio"
  const headerStyle= "md:text-4xl text-2xl font-extrabold"
  const portfolioDescr = "Talk about creativity, This is some of our members achievements"


  return (
    <div className={containerStyle}>
        <div className={subContainerStyle}>
            <h3 className={headerStyle}>{header}</h3>
            <p>{portfolioDescr}</p>
        </div>
        <div className=' grid grid-cols-2 gap-3'>
        {PortfolioData.map((project, index) => (
            <Card project={project} index={index} /> 
        ))}
         </div>
       
        
    </div>
  )
}

export default Portfolio