import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const NAV = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
];

const SOCIALS = [
    { icon: Github, href: 'https://github.com/Shivamsrivastava-321', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/shivam-srivastavaa123/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:shivamsrivastava54321@gmail.com', label: 'Email' },
];

const Footer = () => {
    return (
        <footer className="relative overflow-hidden" style={{ background: '#000' }}>
            {/* Top gradient border */}
            <div className="h-px w-full" style={{
                background: 'linear-gradient(to right, transparent, rgba(59,130,246,0.4), rgba(139,92,246,0.4), transparent)',
            }} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">

                    {/* Brand */}
                    <div className="flex flex-col items-center md:items-start gap-1">
                        <span className="text-xl font-black" style={{
                            background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}>
                            Shivam Srivastava
                        </span>
                        <span className="text-xs text-gray-600 font-mono">Backend-focused Full-Stack Developer</span>
                    </div>

                    {/* Nav links */}
                    <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                        {NAV.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-xs text-gray-600 hover:text-gray-300 transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* Social icons */}
                    <div className="flex items-center gap-2">
                        {SOCIALS.map((s) => {
                            const Icon = s.icon;
                            return (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={s.label}
                                    className="p-2.5 rounded-xl text-gray-600 hover:text-white transition-all hover:scale-110"
                                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = 'rgba(59,130,246,0.1)';
                                        e.currentTarget.style.borderColor = 'rgba(59,130,246,0.25)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                                    }}
                                >
                                    <Icon size={16} />
                                </a>
                            );
                        })}
                    </div>
                </div>

                {/* Bottom row */}
                <div className="mt-8 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-2"
                    style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                    <p className="text-xs text-gray-700">
                        © {new Date().getFullYear()} Shivam Srivastava. All rights reserved.
                    </p>
                    <p className="text-xs text-gray-700 flex items-center gap-1.5">
                        Built with
                        <span style={{ color: '#f472b6' }}>
                            <Heart size={10} fill="currentColor" />
                        </span>
                        using React, Vite & Three.js
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
