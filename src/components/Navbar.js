import React, { useState } from 'react';
import { FaBars, FaCross, FaSun, FaMoon } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Navbar = ({themeToggle, handleThemeToggle}) => {
    const [show, setShow] = useState(false);

    const navLinks = [
        { name: 'home', url: '/' },
        { name: 'about', url: '/about' },
        { name: 'team', url: '/team' },
        { name: 'programs', url: '/programs' },
        { name: 'events', url: '' },
        { name: 'media', url: '/media' },
        { name: 'portfolio', url: '/portfolio' },
        { name: 'our fields', url: '/ourfields' },
        { name: 'contact', url: '/contact' }
    ];

    const toggleNav = () => {
        setShow(!show); 
    };

    return (
        <div className="flex items-center justify-between lg:h-[75px] shadow-xl  px-2 rounded-md py-2 mb-8">
            <h3 className="font-bold text-cyan-500">MUTTeC</h3>
            <div className={`lg:flex items-center gap-4 ${show ? '' : 'hidden'}`}>
                {navLinks.map((link) => (
                    <Link
                        to={link.url}
                        key={link.name} 
                        className="flex flex-col  capitalize hover:border hover:border-sky-400 rounded-md px-2 py-1 cursor-pointer ease-out delay-150"
                        onClick={toggleNav}
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