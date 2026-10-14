import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Code2, Server, Database, Layout, Terminal, CreditCard, Cpu } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* ─── Animated Counter ───────────────────────────────────────────── */
const statsData = [
    { value: 4,   suffix: '+', label: 'Years of Learning',       color: '#60a5fa', glow: 'rgba(96,165,250,',   icon: '🧠' },
    { value: 50,  suffix: '+', label: 'Personal Projects',        color: '#34d399', glow: 'rgba(52,211,153,',   icon: '🚀' },
    { value: 30,  suffix: '+', label: 'Technologies Learned',     color: '#f472b6', glow: 'rgba(244,114,182,', icon: '⚡' },
    { value: 500, suffix: '+', label: 'DSA Problems Solved',      color: '#a78bfa', glow: 'rgba(167,139,250,', icon: '🏆' },
];

function useCountUp(target, duration = 1800) {
    const [count, setCount] = useState(0);
    const rafRef = useRef(null);

    const start = () => {
        const startTime = performance.now();
        const animate = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) rafRef.current = requestAnimationFrame(animate);
            else setCount(target);
        };
        rafRef.current = requestAnimationFrame(animate);
    };

    useEffect(() => () => rafRef.current && cancelAnimationFrame(rafRef.current), []);

    return [count, start];
}

const StatCard = ({ value, suffix, label, index, color, glow }) => {
    const [count, startCount] = useCountUp(value, value > 100 ? 2200 : 1800);
    const cardRef = useRef(null);
    const started = useRef(false);
    const spotRef = useRef(null);

    // Intersection observer — start counter
    useEffect(() => {
        const el = cardRef.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started.current) {
                    started.current = true;
                    startCount();
                }
            },
            { threshold: 0.3 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [startCount]);

    // 3D tilt + subtle spotlight
    const handleMouseMove = (e) => {
        const card = cardRef.current;
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const cx = rect.width / 2;
        const cy = rect.height / 2;
        const rotX = ((y - cy) / cy) * -8;
        const rotY = ((x - cx) / cx) * 8;
        card.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.03,1.03,1.03)`;
        if (spotRef.current) {
            spotRef.current.style.background = `radial-gradient(140px circle at ${x}px ${y}px, ${glow}0.1) 0%, transparent 70%)`;
        }
    };
    const handleMouseLeave = () => {
        const card = cardRef.current;
        if (!card) return;
        card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)';
        if (spotRef.current) spotRef.current.style.background = 'none';
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformStyle: 'preserve-3d', perspective: '800px' }}
        >
            <div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    position: 'relative',
                    padding: '1.5px',
                    borderRadius: '16px',
                    background: `linear-gradient(135deg, ${glow}0.35) 0%, rgba(255,255,255,0.04) 50%, ${glow}0.2) 100%)`,
                    boxShadow: `0 8px 32px ${glow}0.08), 0 2px 8px rgba(0,0,0,0.4)`,
                    transition: 'transform 0.15s ease, box-shadow 0.3s ease',
                    willChange: 'transform',
                    cursor: 'default',
                }}
            >
                {/* Inner card */}
                <div
                    style={{
                        borderRadius: '15px',
                        overflow: 'hidden',
                        background: 'rgba(10,10,18,0.96)',
                        padding: '20px 20px 18px',
                        position: 'relative',
                    }}
                >
                    {/* Subtle spotlight on hover */}
                    <div ref={spotRef} style={{ position: 'absolute', inset: 0, pointerEvents: 'none', transition: 'background 0.06s', borderRadius: '15px' }} />

                    {/* Faint corner glow */}
                    <div style={{
                        position: 'absolute', top: '-20px', right: '-20px',
                        width: '80px', height: '80px', borderRadius: '50%',
                        background: `radial-gradient(circle, ${glow}0.12) 0%, transparent 70%)`,
                        filter: 'blur(16px)', pointerEvents: 'none',
                    }} />

                    {/* Top accent line */}
                    <div style={{
                        position: 'absolute', top: 0, left: '15%', right: '15%',
                        height: '1px',
                        background: `linear-gradient(90deg, transparent, ${color}80, transparent)`,
                    }} />

                    {/* Number */}
                    <div style={{ position: 'relative', display: 'inline-block', marginBottom: '8px' }}>
                        {/* Depth shadow */}
                        <span style={{
                            position: 'absolute', top: '2px', left: '2px',
                            fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
                            fontWeight: 900,
                            color: `${glow}0.2)`,
                            letterSpacing: '-0.03em',
                            userSelect: 'none',
                            filter: 'blur(4px)',
                        }}>{count}{suffix}</span>
                        {/* Main number */}
                        <span style={{
                            fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
                            fontWeight: 900,
                            letterSpacing: '-0.03em',
                            lineHeight: 1,
                            background: `linear-gradient(150deg, #f1f5f9 0%, ${color} 60%)`,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            display: 'block',
                            position: 'relative',
                            filter: `drop-shadow(0 0 8px ${glow}0.35))`,
                        }}>{count}{suffix}</span>
                    </div>

                    {/* Label */}
                    <p style={{
                        fontSize: '0.72rem',
                        fontWeight: 500,
                        color: '#475569',
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        margin: 0,
                    }}>{label}</p>
                </div>
            </div>
        </motion.div>
    );
};

