import React from 'react'



const Navbar = () => {

    const navLinks = [

        {
            name: 'home',
            url: '/home'
        },

        {
            name: 'about',
            url: '/about'
        },

        {
            name: 'blog',
            url: '/blog'
        },

        {
            name: 'programs',
            url: '/programs'
        },

        {
            name: 'events',
            url: '/events'
        },

        {
            media: 'media',
            url: '/media'
        },

        {
            name: 'portfolio',
            url: '/portfolio'
        },

        {
            name: 'our fields',
            url: '/our fields'
        },

        {
            name: 'contact',
            url: '/contact'
        }

    ]
  return (
    <div className='  flex items-center justify-between md:h-[75px]'>
        <h3 className=' font-bold text-cyan-500'>MUTTeC</h3>
        <div className=' flex items-center gap-4'>
        {navLinks.map((link) => (
            <li className=' list-none capitalize hover:border hover:border-cyan-500 rounded-md px-2 py-1 cursor-pointer ease-out delay-150 ' >{link.name}</li>
        ))}
        </div>
        
    </div>
  )
}

export default Navbar