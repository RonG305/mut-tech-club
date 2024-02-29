import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    const variants = {
        hidden: { opacity: 0, x: 200 },
        visible: { opacity: 1, x: 0, transition: { duration: 2 } }
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            variants={variants} 
            className='h-[100vh] lg:flex flex-row-reverse gap-4 items-center justify-between'
        >
            <div className='w-full lg:w-1/2'>
                <p className='font-bold text-cyan-500 text-2xl uppercase my-4'>About Us</p>
                <h3>Welcome to Murang'a University Technology Club</h3>
                <p className='uppercase text-cyan-500 font-bold my-4'>code, create, conquer</p>
                <p>Welcome to Murang'a Technology club where innovation meets community! We are dynamic tech enthusiasts dedicated to exploring the ever-evolving world of technology. Whether you are a coding prodigy, a hardware aficionado, or simply tech-curious, our club provides a vibrant platform to collaborate, learn, and grow together.</p>
                <hr />
            </div>

            <div className='border-slate-700 p-4 border-rounded md:w-1/2'>
                <img className='md:w-96 w-full rounded-md' src='/man2.jpg' alt='man' loading='lazy' />
            </div>
            <hr />
        </motion.div>
    );
};

export default About;
