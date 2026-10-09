import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, ExternalLink, MapPin, Calendar } from 'lucide-react';

const EDUCATION = {
    degree: 'Bachelor of Technology',
    field: 'Computer Science & Engineering',
    institution: 'Hi-Tech Institute of Engineering & Technology',
    location: 'Ghaziabad, Uttar Pradesh',
    year: '2025',
    cgpa: '7.0 CGPA',
};

const CERTS = [
    {
        name: 'MERN Stack Development',
        issuer: 'Croma Institute Noida',
        year: '2024',
        link: 'https://res.cloudinary.com/ddsshsmzd/image/upload/v1757613382/MERN_certificate_page-0001_2_fzi3mf.jpg',
        color: '#60a5fa',
        bg: 'rgba(59,130,246,0.07)',
        border: 'rgba(59,130,246,0.18)',
    },
    {
        name: 'Python Advanced',
        issuer: 'Croma Institute Noida',
        year: '2024',
        link: 'https://res.cloudinary.com/ddsshsmzd/image/upload/v1757613475/Python_Certificate_page-0001_1_tz5gys.jpg',
        color: '#34d399',
        bg: 'rgba(52,211,153,0.07)',
        border: 'rgba(52,211,153,0.18)',
    },
];

const Education = () => {
    return (
        <section id="education" className="py-28 relative overflow-hidden" style={{ background: '#050508' }}>
            {/* Ambient glow */}
            <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(251,191,36,0.07) 0%, transparent 70%)', filter: 'blur(80px)' }} />
            <div className="absolute bottom-1/3 left-0 w-80 h-80 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)', filter: 'blur(80px)' }} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-black mb-4">
                        <span style={{
                            background: 'linear-gradient(135deg, #fbbf24, #f97316)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}>
                            Education & Training
                        </span>
                    </h2>
                    <p className="text-gray-500 max-w-lg mx-auto">Academic background and professional certifications.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

                    {/* Education card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        whileHover={{ y: -6 }}
                        className="p-8 rounded-2xl group transition-all duration-300"
                        style={{
                            background: 'rgba(251,191,36,0.04)',
                            border: '1px solid rgba(251,191,36,0.12)',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = 'rgba(251,191,36,0.28)';
                            e.currentTarget.style.boxShadow = '0 20px 60px rgba(251,191,36,0.07)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = 'rgba(251,191,36,0.12)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        {/* Card header */}
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-3 rounded-xl group-hover:scale-110 transition-transform duration-300"
                                style={{ background: 'rgba(251,191,36,0.1)', border: '1px solid rgba(251,191,36,0.2)' }}>
                                <GraduationCap className="w-7 h-7 text-yellow-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white">Education</h3>
                        </div>

                        {/* Content */}
                        <div className="relative pl-6 border-l" style={{ borderColor: 'rgba(251,191,36,0.2)' }}>
                            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-yellow-400"
                                style={{ boxShadow: '0 0 10px rgba(251,191,36,0.5)' }} />

                            <h4 className="text-xl font-bold text-white mb-1">{EDUCATION.degree}</h4>
                            <p className="text-yellow-400 font-semibold mb-1 text-sm">{EDUCATION.field}</p>
                            <p className="text-gray-400 text-sm mb-4">{EDUCATION.institution}</p>

                            <div className="flex items-center flex-wrap gap-3">
                                <span className="flex items-center gap-1.5 text-xs text-gray-500">
                                    <MapPin className="w-3 h-3" />
                                    {EDUCATION.location}
                                </span>
                                <span className="flex items-center gap-1.5 text-xs text-gray-500">
                                    <Calendar className="w-3 h-3" />
                                    {EDUCATION.year}
                                </span>
                                <span className="px-2.5 py-1 rounded-md text-xs font-bold"
                                    style={{ background: 'rgba(251,191,36,0.1)', border: '1px solid rgba(251,191,36,0.2)', color: '#fbbf24' }}>
                                    {EDUCATION.cgpa}
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Certifications card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        whileHover={{ y: -6 }}
                        className="p-8 rounded-2xl group transition-all duration-300"
                        style={{
                            background: 'rgba(251,191,36,0.03)',
                            border: '1px solid rgba(251,191,36,0.1)',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = 'rgba(251,191,36,0.24)';
                            e.currentTarget.style.boxShadow = '0 20px 60px rgba(251,191,36,0.06)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = 'rgba(251,191,36,0.1)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-3 rounded-xl group-hover:scale-110 transition-transform duration-300"
                                style={{ background: 'rgba(251,191,36,0.1)', border: '1px solid rgba(251,191,36,0.2)' }}>
                                <Award className="w-7 h-7 text-yellow-500" />
                            </div>
                            <h3 className="text-xl font-bold text-white">Certifications</h3>
                        </div>

                        <div className="space-y-6">
                            {CERTS.map((cert, i) => (
                                <motion.div
                                    key={cert.name}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                                    className="group/cert relative pl-6 border-l pb-1 transition-all"
                                    style={{ borderColor: `${cert.color}25` }}
                                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${cert.color}50`; }}
                                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = `${cert.color}25`; }}
                                >
                                    <div
                                        className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full group-hover/cert:scale-125 transition-transform"
                                        style={{ background: cert.color, boxShadow: `0 0 8px ${cert.color}60` }}
                                    />
                                    <h4 className="text-base font-bold text-white mb-0.5">{cert.name}</h4>
                                    <p className="text-sm mb-0.5" style={{ color: cert.color }}>{cert.issuer}</p>
                                    <p className="text-xs text-gray-600 mb-3">{cert.year}</p>
                                    <a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 text-xs font-medium transition-all hover:gap-2"
                                        style={{ color: cert.color, opacity: 0.8 }}
                                        onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; }}
                                        onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.8'; }}
                                    >
                                        View Certificate
                                        <ExternalLink size={11} />
                                    </a>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Education;
