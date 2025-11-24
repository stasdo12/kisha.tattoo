import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import useMediaQuery from '../hooks/useMediaQuery';

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { isMobile, isTablet } = useMediaQuery();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when clicking outside or on link
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [mobileMenuOpen]);

    const navItems = [
        { label: 'Services', href: '#services' },
        { label: 'Process', href: '#process' },
        { label: 'Gallery', href: '#portfolio' },
        { label: 'Book Now', href: '#booking', isPrimary: true }
    ];

    const handleNavClick = (href) => {
        setMobileMenuOpen(false);
        // Smooth scroll to section
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                style={{
                    position: 'fixed',
                    top: isMobile ? '0.5rem' : (scrolled ? '1rem' : '2rem'),
                    left: 0,
                    right: 0,
                    margin: '0 auto',
                    width: isMobile ? 'calc(100% - 1rem)' : (scrolled ? 'calc(100% - 2rem)' : 'calc(100% - 4rem)'),
                    maxWidth: isMobile ? '100%' : (scrolled ? '1200px' : '1400px'),
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
                    borderRadius: isMobile ? '12px' : (scrolled ? '16px' : '20px'),
                    padding: isMobile ? '0.75rem 1rem' : (scrolled ? '0.75rem 1.5rem' : '1rem 2rem'),
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
                            fontSize: isMobile ? '0.85rem' : (scrolled ? '1rem' : '1.2rem'),
                            fontFamily: 'var(--font-heading)',
                            fontWeight: 700,
                            letterSpacing: '0.05em',
                            cursor: 'pointer',
                            transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: isMobile ? '0.3rem' : '0.4rem',
                            padding: isMobile ? '0.2rem 0.5rem' : '0.3rem 0.8rem',
                            borderRadius: '50px'
                        }}
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                        <span style={{
                            width: isMobile ? '4px' : '5px',
                            height: isMobile ? '4px' : '5px',
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
                            width: isMobile ? '4px' : '5px',
                            height: isMobile ? '4px' : '5px',
                            background: '#cc3333',
                            borderRadius: '50%',
                            boxShadow: '0 0 6px rgba(204, 51, 51, 0.6)'
                        }} />
                    </motion.div>

                    {/* Desktop/Tablet Navigation */}
                    {!isMobile && (
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
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleNavClick(item.href);
                                        }}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        style={{
                                            textDecoration: 'none',
                                            padding: isTablet ? '0.5rem 1.2rem' : '0.625rem 1.5rem',
                                            background: 'linear-gradient(135deg, #cc3333, #aa2222)',
                                            color: 'var(--overlay-text)',
                                            fontFamily: 'var(--font-body)',
                                            fontSize: isTablet ? '0.8rem' : '0.875rem',
                                            fontWeight: 600,
                                            borderRadius: '10px',
                                            border: 'none',
                                            cursor: 'pointer',
                                            letterSpacing: '0.02em',
                                            boxShadow: '0 4px 16px rgba(204, 51, 51, 0.3)',
                                            transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
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
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleNavClick(item.href);
                                        }}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        style={{
                                            textDecoration: 'none',
                                            color: 'var(--text-secondary)',
                                            fontFamily: 'var(--font-body)',
                                            fontSize: isTablet ? '0.8rem' : '0.875rem',
                                            fontWeight: 500,
                                            padding: isTablet ? '0.5rem 0.8rem' : '0.625rem 1rem',
                                            borderRadius: '8px',
                                            transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
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
                            >
                                {theme === 'light' ? '🌙' : '☀️'}
                            </motion.button>
                        </div>
                    )}

                    {/* Mobile Menu Button */}
                    {isMobile && (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            {/* Theme Toggle */}
                            <motion.button
                                onClick={toggleTheme}
                                whileTap={{ scale: 0.9 }}
                                style={{
                                    background: 'var(--card-bg)',
                                    border: '1px solid var(--glass-border)',
                                    borderRadius: '8px',
                                    width: '36px',
                                    height: '36px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    fontSize: '1.1rem',
                                    padding: 0
                                }}
                            >
                                {theme === 'light' ? '🌙' : '☀️'}
                            </motion.button>

                            {/* Hamburger Button */}
                            <motion.button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                whileTap={{ scale: 0.9 }}
                                style={{
                                    background: 'transparent',
                                    border: 'none',
                                    cursor: 'pointer',
                                    padding: '0.5rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '4px',
                                    zIndex: 1001
                                }}
                                aria-label="Toggle menu"
                            >
                                <motion.span
                                    animate={mobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                                    style={{
                                        width: '24px',
                                        height: '2px',
                                        background: 'var(--text-color)',
                                        borderRadius: '2px',
                                        transition: 'all 0.3s'
                                    }}
                                />
                                <motion.span
                                    animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                                    style={{
                                        width: '24px',
                                        height: '2px',
                                        background: 'var(--text-color)',
                                        borderRadius: '2px',
                                        transition: 'all 0.3s'
                                    }}
                                />
                                <motion.span
                                    animate={mobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                                    style={{
                                        width: '24px',
                                        height: '2px',
                                        background: 'var(--text-color)',
                                        borderRadius: '2px',
                                        transition: 'all 0.3s'
                                    }}
                                />
                            </motion.button>
                        </div>
                    )}
                </div>
            </motion.nav>

            {/* Mobile Sidebar Menu */}
            <AnimatePresence>
                {isMobile && mobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={() => setMobileMenuOpen(false)}
                            style={{
                                position: 'fixed',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: 'rgba(0, 0, 0, 0.5)',
                                backdropFilter: 'blur(4px)',
                                zIndex: 999
                            }}
                        />

                        {/* Sidebar */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                            style={{
                                position: 'fixed',
                                top: 0,
                                right: 0,
                                bottom: 0,
                                width: '80%',
                                maxWidth: '320px',
                                background: 'var(--bg-color)',
                                borderLeft: '1px solid var(--glass-border)',
                                boxShadow: '-4px 0 24px rgba(0, 0, 0, 0.2)',
                                zIndex: 1000,
                                overflowY: 'auto',
                                padding: '5rem 2rem 2rem'
                            }}
                        >
                            {/* Mobile Menu Items */}
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.5rem'
                            }}>
                                {navItems.map((item, index) => (
                                    <motion.a
                                        key={index}
                                        href={item.href}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleNavClick(item.href);
                                        }}
                                        initial={{ x: 50, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: index * 0.1 }}
                                        whileTap={{ scale: 0.98 }}
                                        style={{
                                            textDecoration: 'none',
                                            color: item.isPrimary ? '#ffffff' : 'var(--text-color)',
                                            fontFamily: 'var(--font-body)',
                                            fontSize: '1.1rem',
                                            fontWeight: item.isPrimary ? 600 : 500,
                                            padding: '1rem 1.5rem',
                                            borderRadius: '12px',
                                            background: item.isPrimary
                                                ? 'linear-gradient(135deg, #cc3333, #aa2222)'
                                                : 'var(--card-bg)',
                                            border: '1px solid var(--glass-border)',
                                            transition: 'all 0.3s',
                                            minHeight: '56px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            boxShadow: item.isPrimary ? '0 4px 16px rgba(204, 51, 51, 0.3)' : 'none'
                                        }}
                                    >
                                        {item.label}
                                    </motion.a>
                                ))}
                            </div>

                            {/* Footer Info */}
                            <div style={{
                                marginTop: '3rem',
                                paddingTop: '2rem',
                                borderTop: '1px solid var(--glass-border)',
                                color: 'var(--text-muted)',
                                fontSize: '0.875rem',
                                textAlign: 'center'
                            }}>
                                <p style={{ margin: 0 }}>KishaTattoo Studio</p>
                                <p style={{ margin: '0.5rem 0 0' }}>Munich, Germany</p>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
