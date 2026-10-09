import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Database, Layout, Terminal, CreditCard, Cpu } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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
        <section id="skills" className="py-28 relative overflow-hidden" style={{ background: '#050508' }}>
            {/* Ambient glows */}
            <div className="absolute -top-40 left-1/3 w-96 h-96 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)', filter: 'blur(60px)' }} />
            <div className="absolute -bottom-40 right-1/3 w-96 h-96 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(52,211,153,0.06) 0%, transparent 70%)', filter: 'blur(60px)' }} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

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
                    <h2 className="text-3xl md:text-5xl font-black mb-4">
                        <span style={{
                            background: 'linear-gradient(135deg, #60a5fa, #34d399)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}>
                            Skills & Capabilities
                        </span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-base leading-relaxed">
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
