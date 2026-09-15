import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Database, Layout, Terminal, CreditCard, Cpu } from 'lucide-react';

const skillsData = [
    {
        category: "Programming Languages",
        icon: Code2,
        color: "text-blue-400",
        skills: ["JavaScript", "TypeScript", "Python", "C"]
    },
    {
        category: "Backend Architecture",
        icon: Server,
        color: "text-green-400",
        skills: ["Node.js", "Express.js", "REST API Development", "AWS", "File Handling", "Google Authenticator", "JWT Auth", "WebSockets"]
    },
    {
        category: "Database & Storage",
        icon: Database,
        color: "text-amber-400",
        skills: ["MongoDB", "MySQL", "PostgreSQL", "Database Design", "Database-Indexing"]
    },
    {
        category: "Frontend Development",
        icon: Layout,
        color: "text-cyan-400",
        skills: ["React", "Tailwind CSS", "Redux-Toolkit", "ShadcnUI", "HTML", "CSS"]
    },
    {
        category: "Tools & DevOps",
        icon: Terminal,
        color: "text-purple-400",
        skills: ["Git", "GitHub", "Docker", "Redis", "Postman", "Render", "Vercel", "VS Code", "Github Copilot"]
    },
    {
        category: "Payment & Communication Integrations",
        icon: CreditCard,
        color: "text-pink-400",
        skills: ["Razorpay", "Stripe", "MSG91", "Twilio"]
    },
    {
        category: "Core Concepts",
        icon: Cpu,
        color: "text-indigo-400",
        skills: ["Data Structure and Algorithms", "DBMS", "OOPs", "SDLC", "OAuth 2.0", "Firebase Cloud Messaging (FCM)"]
    }
];

const Skills = () => {
    return (
        <section id="skills" className="py-24 bg-gray-950 relative overflow-hidden">
            {/* Ambient gradients */}
            <div className="absolute top-1/3 -left-40 w-96 h-96 bg-blue-900/10 rounded-full blur-[128px] pointer-events-none" />
            <div className="absolute bottom-1/3 -right-40 w-96 h-96 bg-emerald-900/10 rounded-full blur-[128px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-4 uppercase tracking-wider">
                        Technical Expertise
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-blue-400 via-teal-400 to-green-400 bg-clip-text text-transparent">
                            Skills & Capabilities
                        </span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A battle-tested stack for building secure, scalable, and high-performance full-stack web applications and microservices.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillsData.map((category, index) => {
                        const Icon = category.icon;
                        return (
                            <motion.div
                                key={category.category}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08 }}
                                className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-800/80 hover:border-blue-500/40 transition-all hover:bg-gray-900/80 flex flex-col justify-between group shadow-lg"
                            >
                                <div>
                                    <div className="flex items-center gap-3 mb-5">
                                        <div className={`p-2.5 rounded-xl bg-gray-800/70 border border-gray-700/50 ${category.color} group-hover:scale-110 transition-transform`}>
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                                            {category.category}
                                        </h3>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {category.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-3 py-1 bg-gray-800/70 rounded-lg text-xs font-medium text-gray-300 border border-gray-700/60 hover:border-blue-500/50 hover:text-white transition-all cursor-default"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Skills;
