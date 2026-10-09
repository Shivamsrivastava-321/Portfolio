import React, { useState, useEffect, useCallback } from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Terminal from './components/Terminal';

function App() {
    const [terminalOpen, setTerminalOpen] = useState(false);

    const openTerminal = useCallback(() => setTerminalOpen(true), []);
    const closeTerminal = useCallback(() => setTerminalOpen(false), []);

    // Global keyboard shortcut: Ctrl + ` to toggle terminal
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === '`' && (e.ctrlKey || e.metaKey)) {
                e.preventDefault();
                setTerminalOpen((o) => !o);
            }
            if (e.key === 'Escape' && terminalOpen) {
                closeTerminal();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [terminalOpen, closeTerminal]);

    return (
        <Layout onTerminalOpen={openTerminal}>
            <Hero />
            <Skills />
            <Experience />
            <Projects />
            <Education />
            <Contact />

            {/* Interactive developer terminal — toggled via Navbar or Ctrl+` */}
            <Terminal isOpen={terminalOpen} onClose={closeTerminal} />
        </Layout>
    );
}

export default App;
