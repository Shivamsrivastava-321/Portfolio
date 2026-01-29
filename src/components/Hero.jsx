import React, { useRef, useState } from 'react';
import profileImg from '../assets/profile.jpg';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { ArrowRight, Code, Database, Server, Layers, Cpu, Globe } from 'lucide-react';

const Hero = () => {
    const ref = useRef(null);
    const [isFlipped, setIsFlipped] = useState(false);
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    // Mouse parallax for 3D feel
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const moveX = clientX - window.innerWidth / 2;
        const moveY = clientY - window.innerHeight / 2;
        mouseX.set(moveX * 0.05); // Sensitivity
        mouseY.set(moveY * 0.05);
    };

    const springConfig = { damping: 25, stiffness: 150 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    return (
        <section
            id="about"
            ref={ref}
            onMouseMove={handleMouseMove}
            className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-black selection:bg-blue-500/30"
        >
            {/* 3D Background Elements */}
            <div className="absolute inset-0 z-0 perspective-1000">
                <motion.div
                    style={{ x: springX, y: springY }}
                    className="absolute top-20 left-20 w-72 h-72 bg-blue-600/20 rounded-full blur-[100px] mix-blend-screen"
                />
                <motion.div
                    style={{ x: useTransform(springX, value => value * -1.5), y: useTransform(springY, value => value * -1.5) }}
                    className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] mix-blend-screen"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,#000000_100%)] z-10" />
            </div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] z-0 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative inline-block"
                >
                    {/* Profile Photo Flip Card */}
                    <div className="flex justify-center mb-12 mt-60 relative z-20">
                        <div
                            className="relative w-40 h-40 cursor-pointer perspective-1000"
                            onClick={() => setIsFlipped(!isFlipped)}
                            style={{ perspective: '1000px' }}
                        >
                            <motion.div
                                initial={false}
                                animate={{ rotateY: isFlipped ? 180 : 0 }}
                                transition={{ duration: 0.6 }}
                                className="w-full h-full relative"
                                style={{ transformStyle: 'preserve-3d' }}
                            >
                                {/* Front */}
                                <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-2xl shadow-blue-500/20"
                                    style={{ backfaceVisibility: 'hidden' }}>
                                    <img
                                        src={profileImg}
                                        alt="Shivam Srivastava"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Back */}
                                <div
                                    className="absolute inset-0 rounded-full bg-slate-900 border-4 border-blue-400 flex flex-col items-center justify-center p-2 text-center"
                                    style={{
                                        transform: 'rotateY(180deg)',
                                        backfaceVisibility: 'hidden'
                                    }}
                                >
                                    <h3 className="text-white text-xs font-bold mb-1">Shivam Srivastava</h3>
                                    <a
                                        href="https://www.linkedin.com/in/shivam-srivastavaa123/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[10px] text-blue-400 hover:text-blue-300 underline break-all leading-tight"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        LinkedIn Profile
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-blue-900/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8 backdrop-blur-md">
                        <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                        Available for Full-time Roles
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-6xl md:text-8xl font-bold tracking-tight mb-8"
                >
                    Hi, I'm <br />
                    <span className="bg-gradient-to-br from-white via-gray-200 to-gray-500 bg-clip-text text-transparent drop-shadow-2xl">
                        Shivam Srivastava
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
                >
                    Backend-focused Developer building <span className="text-white font-semibold">scalable</span> systems
                    with <span className="text-blue-400 relative inline-block">
                        MERN Stack
                        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-400/50" />
                    </span>,
                    designing robust <span className="text-purple-400">REST APIs</span>, and optimizing database architecture.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <a
                        href="#projects"
                        className="group relative px-8 py-4 bg-blue-600 rounded-full text-white font-semibold flex items-center gap-2 overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span className="relative z-10">View Projects</span>
                        <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>

                    <a
                        href="#contact"
                        className="px-8 py-4 rounded-full border border-gray-800 bg-gray-900/50 hover:bg-gray-800 text-gray-300 hover:text-white font-medium transition-all hover:scale-105 backdrop-blur-sm"
                    >
                        Contact Me
                    </a>
                </motion.div>

                {/* Floating 3D Tech Icons */}
                <motion.div
                    style={{ y: y1 }}
                    className="absolute top-1/4 left-0 hidden lg:block opacity-20 pointer-events-none"
                >
                    <Globe className="w-24 h-24 text-blue-500 animate-spin-slow" />
                </motion.div>
                <motion.div
                    style={{ y: y2 }}
                    className="absolute bottom-1/4 right-0 hidden lg:block opacity-20 pointer-events-none"
                >
                    <Database className="w-32 h-32 text-purple-500 animate-pulse" />
                </motion.div>

                {/* Tech Stack Cards */}
                <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 opacity-80">
                    {[
                        { icon: Server, label: "Node.js", color: "text-green-400" },
                        { icon: Database, label: "MongoDB", color: "text-yellow-400" },
                        { icon: Code, label: "React", color: "text-blue-400" },
                        { icon: Layers, label: "System Design", color: "text-pink-400" }
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 + idx * 0.1 }}
                            whileHover={{ y: -5, borderColor: 'rgba(255,255,255,0.2)' }}
                            className="p-4 rounded-2xl bg-gray-900/30 border border-gray-800/50 backdrop-blur-sm flex flex-col items-center gap-3 transition-colors"
                        >
                            <item.icon className={`w-6 h-6 ${item.color}`} />
                            <span className="text-sm font-medium text-gray-400">{item.label}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;

