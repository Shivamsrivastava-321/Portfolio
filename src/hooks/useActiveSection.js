import { useState, useEffect, useRef } from 'react';

/**
 * Tracks which section is currently in view using IntersectionObserver.
 * @param {string[]} sectionIds - Array of section element IDs to observe.
 * @returns {string} The ID of the currently active/visible section.
 */
const useActiveSection = (sectionIds) => {
    const [activeSection, setActiveSection] = useState(sectionIds[0] || '');
    const observerRef = useRef(null);

    useEffect(() => {
        if (observerRef.current) {
            observerRef.current.disconnect();
        }

        observerRef.current = new IntersectionObserver(
            (entries) => {
                // Find the entry that is most visible
                let maxRatio = 0;
                let activeId = null;
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
                        maxRatio = entry.intersectionRatio;
                        activeId = entry.target.id;
                    }
                });
                if (activeId) setActiveSection(activeId);
            },
            {
                rootMargin: '-40% 0px -40% 0px',
                threshold: [0, 0.1, 0.25, 0.5],
            }
        );

        sectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observerRef.current.observe(el);
        });

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, [sectionIds.join(',')]);

    return activeSection;
};

export default useActiveSection;
