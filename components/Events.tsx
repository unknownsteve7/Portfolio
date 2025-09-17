import React from 'react';
import AnimatedSection from './AnimatedSection';
import { eventsData } from '../constants';
import type { EventItem } from '../types';
import { motion } from 'framer-motion';

const EventCard: React.FC<{ event: EventItem }> = ({ event }) => {
    return (
        <motion.div 
            className="flex items-start space-x-6 p-6 bg-black rounded-lg shadow-lg border border-white/30"
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            <div className="flex-shrink-0 bg-gray-900 p-3 rounded-full">
                <event.icon className="w-8 h-8 text-white" />
            </div>
            <div>
                <p className="text-sm text-gray-400 mb-1">{event.date}</p>
                <h3 className="text-xl font-bold mb-2 text-white">{event.title}</h3>
                <p className="text-gray-300">{event.description}</p>
            </div>
        </motion.div>
    );
};

const Events: React.FC = () => {
    return (
        <AnimatedSection id="events">
            <h2 className="text-4xl font-bold text-center mb-4">Professional Milestones</h2>
            <p className="text-lg text-gray-400 text-center mb-16 max-w-2xl mx-auto">Key events and activities that have shaped my professional journey.</p>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {eventsData.map((event, index) => (
                    <EventCard key={index} event={event} />
                ))}
            </div>
        </AnimatedSection>
    );
};

export default Events;