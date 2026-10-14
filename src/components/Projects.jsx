import React, { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { ExternalLink, Github, Server, Database, Layout, Zap, ShoppingBag, Briefcase } from 'lucide-react';

// Project screenshots
import imgGoingOut   from '../assets/GoingOutCo_ Discover the Night.png';
import imgEzydash    from '../assets/EzyDash Campus Life, Simplified.png';
import imgHrms       from '../assets/HRMS Lite Futuristic Dashboard Showcase.png';
import imgEcommerce  from '../assets/ecommerce_project_3d (1).png';
import imgJob        from '../assets/job_portal_project_3d.png';
import imgHotel      from '../assets/hotel_booking_project_3d.png';

const projects = [
    {
        title: 'Going-OutCO',
        period: 'Jun 2026 — Sep 2026',
        badge: 'Production · 10k+ Users',
        badgeBg: 'rgba(59,130,246,0.15)',
        badgeBorder: 'rgba(59,130,246,0.3)',
        badgeColor: '#93c5fd',
        description:
            'Scalable full-stack application built with Node.js, Express.js, React, and AWS, featuring secure authentication, subscription and payment workflows, Redis caching, database optimization, rate limiting, and WebSockets. Integrated Razorpay, Apple IAP, FCM, and MSG91 for 10,000+ users.',
        tech: ['Node.js', 'Express.js', 'React', 'AWS', 'Redis', 'WebSockets', 'Razorpay', 'Apple IAP', 'FCM', 'MSG91'],
        link: 'https://play.google.com/store/apps/details?id=com.goingOutCo.GoingOut&hl=en_IN',
        github: 'https://github.com/Shivamsrivastava-321',
        gradient: 'linear-gradient(135deg, #1e3a8a 0%, #4c1d95 100%)',
        accentColor: '#60a5fa',
        icon: Zap,
        image: imgGoingOut,
    },
    {
        title: 'Ezydash',
        period: 'Jan 2026 — Jul 2026',
        badge: 'Full-Stack · High Concurrency',
        badgeBg: 'rgba(16,185,129,0.12)',
        badgeBorder: 'rgba(16,185,129,0.3)',
        badgeColor: '#6ee7b7',
        description:
            'Full-stack MERN application with MySQL for managing events, properties, users, carts, transactions, and location-based services. Implemented Stripe payments, Google OAuth 2.0, Twilio OTP, FCM notifications, WebSockets, Redis, and AWS Load Balancer.',
        tech: ['MERN Stack', 'MySQL', 'Redis', 'Stripe', 'Google OAuth', 'Twilio OTP', 'FCM', 'WebSockets', 'AWS ALB'],
        link: 'https://play.google.com/store/apps/details?id=com.ezydash&hl=en_IN',
        github: 'https://github.com/Shivamsrivastava-321',
        gradient: 'linear-gradient(135deg, #064e3b 0%, #0c4a6e 100%)',
        accentColor: '#34d399',
        icon: Server,
        image: imgEzydash,
    },
    {
        title: 'HRMS Lite',
        period: 'Sep 2025 — Dec 2025',
        badge: 'Full-Stack Admin',
        badgeBg: 'rgba(99,102,241,0.12)',
        badgeBorder: 'rgba(99,102,241,0.3)',
        badgeColor: '#a5b4fc',
        description:
            'Lightweight Human Resource Management System. Allows admin to manage employee records, role permissions, and track daily attendance with real-time updates and a clean, responsive UI.',
        tech: ['React', 'Django REST', 'MongoDB', 'Tailwind', 'Vercel'],
        link: 'https://hrms-lite-ecru.vercel.app/',
        github: 'https://github.com/Shivamsrivastava-321/hrms-lite',
        gradient: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)',
        accentColor: '#818cf8',
        icon: Layout,
        image: imgHrms,
    },
    {
        title: 'E-Commerce Platform',
        period: 'Jul 2025 — Aug 2025',
        badge: 'MERN · Stripe',
        badgeBg: 'rgba(236,72,153,0.12)',
        badgeBorder: 'rgba(236,72,153,0.3)',
        badgeColor: '#f9a8d4',
        description:
            'Full-stack e-commerce solution featuring cart management, Stripe secure payment processing, Redis caching, and real-time order tracking built for performance.',
        tech: ['MERN Stack', 'Redux', 'Stripe', 'Redis'],
        link: 'https://mern-e-commerce-n7b9.onrender.com',
        github: 'https://github.com/juniorcoderr/MERN-E-Commerce.git',
        gradient: 'linear-gradient(135deg, #4c0519 0%, #831843 100%)',
        accentColor: '#f472b6',
        icon: ShoppingBag,
        image: imgEcommerce,
    },
    {
        title: 'Job Portal',
        period: 'Jan 2025 — Jul 2025',
        badge: 'MERN Portal',
        badgeBg: 'rgba(251,146,60,0.12)',
        badgeBorder: 'rgba(251,146,60,0.3)',
        badgeColor: '#fdba74',
        description:
            'Comprehensive job interface connecting job seekers and employers. Features job application tracking, resume parsing, Cloudinary asset storage, and notifications.',
        tech: ['MERN Stack', 'Tailwind', 'Cloudinary', 'Multer'],
        link: 'https://job-website-1-98l2.onrender.com',
        github: 'https://github.com/Shivamsrivastava-321/job-website',
        gradient: 'linear-gradient(135deg, #431407 0%, #7c2d12 100%)',
        accentColor: '#fb923c',
        icon: Briefcase,
        image: imgJob,
    },
    {
        title: 'Hotel Booking System',
        period: 'Sep 2024 — Dec 2024',
        badge: 'REST Architecture',
        badgeBg: 'rgba(20,184,166,0.12)',
        badgeBorder: 'rgba(20,184,166,0.3)',
        badgeColor: '#5eead4',
        description:
            'Robust booking platform allowing users to search, view, and book accommodations. Optimized backend ensuring high availability, concurrency handling, and data consistency.',
        tech: ['Node.js', 'Express', 'MongoDB', 'REST API'],
        link: 'https://mern-booking-app-bjkk.onrender.com',
        github: 'https://github.com/Shivamsrivastava-321',
        gradient: 'linear-gradient(135deg, #022c22 0%, #134e4a 100%)',
        accentColor: '#2dd4bf',
        icon: Database,
        image: imgHotel,
    },
];

