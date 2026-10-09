import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CustomCursor from './CustomCursor';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Layout = ({ children, onTerminalOpen }) => {

    // ── Lenis smooth scroll + GSAP ScrollTrigger sync ──────────────
    useEffect(() => {
        let lenis;
        let rafId;
        let gsapTickerCallback;

        const initLenis = async () => {
            try {
                const LenisModule = await import('lenis');
                const LenisClass = LenisModule.default;

                lenis = new LenisClass({
                    duration: 1.1,
                    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                    smoothWheel: true,
                    wheelMultiplier: 0.9,
                    touchMultiplier: 1.5,
                });

                // Connect Lenis to GSAP ScrollTrigger
                lenis.on('scroll', ScrollTrigger.update);

                const raf = (time) => {
                    lenis.raf(time);
                    rafId = requestAnimationFrame(raf);
                };
                rafId = requestAnimationFrame(raf);

                // Override GSAP's scroller so ScrollTrigger uses lenis
                gsapTickerCallback = (time) => {
                    lenis.raf(time * 1000);
                };
                gsap.ticker.add(gsapTickerCallback);
                gsap.ticker.lagSmoothing(0);

            } catch (e) {
                // Lenis failed to load, fall back gracefully
                console.warn('Lenis smooth scroll unavailable, using native scroll.');
            }
        };

        initLenis();

        return () => {
            if (rafId) cancelAnimationFrame(rafId);
            if (lenis) lenis.destroy();
            if (gsapTickerCallback) gsap.ticker.remove(gsapTickerCallback);
        };
    }, []);

    // ── GSAP scroll-triggered section reveals ──────────────────────
    useEffect(() => {
        const ctx = gsap.context(() => {
            // Stagger reveal for section headings
            gsap.utils.toArray('[data-reveal]').forEach((el) => {
                gsap.from(el, {
                    y: 40,
                    opacity: 0,
                    duration: 0.9,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 88%',
                        once: true,
                    },
                });
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <div
            className="min-h-screen font-sans selection:bg-blue-500/20"
            style={{ background: '#000', color: '#f1f5f9' }}
        >
            {/* Custom cursor — desktop only */}
            <CustomCursor />

            {/* Navigation */}
            <Navbar onTerminalOpen={onTerminalOpen} />

            {/* Page content */}
            <main>{children}</main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Layout;
