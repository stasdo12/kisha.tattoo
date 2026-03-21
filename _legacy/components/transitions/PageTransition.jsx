import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PageTransition = ({ children, location }) => {
    const pageVariants = {
        initial: {
            opacity: 0,
            y: 20,
        },
        enter: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
                ease: [0.4, 0, 0.2, 1],
            },
        },
        exit: {
            opacity: 0,
            y: -20,
            transition: {
                duration: 0.3,
                ease: [0.4, 0, 0.2, 1],
            },
        },
    };

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={location}
                initial="initial"
                animate="enter"
                exit="exit"
                variants={pageVariants}
                style={{
                    width: '100%',
                    minHeight: '100vh',
                }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
};

export default PageTransition;
