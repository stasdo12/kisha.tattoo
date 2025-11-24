import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/index.css';

import galleryImage from '../assets/1.jpg';

// Generate dummy portfolio data
const generatePortfolio = (count) => {
    const items = [];
    const styles = ['Oni', 'Phoenix', 'Hannya', 'Dragon', 'Koi', 'Tiger'];
    for (let i = 0; i < count; i++) {
        items.push({
            id: i,
            title: `${styles[Math.floor(Math.random() * styles.length)]} Study #${i + 1}`,
            year: 2020 + Math.floor(Math.random() * 5),
            image: galleryImage
        });
    }
    return items;
};

const portfolioItems = generatePortfolio(20);

const VirtualGallery = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    // Show only first 6 items in the preview grid
    const previewItems = portfolioItems.slice(0, 6);

    // Define masonry grid layout pattern - varying row spans for chaotic look
    const gridPattern = [
        { rowSpan: 2 }, // tall
        { rowSpan: 1 }, // short
        { rowSpan: 1 }, // short
        { rowSpan: 1 }, // short
        { rowSpan: 2 }, // tall
        { rowSpan: 1 }, // short
    ];

    return (
        <section
            id="portfolio"
            style={{
                padding: '8rem 2rem',
                minHeight: '100vh',
                position: 'relative',
                background: 'var(--bg-color)',
                overflow: 'hidden'
            }}
        >
            {/* Ambient background glow */}
            <div style={{
                position: 'absolute',
                top: '20%',
                right: '10%',
                width: '500px',
                height: '500px',
                background: 'radial-gradient(circle, rgba(204, 51, 51, 0.15) 0%, transparent 70%)',
                filter: 'blur(80px)',
                pointerEvents: 'none',
            }} />

            <div style={{
                maxWidth: '1400px',
                margin: '0 auto',
                position: 'relative',
                zIndex: 1
            }}>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{
                        marginBottom: '4rem',
                        textAlign: 'center'
                    }}
                >
                    <h2 style={{
                        fontSize: 'clamp(3rem, 8vw, 5rem)',
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 800,
                        color: 'var(--text-color)',
                        marginBottom: '1rem',
                        letterSpacing: '-0.03em',
                        lineHeight: 1.1,
                    }}>
                        Selected{' '}
                        <span style={{
                            background: 'linear-gradient(135deg, #cc3333, #ff6b35)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}>
                            Works
                        </span>
                    </h2>
                    <p style={{
                        color: 'var(--text-muted)',
                        fontFamily: 'var(--font-body)',
                        fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
                        fontWeight: 400
                    }}>
                        A collection of {portfolioItems.length} masterpieces.
                    </p>
                </motion.div>

                {/* Masonry Gallery Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gridAutoRows: '200px',
                    gap: '1.5rem',
                    marginBottom: '4rem'
                }}>
                    {previewItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            style={{
                                position: 'relative',
                                gridRow: `span ${gridPattern[index].rowSpan}`,
                                borderRadius: '16px',
                                overflow: 'hidden',
                                cursor: 'pointer',
                                border: '1px solid var(--glass-border)',
                                transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
                                transform: hoveredIndex === index ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
                                boxShadow: hoveredIndex === index
                                    ? '0 20px 40px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(204, 51, 51, 0.2)'
                                    : '0 4px 12px rgba(0, 0, 0, 0.1)',
                            }}
                        >
                            {/* Image */}
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                backgroundImage: `url(${item.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                transition: 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
                                transform: hoveredIndex === index ? 'scale(1.1)' : 'scale(1)',
                            }} />

                            {/* Gradient overlay */}
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)',
                                opacity: hoveredIndex === index ? 1 : 0.8,
                                transition: 'opacity 0.4s ease',
                            }} />

                            {/* Info */}
                            <div style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                right: 0,
                                padding: '1.5rem',
                                transform: hoveredIndex === index ? 'translateY(0)' : 'translateY(8px)',
                                transition: 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
                            }}>
                                <div style={{
                                    fontSize: '1.25rem',
                                    fontFamily: 'var(--font-heading)',
                                    color: '#ffffff',
                                    fontWeight: 700,
                                    marginBottom: '0.25rem',
                                    letterSpacing: '-0.01em'
                                }}>
                                    {item.title}
                                </div>
                                <div style={{
                                    color: '#d4af37',
                                    fontSize: '0.875rem',
                                    fontFamily: 'var(--font-body)',
                                    fontWeight: 600
                                }}>
                                    {item.year}
                                </div>
                            </div>

                            {/* Accent line on hover */}
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                height: '3px',
                                background: 'linear-gradient(90deg, #cc3333, #ff6b35, #d4af37)',
                                opacity: hoveredIndex === index ? 1 : 0,
                                transition: 'opacity 0.4s ease',
                            }} />
                        </motion.div>
                    ))}
                </div>

                {/* View Full Gallery Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '1rem',
                        flexDirection: 'column'
                    }}
                >
                    <Link
                        to="/gallery"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            padding: '1.25rem 3rem',
                            background: 'linear-gradient(135deg, #cc3333, #ff6b35)',
                            color: '#ffffff',
                            fontFamily: 'var(--font-heading)',
                            fontSize: '1.125rem',
                            fontWeight: 700,
                            textDecoration: 'none',
                            borderRadius: '12px',
                            border: 'none',
                            cursor: 'pointer',
                            transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
                            boxShadow: '0 8px 24px rgba(204, 51, 51, 0.3)',
                            position: 'relative',
                            overflow: 'hidden',
                            letterSpacing: '-0.01em'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-2px)';
                            e.currentTarget.style.boxShadow = '0 12px 32px rgba(204, 51, 51, 0.4)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 8px 24px rgba(204, 51, 51, 0.3)';
                        }}
                    >
                        View Full Gallery
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            style={{ marginLeft: '0.25rem' }}
                        >
                            <path
                                d="M7.5 15L12.5 10L7.5 5"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </Link>

                    <p style={{
                        color: 'var(--text-muted)',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.9rem',
                        fontWeight: 400,
                        marginTop: '0.5rem'
                    }}>
                        +{portfolioItems.length - 6} more works in the gallery
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default VirtualGallery;
