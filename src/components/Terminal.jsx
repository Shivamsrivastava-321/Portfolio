import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Square, Terminal as TerminalIcon } from 'lucide-react';

/* ─── Command Definitions ──────────────────────────────────────── */
const COMMANDS = {
    help: () => ({
        type: 'info',
        content: [
            { text: 'Available commands:', color: '#60a5fa', bold: true },
            { text: '' },
            { text: '  about       ', color: '#34d399', inline: true, rest: '— Learn about Shivam' },
            { text: '  skills      ', color: '#34d399', inline: true, rest: '— View technical expertise' },
            { text: '  experience  ', color: '#34d399', inline: true, rest: '— Work history timeline' },
            { text: '  projects    ', color: '#34d399', inline: true, rest: '— Featured projects' },
            { text: '  education   ', color: '#34d399', inline: true, rest: '— Academic background' },
            { text: '  contact     ', color: '#34d399', inline: true, rest: '— Get in touch' },
            { text: '  links       ', color: '#34d399', inline: true, rest: '— Social & profile links' },
            { text: '  goto <id>   ', color: '#34d399', inline: true, rest: '— Scroll to a section' },
            { text: '  clear       ', color: '#34d399', inline: true, rest: '— Clear the terminal' },
            { text: '  exit        ', color: '#34d399', inline: true, rest: '— Close this terminal' },
            { text: '' },
            { text: 'Keyboard shortcuts: Esc or Ctrl+` to toggle', color: '#6b7280' },
        ],
    }),

    about: () => ({
        type: 'info',
        content: [
            { text: '┌─ About ────────────────────────────────────────┐', color: '#3b82f6' },
            { text: '' },
            { text: '  Shivam Srivastava', color: '#f8fafc', bold: true },
            { text: '  Backend-focused Full-Stack Developer', color: '#94a3b8' },
            { text: '' },
            { text: '  1.6+ years of professional experience building', color: '#cbd5e1' },
            { text: '  scalable, secure production web applications.', color: '#cbd5e1' },
            { text: '' },
            { text: '  Core strengths:', color: '#60a5fa' },
            { text: '  → Scalable REST API architecture', color: '#94a3b8' },
            { text: '  → Real-time WebSocket systems', color: '#94a3b8' },
            { text: '  → Payment integrations (Razorpay, Stripe)', color: '#94a3b8' },
            { text: '  → Cloud deployments (AWS, Docker)', color: '#94a3b8' },
            { text: '  → Authentication (JWT, OAuth 2.0, Google Auth)', color: '#94a3b8' },
            { text: '' },
            { text: '└────────────────────────────────────────────────┘', color: '#3b82f6' },
        ],
    }),

    skills: () => ({
        type: 'info',
        content: [
            { text: '┌─ Technical Skills ─────────────────────────────┐', color: '#8b5cf6' },
            { text: '' },
            { text: '  Languages    ', color: '#f59e0b', bold: true, inline: true, rest: 'JavaScript, TypeScript, Python, C' },
            { text: '  Backend      ', color: '#10b981', bold: true, inline: true, rest: 'Node.js, Express.js, REST API, WebSockets' },
            { text: '  Auth         ', color: '#10b981', bold: true, inline: true, rest: 'JWT, OAuth 2.0, Google Authenticator' },
            { text: '  Databases    ', color: '#f59e0b', bold: true, inline: true, rest: 'MongoDB, MySQL, PostgreSQL, Redis' },
            { text: '  Frontend     ', color: '#60a5fa', bold: true, inline: true, rest: 'React, Tailwind CSS, Redux Toolkit' },
            { text: '  Cloud        ', color: '#ef4444', bold: true, inline: true, rest: 'AWS, Docker, Vercel, Render' },
            { text: '  Payments     ', color: '#ec4899', bold: true, inline: true, rest: 'Razorpay, Stripe, Apple IAP' },
            { text: '  Comms        ', color: '#ec4899', bold: true, inline: true, rest: 'MSG91, Twilio, FCM (Firebase)' },
            { text: '  Tools        ', color: '#94a3b8', bold: true, inline: true, rest: 'Git, Postman, VS Code, GitHub Copilot' },
            { text: '' },
            { text: '└────────────────────────────────────────────────┘', color: '#8b5cf6' },
        ],
    }),

    experience: () => ({
        type: 'info',
        content: [
            { text: '┌─ Work Experience ──────────────────────────────┐', color: '#06b6d4' },
            { text: '' },
            { text: '  [LATEST]', color: '#3b82f6', bold: true },
            { text: '  MERN Stack Developer', color: '#f8fafc', bold: true },
            { text: '  Softkingo Technology Pvt. Ltd. · Noida', color: '#94a3b8' },
            { text: '  Feb 2026 — Sep 2026', color: '#6b7280' },
            { text: '  → 3 full-stack apps, AWS cloud deployments', color: '#cbd5e1' },
            { text: '  → Twilio, MSG91, Google Auth integrations', color: '#cbd5e1' },
            { text: '' },
            { text: '  Junior-Associate Developer', color: '#f8fafc', bold: true },
            { text: '  Xapotech Systems Pvt. Ltd. · Noida', color: '#94a3b8' },
            { text: '  Apr 2025 — Feb 2026', color: '#6b7280' },
            { text: '  → 5+ live projects, OAuth 2.0, RBAC, Docker', color: '#cbd5e1' },
            { text: '  → FCM push notifications, rate limiting', color: '#cbd5e1' },
            { text: '' },
            { text: '  Full-Stack Developer Trainee', color: '#f8fafc', bold: true },
            { text: '  Croma Campus Pvt. Ltd. · Noida', color: '#94a3b8' },
            { text: '  Jul 2024 — Dec 2024', color: '#6b7280' },
            { text: '  → MERN stack, Python, REST APIs', color: '#cbd5e1' },
            { text: '' },
            { text: '└────────────────────────────────────────────────┘', color: '#06b6d4' },
        ],
    }),

    projects: () => ({
        type: 'info',
        content: [
            { text: '┌─ Featured Projects ────────────────────────────┐', color: '#ec4899' },
            { text: '' },
            { text: '  1. Going-OutCO', color: '#60a5fa', bold: true },
            { text: '     Production · 10,000+ users', color: '#6b7280' },
            { text: '     Node.js, React, AWS, Redis, Razorpay, FCM', color: '#94a3b8' },
            { text: '' },
            { text: '  2. Ezydash', color: '#60a5fa', bold: true },
            { text: '     Full-stack MERN · High Concurrency', color: '#6b7280' },
            { text: '     MySQL, Stripe, Google OAuth, AWS ALB', color: '#94a3b8' },
            { text: '' },
            { text: '  3. HRMS Lite', color: '#60a5fa', bold: true },
            { text: '     HR Management System', color: '#6b7280' },
            { text: '     React, Django REST, MongoDB, Vercel', color: '#94a3b8' },
            { text: '' },
            { text: '  4. E-Commerce Platform', color: '#60a5fa', bold: true },
            { text: '     MERN + Stripe · Redis caching', color: '#6b7280' },
            { text: '' },
            { text: '  5. Job Portal   6. Hotel Booking System', color: '#60a5fa', bold: true },
            { text: '     MERN stack applications', color: '#6b7280' },
            { text: '' },
            { text: '  Tip: type "goto projects" to see visual cards', color: '#6b7280' },
            { text: '└────────────────────────────────────────────────┘', color: '#ec4899' },
        ],
    }),

    education: () => ({
        type: 'info',
        content: [
            { text: '┌─ Education & Certifications ───────────────────┐', color: '#f59e0b' },
            { text: '' },
            { text: '  B.Tech — Computer Science & Engineering', color: '#f8fafc', bold: true },
            { text: '  Hi-Tech Institute of Engineering & Technology', color: '#94a3b8' },
            { text: '  Ghaziabad, Uttar Pradesh · 2025 · 7 CGPA', color: '#6b7280' },
            { text: '' },
            { text: '  Certifications:', color: '#f59e0b' },
            { text: '  ✓ MERN Stack — Croma Institute Noida (2024)', color: '#34d399' },
            { text: '  ✓ Python Advanced — Croma Institute Noida (2024)', color: '#34d399' },
            { text: '' },
            { text: '└────────────────────────────────────────────────┘', color: '#f59e0b' },
        ],
    }),

    contact: () => ({
        type: 'info',
        content: [
            { text: '┌─ Contact Information ──────────────────────────┐', color: '#34d399' },
            { text: '' },
            { text: '  Email   ', color: '#60a5fa', bold: true, inline: true, rest: 'shivamsrivastava54321@gmail.com' },
            { text: '  Phone   ', color: '#60a5fa', bold: true, inline: true, rest: '+91 7054557595' },
            { text: '  Location', color: '#60a5fa', bold: true, inline: true, rest: 'Ghaziabad, Uttar Pradesh, India' },
            { text: '' },
            { text: '  Available for freelance & full-time roles.', color: '#94a3b8' },
            { text: '  Type "goto contact" to open the contact form.', color: '#6b7280' },
            { text: '' },
            { text: '└────────────────────────────────────────────────┘', color: '#34d399' },
        ],
    }),

    links: () => ({
        type: 'info',
        content: [
            { text: '┌─ Links & Profiles ─────────────────────────────┐', color: '#a78bfa' },
            { text: '' },
            { text: '  GitHub    ', color: '#f8fafc', bold: true, inline: true, rest: 'github.com/Shivamsrivastava-321', link: 'https://github.com/Shivamsrivastava-321' },
            { text: '  LinkedIn  ', color: '#f8fafc', bold: true, inline: true, rest: 'linkedin.com/in/shivam-srivastavaa123', link: 'https://www.linkedin.com/in/shivam-srivastavaa123/' },
            { text: '  Email     ', color: '#f8fafc', bold: true, inline: true, rest: 'shivamsrivastava54321@gmail.com', link: 'mailto:shivamsrivastava54321@gmail.com' },
            { text: '' },
            { text: '└────────────────────────────────────────────────┘', color: '#a78bfa' },
        ],
    }),

    clear: () => ({ type: 'clear' }),
    exit: () => ({ type: 'exit' }),
};

