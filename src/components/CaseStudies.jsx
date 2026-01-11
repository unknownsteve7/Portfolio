import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { caseStudies } from '../data/caseStudies';

export default function CaseStudies() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % caseStudies.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
    };

    return (
        <section id="case-studies" className="bg-[#0A0A0A] px-7 py-32 max-md:py-20 overflow-hidden border-t border-white/[0.05]">
            <div className="max-w-[1400px] mx-auto">
                <h2 className="text-4xl font-bold mb-16 text-white text-center font-mono tracking-tighter">
                    CASE_STUDIES
                </h2>

                <div className="relative">
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-40 bg-white/5 hover:bg-white/10 text-white p-4 rounded-full backdrop-blur-md border border-white/10 transition-all max-md:left-2"
                    >
                        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="3">
                            <path d="M15 18l-6-6 6-6" />
                        </svg>
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-40 bg-white/5 hover:bg-white/10 text-white p-4 rounded-full backdrop-blur-md border border-white/10 transition-all max-md:right-2"
                    >
                        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="3">
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    </button>

                    <div className="flex items-center justify-center px-16 max-md:px-12">
                        <div className="relative w-full max-w-5xl h-[550px] max-md:h-[450px]">
                            {caseStudies.map((study, index) => {
                                const position = (index - currentIndex + caseStudies.length) % caseStudies.length;

                                let transform = '';
                                let zIndex = 0;
                                let opacity = 0.1;
                                let scale = 0.7;
                                let blur = 'blur-md';

                                if (position === 0) {
                                    transform = 'translateX(0)';
                                    zIndex = 30;
                                    opacity = 1;
                                    scale = 1;
                                    blur = '';
                                } else if (position === 1) {
                                    transform = 'translateX(60%)';
                                    zIndex = 20;
                                    opacity = 0.3;
                                    scale = 0.8;
                                    blur = 'blur-[4px]';
                                } else if (position === caseStudies.length - 1) {
                                    transform = 'translateX(-60%)';
                                    zIndex = 20;
                                    opacity = 0.3;
                                    scale = 0.8;
                                    blur = 'blur-[4px]';
                                } else {
                                    transform = position > 1 ? 'translateX(120%)' : 'translateX(-120%)';
                                    zIndex = 10;
                                }

                                return (
                                    <Link
                                        key={study.id}
                                        to={`/case-study/${study.id}`}
                                        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg transition-all duration-700 ease-in-out ${blur} ${position === 0 ? 'cursor-pointer' : 'cursor-default pointer-events-none'}`}
                                        style={{
                                            transform: `translate(-50%, -50%) ${transform} scale(${scale})`,
                                            zIndex,
                                            opacity,
                                        }}
                                    >
                                        <div className="bg-[#121212] rounded-[40px] border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.5)] overflow-hidden h-[500px] max-md:h-[400px] group">
                                            <div className="p-10 h-full flex flex-col max-md:p-8">
                                                <div className="flex justify-between items-center mb-6">
                                                    <span className="inline-block px-4 py-1.5 bg-white/5 border border-white/10 text-white/50 text-[10px] font-mono uppercase tracking-widest rounded-full group-hover:bg-[#D4AF37]/20 group-hover:text-[#D4AF37] group-hover:border-[#D4AF37]/20 transition-all">
                                                        {study.category}
                                                    </span>
                                                    <span className="text-[10px] font-mono text-white/10">CS_ID: [0{index + 1}]</span>
                                                </div>

                                                <h3 className="text-3xl font-bold text-white mb-4 tracking-tight leading-tight group-hover:text-[#D4AF37] transition-colors max-md:text-2xl">
                                                    {study.title}
                                                </h3>

                                                <p className="text-white/30 text-[10px] font-mono uppercase tracking-widest mb-4">
                                                    CLIENT// {study.client} • {study.duration}
                                                </p>

                                                <p className="text-white/50 leading-relaxed mb-6 flex-grow text-lg font-medium line-clamp-3">
                                                    {study.description}
                                                </p>

                                                <div className="space-y-3 mb-8">
                                                    <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#D4AF37]/50">METRIC_LOGS:</h4>
                                                    {study.results.slice(0, 2).map((result, idx) => (
                                                        <div key={idx} className="flex items-center gap-4">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shadow-[0_0_8px_#D4AF37]" />
                                                            <span className="text-sm font-mono text-white/80 lowercase tracking-tighter">{result}</span>
                                                        </div>
                                                    ))}
                                                </div>

                                                <div className="pt-2">
                                                    <span className="text-white font-bold text-sm tracking-widest uppercase flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
                                                        Explore Transformation
                                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                            <line x1="5" y1="12" x2="19" y2="12"></line>
                                                            <polyline points="12 5 19 12 12 19"></polyline>
                                                        </svg>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    <div className="flex justify-center gap-3 mt-12">
                        {caseStudies.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`h-1.5 rounded-full transition-all duration-500 ${index === currentIndex ? 'bg-white w-10' : 'bg-white/20 w-3'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
