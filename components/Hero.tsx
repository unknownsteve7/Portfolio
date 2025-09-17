import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
    const name = "Naga Mohan Madicharla";
    const title = "Frontend Developer & Data Analyst";

    return (
        <section id="hero" className="min-h-screen flex flex-col justify-center items-start text-left">
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg text-gray-300 mb-4"
            >
                Hello there! I'm
            </motion.p>
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight"
            >
                {name}
            </motion.h1>
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="text-3xl md:text-5xl font-bold text-gray-500 mb-8"
            >
                {title}
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="max-w-2xl text-gray-400 mb-10 text-lg"
            >
                I build beautiful, responsive web applications and uncover stories hidden in data. Welcome to my digital space where creativity meets code.
            </motion.p>
            <motion.a
                href="public/RESUME.pdf"
                download
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.5 }}
                className="relative inline-block px-8 py-3 font-semibold text-white overflow-hidden border border-gray-500 rounded-lg group hover:text-black"
            >
                <span className="absolute top-0 left-0 w-full h-full bg-white transition-transform duration-300 ease-in-out transform -translate-x-full group-hover:translate-x-0"></span>
                <span className="relative z-10">Download CV</span>
            </motion.a>
        </section>
    );
};

export default Hero;