const WELCOME = [
    { text: ' _____ _     _                         ', color: '#3b82f6' },
    { text: '/ ____| |   (_)                        ', color: '#3b82f6' },
    { text: '| (___ | |__  ___   ____ _ _ __ ___   ', color: '#60a5fa' },
    { text: " \\___ \\| '_ \\| \\ \\ / / _` | '_ ` _ \\ ", color: '#8b5cf6' },
    { text: ' ____) | | | | |\\ V / (_| | | | | | | ', color: '#a78bfa' },
    { text: '|_____/|_| |_|_| \\_/ \\__,_|_| |_| |_| ', color: '#c4b5fd' },
    { text: '' },
    { text: 'portfolio-cli v1.0.0 · Shivam Srivastava', color: '#94a3b8' },
    { text: "Type 'help' for available commands.", color: '#6b7280' },
    { text: '' },
];

/* ─── Terminal Line Renderer ───────────────────────────────────── */
const TerminalLine = ({ line }) => {
    if (!line.text && !line.inline) {
        return <div className="h-3" />;
    }
    return (
        <div className="leading-relaxed text-sm" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            {line.inline ? (
                <span>
                    <span style={{ color: line.color || '#cbd5e1', fontWeight: line.bold ? 600 : 400 }}>
                        {line.text}
                    </span>
                    {line.link ? (
                        <a
                            href={line.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: '#60a5fa', textDecoration: 'underline', cursor: 'pointer' }}
                        >
                            {line.rest}
                        </a>
                    ) : (
                        <span style={{ color: '#cbd5e1' }}>{line.rest}</span>
                    )}
                </span>
            ) : (
                <span style={{ color: line.color || '#cbd5e1', fontWeight: line.bold ? 600 : 400 }}>
                    {line.text}
                </span>
            )}
        </div>
    );
};

