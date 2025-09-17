import React, { useState, useMemo } from "react";
import AnimatedSection from "./AnimatedSection";
import { skillsData } from "../constants";
import { motion, AnimatePresence } from "framer-motion";

const Skills: React.FC = () => {
    const [filter, setFilter] = useState<"Frontend" | "Data">("Frontend");

    const filteredSkills = useMemo(() => {
        return skillsData.filter((s) => s.category === filter);
    }, [filter]);

    const containerVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.05, duration: 0.4 },
        },
        exit: { opacity: 0, y: -40 },
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
    };

    const categories = [
        { label: "Frontend", key: "Frontend" },
        { label: "Data", key: "Data" },
    ];

    return (
        <AnimatedSection id="skills">
            <h2 className="text-4xl font-bold text-center mb-4">
                Tools & Technologies
            </h2>
            <p className="text-lg text-gray-400 text-center mb-12 max-w-2xl mx-auto">
                My ever-growing arsenal of tools and technologies for building modern
                web experiences and analyzing data.
            </p>
            {/* Segmented Control with sliding indicator */}
            <div className="flex justify-center mb-12">
                <div className="relative inline-grid grid-cols-2 items-center rounded-full border p-1 overflow-hidden border-gray-700 bg-black">
                    <motion.div
                        layout
                        className="absolute left-0 top-0 h-full w-1/2 rounded-full shadow bg-white"
                        animate={{ x: filter === "Frontend" ? "0%" : "100%" }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                    {categories.map((c) => (
                        <button
                            key={c.key}
                            onClick={() => setFilter(c.key as "Frontend" | "Data")}
                            className={`relative z-10 px-6 py-2 font-semibold transition-colors duration-200 ${filter === c.key ? "text-black" : "text-gray-300"
                                }`}
                        >
                            {c.label}
                        </button>
                    ))}
                </div>
            </div>


            {/* Animated Grid */}
            <div className="w-full max-w-3xl mx-auto">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={filter}
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-10"
                    >
                        {filteredSkills.map((skill) => (
                            <motion.div
                                key={skill.name}
                                variants={itemVariants}
                                whileHover={{ scale: 1.05 }}
                                className="group relative flex flex-col items-center justify-center p-4 bg-black rounded-lg border border-gray-800 aspect-square transition-all duration-300 hover:bg-black"
                            >
                                <skill.icon
                                    className="w-9 h-9 text-white transition-colors"
                                    style={{ color: skill.color }}
                                />
                                <span className="absolute -bottom-8 text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    {skill.name}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </AnimatedSection>
    );
};

export default Skills;
