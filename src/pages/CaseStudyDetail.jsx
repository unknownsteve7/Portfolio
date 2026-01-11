import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { caseStudies } from "../data/caseStudies";

export default function CaseStudyDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const study = caseStudies.find((s) => s.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
        if (window.lenis) {
            window.lenis.scrollTo(0, { immediate: true });
        }
    }, [id]);

    if (!study) {
        return (
            <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col items-center justify-center p-10">
                <h1 className="text-4xl font-bold mb-6">Case Study Not Found</h1>
                <Link to="/" className="text-[#D4AF37] hover:underline">Return Home</Link>
            </div>
        );
    }

    const nextStudy = caseStudies.find(s => s.id === study.nextId) || caseStudies[0];

    return (
        <div className="bg-[#0A0A0A] text-white min-h-screen pb-20">
            {/* Hero Section */}
            <section className="relative h-[70vh] w-full overflow-hidden flex items-end pb-20">
                <div className="absolute inset-0">
                    <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-full object-cover opacity-30 transform scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent" />
                </div>

                <div className="max-w-[1400px] mx-auto w-full px-7 relative z-10">
                    <Link
                        to="/"
                        className="group inline-flex items-center gap-2 text-white/50 hover:text-[#D4AF37] transition-all mb-8 font-bold text-xs uppercase tracking-widest"
                    >
                        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M19 12H5M12 19l-7-7 7-7" />
                        </svg>
                        Back to Portfolio
                    </Link>

                    <div className="flex items-center gap-6 mb-6 flex-wrap">
                        <h1 className="text-7xl font-bold tracking-tight max-md:text-4xl leading-tight">
                            {study.title}
                        </h1>
                        <span className="inline-block px-4 py-1.5 bg-[#D4AF37]/10 text-[#D4AF37] text-xs font-bold rounded-full uppercase tracking-[2px] whitespace-nowrap">
                            {study.category}
                        </span>
                    </div>
                    <div className="flex gap-12 text-white/40 font-bold text-sm uppercase tracking-widest max-md:flex-col max-md:gap-4">
                        <div className="flex flex-col gap-1">
                            <span className="text-[10px] text-white/20">Client</span>
                            {study.client}
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-[10px] text-white/20">Duration</span>
                            {study.duration}
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <div className="max-w-[1400px] mx-auto px-7 py-20">
                <div className="grid grid-cols-[1fr_2fr] gap-20 max-lg:grid-cols-1 max-lg:gap-12">
                    {/* Left: Metadata & Tech */}
                    <div className="space-y-12">
                        <div>
                            <h3 className="text-white/20 text-[10px] font-bold uppercase tracking-widest mb-6">Technologies Used</h3>
                            <div className="flex flex-wrap gap-2">
                                {study.technologies.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="px-4 py-2 bg-white/[0.03] border border-white/5 text-white/70 text-xs font-bold rounded-lg"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="p-8 bg-white/[0.02] border border-white/5 rounded-[32px]">
                            <h3 className="text-[#D4AF37] text-xl font-bold mb-4">Core Impact</h3>
                            <ul className="space-y-6">
                                {study.results.map((result, idx) => (
                                    <li key={idx} className="flex items-start gap-4">
                                        <span className="mt-1 w-5 h-5 bg-[#32cd32]/10 border border-[#32cd32]/20 rounded-full flex items-center justify-center shrink-0">
                                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#32cd32" strokeWidth="4">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                        </span>
                                        <p className="text-white/60 text-sm leading-relaxed font-medium">{result}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right: Story */}
                    <div className="space-y-16">
                        <section>
                            <h2 className="text-white/20 text-[10px] font-bold uppercase tracking-widest mb-4">Overview</h2>
                            <p className="text-white/80 text-2xl leading-relaxed font-medium max-md:text-xl">
                                {study.description}
                            </p>
                        </section>

                        <section className="grid grid-cols-2 gap-12 max-md:grid-cols-1">
                            <div>
                                <h3 className="text-white font-bold text-xl mb-6">The Challenge</h3>
                                <p className="text-white/50 text-lg leading-relaxed">{study.challenge}</p>
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-xl mb-6">The Solution</h3>
                                <p className="text-white/50 text-lg leading-relaxed">{study.solution}</p>
                            </div>
                        </section>

                        {/* Large Image Break */}
                        <div className="rounded-[40px] overflow-hidden border border-white/10 aspect-[21/9] bg-white/5 shadow-2xl">
                            <img src={study.image} alt="Detail view" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Next Project CTA */}
            <section className="mt-20 border-t border-white/10">
                <Link
                    to={`/case-study/${nextStudy.id}`}
                    className="group flex items-center justify-between p-20 hover:bg-white/[0.02] transition-colors max-md:p-10"
                >
                    <div>
                        <span className="text-white/20 text-[10px] font-bold uppercase tracking-widest mb-4 block">Next Case Study</span>
                        <h2 className="text-6xl font-bold text-white group-hover:text-[#D4AF37] transition-colors max-md:text-3xl">
                            {nextStudy.title}
                        </h2>
                    </div>
                    <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center border border-white/10 group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37]/10 transition-all transform group-hover:rotate-[-45deg]">
                        <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" className="text-white group-hover:text-[#D4AF37]">
                            <path d="M5 12h30M25 5l10 7-10 7" />
                        </svg>
                    </div>
                </Link>
            </section>
        </div>
    );
}
