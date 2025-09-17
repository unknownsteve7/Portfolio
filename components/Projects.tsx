import React, { useState, useMemo } from 'react';
import AnimatedSection from './AnimatedSection';
import { projectsData } from '../constants';
import type { Project } from '../types';
import { ExternalLinkIcon, GithubIcon } from './icons/Icons';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4 }}
            className="group flex flex-col rounded-lg shadow-lg bg-black border border-white/30 w-full max-w-md mx-auto overflow-hidden"
            style={{ minWidth: '100px' ,maxWidth : '400px', minHeight: '450px', maxHeight: '470px' }}
        >
            <div className="w-full bg-black relative flex justify-center items-center p-4">
                <div className="border-2 border-white/30 rounded-xl w-full h-48 flex items-center justify-center bg-black">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-fill rounded-lg transition-transform duration-300"
                    />
                </div>
                <div className="absolute inset-0 bg-black/40 rounded-xl pointer-events-none"></div>
            </div>
            <div className="w-full p-4 flex flex-col justify-end relative z-10">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-h-13 overflow-hidden">
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag, i) => (
                        <span
                            key={i}
                            className="bg-white/90 text-black text-xs px-2 py-1 rounded-lg"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="flex items-center space-x-4">
                    {project.liveLink && (
                        <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-white transition-colors"
                        >
                            <ExternalLinkIcon className="w-5 h-5" />
                        </a>
                    )}
                    {project.repoLink && (
                        <a
                            href={project.repoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-white transition-colors"
                        >
                            <GithubIcon className="w-5 h-5" />
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

const Projects: React.FC = () => {
    const [filter, setFilter] = useState<'Development' | 'Analysis'>('Development');

    const filteredProjects = useMemo(() => {
        return projectsData.filter((p) => p.category === filter);
    }, [filter]);

    const filterButtons: ('Development' | 'Analysis')[] = [
        'Development',
        'Analysis',
    ];

    return (

        <AnimatedSection id="projects">
            <h2 className="text-4xl font-bold text-center mb-4">Featured Work</h2>
            <p className="text-lg text-gray-400 text-center mb-12 max-w-2xl mx-auto">
                A selection of projects that showcase my skills in development and data
                analysis.
            </p>

            {/* Segmented Control with sliding indicator (same as Skills) */}
            <div className="flex justify-center mb-12">
                <div className="relative inline-grid grid-cols-2 items-center rounded-full border p-1 overflow-hidden border-white/30 bg-black">
                    <motion.div
                        layout
                        className="absolute left-0 top-0 h-full w-1/2 rounded-full shadow bg-white"
                        animate={{
                            x: filter === 'Development' ? '0%' : '100%',
                        }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                    {filterButtons.map((buttonFilter) => (
                        <button
                            key={buttonFilter}
                            onClick={() => setFilter(buttonFilter)}
                            className={`relative z-10 px-6 py-2 rounded-full font-semibold transition-colors duration-200 ${filter === buttonFilter ? 'text-black' : 'text-gray-300'
                                }`}
                        >
                            {buttonFilter}
                        </button>
                    ))}
                </div>
            </div>

            {/* Project Grid (2 per row, centered, controlled width) */}
            <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto"
            >
                <AnimatePresence>
                    {filteredProjects.map((project, index) => (
                        <ProjectCard
                            key={`${project.title}-${index}`}
                            project={project}
                        />
                    ))}
                </AnimatePresence>
            </motion.div>
        </AnimatedSection>
    );
};

export default Projects;
