import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { label: 'Services', href: '#services' },
        { label: 'Process', href: '#process' },
        { label: 'Gallery', href: '#portfolio' },
        { label: 'Book Now', href: '#booking', isPrimary: true }
    ];

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{
                position: 'fixed',
                top: scrolled ? '1rem' : '2rem',
                left: 0,
                right: 0,
                margin: '0 auto',
                width: scrolled ? 'calc(100% - 2rem)' : 'calc(100% - 4rem)',
                maxWidth: scrolled ? '1200px' : '1400px',
                zIndex: 1000,
                transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
            }}
        >
            <div style={{
                background: scrolled
                    ? 'rgba(10, 10, 10, 0.85)'
                    : 'rgba(10, 10, 10, 0.7)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: scrolled ? '16px' : '20px',
                padding: scrolled ? '0.75rem 1.5rem' : '1rem 2rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                boxShadow: scrolled
                    ? '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
                    : '0 4px 24px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
                transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
            }}>
                {/* Logo */}
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                        fontSize: scrolled ? '1.25rem' : '1.5rem',
                        fontFamily: 'Playfair Display, serif',
                        fontWeight: 700,
                        color: '#ffffff',
                        letterSpacing: '0.05em',
                        cursor: 'pointer',
                        transition: 'font-size 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}
                >
                    <span style={{
                        width: '8px',
                        height: '8px',
                        background: 'linear-gradient(135deg, #cc3333, #ff4444)',
                        borderRadius: '50%',
                        boxShadow: '0 0 12px rgba(204, 51, 51, 0.6)'
                    }} />
                    <span style={{
                        color: '#fff',
                        textShadow: `
                            0 0 5px #cc3333,
                            0 0 10px #cc3333,
                            0 0 20px #cc3333,
                            0 0 40px #cc3333
                        `,
                        fontFamily: 'Playfair Display, serif',
                        fontWeight: 700,
                        letterSpacing: '0.05em',
                        animation: 'neon-flicker 3s infinite alternate'
                    }}>
                        KishaTattoo
                    </span>
                </motion.div>

                {/* Desktop Navigation */}
                <div style={{
                    display: 'flex',
                    gap: '0.5rem',
                    alignItems: 'center'
                }}>
                    {navItems.map((item, index) => (
                        item.isPrimary ? (
                            <motion.a
                                key={index}
                                href={item.href}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                style={{
                                    textDecoration: 'none',
                                    padding: '0.625rem 1.5rem',
                                    background: 'linear-gradient(135deg, #cc3333, #aa2222)',
                                    color: '#ffffff',
                                    fontFamily: 'Inter, sans-serif',
                                    fontSize: '0.875rem',
                                    fontWeight: 600,
                                    borderRadius: '10px',
                                    border: 'none',
                                    cursor: 'pointer',
                                    letterSpacing: '0.02em',
                                    boxShadow: '0 4px 16px rgba(204, 51, 51, 0.3)',
                                    transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.boxShadow = '0 6px 24px rgba(204, 51, 51, 0.5)';
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(204, 51, 51, 0.3)';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                }}
                            >
                                {item.label}
                            </motion.a>
                        ) : (
                            <motion.a
                                key={index}
                                href={item.href}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                style={{
                                    textDecoration: 'none',
                                    color: 'rgba(255, 255, 255, 0.7)',
                                    fontFamily: 'Inter, sans-serif',
                                    fontSize: '0.875rem',
                                    fontWeight: 500,
                                    padding: '0.625rem 1rem',
                                    borderRadius: '8px',
                                    transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
                                    position: 'relative',
                                    letterSpacing: '0.01em'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.color = '#ffffff';
                                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
                                    e.currentTarget.style.background = 'transparent';
                                }}
                            >
                                {item.label}
                            </motion.a>
                        )
                    ))}

                    {/* Theme Toggle */}
                    <motion.button
                        onClick={toggleTheme}
                        whileHover={{ scale: 1.1, rotate: 180 }}
                        whileTap={{ scale: 0.9 }}
                        style={{
                            background: 'rgba(255, 255, 255, 0.08)',
                            border: '1px solid rgba(255, 255, 255, 0.12)',
                            borderRadius: '10px',
                            width: '40px',
                            height: '40px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            color: '#ffffff',
                            padding: 0,
                            fontSize: '1.25rem',
                            transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
                            marginLeft: '0.5rem'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
                            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                        }}
                    >
                        {theme === 'light' ? '🌙' : '☀️'}
                    </motion.button>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
