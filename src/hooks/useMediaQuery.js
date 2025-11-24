import { useState, useEffect } from 'react';

/**
 * Custom hook for responsive breakpoints
 * @returns {Object} Breakpoint states
 */
export const useMediaQuery = () => {
    const [breakpoint, setBreakpoint] = useState({
        isMobile: false,
        isTablet: false,
        isDesktop: false,
        width: 0
    });

    useEffect(() => {
        // Check if window is defined (for SSR safety)
        if (typeof window === 'undefined') return;

        const updateBreakpoint = () => {
            const width = window.innerWidth;
            setBreakpoint({
                isMobile: width < 768,
                isTablet: width >= 768 && width < 1024,
                isDesktop: width >= 1024,
                width
            });
        };

        // Initial check
        updateBreakpoint();

        // Add resize listener
        window.addEventListener('resize', updateBreakpoint);

        // Cleanup
        return () => window.removeEventListener('resize', updateBreakpoint);
    }, []);

    return breakpoint;
};

export default useMediaQuery;
