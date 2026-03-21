import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import useMediaQuery from '../../hooks/useMediaQuery';
import '../../styles/graphics.css';

const GraphicsHeader = () => {
    const [activeSection, setActiveSection] = useState('home');
    const { isMobile } = useMediaQuery();

    const navItems = [
        { label: 'Home', id: 'home' },
        { label: 'Works', id: 'works' },
        { label: 'About', id: 'about' },
        { label: 'Stories', id: 'stories' },
        { label: 'Contact', id: 'contact' },
    ];

    // Smooth scroll function
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offsetTop = sectionId === 'home' ? 0 : element.offsetTop - 100;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        } else if (sectionId === 'home') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    };

    // Scroll spy
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 300;

            // Check if at top for home
            if (window.scrollY < 200) {
                setActiveSection('home');
                return;
            }

            const sections = navItems.map(item => document.getElementById(item.id)).filter(Boolean);

            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionBottom = sectionTop + section.offsetHeight;

                if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                    setActiveSection(section.id);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (isMobile) {
        return (
            <header style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                background: '#F2F2F2',
                padding: '1rem',
                borderBottom: '2px solid #0D0D0D',
            }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <div style={{ width: '4px', height: '4px', background: '#0D0D0D', borderRadius: '50%' }} />
                        <span style={{
                            fontFamily: "'PP Neue Montreal', system-ui, sans-serif",
                            fontWeight: 500,
                            fontSize: '16px',
                            letterSpacing: '-0.02em',
                            color: '#0D0D0D',
                        }}>Kisha</span>
                    </div>
                    <Link to="/" style={{
                        fontFamily: "'PP Neue Montreal', system-ui, sans-serif",
                        fontWeight: 500,
                        fontSize: '16px',
                        letterSpacing: '-0.02em',
                        color: '#0D0D0D',
                        textDecoration: 'none',
                    }}>
                        Tattoo
                    </Link>
                </div>
            </header>
        );
    }

    return (
        <>
            {/* Top Header Bar */}
            <header style={{
                position: 'fixed',
                top: '20px',
                left: '40px',
                right: '40px',
                zIndex: 1000,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingBottom: '12px',
                borderBottom: '2px solid #0D0D0D',
            }}>
                {/* Left: Logo */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <div style={{
                        width: '4px',
                        height: '4px',
                        background: '#0D0D0D',
                        borderRadius: '50%',
                    }} />
                    <span style={{
                        fontFamily: "'PP Neue Montreal', system-ui, sans-serif",
                        fontWeight: 500,
                        fontSize: '16px',
                        lineHeight: '19px',
                        letterSpacing: '-0.02em',
                        color: '#0D0D0D',
                    }}>
                        Kisha
                    </span>
                </div>

                {/* Center: タトゥ */}
                <div style={{
                    position: 'absolute',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    fontFamily: "'PP Neue Montreal', system-ui, sans-serif",
                    fontWeight: 500,
                    fontSize: '12px',
                    lineHeight: '14px',
                    letterSpacing: '-0.02em',
                    color: '#0D0D0D',
                }}>
                    [ タトゥ ]
                </div>

                {/* Right: Back to Tattoo */}
                <Link
                    to="/"
                    style={{
                        fontFamily: "'PP Neue Montreal', system-ui, sans-serif",
                        fontWeight: 500,
                        fontSize: '16px',
                        lineHeight: '19px',
                        textAlign: 'right',
                        letterSpacing: '-0.02em',
                        color: '#0D0D0D',
                        textDecoration: 'none',
                    }}
                >
                    Tattoo
                </Link>
            </header>

            {/* Right Vertical Menu */}
            <nav style={{
                position: 'fixed',
                right: '40px',
                top: '492px',
                zIndex: 1000,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                gap: '8px',
            }}>
                {navItems.map((item) => {
                    const isActive = activeSection === item.id;

                    return (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            style={{
                                fontFamily: "'PP Neue Montreal', system-ui, sans-serif",
                                fontWeight: 500,
                                fontSize: '16px',
                                lineHeight: '19px',
                                textAlign: 'right',
                                letterSpacing: '-0.02em',
                                color: isActive ? '#F2F2F2' : '#0D0D0D',
                                background: isActive ? '#0D0D0D' : 'transparent',
                                padding: '4px',
                                border: 'none',
                                cursor: 'pointer',
                                transition: 'all 0.2s',
                            }}
                        >
                            {item.label}
                        </button>
                    );
                })}
            </nav>
        </>
    );
};

export default GraphicsHeader;
