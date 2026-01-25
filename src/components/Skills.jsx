import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
    {
        category: "Languages",
        skills: ["JavaScript", "TypeScript", "Python", "SQL", "C"]
    },
    {
        category: "Frontend",
        skills: ["React", "HTML/CSS", "Tailwind CSS", "Redux Toolkit", "ShadcnUI", "Bootstrap"]
    },
    {
        category: "Backend",
        skills: ["Node.js", "Express.js", "REST API", "JWT Auth", "Multer"]
    },
    {
        category: "Database",
        skills: ["MongoDB", "MySQL", "PostgreSQL", "Redis"]
    },
    {
        category: "Tools & DevOps",
        skills: ["Git", "Docker", "VS Code", "Postman", "Vercel", "Render"]
    }
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-gray-950 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">Technical Skills</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A comprehensive toolkit for building scalable, high-performance web applications.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillsData.map((category, index) => (
                        <motion.div
                            key={category.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-colors"
                        >
                            <h3 className="text-xl font-semibold mb-4 text-blue-400">{category.category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300 border border-gray-700 hover:border-blue-500 hover:text-white transition-colors cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
