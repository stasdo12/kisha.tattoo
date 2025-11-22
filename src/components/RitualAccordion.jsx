import React, { useState } from 'react';
import { motion } from 'framer-motion';

const processSteps = [
    {
        id: '01',
        kanji: '相談',
        romaji: 'Sōdan',
        title: 'Consultation',
        desc: 'Understanding your vision and story.',
        details: 'We explore symbolism, cultural significance, and personal meaning. Every design begins with understanding your story. Through careful dialogue, we uncover the essence of what you wish to carry with you forever.',
    },
    {
        id: '02',
        kanji: '設計',
        romaji: 'Sekkei',
        title: 'Design',
        desc: 'Crafting a unique piece of art.',
        details: 'Hand-drawn sketches blend traditional Japanese motifs with modern artistry. Each line carries intention. The design process honors centuries of Irezumi tradition while creating something uniquely yours.',
    },
    {
        id: '03',
        kanji: '施術',
        romaji: 'Sejutsu',
        title: 'Session',
        desc: 'The ritual of ink and skin.',
        details: 'A meditative practice. Precision, patience, and respect for the ancient craft of Irezumi. The session is not merely technical—it is a shared journey, a moment of transformation where art becomes part of you.',
    },
    {
        id: '04',
        kanji: '保護',
        romaji: 'Hogo',
        title: 'Aftercare',
        desc: 'Preserving the legacy.',
        details: 'Proper healing ensures your art remains vibrant for decades. We guide you through every step of the healing process, providing traditional wisdom and modern care techniques to protect your investment.',
    }
];

const RitualAccordion = () => {
    const [flippedCards, setFlippedCards] = useState({});

    const toggleFlip = (index) => {
        setFlippedCards(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    return (
        <section
            id="ritual-accordion"
            style={{
                padding: '8rem 2rem',
                background: 'var(--bg-color)',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            {/* Background decoration */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                fontSize: '20rem',
                opacity: 0.02,
                fontFamily: 'var(--font-body)',
                pointerEvents: 'none',
                userSelect: 'none',
                color: 'var(--primary)'
            }}>
                工
            </div>

            <div style={{
                maxWidth: '1400px',
                margin: '0 auto',
                position: 'relative',
                zIndex: 1
            }}>
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{
                        textAlign: 'center',
                        marginBottom: '5rem'
                    }}
                >
                    <h2 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        fontFamily: 'var(--font-heading)',
                        color: 'var(--text-color)',
                        marginBottom: '1rem',
                        letterSpacing: '-0.02em'
                    }}>
                        My <span style={{ color: 'var(--primary)' }}>Work Process</span>
                    </h2>
                    <p style={{
                        fontSize: '1.1rem',
                        color: 'var(--text-muted)',
                        fontFamily: 'var(--font-body)',
                        maxWidth: '600px',
                        margin: '0 auto'
                    }}>
                        A sacred journey from vision to reality
                    </p>
                </motion.div>

                {/* Flip Cards Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2.5rem',
                    perspective: '1000px'
                }}>
                    {processSteps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            style={{
                                height: '400px',
                                perspective: '1000px'
                            }}
                        >
                            <motion.div
                                onClick={() => toggleFlip(index)}
                                animate={{ rotateY: flippedCards[index] ? 180 : 0 }}
                                transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    position: 'relative',
                                    transformStyle: 'preserve-3d',
                                    cursor: 'pointer'
                                }}
                            >
                                {/* Front Side - Kanji */}
                                <div style={{
                                    position: 'absolute',
                                    width: '100%',
                                    height: '100%',
                                    backfaceVisibility: 'hidden',
                                    background: 'var(--card-bg)',
                                    backdropFilter: 'blur(20px)',
                                    border: '1px solid var(--glass-border)',
                                    borderRadius: '24px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    padding: '2rem',
                                    overflow: 'hidden',
                                    transition: 'all 0.3s ease'
                                }}>
                                    {/* Gradient overlay */}
                                    <div style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        height: '100%',
                                        background: 'linear-gradient(135deg, rgba(204, 51, 51, 0.1), transparent)',
                                        pointerEvents: 'none'
                                    }} />

                                    <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                                        {/* Large Kanji */}
                                        <div style={{
                                            fontSize: '8rem',
                                            fontFamily: 'var(--font-body)',
                                            fontWeight: 900,
                                            color: 'var(--text-color)',
                                            marginBottom: '1rem',
                                            lineHeight: 1
                                        }}>
                                            {step.kanji}
                                        </div>

                                        {/* Romaji */}
                                        <div style={{
                                            fontSize: '1.5rem',
                                            fontFamily: 'var(--font-heading)',
                                            color: 'var(--primary)',
                                            marginBottom: '0.5rem',
                                            fontWeight: 600
                                        }}>
                                            {step.romaji}
                                        </div>

                                        {/* Title */}
                                        <div style={{
                                            fontSize: '1.25rem',
                                            fontFamily: 'var(--font-body)',
                                            color: 'var(--text-muted)',
                                            fontWeight: 500
                                        }}>
                                            {step.title}
                                        </div>
                                    </div>


                                </div>

                                {/* Back Side - Details */}
                                <div style={{
                                    position: 'absolute',
                                    width: '100%',
                                    height: '100%',
                                    backfaceVisibility: 'hidden',
                                    transform: 'rotateY(180deg)',
                                    background: 'var(--card-bg)',
                                    backdropFilter: 'blur(20px)',
                                    border: '1px solid rgba(204, 51, 51, 0.3)',
                                    borderRadius: '24px',
                                    padding: '2.5rem',
                                    overflow: 'hidden',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between'
                                }}>
                                    {/* Gradient overlay */}
                                    <div style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        height: '100%',
                                        background: 'linear-gradient(135deg, rgba(204, 51, 51, 0.15), transparent)',
                                        pointerEvents: 'none'
                                    }} />

                                    <div style={{ position: 'relative', zIndex: 1 }}>
                                        {/* Step number */}
                                        <div style={{
                                            fontSize: '2rem',
                                            fontFamily: 'var(--font-heading)',
                                            color: 'var(--primary)',
                                            opacity: 0.3,
                                            marginBottom: '0.5rem',
                                            fontWeight: 300
                                        }}>
                                            {step.id}
                                        </div>

                                        {/* Title */}
                                        <h3 style={{
                                            fontSize: '1.5rem',
                                            fontFamily: 'var(--font-heading)',
                                            color: 'var(--text-color)',
                                            marginBottom: '0.5rem',
                                            fontWeight: 700
                                        }}>
                                            {step.title}
                                        </h3>

                                        {/* Description */}
                                        <p style={{
                                            fontSize: '0.85rem',
                                            color: 'var(--primary)',
                                            fontFamily: 'var(--font-body)',
                                            marginBottom: '1rem',
                                            fontWeight: 600
                                        }}>
                                            {step.desc}
                                        </p>

                                        {/* Details */}
                                        <p style={{
                                            fontSize: '0.85rem',
                                            lineHeight: 1.6,
                                            color: 'var(--text-muted)',
                                            fontFamily: 'var(--font-body)',
                                            fontStyle: 'italic'
                                        }}>
                                            {step.details}
                                        </p>
                                    </div>


                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RitualAccordion;
