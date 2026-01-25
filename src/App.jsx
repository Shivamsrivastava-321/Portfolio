import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
    return (
        <Layout>
            <Hero />
            <Skills />
            <Experience />
            <Projects />
            <Education />
            <Contact />
        </Layout>
    );
}

export default App;