const skillsData = [
    {
        category: 'Programming Languages',
        icon: Code2,
        color: '#60a5fa',
        bg: 'rgba(59,130,246,0.07)',
        border: 'rgba(59,130,246,0.18)',
        skills: ['JavaScript', 'TypeScript', 'Python', 'C'],
    },
    {
        category: 'Backend Architecture',
        icon: Server,
        color: '#34d399',
        bg: 'rgba(52,211,153,0.07)',
        border: 'rgba(52,211,153,0.18)',
        skills: ['Node.js', 'Express.js', 'REST API Development', 'AWS', 'File Handling', 'Google Authenticator', 'JWT Auth', 'WebSockets'],
    },
    {
        category: 'Database & Storage',
        icon: Database,
        color: '#fbbf24',
        bg: 'rgba(251,191,36,0.07)',
        border: 'rgba(251,191,36,0.18)',
        skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Database Design', 'Database Indexing'],
    },
    {
        category: 'Frontend Development',
        icon: Layout,
        color: '#22d3ee',
        bg: 'rgba(34,211,238,0.07)',
        border: 'rgba(34,211,238,0.18)',
        skills: ['React', 'Tailwind CSS', 'Redux Toolkit', 'ShadcnUI', 'HTML', 'CSS'],
    },
    {
        category: 'Tools & DevOps',
        icon: Terminal,
        color: '#a78bfa',
        bg: 'rgba(167,139,250,0.07)',
        border: 'rgba(167,139,250,0.18)',
        skills: ['Git', 'GitHub', 'Docker', 'Redis', 'Postman', 'Render', 'Vercel', 'VS Code', 'GitHub Copilot'],
    },
    {
        category: 'Payment & Communication',
        icon: CreditCard,
        color: '#f472b6',
        bg: 'rgba(244,114,182,0.07)',
        border: 'rgba(244,114,182,0.18)',
        skills: ['Razorpay', 'Stripe', 'Apple IAP', 'MSG91', 'Twilio'],
    },
    {
        category: 'Core Concepts',
        icon: Cpu,
        color: '#818cf8',
        bg: 'rgba(129,140,248,0.07)',
        border: 'rgba(129,140,248,0.18)',
        skills: ['Data Structures & Algorithms', 'DBMS', 'OOPs', 'SDLC', 'OAuth 2.0', 'Firebase Cloud Messaging (FCM)'],
    },
];

/* ─── Skill Card ─────────────────────────────────────────────────── */
const SkillCard = ({ data, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ delay: index * 0.07, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="group flex flex-col p-6 rounded-2xl transition-all duration-300"
        style={{
            background: data.bg,
            border: `1px solid ${data.border}`,
            boxShadow: `0 0 0 0 ${data.color}`,
        }}
        whileHover={{
            y: -6,
            boxShadow: `0 8px 32px ${data.color}18`,
            borderColor: `${data.color}40`,
            transition: { duration: 0.25 }
        }}
    >
        {/* Header */}
        <div className="flex items-center gap-3 mb-5">
            <div
                className="p-2.5 rounded-xl transition-all duration-300 group-hover:scale-110"
                style={{ background: `${data.color}15`, border: `1px solid ${data.color}30` }}
            >
                <data.icon className="w-5 h-5" style={{ color: data.color }} />
            </div>
            <h3 className="text-base font-bold text-white group-hover:text-white transition-colors leading-tight">
                {data.category}
            </h3>
        </div>

        {/* Skills chips */}
        <div className="flex flex-wrap gap-2">
            {data.skills.map((skill) => (
                <span
                    key={skill}
                    className="px-2.5 py-1 rounded-lg text-xs font-medium transition-all duration-200 cursor-default"
                    style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        color: '#94a3b8',
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#fff';
                        e.currentTarget.style.borderColor = `${data.color}40`;
                        e.currentTarget.style.background = `${data.color}12`;
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#94a3b8';
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                        e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                    }}
                >
                    {skill}
                </span>
            ))}
        </div>
    </motion.div>
);

/* ─── Section Component ──────────────────────────────────────────── */
const Skills = () => {
    return (
        <section id="skills" className="pt-12 pb-20 md:py-28 relative overflow-hidden" style={{ background: '#050508' }}>
            {/* Ambient glows */}
            <div className="absolute -top-40 left-1/3 w-96 h-96 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)', filter: 'blur(60px)' }} />
            <div className="absolute -bottom-40 right-1/3 w-96 h-96 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(52,211,153,0.06) 0%, transparent 70%)', filter: 'blur(60px)' }} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* ── Animated Stats Row ── */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
                    {statsData.map((stat, i) => (
                        <StatCard key={stat.label} {...stat} index={i} />
                    ))}
                </div>

                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-16"
                >
                    <div className="section-tag mb-5">
                        Technical Expertise
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black mb-4 heading-premium text-ice">
                        Skills & Capabilities
                    </h2>
                    <p className="text-subtle max-w-2xl mx-auto text-base leading-relaxed">
                        A battle-tested stack for building secure, scalable, high-performance full-stack
                        applications and microservices.
                    </p>
                </motion.div>

                {/* Cards grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {skillsData.map((category, index) => (
                        <SkillCard key={category.category} data={category} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
