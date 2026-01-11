import React, { useState } from 'react';
import {
    FaReact, FaHtml5, FaCss3, FaGithub, FaBootstrap, FaNodeJs,
    FaGitAlt, FaNpm, FaPython, FaChartPie
} from 'react-icons/fa';
import {
    SiNextdotjs, SiJavascript, SiTypescript, SiTailwindcss, SiRedux,
    SiAngular, SiVuedotjs, SiPostman, SiPandas, SiNumpy, SiMysql,
    SiPostgresql, SiMongodb, SiTableau, SiScikitlearn, SiTensorflow,
    SiKeras, SiJupyter
} from 'react-icons/si';

export default function Skills() {
    const [activeTab, setActiveTab] = useState('core');

    const skillsData = [
        // Frontend
        { name: 'React', icon: FaReact, category: 'Frontend', color: '#61DAFB' },
        { name: 'Next.js', icon: SiNextdotjs, category: 'Frontend', color: '#ffffffff' },
        { name: 'JavaScript', icon: SiJavascript, category: 'Frontend', color: '#F7DF1E' },
        { name: 'TypeScript', icon: SiTypescript, category: 'Frontend', color: '#3178C6' },
        { name: 'HTML5', icon: FaHtml5, category: 'Frontend', color: '#E34F26' },
        { name: 'CSS3', icon: FaCss3, category: 'Frontend', color: '#1572B6' },
        { name: 'GitHub', icon: FaGithub, category: 'Frontend', color: '#ffffffff' },
        { name: 'Tailwind', icon: SiTailwindcss, category: 'Frontend', color: '#38BDF8' },
        { name: 'Bootstrap', icon: FaBootstrap, category: 'Frontend', color: '#7952B3' },
        { name: 'Node.js', icon: FaNodeJs, category: 'Frontend', color: '#339933' },
        { name: 'Redux', icon: SiRedux, category: 'Frontend', color: '#764ABC' },
        { name: 'Angular', icon: SiAngular, category: 'Frontend', color: '#DD0031' },
        { name: 'Vue.js', icon: SiVuedotjs, category: 'Frontend', color: '#42B883' },
        { name: 'Postman', icon: SiPostman, category: 'Frontend', color: '#FF6C37' },
        { name: 'Git', icon: FaGitAlt, category: 'Frontend', color: '#F05032' },
        { name: 'NPM', icon: FaNpm, category: 'Frontend', color: '#CB3837' },

        // Business & Data Analysis
        { name: 'Python', icon: FaPython, category: 'Business', color: '#3776AB' },
        { name: 'Pandas', icon: SiPandas, category: 'Business', color: '#3607EE' },
        { name: 'NumPy', icon: SiNumpy, category: 'Business', color: '#1199C7' },
        { name: 'SQL (MySQL)', icon: SiMysql, category: 'Business', color: '#3B8CCA' },
        { name: 'PostgreSQL', icon: SiPostgresql, category: 'Business', color: '#17AAEA' },
        { name: 'MongoDB', icon: SiMongodb, category: 'Business', color: '#47A248' },
        { name: 'Tableau', icon: SiTableau, category: 'Business', color: '#E97627' },
        { name: 'Power BI', icon: FaChartPie, category: 'Business', color: '#F2C811' },
        { name: 'Scikit-learn', icon: SiScikitlearn, category: 'Business', color: '#F7931E' },
        { name: 'TensorFlow', icon: SiTensorflow, category: 'Business', color: '#FF6F00' },
        { name: 'Keras', icon: SiKeras, category: 'Business', color: '#D00000' },
        { name: 'Jupyter', icon: SiJupyter, category: 'Business', color: '#F37626' },
    ];

    const coreSkills = [
        { name: 'Business Analysis', icon: '📊', description: 'Analyzing business requirements and processes' },
        { name: 'Documentation', icon: '📋', description: 'Creating comprehensive technical documentation' },
        { name: 'Frontend Development', icon: '🔗', description: 'Integrating multiple systems and platforms' },
        { name: 'Project Management', icon: '📅', description: 'Managing projects from start to finish' },
        { name: 'Data & Analytics', icon: '📈', description: 'Data analysis and visualization' },
    ];

    const frontendSkills = skillsData.filter(skill => skill.category === 'Frontend');
    const businessSkills = skillsData.filter(skill => skill.category === 'Business');

    return (
        <section className="bg-[#0A0A0A] px-7 py-32 max-md:py-20 border-t border-white/[0.05]">
            <div className="max-w-[1400px] mx-auto">
                <h2 className="text-4xl font-bold mb-3 text-white max-md:text-3xl font-mono tracking-tighter">
                    SKILLS_&_TOOLS
                </h2>


                {/* Tabs */}
                <div className="flex gap-4 mb-10 max-md:flex-col">
                    <button
                        onClick={() => setActiveTab('core')}
                        className={`px-8 py-3 rounded-full font-mono text-[10px] tracking-widest uppercase transition-all ${activeTab === 'core'
                            ? 'bg-white text-black'
                            : 'bg-[#1A1A1A] text-white border border-white/10 hover:bg-[#2A2A2A]'
                            }`}
                    >
                        [01] Core_Skills
                    </button>
                    <button
                        onClick={() => setActiveTab('tools')}
                        className={`px-8 py-3 rounded-full font-mono text-[10px] tracking-widest uppercase transition-all ${activeTab === 'tools'
                            ? 'bg-white text-black'
                            : 'bg-[#1A1A1A] text-white border border-white/10 hover:bg-[#2A2A2A]'
                            }`}
                    >
                        [02] Tools_&_Tech
                    </button>
                </div>

                {/* Core Skills Content */}
                {activeTab === 'core' && (
                    <div className="grid grid-cols-6 gap-3 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1">
                        {coreSkills.map((skill, index) => (
                            <div
                                key={index}
                                className="bg-[#121212] text-white flex items-center justify-center border border-white/5 py-3 rounded-2xl hover:border-[#D4AF37]/50 transition-all duration-300"
                            >
                                <h3 className="text-sm font-bold">{skill.name}</h3>
                            </div>
                        ))}
                    </div>
                )}

                {/* Tools & Technologies Content */}
                {activeTab === 'tools' && (
                    <div className="space-y-16">
                        {/* Frontend Tools */}
                        <div>
                            <h3 className="mb-8 text-white/40 tracking-[0.3em] uppercase text-[10px] font-mono border-l-2 border-[#D4AF37] pl-4">
                                01 // FRONTEND_INFRASTRUCTURE
                            </h3>
                            <div className="flex justify-left">
                                <div className="grid grid-cols-12 gap-6 max-xl:grid-cols-10 max-lg:grid-cols-8 max-md:grid-cols-6">
                                    {frontendSkills.map((skill, index) => {
                                        const Icon = skill.icon;
                                        return (
                                            <div
                                                key={index}
                                                className="bg-[#121212] p-4 rounded-xl flex items-center justify-center hover:transform hover:scale-110 transition-all duration-300 border border-white/5 group cursor-pointer relative w-16 h-16 hover:z-50"
                                            >
                                                <Icon
                                                    className="text-2xl opacity-70 group-hover:opacity-100 transition-all"
                                                    style={{ color: skill.color }}
                                                />
                                                <div className="absolute -top-11 left-1/2 -translate-x-1/2 bg-black text-white border border-[#D4AF37]/30 px-3 py-1.5 rounded-lg text-[10px] font-bold opacity-0 group-hover:opacity-100 group-hover:-top-12 transition-all duration-300 whitespace-nowrap pointer-events-none z-20 shadow-[0_10px_30px_rgba(0,0,0,0.5)] uppercase tracking-widest">
                                                    {skill.name}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        {/* Business & Data Analysis Tools */}
                        <div>
                            <h3 className="mb-8 text-white/40 tracking-[0.3em] uppercase text-[10px] font-mono border-l-2 border-[#D4AF37] pl-4">
                                02 // DATA_&_ANALYTICS_TOOLS
                            </h3>
                            <div className="flex justify-left">
                                <div className="grid grid-cols-12 gap-6 max-xl:grid-cols-10 max-lg:grid-cols-8 max-md:grid-cols-6">
                                    {businessSkills.map((skill, index) => {
                                        const Icon = skill.icon;
                                        return (
                                            <div
                                                key={index}
                                                className="bg-[#121212] p-4 rounded-xl flex items-center justify-center hover:transform hover:scale-110 transition-all duration-300 border border-white/5 group cursor-pointer relative w-16 h-16 hover:z-50"
                                            >
                                                <Icon
                                                    className="text-2xl opacity-70 group-hover:opacity-100 transition-all"
                                                    style={{ color: skill.color }}
                                                />
                                                <div className="absolute -top-11 left-1/2 -translate-x-1/2 bg-black text-white border border-[#D4AF37]/30 px-3 py-1.5 rounded-lg text-[10px] font-bold opacity-0 group-hover:opacity-100 group-hover:-top-12 transition-all duration-300 whitespace-nowrap pointer-events-none z-20 shadow-[0_10px_30px_rgba(0,0,0,0.5)] uppercase tracking-widest">
                                                    {skill.name}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
