import React, { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { ExternalLink, Github, Code, Server, Database, Layout } from 'lucide-react';

const projects = [
    {
        title: "HRMS Lite",
        period: "Recent",
        description: "A lightweight Human Resource Management System. Allows admin to manage employee records and track daily attendance. Features a professional interface with real-time updates.",
        tech: ["React", "Django REST", "MongoDB", "Tailwind", "Vercel"],
        link: "https://hrms-lite-ecru.vercel.app/",
        github: "https://github.com/Shivamsrivastava-321/hrms-lite",
        color: "from-blue-500 to-cyan-400"
    },
    {
        title: "E-Commerce Platform",
        period: "Nov 2025 - Present",
        description: "Full-stack e-commerce solution with cart management, secure payments, and order tracking. Built for scalability and performance.",
        tech: ["MERN Stack", "Redux", "Stripe", "Redis"],
        link: "https://mern-e-commerce-n7b9.onrender.com",
        github: "https://github.com/juniorcoderr/MERN-E-Commerce.git",
        color: "from-purple-500 to-pink-500"
    },
    {
        title: "Job Portal",
        period: "Aug 2025 - Nov 2025",
        description: "Comprehensive job interface connecting seekers and employers. Features application tracking, resume parsing, and real-time notifications.",
        tech: ["MERN Stack", "Tailwind", "Cloudinary", "Multer"],
        link: "https://job-website-1-98l2.onrender.com",
        github: "https://github.com/Shivamsrivastava-321/job-website",
        color: "from-orange-500 to-red-500"
    },
    {
        title: "Hotel Booking System",
        period: "Jan 2025 - March 2025",
        description: "Robust booking platform allowing users to search, view, and book accommodations. Optimized backend ensuring high availability and consistency.",
        tech: ["Node.js", "Express", "MongoDB", "REST API"],
        link: "https://mern-booking-app-bjkk.onrender.com",
        github: "#",
        color: "from-green-500 to-emerald-400"
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

        const mouseX = (e.clientX - rect.left) * 32.5;
        const mouseY = (e.clientY - rect.top) * 32.5;

        const rX = (mouseY / height - 32.5 / 2) * -1;
        const rY = mouseX / width - 32.5 / 2;

        x.set(rX);
        y.set(rY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

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
            className="group relative bg-gray-900/40 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300 w-full"
        >
            {/* Added stronger gloss effect */}
            <div style={{ transform: "translateZ(75px)" }} className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl z-0 pointer-events-none mix-blend-overlay" />

            <div className="h-48 relative overflow-hidden rounded-t-xl bg-gray-900/50">
                {/* Enhanced background glow */}
                <div className={`absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500 bg-gradient-to-br ${project.color}`} />
                <div className="absolute inset-0 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                    <Layout className="w-16 h-16 text-gray-700 group-hover:text-gray-300 transition-colors" />
                </div>
            </div>

            <div className="p-6 relative z-10 bg-gray-900/80 backdrop-blur-md rounded-b-xl h-full border-t border-gray-800/50">
                <div className="flex justify-between items-start mb-4">
                    <div style={{ transform: "translateZ(50px)" }}>
                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                        <p className="text-xs text-gray-500">{project.period}</p>
                    </div>
                    <div className="flex gap-2" style={{ transform: "translateZ(60px)" }}>
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 transition-all hover:scale-110">
                            <Github size={18} />
                        </a>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-full text-gray-400 hover:text-white hover:bg-blue-600 transition-all hover:scale-110">
                            <ExternalLink size={18} />
                        </a>
                    </div>
                </div>

                <p style={{ transform: "translateZ(30px)" }} className="text-gray-400 text-sm mb-6 line-clamp-3">
                    {project.description}
                </p>

                <div style={{ transform: "translateZ(25px)" }} className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((tech) => (
                        <span key={tech} className="text-xs px-2 py-1 bg-gray-800/50 rounded-md border border-gray-700/50 text-blue-200/80 group-hover:border-blue-500/30 transition-colors">
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
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Featured Projects
                        </span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A selection of full-stack applications showcasing robust backend architecture and modern frontend interfaces.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

