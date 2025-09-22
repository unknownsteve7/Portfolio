import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const DraggableIdCard: React.FC = () => {
    const constraintsRef = useRef(null);

    // Motion values for drag position
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Transform drag position into rotation for a natural swing effect
    const lanyardRotate = useTransform(x, [-200, 200], [-25, 25]);
    const cardRotate = useTransform(x, [-200, 200], [-8, 8]);

    return (
        <div ref={constraintsRef} className="w-full h-full absolute inset-0">
            <motion.div
                drag
                dragConstraints={constraintsRef}
                dragElastic={0.15}
                whileTap={{ scale: 1.05, cursor: "grabbing" }}
                style={{ x, y }}
                className="relative z-10 cursor-grab w-80 mx-auto"
                animate={{ y: [0, -45, 0] ,x: [10, 100, 10] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
                {/* The lanyard and clip */}
                <motion.div
                    className="absolute bottom-full left-1/2 -translate-x-1/2 origin-top"
                    style={{ rotate: lanyardRotate }}
                >
                    {/* Thin string part */}
                    <div className="w-[2px] h-16 bg-black mx-auto"></div>

                    {/* Clip */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-4 bg-black rounded-b-md border-x-2 border-b-2 border-white shadow-inner"></div>
                </motion.div>

                {/* The card */}
                <motion.div
                    className="relative w-99 h-60 bg-black border border-white rounded-2xl shadow-2xl p-4 flex"
                    style={{ rotate: cardRotate }}
                >
                    <div className="w-1/3 flex items-center justify-center">
                        <img
                            src="/mohan.jpg"
                            alt="Naga Mohan"
                            className="w-24 h-24 object-cover rounded-md border-2 border-white"
                        />
                    </div>

                    <div className="w-2/3 flex flex-col justify-between text-left pl-3">
                        <div>
                            <h3 className="text-xl font-bold text-white leading-tight">Naga Mohan</h3>
                            <p className="text-white text-sm">Frontend & Data Analyst</p>
                        </div>
                        <div>
                            <p className="text-xs text-gray-500">ID: 1337-CODE-4242</p>
                            <p className="text-xs font-mono text-gray-300">
                                Status: <span className="text-emerald-400">Available for Hire</span>
                            </p>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default DraggableIdCard;
