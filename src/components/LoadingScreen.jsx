import React from 'react';
import { motion } from 'framer-motion';

// Simple full-screen loading overlay with a subtle animation
const LoadingScreen = () => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        style={{
            position: 'fixed',
            inset: 0,
            background: 'var(--bg-color)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
        }}
    >
        <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
            style={{
                width: '80px',
                height: '80px',
                border: '8px solid var(--primary)',
                borderTopColor: 'transparent',
                borderRadius: '50%',
            }}
        />
    </motion.div>
);

export default LoadingScreen;
