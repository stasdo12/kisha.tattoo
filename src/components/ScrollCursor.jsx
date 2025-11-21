import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Modern scroll cursor: a glowing, gradient‑border circle that follows the mouse.
// It rotates based on scroll direction (down = 0°, up = 180°) and slightly scales on hover.
const ScrollCursor = () => {
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const [visible, setVisible] = useState(false);
    const [direction, setDirection] = useState('down');

    useEffect(() => {
        const handleMouseMove = (e) => setPos({ x: e.clientX, y: e.clientY });
        const handleScroll = () => {
            const cur = window.scrollY;
            setDirection(cur > (window.prevScrollY || 0) ? 'down' : 'up');
            window.prevScrollY = cur;
        };
        const handleEnter = () => setVisible(true);
        const handleLeave = () => setVisible(false);

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('mouseenter', handleEnter);
        window.addEventListener('mouseleave', handleLeave);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mouseenter', handleEnter);
            window.removeEventListener('mouseleave', handleLeave);
        };
    }, []);

    const cursorStyle = {
        position: 'fixed',
        top: pos.y - 20,
        left: pos.x - 20,
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        border: '2px solid transparent',
        background: 'radial-gradient(circle at 30% 30%, var(--primary) 0%, transparent 70%)',
        backdropFilter: 'blur(4px)',
        pointerEvents: 'none',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--primary)',
        fontSize: '1rem',
        fontFamily: 'Inter, sans-serif',
        userSelect: 'none',
        willChange: 'transform, opacity',
    };

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    style={cursorStyle}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                        opacity: 0.9,
                        scale: 1,
                        rotate: direction === 'down' ? 0 : 180,
                    }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                    ⇣
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ScrollCursor;
