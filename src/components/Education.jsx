import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, ExternalLink } from 'lucide-react';

const Education = () => {
    return (
        <section id="education" className="py-24 bg-black relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-1/3 right-0 w-96 h-96 bg-yellow-900/10 rounded-full blur-[128px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Education & Training</span>
                    </h2>
                    <p className="text-gray-400">Academic background and professional certifications.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Education */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-gray-900/40 p-8 rounded-2xl border border-gray-800 hover:border-yellow-500/30 transition-all hover:bg-gray-900/60 backdrop-blur-sm"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-3 bg-yellow-500/10 rounded-xl">
                                <GraduationCap className="w-8 h-8 text-yellow-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-white">Education</h3>
                        </div>

                        <div className="space-y-8">
                            <div className="relative pl-8 border-l border-gray-800">
                                <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-yellow-500 ring-4 ring-black" />
                                <h4 className="text-xl font-bold text-white mb-1">Bachelor of Technology</h4>
                                <p className="text-yellow-400 font-medium mb-1">Computer Science & Engineering</p>
                                <p className="text-gray-400 text-sm mb-1">Hi-Tech Institute of Engineering & Technology</p>
                                <div className="flex justify-between items-center mt-3 flex-wrap gap-2">
                                    <span className="text-gray-500 text-sm">Ghaziabad, Uttar Pradesh • 2025</span>
                                    <span className="px-2.5 py-1 bg-yellow-500/10 border border-yellow-500/20 rounded text-xs font-semibold text-yellow-400">7 CGPA</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Certifications */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-gray-900/40 p-8 rounded-2xl border border-gray-800 hover:border-yellow-500/30 transition-all hover:bg-gray-900/60 backdrop-blur-sm"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-3 bg-yellow-500/10 rounded-xl">
                                <Award className="w-8 h-8 text-yellow-500" />
                            </div>
                            <h3 className="text-2xl font-bold text-white">Certifications</h3>
                        </div>

                        <div className="space-y-8">
                            <div className="group relative pl-8 border-l border-gray-800">
                                <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-yellow-500 ring-4 ring-black group-hover:scale-125 transition-transform" />
                                <h4 className="text-xl font-bold text-white mb-1">MERN Stack</h4>
                                <p className="text-yellow-400 font-medium mb-1">Croma Institute Noida</p>
                                <p className="text-gray-500 text-sm mb-3">2024</p>
                                <a
                                    href="https://res.cloudinary.com/ddsshsmzd/image/upload/v1757613382/MERN_certificate_page-0001_2_fzi3mf.jpg"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group-hover:translate-x-1 duration-300"
                                >
                                    View Certificate <ExternalLink size={14} />
                                </a>
                            </div>

                            <div className="group relative pl-8 border-l border-gray-800">
                                <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-yellow-500 ring-4 ring-black group-hover:scale-125 transition-transform" />
                                <h4 className="text-xl font-bold text-white mb-1">Python-Advanced</h4>
                                <p className="text-yellow-400 font-medium mb-1">Croma Institute Noida</p>
                                <p className="text-gray-500 text-sm mb-3">2024</p>
                                <a
                                    href="https://res.cloudinary.com/ddsshsmzd/image/upload/v1757613475/Python_Certificate_page-0001_1_tz5gys.jpg"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group-hover:translate-x-1 duration-300"
                                >
                                    View Certificate <ExternalLink size={14} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Education;

