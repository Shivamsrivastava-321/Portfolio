import React from 'react';
import { motion } from 'framer-motion';
import { Network, Briefcase, Server, MapPin } from 'lucide-react';

const experiences = [
    {
        role: "MERN Stack Developer",
        company: "Softkingo Technology Pvt. Ltd.",
        location: "Noida-63",
        period: "February 2026 - September 2026",
        description: [
            {
                title: "MERN Stack Development",
                detail: "Delivered 3 full-stack applications using MongoDB, Express.js, React.js, and Node.js, taking responsibility for backend API development, database integration, frontend integration, and application functionality."
            },
            {
                title: "API & Third-Party Integrations",
                detail: "Designed and implemented RESTful APIs and integrated multiple third-party services, including Twilio, MSG91, Google Authenticator, and external APIs, implementing authentication, OTP/communication workflows, and secure application integrations."
            },
            {
                title: "AWS & Cloud Development",
                detail: "Gained hands-on experience with AWS and cloud-based application deployment, working with cloud infrastructure and deployment workflows to build and manage scalable, reliable, and production-ready applications."
            }
        ],
        icon: Server,
        badge: "Latest"
    },
    {
        role: "Junior-Associate Developer",
        company: "Xapotech Systems Pvt. Ltd.",
        location: "Noida-16",
        period: "April 2025 - February 2026",
        description: [
            {
                title: "Backend Architecture & API Development",
                detail: "Engineered and maintained scalable RESTful APIs using Node.js and Express.js across 5+ live projects, implementing OAuth 2.0, RBAC, authentication, subscription-based workflows, and secure data access for production applications."
            },
            {
                title: "Scalability & System Reliability",
                detail: "Implemented API rate limiting and load balancing to handle concurrent requests and improve application stability, while using Docker for containerized application deployment and environment consistency."
            },
            {
                title: "Real-Time Notifications & Integrations",
                detail: "Implemented Firebase Cloud Messaging (FCM) token-based push notifications and integrated backend services with external platforms to support real-time communication and automated application workflows."
            }
        ],
        icon: Briefcase
    },
    {
        role: "Full-Stack Developer Trainee",
        company: "Croma Campus Pvt. Ltd.",
        location: "Noida",
        period: "July 2024 - December 2024",
        description: [
            {
                title: "MERN Stack Foundations",
                detail: "Focused on MERN stack (MongoDB, Express, React, Node.js), building full-stack web applications with responsive UIs and robust REST APIs."
            },
            {
                title: "Backend & Data Analysis",
                detail: "Gained hands-on experience in Python backend development, relational database integration, and data processing workflows."
            }
        ],
        icon: Network
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-24 bg-gray-950 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Ambient background glow */}
            <div className="absolute top-1/4 -right-40 w-96 h-96 bg-purple-900/10 rounded-full blur-[128px] pointer-events-none" />
            <div className="absolute bottom-1/4 -left-40 w-96 h-96 bg-blue-900/10 rounded-full blur-[128px] pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold mb-4 uppercase tracking-wider">
                        1.6+ Years Industry Experience
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                            Professional Experience
                        </span>
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        Track record of architecting scalable backend APIs, cloud deployments, and production MERN applications.
                    </p>
                </motion.div>

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className="relative pl-8 border-l-2 border-gray-800 hover:border-purple-500/80 transition-colors"
                        >
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-500 shadow-lg shadow-purple-500/50" />

                            <div className="bg-gray-900/60 p-6 md:p-8 rounded-2xl border border-gray-800/80 hover:border-purple-500/40 backdrop-blur-sm transition-all shadow-xl">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-3">
                                    <div>
                                        <div className="flex items-center gap-3 flex-wrap">
                                            <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
                                                <exp.icon className="w-5 h-5 text-purple-400 flex-shrink-0" />
                                                {exp.role}
                                            </h3>
                                            {exp.badge && (
                                                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-400 border border-blue-500/30">
                                                    {exp.badge}
                                                </span>
                                            )}
                                        </div>
                                        <div className="flex items-center gap-3 mt-1.5 flex-wrap">
                                            <p className="text-purple-400 font-semibold">{exp.company}</p>
                                            <span className="text-gray-600">•</span>
                                            <span className="text-gray-400 text-sm flex items-center gap-1">
                                                <MapPin className="w-3.5 h-3.5 text-gray-500" />
                                                {exp.location}
                                            </span>
                                        </div>
                                    </div>
                                    <span className="text-gray-400 text-xs font-medium bg-gray-800/80 border border-gray-700/50 px-3.5 py-1.5 rounded-full whitespace-nowrap self-start md:self-auto">
                                        {exp.period}
                                    </span>
                                </div>

                                <ul className="space-y-3 text-gray-300">
                                    {exp.description.map((item, i) => (
                                        <li key={i} className="text-sm md:text-[15px] leading-relaxed flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                                            <span>
                                                <strong className="text-white font-semibold">{item.title}: </strong>
                                                <span className="text-gray-300">{item.detail}</span>
                                            </span>
                                        </li>
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
