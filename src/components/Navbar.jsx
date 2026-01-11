import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

export default function NavBar() {
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, [location.pathname]);

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMobileMenuOpen]);

    const getLink = (hash) => {
        return isHomePage ? hash : `/${hash}`;
    };

    const handleAnchorClick = (e, hash) => {
        if (isHomePage && hash.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(hash);
            if (target && window.lenis) {
                window.lenis.scrollTo(target, {
                    offset: -60,
                    duration: 1.5,
                    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
                });
            }
        }
        setIsMobileMenuOpen(false);
    };

    const navLinks = [
        { name: "Projects", hash: "#projects" },
        // { name: "Case Studies", hash: "#case-studies" },
        { name: "Experience", hash: "#experience" }
    ];

    if (!isHomePage) return null;

    return (
        <>
            <header
                className={`h-[70px] flex items-center fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled || isMobileMenuOpen
                    ? "bg-[#0A0A0A]/90 backdrop-blur-lg border-b border-white/[0.05] shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
                    : "bg-transparent border-b border-transparent"
                    }`}
            >
                <div className="max-w-[1400px] mx-auto w-full px-6 md:px-10 flex justify-between items-center">
                    <div className="flex items-center gap-2 text-3xl font-black tracking-tighter text-white z-[60] relative">
                        <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="no-underline text-inherit hover:text-[#D4AF37] transition-all duration-300">.m</Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="flex gap-8 items-center max-md:hidden">
                        {navLinks.map((link) => (
                            <a
                                key={link.hash}
                                href={getLink(link.hash)}
                                onClick={(e) => handleAnchorClick(e, link.hash)}
                                className="no-underline text-white/70 font-bold text-[11px] uppercase tracking-[1.5px] transition-all hover:text-white"
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    <div className="flex items-center gap-4">
                        <a
                            href={getLink("#contact")}
                            onClick={(e) => handleAnchorClick(e, "#contact")}
                            className="max-md:hidden px-6 py-2 rounded-full border border-[#D4AF37]/30 text-[#D4AF37] text-[11px] font-bold uppercase tracking-widest hover:bg-[#D4AF37] hover:text-black transition-all duration-300"
                        >
                            Get in Touch
                        </a>

                        {/* Hamburger Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="hidden max-md:flex flex-col gap-1.5 p-2 z-[60] relative group"
                        >
                            <motion.span
                                animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                                className="w-8 h-[2px] bg-white block origin-center transition-colors group-hover:bg-[#D4AF37]"
                            />
                            <motion.span
                                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                                className="w-8 h-[2px] bg-white block transition-colors group-hover:bg-[#D4AF37]"
                            />
                            <motion.span
                                animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                                className="w-8 h-[2px] bg-white block origin-center transition-colors group-hover:bg-[#D4AF37]"
                            />
                        </button>
                    </div>
                </div>

            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="fixed inset-0 z-50 bg-[#0A0A0A] flex flex-col items-center justify-center gap-8 md:hidden"
                    >
                        <nav className="flex flex-col items-center gap-8">
                            {navLinks.map((link, index) => (
                                <motion.a
                                    key={link.hash}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + index * 0.1 }}
                                    href={getLink(link.hash)}
                                    onClick={(e) => handleAnchorClick(e, link.hash)}
                                    className="text-3xl font-bold uppercase tracking-wider text-white hover:text-[#D4AF37] transition-colors"
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                <a
                                    href={getLink("#contact")}
                                    onClick={(e) => handleAnchorClick(e, "#contact")}
                                    className="mt-4 px-8 py-3 rounded-full bg-[#D4AF37] text-black text-sm font-bold uppercase tracking-widest hover:bg-white transition-all duration-300"
                                >
                                    Get in Touch
                                </a>
                            </motion.div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
