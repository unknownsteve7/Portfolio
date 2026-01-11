import React, { useState, useRef } from "react";

const ImageComparison = () => {
    const [sliderPos, setSliderPos] = useState(50);
    const containerRef = useRef(null);

    const handleMove = (e) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX || (e.touches && e.touches[0].clientX);
        if (!x) return;

        let position = ((x - rect.left) / rect.width) * 100;
        if (position < 0) position = 0;
        if (position > 100) position = 100;
        setSliderPos(position);
    };

    return (
        <div
            ref={containerRef}
            className="relative w-full h-full cursor-ew-resize overflow-hidden select-none touch-none rounded-[18px]"
            onMouseMove={handleMove}
            onTouchMove={handleMove}
        >
            <img
                src="/image.jpg"
                alt="Portrait reveal"
                className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
            />
            <div
                className="absolute inset-0 w-full h-full z-10"
                style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
            >
                <img
                    src="/image2.jpg"
                    alt="Portrait original"
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </div>
            <div
                className="absolute top-0 bottom-0 z-20 w-[2px] bg-white/50 backdrop-blur-md"
                style={{ left: `${sliderPos}%` }}
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.3)]">
                    <div className="w-1 h-4 bg-white/50 rounded-full" />
                </div>
            </div>
        </div>
    );
};

export default function Hero() {
    return (
        <section className="relative px-7 pt-[132px] pb-[60px] overflow-hidden min-h-screen flex items-center">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/hero-bg.png"
                    alt="Hero Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/50" />
            </div>

            <div className="max-w-[1400px] mx-auto w-full relative z-10">
                <div className="max-w-[800px]">
                    <div className="mb-6 flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 shadow-[0_0_10px_#D4AF37]" />
                        <span className="text-[10px] font-mono tracking-[0.2em] text-white/40 uppercase">
                            STATUS: READY_FOR_HIRE
                        </span>
                    </div>

                    <h3 className="text-[clamp(40px,8vw,100px)] select-none leading-[0.85] m-0 text-white tracking-[-4px] break-words max-md:text-[clamp(42px,12vw,72px)] max-md:tracking-[-1px]">
                        Analyst & <br />
                        <span className="text-[#D4AF37]">Frontend</span> <br />
                        <span className="text-[#D4AF37]">Developer</span>
                    </h3>

                    <div className="mt-8 max-w-[500px]">
                        <p className="text-lg text-white/60 leading-relaxed font-medium">
                            Hi, I'm Mohan. I specialize in leveraging business and data analytics to
                            uncover key insights, then translate those insights into intuitive,
                            decision-driving frontend interfaces.
                        </p>
                    </div>

                    <div className="flex items-center gap-8 mt-12 max-md:flex-col max-md:items-start max-md:gap-6">
                        <div className="flex gap-4">
                            <Socials />
                        </div>

                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-white text-black text-sm font-bold shadow-[0_10px_30px_rgba(0,0,0,0.3)] overflow-hidden group focus:outline-none hover:scale-105 transition-all duration-300"
                            aria-label="Open resume (PDF)"
                        >
                            <span className="relative z-10">VIEW_RESUME</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" viewBox="0 0 16 16">
                                <path d="M6.75 3a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V4.56l-6.22 6.22a.75.75 0 1 1-1.06-1.06L11.19 3.5H7.5A.75.75 0 0 1 6.75 3z" />
                                <path d="M2.75 2A1.75 1.75 0 0 0 1 3.75v8.5C1 13.99 2.01 15 3.75 15h8.5A1.75 1.75 0 0 0 14 12.25v-3a.75.75 0 0 0-1.5 0v3c0 .14-.11.25-.25.25h-8.5a.25.25 0 0 1-.25-.25v-8.5c0-.14.11-.25.25-.25h3a.75.75 0 0 0 0-1.5h-3z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}


const Socials = () => (
    <>
        <a href="https://linkedin.com/in/nagamohan765" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full border border-white/[0.08] text-white hover:bg-white hover:text-black transition-all duration-200"><svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg></a>
        <a href="https://github.com/unknownsteve7" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full border border-white/[0.08] text-white hover:bg-white hover:text-black transition-all duration-200"><svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0.297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.362.81 1.096.81 2.22v3.293c0 .319.204.694.805.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg></a>
    </>
)