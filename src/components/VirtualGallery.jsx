import React from 'react';
import { FixedSizeGrid as Grid } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import { motion } from 'framer-motion';
import '../styles/index.css';

import galleryImage from '../assets/1.jpg';

// Generate dummy portfolio data
const generatePortfolio = (count) => {
    const items = [];
    const styles = ['Dragon', 'Koi', 'Hannya', 'Tiger', 'Snake', 'Phoenix', 'Oni', 'Geisha'];
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

const Cell = ({ columnIndex, rowIndex, style }) => {
    const index = rowIndex * 3 + columnIndex;
    if (index >= portfolioItems.length) return null;
    const item = portfolioItems[index];

    return (
        <div style={{ ...style, padding: '10px' }}>
            <div style={{
                height: '100%',
                background: `url(${item.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                border: '1px solid var(--glass-border)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                alignItems: 'flex-start',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                borderRadius: '12px',
                overflow: 'hidden',
                position: 'relative'
            }}
                onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'scale(0.98)';
                    e.currentTarget.style.borderColor = 'var(--primary)';
                }}
                onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.borderColor = 'var(--glass-border)';
                }}
            >
                <div style={{
                    padding: '1.5rem',
                    background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
                    width: '100%',
                    borderRadius: '0 0 12px 12px'
                }}>
                    <div style={{ fontSize: '1.2rem', fontFamily: 'var(--font-heading)', color: 'var(--overlay-text)', fontWeight: 700 }}>{item.title}</div>
                    <div style={{ color: 'var(--primary)', marginTop: '0.25rem', fontSize: '0.9rem' }}>{item.year}</div>
                </div>
            </div>
        </div>
    );
};

const VirtualGallery = () => {
    return (
        <section id="portfolio" style={{ padding: '5rem 0', height: '100vh', position: 'relative' }}>
            <div className="container" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ marginBottom: '3rem', textAlign: 'center' }}
                >
                    <h2 style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>Selected <span className="text-gradient">Works</span></h2>
                    <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}>A collection of 20 masterpieces.</p>
                </motion.div>

                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 10,
                    textAlign: 'center',
                    pointerEvents: 'none'
                }}>
                    <h2 style={{
                        fontSize: '4rem',
                        color: 'var(--overlay-text)',
                        fontFamily: 'var(--font-heading)',
                        textShadow: '0 4px 12px rgba(0,0,0,0.5)',
                        marginBottom: '1rem'
                    }}>
                        Virtual Gallery
                    </h2>
                    <p style={{
                        fontSize: '1.2rem',
                        color: 'var(--overlay-text-muted)',
                        fontFamily: 'var(--font-body)'
                    }}>
                        A collection of 20 masterpieces.
                    </p>
                </div>

                <div style={{ flex: 1 }}>
                    <AutoSizer>
                        {({ height, width }) => (
                            <Grid
                                columnCount={3}
                                columnWidth={width / 3}
                                height={height}
                                rowCount={Math.ceil(portfolioItems.length / 3)}
                                rowHeight={300}
                                width={width}
                            >
                                {Cell}
                            </Grid>
                        )}
                    </AutoSizer>
                </div>
            </div>
        </section>
    );
};

export default VirtualGallery;
