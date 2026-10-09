import React, { Suspense, useRef, useState, useEffect, lazy } from 'react';
import profileImg from '../assets/profile.jpg';
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowDown, Code, Database, Server, Layers, Cloud, Zap, ExternalLink } from 'lucide-react';
import { gsap } from 'gsap';

// Lazy-load the heavy Three.js scene
const FloatingScene = lazy(() => import('./FloatingScene'));

/* ─── Stats ─────────────────────────────────────────────────────── */
const STATS = [
    { value: '1.6+', label: 'Years Experience', color: '#60a5fa' },
    { value: '5+', label: 'Production Projects', color: '#a78bfa' },
    { value: '10k+', label: 'Users Served', color: '#34d399' },
    { value: '3', label: 'Companies', color: '#f59e0b' },
];

/* ─── Tech stack chips ───────────────────────────────────────────── */
const TECH = [
    { icon: Server, label: 'Node.js & Express', color: 'text-green-400', bg: 'rgba(52,211,153,0.08)', border: 'rgba(52,211,153,0.2)' },
    { icon: Database, label: 'MongoDB & MySQL', color: 'text-yellow-400', bg: 'rgba(251,191,36,0.08)', border: 'rgba(251,191,36,0.2)' },
    { icon: Zap, label: 'Redis & Caching', color: 'text-red-400', bg: 'rgba(248,113,113,0.08)', border: 'rgba(248,113,113,0.2)' },
    { icon: Cloud, label: 'AWS & Docker', color: 'text-orange-400', bg: 'rgba(251,146,60,0.08)', border: 'rgba(251,146,60,0.2)' },
    { icon: Code, label: 'React & Tailwind', color: 'text-blue-400', bg: 'rgba(96,165,250,0.08)', border: 'rgba(96,165,250,0.2)' },
    { icon: Layers, label: 'WebSockets & APIs', color: 'text-purple-400', bg: 'rgba(167,139,250,0.08)', border: 'rgba(167,139,250,0.2)' },
];

