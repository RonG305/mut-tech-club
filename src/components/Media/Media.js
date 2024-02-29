import React from 'react'

import image from './images/mut.jpg'

const Media = () => {
  return (
    <div>
        <div className=' grid md:grid-cols-3 grid-cols-2 gap-1'>
            <img src={image}/>
            <img src={image}/>
            <img src={image}/>
            <img src={image}/>
            <img src={image}/>
            <img src={image}/>
            <img src={image}/>
            <img src={image}/>
            <img src={image}/>
            <img src={image}/>
        </div>
        
    </div>
  )
}

export default Media