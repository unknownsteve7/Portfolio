import React, { useState, useEffect } from 'react';
import { navLinks } from '../constants';
import type { NavLink } from '../types';
import { motion } from 'framer-motion';


const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
                scrolled ? 'bg-black/10 backdrop-blur-sm shadow-xl shadow-gray-900/50' : 'bg-transparent'
            }`}
        >
            <div className="container mx-auto px-6 md:px-12 flex justify-between items-center py-4">
                <a href="/" className="text-2xl font-bold tracking-wider hover:text-white transition-colors">
                    MOHAN
                </a>
                <nav className="hidden md:flex space-x-8">
                    {navLinks.map((link: NavLink) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-gray-300 hover:text-white transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                </nav>
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none z-50 relative">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />}
                        </svg>
                    </button>
                </div>
            </div>
            {isOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="md:hidden bg-black/90 backdrop-blur-sm absolute top-full left-0 w-full"
                >
                    <nav className="flex flex-col items-center space-y-4 py-4">
                        {navLinks.map((link: NavLink) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-gray-300 hover:text-white transition-colors text-lg"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>
                </motion.div>
            )}
        </motion.header>
    );
};

export default Header;