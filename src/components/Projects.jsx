import React, { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { ExternalLink, Github, Server, Database, Layout, Zap, ShoppingBag, Briefcase, ShieldCheck } from 'lucide-react';

const projects = [
    {
        title: "Going-OutCO",
        period: "June 2026 - September 2026",
        badge: "Production • 10k+ Users",
        description: "A scalable full-stack application built with Node.js, Express.js, React, and AWS, featuring secure authentication, subscription and payment workflows, Redis caching, database optimization, rate limiting, and WebSockets. Integrated Razorpay, Apple IAP, FCM, and MSG91 to support secure transactions, real-time updates, push notifications, and OTP communication for 10,000+ users.",
        tech: ["Node.js", "Express.js", "React", "AWS", "Redis", "WebSockets", "Razorpay", "Apple IAP", "FCM", "MSG91"],
        link: "https://github.com/Shivamsrivastava-321",
        github: "https://github.com/Shivamsrivastava-321",
        color: "from-blue-600 via-indigo-600 to-cyan-500",
        icon: Zap
    },
    {
        title: "Ezydash",
        period: "January 2026 - July 2026",
        badge: "Full-Stack • High Concurrency",
        description: "A full-stack MERN application with MySQL for managing events, properties, users, carts, transactions, and location-based services. Implemented Stripe payments, Google OAuth 2.0, Twilio OTP, FCM notifications, WebSockets, Redis, and AWS Load Balancer, focusing on secure authentication, real-time communication, optimized data retrieval, and scalable application performance.",
        tech: ["MERN Stack", "MySQL", "Redis", "Stripe", "Google OAuth", "Twilio OTP", "FCM", "WebSockets", "AWS ALB"],
        link: "https://github.com/Shivamsrivastava-321",
        github: "https://github.com/Shivamsrivastava-321",
        color: "from-emerald-500 via-teal-500 to-cyan-500",
        icon: Server
    },
    {
        title: "HRMS Lite",
        period: "September 2025 - December 2025",
        badge: "Full-Stack Admin",
        description: "A lightweight Human Resource Management System. Allows admin to manage employee records, role permissions, and track daily attendance with real-time updates and a clean UI.",
        tech: ["React", "Django REST", "MongoDB", "Tailwind", "Vercel"],
        link: "https://hrms-lite-ecru.vercel.app/",
        github: "https://github.com/Shivamsrivastava-321/hrms-lite",
        color: "from-blue-500 to-cyan-400",
        icon: Layout
    },
    {
        title: "E-Commerce Platform",
        period: "July 2025 - August 2025",
        badge: "MERN & Stripe",
        description: "Full-stack e-commerce solution featuring cart management, Stripe secure payment processing, Redis caching, and real-time order tracking built for performance.",
        tech: ["MERN Stack", "Redux", "Stripe", "Redis"],
        link: "https://mern-e-commerce-n7b9.onrender.com",
        github: "https://github.com/juniorcoderr/MERN-E-Commerce.git",
        color: "from-purple-500 to-pink-500",
        icon: ShoppingBag
    },
    {
        title: "Job Portal",
        period: "January 2025 - July 2025",
        badge: "MERN Portal",
        description: "Comprehensive job interface connecting job seekers and employers. Features job application tracking, resume parsing, Cloudinary asset storage, and notifications.",
        tech: ["MERN Stack", "Tailwind", "Cloudinary", "Multer"],
        link: "https://job-website-1-98l2.onrender.com",
        github: "https://github.com/Shivamsrivastava-321/job-website",
        color: "from-orange-500 to-red-500",
        icon: Briefcase
    },
    {
        title: "Hotel Booking System",
        period: "September 2024 - December 2024",
        badge: "REST Architecture",
        description: "Robust booking platform allowing users to search, view, and book accommodations. Optimized backend ensuring high availability, concurrency handling, and consistency.",
        tech: ["Node.js", "Express", "MongoDB", "REST API"],
        link: "https://mern-booking-app-bjkk.onrender.com",
        github: "https://github.com/Shivamsrivastava-321",
        color: "from-green-500 to-emerald-400",
        icon: Database
    }
];

const ProjectCard = ({ project, index }) => {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x);
    const ySpring = useSpring(y);

    const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

    const handleMouseMove = (e) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const mouseX = (e.clientX - rect.left) * 25;
        const mouseY = (e.clientY - rect.top) * 25;

        const rX = (mouseY / height - 25 / 2) * -1;
        const rY = mouseX / width - 25 / 2;

        x.set(rX);
        y.set(rY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const IconComponent = project.icon || Layout;

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transformStyle: "preserve-3d",
                transform
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-gray-900/40 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300 w-full flex flex-col overflow-hidden"
        >
            {/* Gloss glare overlay */}
            <div style={{ transform: "translateZ(75px)" }} className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl z-0 pointer-events-none mix-blend-overlay" />

            <div className="h-40 relative overflow-hidden rounded-t-2xl bg-gray-900/60 border-b border-gray-800/60 flex items-center justify-center">
                {/* Background glow */}
                <div className={`absolute inset-0 opacity-20 group-hover:opacity-35 transition-opacity duration-500 bg-gradient-to-br ${project.color}`} />
                <div className="relative z-10 flex flex-col items-center gap-2 transform group-hover:scale-105 transition-transform duration-500">
                    <div className="p-3.5 rounded-2xl bg-gray-950/70 border border-gray-800/80 backdrop-blur-md shadow-lg shadow-black/40">
                        <IconComponent className="w-9 h-9 text-gray-200 group-hover:text-white transition-colors" />
                    </div>
                </div>
                {project.badge && (
                    <div className="absolute top-3 left-3 z-10">
                        <span className="text-[11px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full bg-black/60 border border-white/10 text-blue-300 backdrop-blur-md">
                            {project.badge}
                        </span>
                    </div>
                )}
            </div>

            <div className="p-6 relative z-10 bg-gray-900/80 backdrop-blur-md flex-1 flex flex-col justify-between">
                <div>
                    <div className="flex justify-between items-start mb-3 gap-2">
                        <div style={{ transform: "translateZ(40px)" }}>
                            <h3 className="text-xl font-bold text-white mb-0.5 group-hover:text-blue-400 transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-xs text-gray-400">{project.period}</p>
                        </div>
                        <div className="flex gap-2" style={{ transform: "translateZ(50px)" }}>
                            {project.github && project.github !== "#" && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 bg-gray-800 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 transition-all hover:scale-110"
                                    title="View Source Code"
                                >
                                    <Github size={16} />
                                </a>
                            )}
                            {project.link && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 bg-gray-800 rounded-full text-gray-400 hover:text-white hover:bg-blue-600 transition-all hover:scale-110"
                                    title="Live Project / Details"
                                >
                                    <ExternalLink size={16} />
                                </a>
                            )}
                        </div>
                    </div>

                    <p style={{ transform: "translateZ(25px)" }} className="text-gray-300 text-sm mb-6 leading-relaxed">
                        {project.description}
                    </p>
                </div>

                <div style={{ transform: "translateZ(20px)" }} className="flex flex-wrap gap-1.5 pt-3 border-t border-gray-800/60 mt-auto">
                    {project.tech.map((tech) => (
                        <span
                            key={tech}
                            className="text-xs px-2.5 py-1 bg-gray-800/60 rounded-md border border-gray-700/50 text-blue-200/90 group-hover:border-blue-500/30 transition-colors"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="py-24 bg-black relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-[128px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-[128px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-4 uppercase tracking-wider">
                        Production Applications & Real-time Systems
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Featured Projects
                        </span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        High-performance full-stack web applications showcasing scalable backend architectures, real-time messaging, Redis caching, and payment workflows.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

