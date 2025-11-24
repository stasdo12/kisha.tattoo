import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import galleryImage from '../assets/1.jpg';

// Generate portfolio data (same as VirtualGallery)
const generatePortfolio = (count) => {
    const items = [];
    const styles = ['Oni', 'Phoenix', 'Hannya', 'Dragon', 'Koi', 'Tiger', 'Snake', 'Geisha'];
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

const portfolioItems = generatePortfolio(41);

const GalleryPage = () => {
    const [selectedImage, setSelectedImage] = useState(portfolioItems[0]);
    const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

    return (
        <div style={{
            minHeight: '100vh',
            background: 'var(--bg-color)',
            color: 'var(--text-color)',
            padding: '2rem',
            display: 'flex',
            gap: '3rem',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background glow */}
            <div style={{
                position: 'absolute',
                top: '30%',
                left: '50%',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(204, 51, 51, 0.1) 0%, transparent 70%)',
                filter: 'blur(100px)',
                pointerEvents: 'none',
            }} />

            {/* Left Column - Title & Thumbnails */}
            <div style={{
                width: '350px',
                flexShrink: 0,
                position: 'sticky',
                top: '2rem',
                height: 'calc(100vh - 4rem)',
                display: 'flex',
                flexDirection: 'column',
                gap: '3rem',
                zIndex: 10
            }}>
                {/* Back to Home Link */}
                <Link
                    to="/"
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        color: 'var(--text-muted)',
                        textDecoration: 'none',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        transition: 'color 0.3s ease',
                        marginBottom: '-1rem'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#cc3333'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
                >
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                        <path d="M12.5 5L7.5 10L12.5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Back to Home
                </Link>

                {/* Title */}
                <div>
                    <h1 style={{
                        fontSize: 'clamp(3.5rem, 6vw, 5rem)',
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 900,
                        letterSpacing: '-0.04em',
                        marginBottom: '0.5rem',
                        lineHeight: 0.9,
                        color: 'var(--text-color)'
                    }}>
                        GALLERY
                    </h1>
                    <div style={{
                        fontSize: 'clamp(2rem, 3vw, 2.5rem)',
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 900,
                        color: '#cc3333',
                        letterSpacing: '-0.02em'
                    }}>
                        ({portfolioItems.length})
                    </div>

                    {/* View Toggle */}
                    <div style={{
                        display: 'flex',
                        gap: '0.5rem',
                        marginTop: '2rem',
                        alignItems: 'center'
                    }}>
                        <button
                            onClick={() => setViewMode('grid')}
                            style={{
                                width: '40px',
                                height: '40px',
                                background: viewMode === 'grid' ? '#cc3333' : 'transparent',
                                border: '1px solid var(--glass-border)',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: 'all 0.3s ease',
                                color: viewMode === 'grid' ? '#ffffff' : 'var(--text-muted)'
                            }}
                            onMouseEnter={(e) => {
                                if (viewMode !== 'grid') e.currentTarget.style.borderColor = '#cc3333';
                            }}
                            onMouseLeave={(e) => {
                                if (viewMode !== 'grid') e.currentTarget.style.borderColor = 'var(--glass-border)';
                            }}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <rect x="3" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2" />
                                <rect x="14" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2" />
                                <rect x="3" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2" />
                                <rect x="14" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2" />
                            </svg>
                        </button>
                        <button
                            onClick={() => setViewMode('list')}
                            style={{
                                width: '40px',
                                height: '40px',
                                background: viewMode === 'list' ? '#cc3333' : 'transparent',
                                border: '1px solid var(--glass-border)',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: 'all 0.3s ease',
                                color: viewMode === 'list' ? '#ffffff' : 'var(--text-muted)'
                            }}
                            onMouseEnter={(e) => {
                                if (viewMode !== 'list') e.currentTarget.style.borderColor = '#cc3333';
                            }}
                            onMouseLeave={(e) => {
                                if (viewMode !== 'list') e.currentTarget.style.borderColor = 'var(--glass-border)';
                            }}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                <line x1="3" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                <line x1="3" y1="18" x2="21" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Thumbnails Navigation */}
                <div style={{
                    flex: 1,
                    overflowY: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem',
                    paddingRight: '1rem',
                    scrollbarWidth: 'thin',
                    scrollbarColor: '#cc3333 transparent'
                }}>
                    {portfolioItems.map((item, index) => (
                        <div
                            key={item.id}
                            onClick={() => setSelectedImage(item)}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                padding: '0.75rem',
                                background: selectedImage.id === item.id ? 'var(--card-bg)' : 'transparent',
                                border: `1px solid ${selectedImage.id === item.id ? 'rgba(204, 51, 51, 0.3)' : 'var(--glass-border)'}`,
                                borderRadius: '8px',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                            }}
                            onMouseEnter={(e) => {
                                if (selectedImage.id !== item.id) {
                                    e.currentTarget.style.background = 'var(--card-bg-hover)';
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (selectedImage.id !== item.id) {
                                    e.currentTarget.style.background = 'transparent';
                                }
                            }}
                        >
                            {/* Thumbnail Image */}
                            <div style={{
                                width: '60px',
                                height: '60px',
                                borderRadius: '6px',
                                backgroundImage: `url(${item.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                flexShrink: 0,
                                border: selectedImage.id === item.id ? '2px solid #cc3333' : '2px solid transparent'
                            }} />

                            {/* Info */}
                            <div style={{ flex: 1, minWidth: 0 }}>
                                <div style={{
                                    fontSize: '0.9rem',
                                    fontFamily: 'var(--font-heading)',
                                    fontWeight: 600,
                                    color: 'var(--text-color)',
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis'
                                }}>
                                    {item.title}
                                </div>
                                <div style={{
                                    fontSize: '0.75rem',
                                    color: 'var(--text-muted)',
                                    fontFamily: 'var(--font-body)'
                                }}>
                                    {item.year}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Column - Main Display */}
            <div style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2rem 0',
                position: 'relative',
                zIndex: 1
            }}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedImage.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        style={{
                            width: '100%',
                            maxWidth: '900px',
                            position: 'relative'
                        }}
                    >
                        {/* Main Image */}
                        <div style={{
                            width: '100%',
                            aspectRatio: '4/5',
                            borderRadius: '16px',
                            backgroundImage: `url(${selectedImage.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            border: '1px solid var(--glass-border)',
                            boxShadow: '0 24px 64px rgba(0, 0, 0, 0.4)',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            {/* Gradient overlay */}
                            <div style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                right: 0,
                                padding: '3rem 2rem 2rem',
                                background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, transparent 100%)',
                            }}>
                                <h2 style={{
                                    fontSize: '2.5rem',
                                    fontFamily: 'var(--font-heading)',
                                    fontWeight: 700,
                                    color: '#ffffff',
                                    marginBottom: '0.5rem',
                                    letterSpacing: '-0.02em'
                                }}>
                                    {selectedImage.title}
                                </h2>
                                <p style={{
                                    fontSize: '1.25rem',
                                    color: '#d4af37',
                                    fontFamily: 'var(--font-body)',
                                    fontWeight: 600
                                }}>
                                    {selectedImage.year}
                                </p>
                            </div>

                            {/* Accent line */}
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                height: '4px',
                                background: 'linear-gradient(90deg, #cc3333, #ff6b35, #d4af37)',
                            }} />
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default GalleryPage;