/* ─── 3D Tilt Project Card ───────────────────────────────────────── */
const ProjectCard = ({ project, index }) => {
    const cardRef = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const xSpring = useSpring(x, { stiffness: 300, damping: 30 });
    const ySpring = useSpring(y, { stiffness: 300, damping: 30 });
    const transform = useMotionTemplate`perspective(900px) rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

    const Icon = project.icon;

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const hw = rect.width / 2;
        const hh = rect.height / 2;
        const rY = ((e.clientX - rect.left - hw) / hw) * 8;
        const rX = -((e.clientY - rect.top - hh) / hh) * 8;
        x.set(rX);
        y.set(rY);
    };

    const handleMouseLeave = () => { x.set(0); y.set(0); };

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: index * 0.09, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            onMouseMove={handleMouseMove}
            onMouseLeave={(e) => {
                handleMouseLeave();
                e.currentTarget.style.boxShadow = 'none';
            }}
            style={{ transform, transformStyle: 'preserve-3d' }}
            className="group relative flex flex-col rounded-2xl overflow-hidden transition-shadow duration-300"
            onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 24px 64px ${project.accentColor}18`;
            }}
        >
            {/* Card border */}
            <div
                className="absolute inset-0 rounded-2xl pointer-events-none z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ border: `1px solid ${project.accentColor}35` }}
            />
            <div
                className="absolute inset-0 rounded-2xl pointer-events-none z-10"
                style={{ border: '1px solid rgba(255,255,255,0.06)' }}
            />

            {/* Visual header — project screenshot */}
            <div
                className="relative h-48 overflow-hidden"
                style={{ background: 'rgba(6,6,14,1)' }}
            >
                {project.image ? (
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        style={{ opacity: 0.88 }}
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center" style={{ background: project.gradient }}>
                        <Icon className="w-10 h-10 text-white/80" />
                    </div>
                )}

                {/* Gradient scrim — bottom fade into card body */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: 'linear-gradient(to bottom, rgba(0,0,0,0.08) 0%, rgba(8,8,18,0.72) 85%, rgba(8,8,18,1) 100%)',
                    }}
                />

                {/* Accent color tint on hover */}
                <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                    style={{ background: project.gradient }}
                />

                {/* Badge */}
                <div
                    className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide"
                    style={{
                        background: project.badgeBg,
                        border: `1px solid ${project.badgeBorder}`,
                        color: project.badgeColor,
                        backdropFilter: 'blur(10px)',
                    }}
                >
                    {project.badge}
                </div>
            </div>

            {/* Body */}
            <div
                className="flex flex-col flex-1 p-6"
                style={{
                    background: 'rgba(8,8,18,0.95)',
                    transform: 'translateZ(0)',
                }}
            >
                {/* Title row */}
                <div className="flex items-start justify-between gap-3 mb-3" style={{ transform: 'translateZ(20px)' }}>
                    <div>
                        <h3 className="text-lg font-bold text-white group-hover:text-white transition-colors mb-0.5" style={{ color: '#f8fafc' }}>
                            {project.title}
                        </h3>
                        <p className="text-xs text-gray-600">{project.period}</p>
                    </div>
                    <div className="flex gap-1.5 shrink-0">
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg text-gray-500 hover:text-white transition-all hover:scale-110"
                                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                                title="Source code"
                                aria-label={`${project.title} source code`}
                            >
                                <Github size={15} />
                            </a>
                        )}
                        {project.link && (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg text-gray-500 hover:text-white transition-all hover:scale-110"
                                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                                title="Live project"
                                aria-label={`${project.title} live`}
                                onMouseEnter={(e) => { e.currentTarget.style.background = `${project.accentColor}15`; e.currentTarget.style.color = project.accentColor; }}
                                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = ''; }}
                            >
                                <ExternalLink size={15} />
                            </a>
                        )}
                    </div>
                </div>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1" style={{ transform: 'translateZ(10px)' }}>
                    {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', transform: 'translateZ(15px)' }}>
                    {project.tech.map((t) => (
                        <span
                            key={t}
                            className="text-[11px] px-2 py-0.5 rounded-md font-medium"
                            style={{
                                background: `${project.accentColor}0f`,
                                border: `1px solid ${project.accentColor}20`,
                                color: project.accentColor,
                            }}
                        >
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

/* ─── Section ────────────────────────────────────────────────────── */
const Projects = () => {
    return (
        <section id="projects" className="py-28 relative overflow-hidden" style={{ background: '#030308' }}>
            {/* Background glows */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)', filter: 'blur(80px)' }} />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)', filter: 'blur(80px)' }} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5"
                        style={{ background: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.18)', color: '#60a5fa' }}>
                        Production Applications & Real-time Systems
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black mb-4">
                        <span style={{
                            background: 'linear-gradient(135deg, #60a5fa, #a78bfa, #f472b6)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}>
                            Featured Projects
                        </span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-base leading-relaxed">
                        High-performance full-stack applications showcasing scalable backend architectures,
                        real-time messaging, Redis caching, and payment workflows.
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.title} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
