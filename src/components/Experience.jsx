import React from 'react';
import { motion } from 'framer-motion';
import { Network, Briefcase } from 'lucide-react';

const experiences = [
    {
        role: "Junior-Associate Developer",
        company: "Xapotech Systems Pvt. Ltd.",
        location: "Noida",
        period: "April 2025 - Present",
        description: [
            "Backend-focused developer building scalable REST APIs with Node.js and Express.js.",
            "Implemented JWT-based authentication, OAuth 2.0, and role-based authorization.",
            "Optimized query performance for MongoDB and MySQL databases.",
            "Leveraged Docker for containerization and Redis for caching."
        ],
        icon: Briefcase
    },
    {
        role: "Full-Stack Developer Trainee",
        company: "Croma Campus Pvt. Ltd.",
        location: "Noida",
        period: "July 2024 - December 2024",
        description: [
            "Focused on MERN stack (MongoDB, Express, React, Node.js).",
            "Built unique web applications including responsive UIs with Tailwind CSS.",
            "Gained expertise in Python backend and data analysis."
        ],
        icon: Network
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-gray-950 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Professional Experience</span>
                    </h2>
                    <p className="text-gray-400">My journey in the tech industry.</p>
                </motion.div>

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative pl-8 border-l-2 border-gray-800 hover:border-purple-500 transition-colors"
                        >
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-500 shadow-lg shadow-purple-500/50" />

                            <div className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                            <exp.icon className="w-5 h-5 text-purple-400" />
                                            {exp.role}
                                        </h3>
                                        <p className="text-purple-400 font-medium">{exp.company}</p>
                                    </div>
                                    <span className="text-gray-500 text-sm mt-2 md:mt-0 bg-gray-800 px-3 py-1 rounded-full">{exp.period}</span>
                                </div>

                                <ul className="space-y-2 text-gray-300 list-disc list-inside">
                                    {exp.description.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
