import React from 'react';
import { FixedSizeGrid as Grid } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import { motion } from 'framer-motion';
import '../styles/index.css';

// Generate dummy portfolio data
const generatePortfolio = (count) => {
    const items = [];
    const styles = ['Dragon', 'Koi', 'Hannya', 'Tiger', 'Snake', 'Phoenix', 'Oni', 'Geisha'];
    for (let i = 0; i < count; i++) {
        items.push({
            id: i,
            title: `${styles[Math.floor(Math.random() * styles.length)]} Study #${i + 1}`,
            year: 2020 + Math.floor(Math.random() * 5),
            color: Math.random() > 0.5 ? '#cc3333' : '#1a1a1a'
        });
    }
    return items;
};

const portfolioItems = generatePortfolio(500);

const Cell = ({ columnIndex, rowIndex, style }) => {
    const index = rowIndex * 3 + columnIndex;
    if (index >= portfolioItems.length) return null;
    const item = portfolioItems[index];

    return (
        <div style={{ ...style, padding: '10px' }}>
            <div style={{
                height: '100%',
                background: 'var(--glass-bg)',
                border: '1px solid var(--glass-border)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
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
                <div style={{ fontSize: '1.2rem', fontFamily: 'Playfair Display, serif', color: 'var(--text-color)' }}>{item.title}</div>
                <div style={{ color: 'var(--primary)', marginTop: '0.5rem' }}>{item.year}</div>
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
                    <p style={{ color: 'var(--text-muted)', fontFamily: 'Inter, sans-serif' }}>A collection of 500+ masterpieces.</p>
                </motion.div>

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
