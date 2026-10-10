import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Terminal as TerminalIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';
import useActiveSection from '../hooks/useActiveSection';

const SECTION_IDS = ['about', 'skills', 'experience', 'projects', 'education', 'contact'];

const NAV_LINKS = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Contact', href: '#contact', id: 'contact' },
];

const Navbar = ({ onTerminalOpen }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const activeSection = useActiveSection(SECTION_IDS);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Close mobile menu on resize to desktop
    useEffect(() => {
        const onResize = () => { if (window.innerWidth >= 768) setIsOpen(false); };
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    return (
        <nav
            className={cn(
                'fixed w-full z-50 transition-all duration-700 flex justify-center pointer-events-none',
                scrolled ? 'top-4 px-4' : 'top-0 px-0'
            )}
        >
            <div
                className={cn(
                    'w-full max-w-7xl mx-auto transition-all duration-700 pointer-events-auto relative',
                    scrolled ? 'rounded-2xl border px-4 sm:px-6' : 'border-b border-transparent px-4 sm:px-6 lg:px-8'
                )}
                style={scrolled ? {
                    background: 'rgba(10, 15, 30, 0.5)',
                    backdropFilter: 'blur(24px)',
                    WebkitBackdropFilter: 'blur(24px)',
                    borderColor: 'rgba(255,255,255,0.08)',
                    boxShadow: '0 20px 40px -10px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)'
                } : {
                    background: 'rgba(0,0,0,0)'
                }}
            >
                <div className="flex items-center justify-between h-16 sm:h-20 transition-all duration-700">

                    {/* Logo */}
                    <a
                        href="#"
                        className="text-2xl font-black tracking-tight shrink-0 transition-transform duration-300 hover:scale-105"
                        style={{
                            background: 'linear-gradient(135deg, #fff, #a5b4fc, #818cf8)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}
                    >
                        Shivam.
                    </a>

                    {/* Desktop nav links */}
                    <div className="hidden md:flex items-center gap-1">
                        {NAV_LINKS.map((link) => {
                            const isActive = activeSection === link.id;
                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="relative px-4 py-2 text-sm font-semibold transition-all duration-300 group"
                                    style={{ color: isActive ? '#fff' : '#94a3b8' }}
                                >
                                    <span className="relative z-10 group-hover:text-white transition-colors">{link.name}</span>
                                    {/* Hover background */}
                                    <div className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/5 transition-colors duration-300" />
                                    {/* Active indicator */}
                                    {isActive && (
                                        <motion.div
                                            layoutId="nav-active"
                                            className="absolute inset-0 rounded-full"
                                            style={{
                                                background: 'rgba(255,255,255,0.06)',
                                                border: '1px solid rgba(255,255,255,0.12)',
                                                boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
                                            }}
                                            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                                        />
                                    )}
                                </a>
                            );
                        })}
                    </div>

                    {/* Desktop right controls */}
                    <div className="hidden md:flex items-center gap-2 lg:gap-4">
                        {/* Terminal toggle */}
                        <button
                            onClick={onTerminalOpen}
                            className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-bold transition-all hover:scale-105 hover:-translate-y-0.5 group shadow-lg"
                            style={{
                                background: 'linear-gradient(135deg, rgba(59,130,246,0.15), rgba(167,139,250,0.15))',
                                border: '1px solid rgba(167,139,250,0.3)',
                                color: '#e0f2fe',
                            }}
                            title="Open Terminal (Ctrl+`)"
                        >
                            <TerminalIcon size={14} className="text-indigo-400 group-hover:animate-pulse" />
                            <span>terminal</span>
                        </button>

                        {/* Social icons */}
                        <div className="flex items-center gap-0.5 border-l pl-2 lg:pl-4" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                            <a href="https://github.com/Shivamsrivastava-321" target="_blank" rel="noreferrer"
                                className="p-2.5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-all hover:scale-110" aria-label="GitHub">
                                <Github size={18} />
                            </a>
                            <a href="https://www.linkedin.com/in/shivam-srivastavaa123/" target="_blank" rel="noreferrer"
                                className="p-2.5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-all hover:scale-110" aria-label="LinkedIn">
                                <Linkedin size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Mobile: terminal + hamburger */}
                    <div className="flex md:hidden items-center gap-3">
                        <button
                            onClick={onTerminalOpen}
                            className="p-2.5 rounded-full transition-all hover:scale-105"
                            style={{ color: '#818cf8', background: 'rgba(129,140,248,0.1)', border: '1px solid rgba(129,140,248,0.2)' }}
                            aria-label="Open terminal"
                        >
                            <TerminalIcon size={18} />
                        </button>
                        <button
                            onClick={() => setIsOpen((o) => !o)}
                            className="p-2.5 rounded-full text-gray-300 hover:text-white hover:bg-white/10 transition-all"
                            style={{ border: '1px solid rgba(255,255,255,0.05)' }}
                            aria-label={isOpen ? 'Close menu' : 'Open menu'}
                            aria-expanded={isOpen}
                        >
                            {isOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>

                {/* Mobile menu dropdown */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="md:hidden absolute top-[calc(100%+0.5rem)] left-0 right-0 rounded-2xl overflow-hidden border shadow-2xl"
                            style={{
                                background: 'rgba(10, 15, 30, 0.85)',
                                backdropFilter: 'blur(24px)',
                                WebkitBackdropFilter: 'blur(24px)',
                                borderColor: 'rgba(255,255,255,0.08)'
                            }}
                        >
                            <div className="p-3 space-y-1">
                                {NAV_LINKS.map((link) => {
                                    const isActive = activeSection === link.id;
                                    return (
                                        <a
                                            key={link.name}
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all"
                                            style={{
                                                color: isActive ? '#fff' : '#94a3b8',
                                                background: isActive ? 'rgba(255,255,255,0.06)' : 'transparent',
                                                border: isActive ? '1px solid rgba(255,255,255,0.1)' : '1px solid transparent',
                                            }}
                                        >
                                            {link.name}
                                            {isActive && (
                                                <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#818cf8', boxShadow: '0 0 10px #818cf8' }} />
                                            )}
                                        </a>
                                    );
                                })}
                                <div className="flex justify-center gap-6 pt-4 pb-2 px-4 border-t mt-3" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                                    <a href="https://github.com/Shivamsrivastava-321" target="_blank" rel="noreferrer"
                                        className="text-gray-400 hover:text-white transition-colors hover:scale-110" aria-label="GitHub">
                                        <Github size={20} />
                                    </a>
                                    <a href="https://www.linkedin.com/in/shivam-srivastavaa123/" target="_blank" rel="noreferrer"
                                        className="text-gray-400 hover:text-white transition-colors hover:scale-110" aria-label="LinkedIn">
                                        <Linkedin size={20} />
                                    </a>
                                    <a href="mailto:shivamsrivastava54321@gmail.com"
                                        className="text-gray-400 hover:text-white transition-colors hover:scale-110" aria-label="Email">
                                        <Mail size={20} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Navbar;
