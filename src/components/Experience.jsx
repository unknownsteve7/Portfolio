import React, { useState } from 'react';

export default function Experience() {
    const [activeTab, setActiveTab] = useState('work');

    const workExperience = [

        {
            role: "Frontend Developer",
            company: "Shraddha Group",
            period: "2025 - Present",
            location: "Remote",
            description: [
                "Developed a full-stack web applications using React, FastAPI, and MySQL",
                "Developed Foriegn Grievance Portal for Police",
                "Developed Hostal Management System for Sanskriti School of Engineering using React, FastAPI, and MySQL"
            ],
            technologies: ["React", "FastAPI", "MySQL"]
        },
        {
            role: "Self Paced Developer",
            company: "Self",
            period: "2023 - 2024",
            location: "Remote",
            description: [
                "Developed a full-stack web application using React, Node.js, and MongoDB",
                "Problem Solved and Debugged",
                "Project based training"
            ],
            technologies: ["React", "Node.js", "MongoDB", "MS Office", "SQL"]
        }
    ];

    const education = [
        {
            degree: "Bachelor of Technology Computer Science",
            institution: "Rajiv Gandhi  University of Knowledge Technologies Ongole",
            period: "2023 - 2027",
            location: "Ongole, Andhra Pradesh",
            highlights: [
                "Major in Computer Science",
                "GPA: 8.5/10",
                "Active in Student Organizations",
            ]
        },
        {
            degree: "Pre University Course",
            institution: "Rajiv Gandhi University of Knowledge Technologies Ongole",
            period: "2021 - 2023",
            location: "Rk Valley Kadapa, Andhra Pradesh",
            highlights: [
                "Major in MPC",
                "GPA: 9.1/10",
            ]
        },
        {
            degree: "SSC",
            institution: "Saint Pauls High School",
            period: "2020 - 2021",
            location: "Undrajavaram West Godavari District Andhra Pradesh",
            highlights: [
                "GPA: 10/10",
            ]
        }
    ];

    const certifications = [
        {
            name: "Complete Machine Learning and Data Science Bootcamp",
            issuer: "GeeksforGeeks",
            year: "2025",
        },
        {
            name: "Deloitte Data Analytics",
            issuer: "Forage",
            year: "2025",
        },
        {
            name: "SQL",
            issuer: "Hackerrank",
            year: "2025",
        },

    ];

    return (
        <section id="experience" className="bg-[#0A0A0A] px-7 py-32 max-md:py-20 border-t border-white/[0.05]">
            <div className="max-w-[1100px] mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-4xl font-bold mb-3 text-white max-md:text-3xl font-mono tracking-tighter">
                        JOURNEY_LOG
                    </h2>

                    {/* Minimal Tabs */}
                    <div className="flex justify-center gap-3">
                        {['work', 'education', 'certifications'].map((tab, idx) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-8 py-2.5 rounded-full font-mono text-[10px] tracking-widest uppercase transition-all ${activeTab === tab
                                    ? "bg-white text-black shadow-lg"
                                    : "bg-[#1A1A1A] text-white border border-white/10 hover:bg-[#2A2A2A]"
                                    }`}
                            >
                                [0{idx + 1}] {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Experience Cards */}
                <div className="flex flex-col gap-6">
                    {activeTab === 'work' && workExperience.map((job, index) => (
                        <div
                            key={index}
                            className="bg-[#121212] rounded-[40px] p-10 border border-white/[0.05] shadow-[0_20px_60px_rgba(0,0,0,0.2)] group hover:border-[#D4AF37]/30 transition-all duration-500"
                        >
                            <div className="flex justify-between items-start gap-10 max-md:flex-col">
                                {/* Left Section: Identity */}
                                <div className="max-w-[350px] w-full shrink-0">
                                    <div className="text-[10px] font-mono text-white/10 mb-4 uppercase tracking-widest">LOG_ID: EXP_0{index + 1}</div>
                                    <h3 className="text-3xl font-bold text-white mb-2 leading-tight group-hover:text-[#D4AF37] transition-colors">
                                        {job.role}
                                    </h3>
                                    <p className="text-xl font-bold text-white/30 mb-1">{job.company}</p>
                                    <p className="text-[10px] font-mono text-[#D4AF37] tracking-widest uppercase">{job.period}</p>
                                    <p className="text-[10px] font-mono text-white/20 uppercase mt-1 tracking-tighter cursor-default">{job.location}</p>
                                </div>

                                {/* Right Section: Details */}
                                <div className="flex-grow">
                                    <ul className="space-y-4 mb-8">
                                        {job.description.map((point, idx) => (
                                            <li key={idx} className="flex items-start gap-4 text-white/50 text-lg leading-relaxed font-medium">
                                                <span className="text-[#D4AF37] mt-2.5 shrink-0 w-2 h-2 rounded-full bg-current shadow-[0_0_8px_currentColor]" />
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="flex flex-wrap gap-2">
                                        {job.technologies.map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="px-4 py-1.5 bg-white/[0.03] border border-white/10 text-white/40 font-mono text-[9px] tracking-widest uppercase rounded-full group-hover:border-[#D4AF37]/20 group-hover:text-[#D4AF37] transition-all"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    {activeTab === 'education' && education.map((edu, index) => (
                        <div
                            key={index}
                            className="bg-[#121212] rounded-[40px] p-10 border border-white/[0.05] shadow-[0_20px_60px_rgba(0,0,0,0.2)] group hover:border-[#D4AF37]/30 transition-all duration-500"
                        >
                            <div className="flex justify-between items-start gap-10 max-md:flex-col">
                                <div className="max-w-[350px] w-full shrink-0">
                                    <h3 className="text-3xl font-bold text-white mb-2 leading-tight">
                                        {edu.degree}
                                    </h3>
                                    <p className="text-xl font-bold text-[#D4AF37] mb-1">{edu.institution}</p>
                                    <p className="text-sm font-bold text-white/30 tracking-wider uppercase">{edu.period}</p>
                                </div>
                                <div className="flex-grow">
                                    <ul className="space-y-4">
                                        {edu.highlights.map((point, idx) => (
                                            <li key={idx} className="flex items-start gap-4 text-white/50 text-lg leading-relaxed font-medium">
                                                <span className="text-[#D4AF37] mt-2.5 shrink-0 w-2 h-2 rounded-full bg-current" />
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}

                    {activeTab === 'certifications' && (
                        <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
                            {certifications.map((cert, index) => (
                                <div
                                    key={index}
                                    className="bg-[#121212] rounded-[32px] p-8 border border-white/[0.05] shadow-[0_15px_40px_rgba(0,0,0,0.2)] hover:border-[#D4AF37]/30 transition-all duration-500 flex items-center gap-6"
                                >
                                    <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-2xl flex items-center justify-center shrink-0">
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M12 15l-2 5l2 2l2-2l-2-5z" />
                                            <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z" />
                                            <path d="m14.7 9.3l-3.7 3.7l-1.3-1.3" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-1">{cert.name}</h3>
                                        <p className="text-base font-bold text-white/30 mb-2">{cert.issuer}</p>
                                        <div className="flex items-center gap-3">
                                            <span className="text-xs font-bold text-[#D4AF37] bg-[#D4AF37]/10 px-3 py-1 rounded-full uppercase tracking-widest">{cert.year}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
