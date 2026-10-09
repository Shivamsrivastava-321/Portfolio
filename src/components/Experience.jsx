import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Network, Briefcase, Server, MapPin, Calendar, ChevronRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
    {
        role: 'MERN Stack Developer',
        company: 'Softkingo Technology Pvt. Ltd.',
        location: 'Noida-63',
        period: 'Feb 2026 — Sep 2026',
        badge: 'Latest',
        badgeColor: '#60a5fa',
        description: [
            {
                title: 'Full-Stack Delivery',
                detail: 'Delivered 3 full-stack applications using MongoDB, Express.js, React.js, and Node.js, taking responsibility for backend API development, database integration, frontend integration, and application functionality.',
            },
            {
                title: 'API & Third-Party Integrations',
                detail: 'Designed and implemented RESTful APIs and integrated multiple third-party services including Twilio, MSG91, Google Authenticator, and external APIs with authentication, OTP workflows, and secure integrations.',
            },
            {
                title: 'AWS & Cloud Development',
                detail: 'Gained hands-on experience with AWS and cloud-based application deployment, working with cloud infrastructure and deployment workflows to build scalable, production-ready applications.',
            },
        ],
        icon: Server,
        accentColor: '#3b82f6',
    },
    {
        role: 'Junior-Associate Developer',
        company: 'Xapotech Systems Pvt. Ltd.',
        location: 'Noida-16',
        period: 'Apr 2025 — Feb 2026',
        description: [
            {
                title: 'Backend Architecture & APIs',
                detail: 'Engineered and maintained scalable RESTful APIs using Node.js and Express.js across 5+ live projects, implementing OAuth 2.0, RBAC, authentication, subscription workflows, and secure data access for production applications.',
            },
            {
                title: 'Scalability & Reliability',
                detail: 'Implemented API rate limiting and load balancing to handle concurrent requests and improve application stability, while using Docker for containerized deployment and environment consistency.',
            },
            {
                title: 'Real-Time Notifications',
                detail: 'Implemented Firebase Cloud Messaging (FCM) token-based push notifications and integrated backend services with external platforms to support real-time communication and automated workflows.',
            },
        ],
        icon: Briefcase,
        accentColor: '#8b5cf6',
    },
    {
        role: 'Full-Stack Developer Trainee',
        company: 'Croma Campus Pvt. Ltd.',
        location: 'Noida',
        period: 'Jul 2024 — Dec 2024',
        description: [
            {
                title: 'MERN Stack Foundations',
                detail: 'Focused on MERN stack (MongoDB, Express, React, Node.js), building full-stack web applications with responsive UIs and robust REST APIs.',
            },
            {
                title: 'Backend & Data Analysis',
                detail: 'Gained hands-on experience in Python backend development, relational database integration, and data processing workflows.',
            },
        ],
        icon: Network,
        accentColor: '#06b6d4',
    },
];

/* ─── Single Experience Card ─────────────────────────────────────── */
const ExperienceCard = ({ exp, index }) => {
    const Icon = exp.icon;
    return (
        <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: index * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative pl-10 md:pl-12"
        >
            {/* Timeline dot */}
            <div
                className="absolute left-0 top-0 w-5 h-5 rounded-full flex items-center justify-center"
                style={{
                    background: exp.accentColor,
                    boxShadow: `0 0 16px ${exp.accentColor}60, 0 0 32px ${exp.accentColor}20`,
                    zIndex: 1,
                }}
            >
                <div className="w-2 h-2 rounded-full bg-black" />
            </div>

            {/* Card */}
            <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="p-6 md:p-8 rounded-2xl transition-all duration-300 group"
                style={{
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.06)',
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${exp.accentColor}35`;
                    e.currentTarget.style.background = 'rgba(255,255,255,0.035)';
                    e.currentTarget.style.boxShadow = `0 20px 60px ${exp.accentColor}10`;
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                    e.currentTarget.style.boxShadow = 'none';
                }}
            >
                {/* Header row */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                    <div>
                        <div className="flex items-center gap-3 flex-wrap mb-2">
                            <div
                                className="p-1.5 rounded-lg"
                                style={{ background: `${exp.accentColor}12`, border: `1px solid ${exp.accentColor}25` }}
                            >
                                <Icon className="w-4 h-4" style={{ color: exp.accentColor }} />
                            </div>
                            <h3 className="text-lg md:text-xl font-bold text-white">{exp.role}</h3>
                            {exp.badge && (
                                <span
                                    className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide"
                                    style={{
                                        background: `${exp.badgeColor}15`,
                                        border: `1px solid ${exp.badgeColor}30`,
                                        color: exp.badgeColor,
                                    }}
                                >
                                    {exp.badge}
                                </span>
                            )}
                        </div>
                        <div className="flex items-center gap-3 flex-wrap">
                            <span className="font-semibold text-sm" style={{ color: exp.accentColor }}>{exp.company}</span>
                            <span className="text-gray-700">·</span>
                            <span className="text-gray-500 text-sm flex items-center gap-1">
                                <MapPin className="w-3 h-3" />
                                {exp.location}
                            </span>
                        </div>
                    </div>
                    <span
                        className="text-xs font-medium px-3 py-1.5 rounded-full shrink-0 flex items-center gap-1.5 self-start"
                        style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#64748b' }}
                    >
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                    </span>
                </div>

                {/* Description points */}
                <ul className="space-y-3.5">
                    {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm leading-relaxed">
                            <ChevronRight
                                className="w-3.5 h-3.5 mt-1 shrink-0"
                                style={{ color: exp.accentColor }}
                            />
                            <span>
                                <span className="text-white font-semibold">{item.title}: </span>
                                <span className="text-gray-400">{item.detail}</span>
                            </span>
                        </li>
                    ))}
                </ul>
            </motion.div>
        </motion.div>
    );
};

/* ─── Section ────────────────────────────────────────────────────── */
const Experience = () => {
    return (
        <section id="experience" className="py-28 relative overflow-hidden" style={{ background: '#000' }}>
            {/* Ambient glows */}
            <div className="absolute top-1/4 -right-40 w-96 h-96 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)', filter: 'blur(60px)' }} />
            <div className="absolute bottom-1/4 -left-40 w-96 h-96 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)', filter: 'blur(60px)' }} />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5"
                        style={{ background: 'rgba(139,92,246,0.08)', border: '1px solid rgba(139,92,246,0.2)', color: '#a78bfa' }}>
                        1.6+ Years Industry Experience
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black mb-4">
                        <span style={{
                            background: 'linear-gradient(135deg, #a78bfa, #f472b6, #60a5fa)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}>
                            Professional Experience
                        </span>
                    </h2>
                    <p className="text-gray-500 max-w-lg mx-auto text-base leading-relaxed">
                        Track record of architecting scalable backend APIs, cloud deployments, and production MERN applications.
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line */}
                    <div
                        className="absolute left-[9px] top-3 bottom-3 w-px"
                        style={{ background: 'linear-gradient(to bottom, #3b82f6, #8b5cf6, #06b6d4, transparent)' }}
                    />
                    <div className="space-y-14">
                        {experiences.map((exp, index) => (
                            <ExperienceCard key={index} exp={exp} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
