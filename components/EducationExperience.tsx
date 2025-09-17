import React from 'react';
import AnimatedSection from './AnimatedSection';
import { educationData, experienceData } from '../constants';
import type { TimelineItem } from '../types';
import { AcademicCapIcon, BriefcaseIcon, KeyIcon } from './icons/Icons';
import { motion } from 'framer-motion';

const EducationExperience: React.FC = () => {
    return (
        <AnimatedSection id="education">
            <h2 className="text-4xl font-bold text-center mb-4">Education & Experience</h2>
            <p className="text-lg text-gray-400 text-center mb-16 max-w-2xl mx-auto">
                My academic journey and professional experience in software development and data analytics
            </p>
            <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
                {/* Education Column */}
                <div>
                    <h3 className="flex items-center text-2xl font-bold mb-8">
                        <AcademicCapIcon className="w-8 h-8 mr-3 text-white" /> Education
                    </h3>
                    <div className="space-y-8">
                        {educationData.map((item, index) => (
                            <motion.div 
                                key={index}
                                className="bg-black p-6 rounded-lg border border-white/20"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h4 className="text-xl font-bold text-white">{item.title}</h4>
                                        <p className="text-gray-400">{item.subtitle}</p>
                                    </div>
                                    <span className="text-white font-semibold whitespace-nowrap ml-4">{item.date}</span>
                                </div>
                                <p className="text-gray-300 mt-3">{item.details}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Experience Column */}
                <div>
                    <h3 className="flex items-center text-2xl font-bold mb-8">
                        <BriefcaseIcon className="w-8 h-8 mr-3 text-white" /> Experience
                    </h3>
                    <div className="space-y-8">
                        {experienceData.map((item, index) => (
                             <motion.div 
                                key={index}
                                className="bg-black p-6 rounded-lg border border-white/20"
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h4 className="text-xl font-bold text-white">{item.title}</h4>
                                        <p className="text-gray-400">{item.subtitle}</p>
                                    </div>
                                    <span className="text-white font-semibold whitespace-nowrap ml-4">{item.date}</span>
                                </div>
                                <ul className="space-y-3 mt-4">
                                {Array.isArray(item.details) ? item.details.map((point, i) => (
                                    <li key={i} className="flex items-start">
                                        <KeyIcon className="w-4 h-4 mr-3 mt-1 text-white/90 flex-shrink-0" />
                                        <span className="text-gray-300">{point}</span>
                                    </li>
                                )) : <p className="text-gray-300">{item.details}</p>}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </AnimatedSection>
    );
};

export default EducationExperience;