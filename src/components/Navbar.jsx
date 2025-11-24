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
                    ? 'var(--glass-bg)'
                    : 'var(--card-bg)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid var(--glass-border)',
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
                {/* Logo and Social Icons Container */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem'
                }}>
                    {/* Logo */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        style={{
                            fontSize: scrolled ? '1rem' : '1.2rem', // Reduced size
                            fontFamily: 'var(--font-heading)',
                            fontWeight: 700,
                            letterSpacing: '0.05em',
                            cursor: 'pointer',
                            transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.4rem', // Reduced gap
                            padding: '0.3rem 0.8rem', // Reduced padding
                            borderRadius: '50px'
                        }}
                    >
                        <span style={{
                            width: '5px', // Reduced dot size
                            height: '5px',
                            background: '#cc3333',
                            borderRadius: '50%',
                            boxShadow: '0 0 6px rgba(204, 51, 51, 0.6)'
                        }} />
                        <span style={{
                            color: '#cc3333',
                            fontFamily: "'Cinzel', serif",
                            fontWeight: 700,
                            letterSpacing: '0.08em',
                            textShadow: '0 0 20px rgba(204, 51, 51, 0.3)'
                        }}>
                            KishaTattoo
                        </span>
                        <span style={{
                            width: '5px', // Reduced dot size
                            height: '5px',
                            background: '#cc3333',
                            borderRadius: '50%',
                            boxShadow: '0 0 6px rgba(204, 51, 51, 0.6)'
                        }} />
                    </motion.div>
                </div>


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
                                    color: 'var(--overlay-text)',
                                    fontFamily: 'var(--font-body)',
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
                                    color: 'var(--text-secondary)',
                                    fontFamily: 'var(--font-body)',
                                    fontSize: '0.875rem',
                                    fontWeight: 500,
                                    padding: '0.625rem 1rem',
                                    borderRadius: '8px',
                                    transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
                                    position: 'relative',
                                    letterSpacing: '0.01em'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.color = 'var(--text-color)';
                                    e.currentTarget.style.background = 'var(--card-bg-hover)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.color = 'var(--text-secondary)';
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
                            background: 'var(--card-bg)',
                            border: '1px solid var(--glass-border)',
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
                            e.currentTarget.style.background = 'var(--card-bg-hover)';
                            e.currentTarget.style.borderColor = 'var(--glass-border)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'var(--card-bg)';
                            e.currentTarget.style.borderColor = 'var(--glass-border)';
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
