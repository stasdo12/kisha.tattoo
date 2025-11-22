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
                            fontSize: scrolled ? '1.25rem' : '1.5rem',
                            fontFamily: 'var(--font-heading)',
                            fontWeight: 700,
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
                            background: '#cc3333',
                            borderRadius: '50%'
                        }} />
                        <span style={{
                            color: '#cc3333',
                            fontFamily: 'var(--font-heading)',
                            fontWeight: 700,
                            letterSpacing: '0.05em'
                        }}>
                            KishaTattoo
                        </span>
                        <span style={{
                            width: '8px',
                            height: '8px',
                            background: '#cc3333',
                            borderRadius: '50%'
                        }} />
                    </motion.div>

                    {/* Social Media Icons */}
                    <div style={{
                        display: 'flex',
                        gap: '0.5rem',
                        alignItems: 'center'
                    }}>
                        {/* Instagram */}
                        <motion.a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                width: '36px',
                                height: '36px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                background: 'var(--card-bg)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid var(--glass-border)',
                                borderRadius: '10px',
                                cursor: 'pointer',
                                transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
                                textDecoration: 'none'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'linear-gradient(135deg, #833AB4, #FD1D1D, #FCAF45)';
                                e.currentTarget.style.borderColor = 'transparent';
                                e.currentTarget.style.boxShadow = '0 4px 16px rgba(253, 29, 29, 0.4)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'var(--card-bg)';
                                e.currentTarget.style.borderColor = 'var(--glass-border)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM12 7C13.93 7 14.17 7.007 14.97 7.048C15.72 7.086 16.13 7.222 16.41 7.333C16.78 7.481 17.04 7.66 17.31 7.93C17.58 8.2 17.759 8.46 17.907 8.83C18.018 9.11 18.154 9.52 18.192 10.27C18.233 11.07 18.24 11.31 18.24 13.24C18.24 15.17 18.233 15.41 18.192 16.21C18.154 16.96 18.018 17.37 17.907 17.65C17.759 18.02 17.58 18.28 17.31 18.55C17.04 18.82 16.78 18.999 16.41 19.147C16.13 19.258 15.72 19.394 14.97 19.432C14.17 19.473 13.93 19.48 12 19.48C10.07 19.48 9.83 19.473 9.03 19.432C8.28 19.394 7.87 19.258 7.59 19.147C7.22 18.999 6.96 18.82 6.69 18.55C6.42 18.28 6.241 18.02 6.093 17.65C5.982 17.37 5.846 16.96 5.808 16.21C5.767 15.41 5.76 15.17 5.76 13.24C5.76 11.31 5.767 11.07 5.808 10.27C5.846 9.52 5.982 9.11 6.093 8.83C6.241 8.46 6.42 8.2 6.69 7.93C6.96 7.66 7.22 7.481 7.59 7.333C7.87 7.222 8.28 7.086 9.03 7.048C9.83 7.007 10.07 7 12 7Z" fill="white" />
                                <path d="M12 9C10.343 9 9 10.343 9 12C9 13.657 10.343 15 12 15C13.657 15 15 13.657 15 12C15 10.343 13.657 9 12 9ZM12 13.5C11.172 13.5 10.5 12.828 10.5 12C10.5 11.172 11.172 10.5 12 10.5C12.828 10.5 13.5 11.172 13.5 12C13.5 12.828 12.828 13.5 12 13.5Z" fill="white" />
                                <circle cx="15.3" cy="8.7" r="0.533" fill="white" />
                            </svg>
                        </motion.a>

                        {/* Reddit */}
                        <motion.a
                            href="https://reddit.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                width: '36px',
                                height: '36px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                background: 'var(--card-bg)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid var(--glass-border)',
                                borderRadius: '10px',
                                cursor: 'pointer',
                                transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
                                textDecoration: 'none'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = '#FF4500';
                                e.currentTarget.style.borderColor = 'transparent';
                                e.currentTarget.style.boxShadow = '0 4px 16px rgba(255, 69, 0, 0.4)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'var(--card-bg)';
                                e.currentTarget.style.borderColor = 'var(--glass-border)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM17.14 13.9C17.18 14.11 17.2 14.33 17.2 14.55C17.2 16.69 14.88 18.42 12 18.42C9.12 18.42 6.8 16.69 6.8 14.55C6.8 14.33 6.82 14.11 6.86 13.9C6.33 13.64 5.96 13.09 5.96 12.45C5.96 11.57 6.68 10.85 7.56 10.85C8.03 10.85 8.46 11.05 8.75 11.37C9.77 10.67 11.14 10.22 12.65 10.17L13.32 7.17L15.38 7.63C15.42 8.28 15.96 8.8 16.62 8.8C17.31 8.8 17.87 8.24 17.87 7.55C17.87 6.86 17.31 6.3 16.62 6.3C16.11 6.3 15.67 6.61 15.48 7.05L13.08 6.53L12.31 10.17C13.87 10.21 15.28 10.66 16.32 11.38C16.61 11.06 17.04 10.86 17.51 10.86C18.39 10.86 19.11 11.58 19.11 12.46C19.11 13.09 18.74 13.64 18.21 13.9H17.14Z" fill="white" />
                                <circle cx="9.5" cy="13" r="0.9" fill="white" />
                                <circle cx="14.5" cy="13" r="0.9" fill="white" />
                                <path d="M14.5 15.5C14.5 15.5 13.5 16.5 12 16.5C10.5 16.5 9.5 15.5 9.5 15.5" stroke="white" strokeWidth="0.8" strokeLinecap="round" />
                            </svg>
                        </motion.a>

                        {/* Facebook */}
                        <motion.a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                width: '36px',
                                height: '36px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                background: 'var(--card-bg)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid var(--glass-border)',
                                borderRadius: '10px',
                                cursor: 'pointer',
                                transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
                                textDecoration: 'none'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = '#1877F2';
                                e.currentTarget.style.borderColor = 'transparent';
                                e.currentTarget.style.boxShadow = '0 4px 16px rgba(24, 119, 242, 0.4)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'var(--card-bg)';
                                e.currentTarget.style.borderColor = 'var(--glass-border)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2C6.477 2 2 6.477 2 12C2 16.991 5.657 21.128 10.438 21.878V14.891H7.898V12H10.438V9.797C10.438 7.291 11.93 5.907 14.215 5.907C15.309 5.907 16.453 6.102 16.453 6.102V8.562H15.193C13.95 8.562 13.563 9.333 13.563 10.124V12H16.336L15.893 14.891H13.563V21.878C18.343 21.128 22 16.991 22 12C22 6.477 17.523 2 12 2Z" fill="white" />
                            </svg>
                        </motion.a>
                    </div>
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
                                    color: 'rgba(255, 255, 255, 0.7)',
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
