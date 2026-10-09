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
                'fixed top-0 w-full z-50 transition-all duration-500',
                scrolled
                    ? 'border-b'
                    : 'border-b border-transparent'
            )}
            style={scrolled ? {
                background: 'rgba(0,0,0,0.85)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                borderColor: 'rgba(255,255,255,0.06)',
            } : {}}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    {/* Logo */}
                    <a
                        href="#"
                        className="text-xl font-black tracking-tight shrink-0"
                        style={{
                            background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
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
                                    className="relative px-3.5 py-2 text-sm font-medium transition-colors duration-200 rounded-lg"
                                    style={{ color: isActive ? '#fff' : '#94a3b8' }}
                                >
                                    {/* Active indicator */}
                                    {isActive && (
                                        <motion.span
                                            layoutId="nav-active"
                                            className="absolute inset-0 rounded-lg"
                                            style={{ background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)' }}
                                            transition={{ type: 'spring', duration: 0.4, bounce: 0.2 }}
                                        />
                                    )}
                                    <span className="relative z-10">{link.name}</span>
                                </a>
                            );
                        })}
                    </div>

                    {/* Desktop right controls */}
                    <div className="hidden md:flex items-center gap-3">
                        {/* Terminal toggle */}
                        <button
                            onClick={onTerminalOpen}
                            className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all hover:scale-105"
                            style={{
                                background: 'rgba(59,130,246,0.08)',
                                border: '1px solid rgba(59,130,246,0.2)',
                                color: '#60a5fa',
                            }}
                            title="Open Terminal (Ctrl+`)"
                            aria-label="Open developer terminal"
                        >
                            <TerminalIcon size={13} />
                            <span>terminal</span>
                        </button>

                        {/* Social icons */}
                        <div className="flex items-center gap-1">
                            <a href="https://github.com/Shivamsrivastava-321" target="_blank" rel="noreferrer"
                                className="p-2 rounded-lg text-gray-500 hover:text-white hover:bg-white/5 transition-all" aria-label="GitHub">
                                <Github size={17} />
                            </a>
                            <a href="https://www.linkedin.com/in/shivam-srivastavaa123/" target="_blank" rel="noreferrer"
                                className="p-2 rounded-lg text-gray-500 hover:text-white hover:bg-white/5 transition-all" aria-label="LinkedIn">
                                <Linkedin size={17} />
                            </a>
                            <a href="mailto:shivamsrivastava54321@gmail.com"
                                className="p-2 rounded-lg text-gray-500 hover:text-white hover:bg-white/5 transition-all" aria-label="Email">
                                <Mail size={17} />
                            </a>
                        </div>
                    </div>

                    {/* Mobile: terminal + hamburger */}
                    <div className="flex md:hidden items-center gap-2">
                        <button
                            onClick={onTerminalOpen}
                            className="p-2 rounded-lg transition-colors"
                            style={{ color: '#60a5fa', background: 'rgba(59,130,246,0.08)' }}
                            aria-label="Open terminal"
                        >
                            <TerminalIcon size={18} />
                        </button>
                        <button
                            onClick={() => setIsOpen((o) => !o)}
                            className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                            aria-label={isOpen ? 'Close menu' : 'Open menu'}
                            aria-expanded={isOpen}
                        >
                            {isOpen ? <X size={22} /> : <Menu size={22} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        className="md:hidden overflow-hidden border-b"
                        style={{ background: 'rgba(0,0,0,0.95)', backdropFilter: 'blur(20px)', borderColor: 'rgba(255,255,255,0.06)' }}
                    >
                        <div className="px-4 py-4 space-y-1">
                            {NAV_LINKS.map((link) => {
                                const isActive = activeSection === link.id;
                                return (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-all"
                                        style={{
                                            color: isActive ? '#fff' : '#94a3b8',
                                            background: isActive ? 'rgba(59,130,246,0.1)' : 'transparent',
                                            border: isActive ? '1px solid rgba(59,130,246,0.2)' : '1px solid transparent',
                                        }}
                                    >
                                        {link.name}
                                        {isActive && <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />}
                                    </a>
                                );
                            })}
                            <div className="flex items-center gap-4 pt-3 px-4 border-t mt-2" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                                <a href="https://github.com/Shivamsrivastava-321" target="_blank" rel="noreferrer"
                                    className="text-gray-500 hover:text-white transition-colors" aria-label="GitHub">
                                    <Github size={18} />
                                </a>
                                <a href="https://www.linkedin.com/in/shivam-srivastavaa123/" target="_blank" rel="noreferrer"
                                    className="text-gray-500 hover:text-white transition-colors" aria-label="LinkedIn">
                                    <Linkedin size={18} />
                                </a>
                                <a href="mailto:shivamsrivastava54321@gmail.com"
                                    className="text-gray-500 hover:text-white transition-colors" aria-label="Email">
                                    <Mail size={18} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
