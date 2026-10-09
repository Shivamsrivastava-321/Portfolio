import React, { useEffect, useRef, useState } from 'react';

/**
 * Custom smooth cursor — dot + ring follower.
 * Only renders on desktop (pointer: fine) devices.
 */
const CustomCursor = () => {
    const dotRef = useRef(null);
    const ringRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);
    const stateRef = useRef({ mouseX: 0, mouseY: 0, ringX: 0, ringY: 0, rafId: null });

    useEffect(() => {
        // Only activate on fine-pointer (mouse) devices
        if (!window.matchMedia('(pointer: fine)').matches) return;

        const state = stateRef.current;

        const onMouseMove = (e) => {
            state.mouseX = e.clientX;
            state.mouseY = e.clientY;
            if (!isVisible) setIsVisible(true);
        };

        // Use event delegation for hover state — works for dynamically added elements
        const onMouseOver = (e) => {
            if (e.target.closest('a, button, [role="button"], input, textarea, select, label, [data-cursor-hover]')) {
                setIsHovering(true);
            }
        };
        const onMouseOut = (e) => {
            if (e.target.closest('a, button, [role="button"], input, textarea, select, label, [data-cursor-hover]')) {
                setIsHovering(false);
            }
        };

        const onMouseDown = () => setIsClicking(true);
        const onMouseUp = () => setIsClicking(false);
        const onMouseLeave = () => setIsVisible(false);
        const onMouseEnter = () => setIsVisible(true);

        const animate = () => {
            const { mouseX, mouseY } = state;

            // Dot follows cursor immediately
            if (dotRef.current) {
                dotRef.current.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
            }

            // Ring follows with lerp for smooth trailing
            state.ringX += (mouseX - state.ringX) * 0.12;
            state.ringY += (mouseY - state.ringY) * 0.12;
            if (ringRef.current) {
                ringRef.current.style.transform = `translate(${state.ringX - 20}px, ${state.ringY - 20}px)`;
            }

            state.rafId = requestAnimationFrame(animate);
        };

        state.rafId = requestAnimationFrame(animate);

        window.addEventListener('mousemove', onMouseMove, { passive: true });
        document.addEventListener('mouseover', onMouseOver);
        document.addEventListener('mouseout', onMouseOut);
        document.addEventListener('mousedown', onMouseDown);
        document.addEventListener('mouseup', onMouseUp);
        document.documentElement.addEventListener('mouseleave', onMouseLeave);
        document.documentElement.addEventListener('mouseenter', onMouseEnter);

        return () => {
            if (state.rafId) cancelAnimationFrame(state.rafId);
            window.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseover', onMouseOver);
            document.removeEventListener('mouseout', onMouseOut);
            document.removeEventListener('mousedown', onMouseDown);
            document.removeEventListener('mouseup', onMouseUp);
            document.documentElement.removeEventListener('mouseleave', onMouseLeave);
            document.documentElement.removeEventListener('mouseenter', onMouseEnter);
        };
    }, []);

    // Don't render on touch devices
    if (typeof window !== 'undefined' && !window.matchMedia('(pointer: fine)').matches) {
        return null;
    }

    return (
        <>
            {/* Dot — sharp, immediate */}
            <div
                ref={dotRef}
                aria-hidden="true"
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: isHovering ? '#8b5cf6' : '#3b82f6',
                    pointerEvents: 'none',
                    zIndex: 99999,
                    opacity: isVisible ? 1 : 0,
                    transition: 'opacity 0.3s, background 0.2s, width 0.2s, height 0.2s',
                    willChange: 'transform',
                    transform: 'translate(-50%, -50%)',
                    mixBlendMode: 'difference',
                    ...(isClicking && { width: 6, height: 6 }),
                }}
            />
            {/* Ring — smooth trailing */}
            <div
                ref={ringRef}
                aria-hidden="true"
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: isHovering ? 52 : 40,
                    height: isHovering ? 52 : 40,
                    borderRadius: '50%',
                    border: `1px solid ${isHovering ? 'rgba(139, 92, 246, 0.6)' : 'rgba(59, 130, 246, 0.4)'}`,
                    pointerEvents: 'none',
                    zIndex: 99998,
                    opacity: isVisible ? 1 : 0,
                    transition: 'opacity 0.3s, width 0.3s, height 0.3s, border-color 0.3s',
                    willChange: 'transform',
                    backdropFilter: isHovering ? 'blur(2px)' : 'none',
                }}
            />
        </>
    );
};

export default CustomCursor;
