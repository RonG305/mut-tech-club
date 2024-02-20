import React, { useState } from 'react';
import { FaBars, FaCross } from 'react-icons/fa';

const Navbar = () => {
    const [show, setShow] = useState(false);

    const navLinks = [
        { name: 'home', url: '/home' },
        { name: 'about', url: '/about' },
        { name: 'blog', url: '/blog' },
        { name: 'programs', url: '/programs' },
        { name: 'events', url: '/events' },
        { name: 'media', url: '/media' },
        { name: 'portfolio', url: '/portfolio' },
        { name: 'our fields', url: '/our fields' },
        { name: 'contact', url: '/contact' }
    ];

    const toggleNav = () => {
        setShow(!show); 
    };

    return (
        <div className="flex items-center justify-between md:h-[75px] shadow-xl shadow-slate-600 px-2 rounded-md py-2 mb-8">
            <h3 className="font-bold text-cyan-500">MUTTeC</h3>
            <div className={`md:flex items-center gap-4 ${show ? '' : 'hidden'}`}>
                {navLinks.map((link) => (
                    <li
                        key={link.name} 
                        className="list-none capitalize hover:border hover:border-cyan-500 rounded-md px-2 py-1 cursor-pointer ease-out delay-150"
                        onClick={toggleNav}
                    >
                        {link.name}
                    </li>
                ))}
            </div>
            <FaBars className="md:hidden" size={30} onClick={toggleNav} /> {/* Toggle the navbar on mobile */}
        </div>
    );
};

export default Navbar;