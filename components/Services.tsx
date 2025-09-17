import React from 'react';
import AnimatedSection from './AnimatedSection';
import { servicesData } from '../constants';
import type { Service } from '../types';
import { motion } from 'framer-motion';

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
    return (
        <motion.div
            whileHover={{ y: -10, scale: 1.02 }}
            className="bg-black p-8 rounded-lg shadow-lg h-full border border-gray-800"
        >
            <service.icon className="w-12 h-12 text-white mb-6" />
            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
            <p className="text-gray-400">{service.description}</p>
        </motion.div>
    );
};

const Services: React.FC = () => {
    return (
        <AnimatedSection id="services">
            <h2 className="text-4xl font-bold text-center mb-4">What I Do</h2>
            <p className="text-lg text-gray-400 text-center mb-16 max-w-2xl mx-auto">I specialize in crafting digital experiences that are not only beautiful but also functional and data-driven.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {servicesData.map((service, index) => (
                    <ServiceCard key={index} service={service} />
                ))}
            </div>
        </AnimatedSection>
    );
};

export default Services;