import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Projects() {
    const [filter, setFilter] = useState("All");

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const projects = [
        {
            title: "AcademixAI",
            tag: "AI & Education",
            image: "/AcademixAI.png",
            description: "A comprehensive educational management platform featuring AI-powered mind map generation, algorithmic exam seating, and automated hall ticket management.",
            technologies: ["React", "FastAPI", "Python", "Gemini AI", "PostgreSQL"],
            link: "https://academix-opal-seven.vercel.app",
            github: "https://github.com/unknownsteve7/AcademixAI"
        },

        {
            title: "Fuo Ecommerce Website",
            tag: "Development",
            image: "/Fuo.png",
            description: "A modern e-commerce chairs website built with React.js and Node.js, featuring a responsive design, user authentication, and a shopping cart.",
            technologies: ["React", "Node.js", "Express", "MongoDB"],
            link: "https://fuorio.netlify.app/",
            github: "https://github.com/unknownsteve7/Fuo"
        },
        {
            title: "Netflix Analytics Dashboard",
            tag: "Analysis",
            image: "/Netflix.png",
            description: "An interactive Streamlit app that uncovers patterns, genres, trends, and actor-director networks from Netflix's content using data science.",
            technologies: ["Python", "Scikit-learn", "Pandas", "PostgreSQL"],
            link: "https://mohan-data-netflix-dashboard.streamlit.app/",
            github: "https://github.com/unknownsteve7/Netflix-dashboard"
        },
        {
            title: "Earth React Component",
            tag: "Development",
            image: "/Earth.png",
            description: "A visually stunning, animated Earth component built with React and three.js / globe.gl.",
            technologies: ["React", "Node.js", "Express", "MongoDB"],
            link: "https://serene-earth.netlify.app/",
            github: "https://github.com/unknownsteve7/Earth-React-Component"
        },
        {
            title: "Netflix Recommendation Engine",
            tag: "Data Science",
            image: "/Recommend.png",
            description: "A sophisticated recommendation system that analyzes user viewing patterns to suggest personalized content using collaborative filtering.",
            technologies: ["Python", "Pandas", "Scikit-learn", "Flask"],
            link: "https://mohan-data-netflix-recommender.streamlit.app/",
            github: "https://github.com/unknownsteve7/netflix-recommender"
        },
        {
            title: "Indian Startup Funding Analysis",
            tag: "Analysis",
            image: "/Indian_Startup.jpeg",
            description: "Comprehensive analysis of the Indian startup ecosystem, examining funding trends, sector performance, and investment patterns.",
            technologies: ["Power BI", "Python", "SQL", "Azure"],
            link: "#",
            github: "https://github.com/unknownsteve7/Indian-Startup-Dashboard"
        },
        {
            title: "Hostel Management System",
            tag: "Development",
            image: "/HMS.png",
            description: "A comprehensive hostel management system built with React.js for managing student bookings, room allocations, payments, and administrative operations for Sanskriti School of Engineering.",
            technologies: ["React", "Node.js", "Express", "MongoDB"],
            link: "https://sanskritischoolofengineeringhostel.vercel.app/",
            github: "https://github.com/unknownsteve7/HMS"
        },
        {
            title: "Foriegn Grievance System",
            tag: "Development",
            image: "/police.png",
            description: "A comprehensive foreign grievance system built with React.js for managing foriegn data and complaints for Satya Sai District Police.",
            technologies: ["React", "Node.js", "Express", "MongoDB"],
            link: "https://satya-sai-district-police.netlify.app/",
            github: "https://github.com/unknownsteve7/Satya-Sai-District-Police"
        },
        {
            title: "Foriegn Visitor Portal",
            tag: "Development",
            image: "/visitor.png",
            description: "A comprehensive foreign Visitor Portal built for managing foreign visitors complaints for Satya Sai District Police.",
            technologies: ["React", "Node.js", "Express", "MongoDB"],
            link: "https://satyasaiforeignvisitorsportal.netlify.app/",
            github: "https://github.com/unknownsteve7/Satya-Sai-Visitor_Portal"
        },
        {
            title: "AI Resume Relavance Checker",
            tag: "Development",
            image: "/Resume.png",
            description: "Automated Resume Relevance Check System built with Streamlit for analyzing job descriptions and resumes to identify relevant skills and experiences.",
            technologies: ["Python", "Streamlit", "Pandas", "Scikit-learn"],
            link: "https://resume-analyzer-blast.streamlit.app/",
            github: "https://github.com/unknownsteve7/Innomatics_Frontend"
        },
        {
            title: "BreedSense AI",
            tag: "Development",
            image: "/breed.png",
            description: "BreedSense AI — in-browser cattle/buffalo breed recognition",
            technologies: ["Python", "Streamlit", "Pandas", "Scikit-learn"],
            link: "https://breedzsense-ai.vercel.app/",
            github: "https://github.com/unknownsteve7/BreedSense-AI"
        },
        {
            title: "Sancharla Admin Dashboard",
            tag: "Analysis",
            image: "/sanchara.png",
            description: "A privacy-first travel data app powering NATPAC with rich analytics: automatic and manual trip capture syncs to dashboards",
            technologies: ["Python", "Streamlit", "Pandas", "Scikit-learn"],
            link: "",
            github: "https://github.com/unknownsteve7/Sanchara-Admin-Dashboard/"
        }
    ];

    const filteredProjects = filter === "All"
        ? projects
        : projects.filter(p => p.tag.includes(filter) || p.technologies.some(t => t.includes(filter)));

    const filters = ["Development", "Data", "Analysis"];

    return (
        <section className="bg-[#0A0A0A] min-h-screen px-6 py-32 border-t border-white/[0.05]">
            <div className="max-w-[1100px] mx-auto">
                {/* Header */}
                <div className="text-center mb-24">
                    <Link to="/" className="inline-flex items-center gap-2 text-white/40 hover:text-[#D4AF37] transition-all mb-12 group uppercase tracking-widest font-bold text-xs">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:-translate-x-1 transition-transform">
                            <line x1="19" y1="12" x2="5" y2="12"></line>
                            <polyline points="12 19 5 12 12 5"></polyline>
                        </svg>
                        <span>Return to Main</span>
                    </Link>
                    <h1 className="text-6xl font-black tracking-tighter text-white mb-12">
                        Project Archive
                    </h1>

                    {/* Filters */}
                    <div className="flex flex-wrap justify-center gap-4">
                        {filters.map(f => (
                            <button
                                key={f}
                                onClick={() => setFilter(f)}
                                className={`px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${filter === f
                                    ? "bg-white text-black shadow-lg"
                                    : "bg-[#1A1A1A] text-white border border-white/10 hover:bg-[#2A2A2A]"
                                    }`}
                            >
                                {f}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid - 3-Column Layout */}
                <div className="grid grid-cols-3 gap-8 max-xl:grid-cols-2 max-lg:grid-cols-2 max-md:grid-cols-1">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-[#121212] rounded-[40px] overflow-hidden border border-white/[0.05] group flex flex-col h-full hover:border-[#D4AF37]/30 transition-all duration-500"
                        >
                            {/* Hero Image - Clickable Link Container */}
                            <a
                                href={project.link !== "#" ? project.link : project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="aspect-[16/10] w-full bg-[#121212] overflow-hidden block"
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                />
                            </a>

                            {/* Bottom Content Area - Compact Split Layout */}
                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex justify-between items-start gap-4 mb-6">
                                    <div className="flex-grow">
                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#D4AF37] transition-colors leading-tight">
                                            {project.title}
                                        </h3>
                                        <div className="flex gap-2">
                                            <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest bg-[#D4AF37]/10 px-2 py-0.5 rounded">
                                                {project.tag}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-2 items-end pt-1">
                                        {project.technologies.slice(0, 1).map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 bg-white/[0.03] border border-white/10 text-white/40 font-bold text-[8px] rounded-full uppercase tracking-tighter"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <p className="text-sm text-white/30 font-medium leading-relaxed mb-auto">
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