/* ─── Hero Component ─────────────────────────────────────────────── */
const Hero = () => {
    const sectionRef = useRef(null);
    const headingRef = useRef(null);
    const [isFlipped, setIsFlipped] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const mouse = useRef({ x: 0, y: 0 });

    // Scroll parallax
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 600], [0, 120]);
    const opacity = useTransform(scrollY, [0, 400], [1, 0]);

    // Mouse spring for background blobs
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springX = useSpring(mouseX, { damping: 30, stiffness: 120 });
    const springY = useSpring(mouseY, { damping: 30, stiffness: 120 });

    // Detect mobile
    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 1024);
        check();
        window.addEventListener('resize', check);
        return () => window.removeEventListener('resize', check);
    }, []);

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        mouseX.set((clientX - window.innerWidth / 2) * 0.03);
        mouseY.set((clientY - window.innerHeight / 2) * 0.03);
        mouse.current = {
            x: (clientX / window.innerWidth) * 2 - 1,
            y: -((clientY / window.innerHeight) * 2 - 1),
        };
    };

    // GSAP heading char animation
    useEffect(() => {
        if (!headingRef.current) return;
        const chars = headingRef.current.querySelectorAll('.char');
        if (!chars.length) return;
        gsap.fromTo(
            chars,
            { y: 80, opacity: 0, rotateX: -40 },
            {
                y: 0,
                opacity: 1,
                rotateX: 0,
                duration: 0.9,
                stagger: 0.025,
                ease: 'power3.out',
                delay: 0.4,
            }
        );
    }, []);

    // Split name into animated chars
    const firstName = 'Shivam';
    const lastName = 'Srivastava';

    return (
        <section
            id="about"
            ref={sectionRef}
            onMouseMove={handleMouseMove}
            className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black"
            style={{ paddingTop: '4rem' }}
        >
            {/* ── Ambient background blobs ── */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <motion.div
                    className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
                    animate={{ opacity: [0.12, 0.18, 0.12] }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                    style={{
                        background: 'radial-gradient(circle, rgba(59,130,246,0.25) 0%, transparent 70%)',
                        filter: 'blur(60px)',
                        x: springX,
                        y: springY,
                    }}
                />
                <motion.div
                    className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
                    animate={{ opacity: [0.1, 0.16, 0.1] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                    style={{
                        background: 'radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%)',
                        filter: 'blur(60px)',
                        x: useTransform(springX, (v) => v * -1.4),
                        y: useTransform(springY, (v) => v * -1.4),
                    }}
                />
            </div>

            {/* ── Grid overlay ── */}
            <div
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(rgba(59,130,246,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.04) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                    maskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black 60%, transparent 100%)',
                }}
            />

            {/* ── Three.js 3D Scene (desktop, right side) ── */}
            {!isMobile && (
                <div
                    className="absolute right-0 top-0 h-full pointer-events-none z-1"
                    style={{ width: '50%' }}
                >
                    <Suspense fallback={null}>
                        <FloatingScene mouse={mouse} />
                    </Suspense>
                    {/* Right gradient fade so text stays readable */}
                    <div
                        className="absolute inset-y-0 left-0 w-1/2 pointer-events-none"
                        style={{ background: 'linear-gradient(to right, #000 0%, transparent 100%)' }}
                    />
                </div>
            )}

            {/* ── Main content ── */}
            <motion.div
                style={{ opacity }}
                className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:items-center gap-12 lg:gap-0"
            >
                {/* Left / center column */}
                <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">

                    {/* Profile flip card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="mb-8 mt-12 lg:mt-0"
                    >
                        <div
                            className="relative w-28 h-28 cursor-pointer perspective-1000 mx-auto lg:mx-0"
                            style={{ perspective: '1000px' }}
                            onClick={() => setIsFlipped((f) => !f)}
                            title="Click to flip"
                        >
                            <motion.div
                                initial={false}
                                animate={{ rotateY: isFlipped ? 180 : 0 }}
                                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                                className="w-full h-full relative transform-style-3d"
                            >
                                {/* Front — photo */}
                                <div
                                    className="absolute inset-0 rounded-full overflow-hidden backface-hidden ring-2 ring-blue-500/30 shadow-2xl"
                                    style={{ backfaceVisibility: 'hidden', boxShadow: '0 0 40px rgba(59,130,246,0.2)' }}
                                >
                                    <img src={profileImg} alt="Shivam Srivastava" className="w-full h-full object-cover" />
                                </div>
                                {/* Back — LinkedIn */}
                                <div
                                    className="absolute inset-0 rounded-full backface-hidden flex flex-col items-center justify-center p-2 text-center"
                                    style={{
                                        transform: 'rotateY(180deg)',
                                        backfaceVisibility: 'hidden',
                                        background: 'linear-gradient(135deg, #0f172a, #1e1b4b)',
                                        border: '2px solid rgba(99,102,241,0.5)',
                                    }}
                                >
                                    <p className="text-white text-[9px] font-bold mb-1 leading-tight">Shivam Srivastava</p>
                                    <a
                                        href="https://www.linkedin.com/in/shivam-srivastavaa123/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[8px] text-blue-400 hover:text-blue-300 underline leading-tight"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        LinkedIn →
                                    </a>
                                </div>
                            </motion.div>
                            {/* Outer glow ring */}
                            <div
                                className="absolute -inset-1 rounded-full pointer-events-none"
                                style={{
                                    background: 'conic-gradient(from 0deg, #3b82f6, #8b5cf6, #06b6d4, #3b82f6)',
                                    opacity: 0.25,
                                    filter: 'blur(4px)',
                                    animation: 'spin 6s linear infinite',
                                }}
                            />
                        </div>
                    </motion.div>

                    {/* Status badges */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15, duration: 0.6 }}
                        className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-6"
                    >
                        <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full text-xs font-semibold"
                            style={{ background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.25)', color: '#93c5fd' }}>
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                            Backend-focused Full-Stack Dev
                        </span>
                        <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full text-xs font-semibold"
                            style={{ background: 'rgba(139,92,246,0.08)', border: '1px solid rgba(139,92,246,0.22)', color: '#c4b5fd' }}>
                            Open to Opportunities
                        </span>
                    </motion.div>

                    {/* Main heading — GSAP character animation */}
                    <div
                        ref={headingRef}
                        className="mb-6 overflow-hidden"
                        style={{ perspective: '800px' }}
                    >
                        <p className="text-gray-500 text-base sm:text-lg font-medium mb-2 tracking-wide"
                            style={{ animation: 'fade-in 0.6s ease 0.3s both' }}>
                            Hi, I'm
                        </p>
                        {/* First name */}
                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none mb-0">
                            <span className="block">
                                {firstName.split('').map((char, i) => (
                                    <span
                                        key={`fn-${i}`}
                                        className="char inline-block"
                                        style={{
                                            display: 'inline-block',
                                            opacity: 0,
                                            background: 'linear-gradient(135deg, #ffffff, #d4d4d8)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                            backgroundClip: 'text',
                                        }}
                                    >
                                        {char}
                                    </span>
                                ))}
                            </span>
                            {/* Last name */}
                            <span className="block">
                                {lastName.split('').map((char, i) => (
                                    <span
                                        key={`ln-${i}`}
                                        className="char inline-block"
                                        style={{
                                            display: 'inline-block',
                                            opacity: 0,
                                            background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                            backgroundClip: 'text',
                                        }}
                                    >
                                        {char}
                                    </span>
                                ))}
                            </span>
                        </h1>
                    </div>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.7 }}
                        className="text-gray-400 text-base sm:text-lg max-w-xl mb-10 leading-relaxed"
                    >
                        Full-Stack Developer with{' '}
                        <span className="text-white font-semibold">1.6+ years</span> of experience building
                        scalable, secure applications using{' '}
                        <span className="text-blue-400 font-medium">Node.js, React, MongoDB, AWS</span>
                        , and real-time systems.
                    </motion.p>

                    {/* CTA buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.0, duration: 0.6 }}
                        className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-14"
                    >
                        <a
                            href="#projects"
                            className="group relative px-8 py-3.5 rounded-full font-semibold text-white overflow-hidden flex items-center gap-2 transition-all hover:scale-105"
                            style={{
                                background: 'linear-gradient(135deg, #3b82f6, #6d28d9)',
                                boxShadow: '0 0 30px rgba(59,130,246,0.25)',
                            }}
                        >
                            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300 rounded-full" />
                            <span className="relative z-10">Explore Projects</span>
                            <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3.5 rounded-full font-medium text-gray-300 hover:text-white transition-all hover:scale-105"
                            style={{
                                background: 'rgba(255,255,255,0.04)',
                                border: '1px solid rgba(255,255,255,0.1)',
                            }}
                        >
                            Contact Me
                        </a>
                    </motion.div>

                    {/* Stats row */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.15, duration: 0.6 }}
                        className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-lg lg:max-w-none mb-16"
                    >
                        {STATS.map((stat, i) => (
                            <div
                                key={stat.label}
                                className="text-center lg:text-left p-3 rounded-xl"
                                style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}
                            >
                                <div className="text-2xl font-black" style={{ color: stat.color }}>{stat.value}</div>
                                <div className="text-xs text-gray-500 mt-0.5 leading-tight">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Right column — placeholder space for the 3D scene on desktop */}
                {!isMobile && <div className="hidden lg:block flex-1" />}
            </motion.div>

            {/* ── Mobile 3D scene (below content) ── */}
            {isMobile && (
                <div className="w-full h-72 relative z-5 -mt-4">
                    <Suspense fallback={null}>
                        <FloatingScene mouse={mouse} />
                    </Suspense>
                </div>
            )}

            {/* ── Tech stack chips ── */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3, duration: 0.8 }}
                className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10"
            >
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                    {TECH.map((item, idx) => (
                        <motion.div
                            key={item.label}
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.4 + idx * 0.07, duration: 0.5 }}
                            whileHover={{ y: -4, scale: 1.03 }}
                            className="flex flex-col items-center gap-2 p-3 rounded-2xl cursor-default transition-all"
                            style={{ background: item.bg, border: `1px solid ${item.border}` }}
                        >
                            <item.icon className={`w-5 h-5 ${item.color}`} />
                            <span className="text-xs font-medium text-gray-300 text-center leading-tight">{item.label}</span>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* ── Scroll indicator ── */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
            >
                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                >
                    <ArrowDown className="w-4 h-4 text-gray-600" />
                </motion.div>
                <div className="h-12 w-px" style={{ background: 'linear-gradient(to bottom, rgba(100,116,139,0.6), transparent)' }} />
            </motion.div>
        </section>
    );
};

export default Hero;
