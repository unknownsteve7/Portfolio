import React, { useState, useEffect } from 'react';
import AnimatedSection from './AnimatedSection';
import { testimonialsData } from '../constants';
import type { Testimonial } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonials: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);
    
    const currentTestimonial = testimonialsData[currentIndex];

    return (
        <AnimatedSection id="testimonials">
            <h2 className="text-4xl font-bold text-center mb-16">What Others Say</h2>
            <div className="max-w-3xl mx-auto bg-black p-8 md:p-12 rounded-lg shadow-lg relative h-80 md:h-72 flex flex-col justify-center border border-gray-800">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="text-center"
                    >
                        <p className="text-xl md:text-2xl italic text-gray-300 mb-6">"{currentTestimonial.quote}"</p>
                        <div className="flex items-center justify-center">
                            <img src={currentTestimonial.avatar} alt={currentTestimonial.name} className="w-16 h-16 rounded-full mr-4 border-2 border-white" />
                            <div>
                                <h4 className="font-bold text-lg text-white">{currentTestimonial.name}</h4>
                                <p className="text-gray-400">{currentTestimonial.role}</p>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                    {testimonialsData.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full transition-colors ${currentIndex === index ? 'bg-white' : 'bg-gray-600 hover:bg-gray-500'}`}
                        />
                    ))}
                </div>
            </div>
        </AnimatedSection>
    );
};

export default Testimonials;