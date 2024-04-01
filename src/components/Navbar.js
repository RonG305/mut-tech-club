import React, { useState } from 'react';
import { FaBars, FaCross, FaSun, FaMoon } from 'react-icons/fa';


import {HashLink as Link} from 'react-router-hash-link'
const Navbar = ({themeToggle, handleThemeToggle}) => {
    const [show, setShow] = useState(false);

    

    const navLinks = [
        { name: 'home', url: '#home' },
        { name: 'about', url: '#about' },
        { name: 'team', url: '#team' },
        { name: 'programs', url: '#programs' },
        { name: 'events', url: '' },
        { name: 'media', url: '#media' },
        { name: 'portfolio', url: '#portfolio' },
        { name: 'our fields', url: '#ourfields' },
        { name: 'contact', url: '#contact' }
    ];

    const toggleNav = () => {
        setShow(!show); 
    };

    return (
        <div className={` ${themeToggle? 'bg-slate-400': 'bg-slate-700 text-white'} flex items-center justify-between lg:min-h-[75px] py-5 shadow-xl  fixed w-full px-4 rounded-md mb-8 z-50`}>
            <span className=' flex gap-2 items-center '><img src='/images/mut.png' style={{width: '30px', borderRadius: '50%'}} alt='mut-logo' /><h3 className="font-bold text-blue-600">MUT TEC</h3></span>
            
            <div className={`lg:flex items-center gap-4 ${show ? '' : 'hidden'}`}>
                {navLinks.map((link) => (
                    <Link
                        to={link.url}
                        key={link.name} 
                        className="flex flex-col  capitalize hover:border hover:border-blue-600 rounded-md px-2 py-1 cursor-pointer ease-out delay-150 "
                        onClick={toggleNav}
                        smooth
                    >
                        {link.name}
                    </Link>
                ))}
                <div className="bg-gray-100 rounded-full p-1 hover:cursor-pointer ">
                <FaSun onClick={handleThemeToggle}  className=' text-sky-600 font-bold '  size={20} />
                </div>
                
            </div>
            
            <FaBars className="lg:hidden" size={30} onClick={toggleNav} /> {/* Toggle the navbar on mobile */}
        </div>
    );
};

export default Navbar;