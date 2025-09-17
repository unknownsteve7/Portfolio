import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import EducationExperience from './components/EducationExperience';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Events from './components/Events';
import Contact from './components/Contact';

const App: React.FC = () => {
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setCursorPos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="relative min-h-screen bg-black overflow-x-hidden">
            <div 
                className="pointer-events-none fixed inset-0 z-50 transition duration-300 lg:absolute"
                style={{
                    background: `radial-gradient(600px at ${cursorPos.x}px ${cursorPos.y}px, rgba(255, 255, 255, 0.05), transparent 80%)`
                }}
            ></div>
            <Header />
            <main className="container mx-auto px-6 md:px-12">
                <Hero />
                <EducationExperience />
                <Services />
                <Skills />
                <Projects />
                <Testimonials />
                <Events />
                <Contact />
            </main>
             <footer className="text-center p-8 text-gray-500">
                <p>&copy; 2025 Naga Mohan. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default App;