/* ─── Main Terminal Component ──────────────────────────────────── */
const Terminal = ({ isOpen, onClose }) => {
    const [entries, setEntries] = useState([{ lines: WELCOME, id: 0 }]);
    const [input, setInput] = useState('');
    const [history, setHistory] = useState([]);
    const [historyIdx, setHistoryIdx] = useState(-1);
    const inputRef = useRef(null);
    const scrollRef = useRef(null);
    const entryId = useRef(1);

    // Auto-scroll to bottom
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [entries]);

    // Focus input when opened
    useEffect(() => {
        if (isOpen && inputRef.current) {
            setTimeout(() => inputRef.current?.focus(), 100);
        }
    }, [isOpen]);

    const processCommand = useCallback((raw) => {
        const trimmed = raw.trim().toLowerCase();
        const [cmd, ...args] = trimmed.split(/\s+/);

        // Add user input to display
        const userEntry = {
            id: entryId.current++,
            lines: [{ text: `$ ${raw}`, color: '#34d399' }],
            isCommand: true,
        };

        if (cmd === 'clear') {
            setEntries([{ lines: WELCOME, id: entryId.current++ }]);
            return;
        }

        if (cmd === 'exit') {
            onClose();
            return;
        }

        if (cmd === 'goto' && args[0]) {
            const target = document.getElementById(args[0]);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
                setEntries((prev) => [
                    ...prev,
                    userEntry,
                    {
                        id: entryId.current++,
                        lines: [{ text: `→ Navigating to #${args[0]}...`, color: '#34d399' }],
                    },
                ]);
            } else {
                setEntries((prev) => [
                    ...prev,
                    userEntry,
                    {
                        id: entryId.current++,
                        lines: [{ text: `✗ Section "#${args[0]}" not found. Try: about, skills, experience, projects, education, contact`, color: '#ef4444' }],
                    },
                ]);
            }
            return;
        }

        const handler = COMMANDS[cmd];
        if (handler) {
            const result = handler(args);
            if (result.type === 'clear') {
                setEntries([{ lines: WELCOME, id: entryId.current++ }]);
                return;
            }
            if (result.type === 'exit') {
                onClose();
                return;
            }
            setEntries((prev) => [...prev, userEntry, { id: entryId.current++, lines: result.content }]);
        } else if (trimmed === '') {
            setEntries((prev) => [...prev, userEntry]);
        } else {
            setEntries((prev) => [
                ...prev,
                userEntry,
                {
                    id: entryId.current++,
                    lines: [
                        { text: `✗ Command not found: ${cmd}`, color: '#ef4444' },
                        { text: "  Type 'help' to see available commands.", color: '#6b7280' },
                    ],
                },
            ]);
        }
    }, [onClose]);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            processCommand(input);
            if (input.trim()) setHistory((h) => [input, ...h]);
            setHistoryIdx(-1);
            setInput('');
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            const next = Math.min(historyIdx + 1, history.length - 1);
            setHistoryIdx(next);
            setInput(history[next] || '');
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            const next = Math.max(historyIdx - 1, -1);
            setHistoryIdx(next);
            setInput(next === -1 ? '' : history[next]);
        } else if (e.key === 'Escape') {
            onClose();
        } else if (e.key === 'l' && e.ctrlKey) {
            e.preventDefault();
            setEntries([{ lines: WELCOME, id: entryId.current++ }]);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: 40, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 40, scale: 0.96 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="fixed inset-0 z-[9990] flex items-end justify-center p-4 sm:p-6 pointer-events-none"
                >
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm pointer-events-auto"
                        onClick={onClose}
                    />

                    {/* Terminal window */}
                    <div
                        className="relative w-full max-w-3xl pointer-events-auto"
                        style={{ marginBottom: 'env(safe-area-inset-bottom)' }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Title bar */}
                        <div
                            className="flex items-center justify-between px-4 py-3 rounded-t-xl border-b"
                            style={{
                                background: 'rgba(15, 15, 25, 0.98)',
                                borderColor: 'rgba(255,255,255,0.08)',
                            }}
                        >
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                            </div>
                            <div className="flex items-center gap-2 text-xs text-gray-500" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                                <TerminalIcon size={12} />
                                <span>portfolio-cli — bash</span>
                            </div>
                            <button
                                onClick={onClose}
                                className="text-gray-600 hover:text-gray-300 transition-colors p-1 rounded"
                                aria-label="Close terminal"
                            >
                                <X size={14} />
                            </button>
                        </div>

                        {/* Output area */}
                        <div
                            ref={scrollRef}
                            className="overflow-y-auto px-4 py-4 space-y-0.5"
                            style={{
                                background: 'rgba(8, 8, 16, 0.99)',
                                height: '380px',
                                fontFamily: "'JetBrains Mono', monospace",
                            }}
                        >
                            {entries.map((entry) => (
                                <div key={entry.id} className={entry.isCommand ? 'mt-2' : ''}>
                                    {entry.lines.map((line, i) => (
                                        <TerminalLine key={i} line={line} />
                                    ))}
                                </div>
                            ))}
                        </div>

                        {/* Input row */}
                        <div
                            className="flex items-center gap-3 px-4 py-3 rounded-b-xl border-t"
                            style={{
                                background: 'rgba(8, 8, 16, 0.99)',
                                borderColor: 'rgba(255,255,255,0.06)',
                            }}
                        >
                            <span className="text-green-400 text-sm shrink-0" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                                shivam@portfolio
                                <span className="text-blue-400">:~$</span>
                            </span>
                            <input
                                ref={inputRef}
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleKeyDown}
                                className="flex-1 bg-transparent outline-none text-sm text-gray-200 caret-blue-400"
                                style={{ fontFamily: "'JetBrains Mono', monospace" }}
                                placeholder="type a command..."
                                autoComplete="off"
                                spellCheck={false}
                                aria-label="Terminal input"
                            />
                            <span
                                className="w-2 h-4 bg-blue-400 opacity-80 shrink-0"
                                style={{ animation: 'blink 1s step-end infinite' }}
                                aria-hidden="true"
                            />
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Terminal;
