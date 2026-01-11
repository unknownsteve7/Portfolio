import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Commet } from "react-loading-indicators";
export default function Featured() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleMoreProjectsClick = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            navigate('/projects');
        }, 1200); // 1.2 second delay to show the effect
    };

    const projects = [
        {
            title: "AcademixAI",
            tag: "AI & Education",
            image: "/AcademixAI.png", // Assuming this image exists or I'll generate one
            description: "A comprehensive educational management platform featuring AI-powered mind map generation, algorithmic exam seating, and automated hall ticket management.",
            technologies: ["React", "FastAPI", "Python", "MySQL"],
            github: "https://github.com/unknownsteve7/Academix",
            live: "https://academix-opal-seven.vercel.app"
        },
        {
            title: "Netflix Recommendation Engine",
            tag: "Data Science",
            image: "/Recommend.png",
            description: "A sophisticated recommendation system that analyzes user viewing patterns to suggest personalized content using collaborative filtering and content-based algorithms.",
            technologies: ["Python", "Pandas", "Scikit-learn", "Flask"],
            github: "https://github.com/unknownsteve7/Netflix_Recommendation",
            live: "https://mohan-data-netflix-recommender.streamlit.app/"
        },
        {
            title: "Indian Startup Funding Analysis",
            tag: "Data Analysis",
            image: "/Indian_Startup.jpeg",
            description: "Comprehensive analysis of the Indian startup ecosystem, examining funding trends, sector performance, and investment patterns across multiple years.",
            technologies: ["Python", "Matplotlib", "Seaborn", "Jupyter"],
            github: "https://github.com/unknownsteve7/Indian-Startup-Dashboard",
            live: null
        }
    ];
    return (
        <>
            <section id="projects" className="bg-[#0A0A0A] text-white px-7 py-32 max-md:py-20 border-t border-white/[0.05]">
                <div className="max-w-[1400px] mx-auto">
                    <div className="grid grid-cols-[1fr_2fr] gap-16 max-lg:grid-cols-1 max-lg:gap-10">
                        <div>
                            <h2 className="text-4xl font-bold mb-6 text-white font-mono tracking-tighter uppercase">
                                FEATURED_PROJECTS
                            </h2>
                            <p className="text-white/50 leading-relaxed mb-4 text-lg font-medium max-w-md">
                                A curated selection of technical solutions, focusing on systems architecture,
                                data visualization, and user-centric frontend engineering.
                            </p>
                            <div className="mt-10">
                                {loading ? (
                                    <div className="flex items-center gap-4">
                                        <Commet color="#D4AF37" size="medium" text="" textColor="" />
                                        <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest animate-pulse">
                                            Loading Archive...
                                        </span>
                                    </div>
                                ) : (
                                    <Link
                                        to="/projects"
                                        onClick={handleMoreProjectsClick}
                                        className="group inline-flex items-center gap-3 text-[#D4AF37] hover:text-white transition-all font-mono text-[10px] tracking-[0.2em] uppercase"
                                    >
                                        <span>SYSTEM_ARCHIVE</span>
                                        <svg
                                            width="18"
                                            height="18"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="transform group-hover:translate-x-1 transition-transform"
                                        >
                                            <line x1="7" y1="17" x2="17" y2="7"></line>
                                            <polyline points="7 7 17 7 17 17"></polyline>
                                        </svg>
                                    </Link>
                                )}
                            </div>

                        </div>
                        <div>
                            <div className="grid grid-cols-3 gap-8 max-md:grid-cols-1">
                                {projects.map((project, index) => (
                                    <div
                                        key={index}
                                        onClick={() => setSelectedProject(project)}
                                        className="bg-[#1A1A1A] rounded-[24px] overflow-hidden border border-white/5 hover:border-white/10 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] transition-all duration-500 cursor-pointer group flex flex-col h-full"
                                    >
                                        <div className=" aspect-[16/10] bg-[#121212] overflow-hidden">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                            />
                                        </div>
                                        <div className="p-6">
                                            <div className="flex justify-between items-center mb-4">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shadow-[0_0_8px_#D4AF37]" />
                                                    <span className="text-[10px] font-mono text-white/30 tracking-widest uppercase">
                                                        {project.technologies.slice(0, 3).join(" / ")}
                                                    </span>
                                                </div>
                                                <span className="text-[9px] font-mono text-white/10 uppercase tracking-tighter">PRJ_ID: [0{index + 1}]</span>
                                            </div>
                                            <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#D4AF37] transition-colors leading-tight">
                                                {project.title}
                                            </h3>
                                            <span className="inline-block px-3 py-1 bg-white/[0.03] border border-white/10 text-white/30 text-[9px] font-mono rounded-full group-hover:text-[#D4AF37] group-hover:border-[#D4AF37]/20 transition-all uppercase tracking-widest">
                                                // {project.tag}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modal */}
            {selectedProject && (
                <div
                    className="fixed inset-0 z-50 flex items-end"
                    onClick={() => setSelectedProject(null)}
                >
                    <div
                        className="absolute inset-0 bg-black/50"
                        onClick={() => setSelectedProject(null)}
                    />
                    <div
                        className="relative w-full bg-black rounded-t-3xl mt-20 animate-slide-up overflow-y-auto max-h-[90vh]"
                        onClick={(e) => e.stopPropagation()}
                        data-lenis-prevent
                    >
                        <button
                            onClick={() => setSelectedProject(null)}
                            className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors z-10"
                        >
                            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M6 6l12 12M6 18L18 6" />
                            </svg>
                        </button>

                        <div className="px-12 py-10 max-md:px-6">
                            <div className="max-w-[1200px] mx-auto">
                                <div className="grid grid-cols-2 gap-12 max-md:grid-cols-1">
                                    <div className="aspect-video rounded-2xl overflow-hidden bg-white/5">
                                        <img
                                            src={selectedProject.image}
                                            alt={selectedProject.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    <div>
                                        <span className="inline-block px-4 py-1.5 bg-[#D4AF37]/10 text-[#D4AF37] text-[10px] font-mono uppercase tracking-[0.2em] rounded-full mb-6">
                                            {selectedProject.tag}
                                        </span>
                                        <h2 className="text-4xl font-bold text-white mb-6 font-mono tracking-tighter">
                                            {selectedProject.title}
                                        </h2>
                                        <p className="text-white/70 leading-relaxed mb-6">
                                            {selectedProject.description}
                                        </p>

                                        <div className="mb-10">
                                            <h3 className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#D4AF37]/50 mb-4">SYSTEM_DEPENDENCIES:</h3>
                                            <div className="flex flex-wrap gap-2">
                                                {selectedProject.technologies.map((tech, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="px-4 py-1.5 bg-white/[0.03] border border-white/10 text-white/50 font-mono text-[10px] tracking-widest rounded-full uppercase"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="flex gap-4">
                                            {selectedProject.github && (
                                                <a
                                                    href={selectedProject.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="px-8 py-3 bg-white text-black rounded-full font-mono text-[10px] uppercase tracking-widest font-bold hover:bg-[#D4AF37] hover:text-white transition-all transform hover:scale-[1.05]"
                                                >
                                                    SOURCE_CODE
                                                </a>
                                            )}
                                            {selectedProject.live && (
                                                <a
                                                    href={selectedProject.live}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="px-8 py-3 border border-white/20 text-white rounded-full font-mono text-[10px] uppercase tracking-widest font-bold hover:bg-white/10 transition-all transform hover:scale-[1.05]"
                                                >
                                                    LIVE_DEPLOYMENT
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <style>{`
                @keyframes slide-up {
                    from {
                        transform: translateY(100%);
                    }
                    to {
                        transform: translateY(0);
                    }
                }
                .animate-slide-up {
                    animation: slide-up 0.3s ease-out;
                }
            `}</style>
        </>
    );
}