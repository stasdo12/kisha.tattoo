import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ritualSteps = [
    {
        id: '01',
        title: 'Consultation',
        desc: 'Understanding your vision and story.',
        details: 'We explore symbolism, cultural significance, and personal meaning. Every design begins with understanding your story. Through careful dialogue, we uncover the essence of what you wish to carry with you forever.',
    },
    {
        id: '02',
        title: 'Design',
        desc: 'Crafting a unique piece of art.',
        details: 'Hand-drawn sketches blend traditional Japanese motifs with modern artistry. Each line carries intention. The design process honors centuries of Irezumi tradition while creating something uniquely yours.',
    },
    {
        id: '03',
        title: 'Session',
        desc: 'The ritual of ink and skin.',
        details: 'A meditative practice. Precision, patience, and respect for the ancient craft of Irezumi. The session is not merely technical—it is a shared journey, a moment of transformation where art becomes part of you.',
    },
    {
        id: '04',
        title: 'Aftercare',
        desc: 'Preserving the legacy.',
        details: 'Proper healing ensures your art remains vibrant for decades. We guide you through every step of the healing process, providing traditional wisdom and modern care techniques to protect your investment.',
    }
];

const RitualAccordion = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);
    const sectionRef = useRef(null);

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <section
            id="ritual-accordion"
            ref={sectionRef}
            style={{
                padding: '6rem 2rem',
                background: 'var(--bg-color)',
                position: 'relative',
                overflow: 'hidden'
            }}
        >    {/* Background decoration */}
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
                儀
            </div>

            <div style={{
                maxWidth: '900px',
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
                        letterSpacing: '2px'
                    }}>
                        The <span style={{ color: 'var(--primary)' }}>Ritual</span>
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

                {/* Accordion Items */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem'
                }}>
                    {ritualSteps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            style={{
                                background: 'var(--glass-bg)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid var(--glass-border)',
                                borderRadius: '12px',
                                overflow: 'hidden',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            {/* Accordion Header */}
                            <div
                                onClick={() => toggleExpand(index)}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    padding: '2rem',
                                    cursor: 'pointer',
                                    transition: 'background 0.3s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'transparent';
                                }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flex: 1 }}>
                                    {/* Step Number */}
                                    <span style={{
                                        fontSize: '2.5rem',
                                        fontFamily: 'var(--font-heading)',
                                        color: 'var(--primary)',
                                        opacity: 0.5,
                                        fontWeight: 300,
                                        minWidth: '60px'
                                    }}>
                                        {step.id}
                                    </span>

                                    {/* Title and Description */}
                                    <div style={{ flex: 1 }}>
                                        <h3 style={{
                                            fontSize: '1.8rem',
                                            fontFamily: 'var(--font-heading)',
                                            color: 'var(--text-color)',
                                            marginBottom: '0.5rem',
                                            fontWeight: 400
                                        }}>
                                            {step.title}
                                        </h3>
                                        <p style={{
                                            fontSize: '1rem',
                                            color: 'var(--text-muted)',
                                            fontFamily: 'var(--font-body)',
                                            margin: 0
                                        }}>
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>

                                {/* Expand Button */}
                                <motion.div
                                    animate={{ rotate: expandedIndex === index ? 45 : 0 }}
                                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                                    style={{
                                        width: '48px',
                                        height: '48px',
                                        borderRadius: '50%',
                                        background: expandedIndex === index ? 'var(--primary)' : 'transparent',
                                        border: '2px solid var(--primary)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '2rem',
                                        color: expandedIndex === index ? 'white' : 'var(--primary)',
                                        fontWeight: 300,
                                        transition: 'all 0.3s ease',
                                        flexShrink: 0
                                    }}
                                >
                                    +
                                </motion.div>
                            </div>

                            {/* Expandable Content */}
                            <AnimatePresence>
                                {expandedIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                                        style={{ overflow: 'hidden' }}
                                    >
                                        <div style={{
                                            padding: '0 2rem 2rem 2rem',
                                            paddingLeft: 'calc(2rem + 60px + 2rem)', // Align with title
                                            borderTop: '1px solid var(--glass-border)'
                                        }}>
                                            <motion.div
                                                initial={{ y: -10 }}
                                                animate={{ y: 0 }}
                                                transition={{ duration: 0.3, delay: 0.1 }}
                                                style={{
                                                    paddingTop: '2rem',
                                                    position: 'relative'
                                                }}
                                            >
                                                {/* Decorative corner accents */}
                                                <div style={{
                                                    position: 'absolute',
                                                    top: '1rem',
                                                    left: '-1rem',
                                                    width: '24px',
                                                    height: '24px',
                                                    borderTop: '2px solid var(--primary)',
                                                    borderLeft: '2px solid var(--primary)',
                                                    opacity: 0.3
                                                }} />

                                                <p style={{
                                                    fontSize: '1.05rem',
                                                    lineHeight: 1.9,
                                                    color: 'var(--text-color)',
                                                    fontFamily: 'var(--font-body)',
                                                    fontStyle: 'italic',
                                                    margin: 0
                                                }}>
                                                    {step.details}
                                                </p>

                                                {/* Bottom corner accent */}
                                                <div style={{
                                                    position: 'absolute',
                                                    bottom: 0,
                                                    right: 0,
                                                    width: '24px',
                                                    height: '24px',
                                                    borderBottom: '2px solid var(--primary)',
                                                    borderRight: '2px solid var(--primary)',
                                                    opacity: 0.3
                                                }} />
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom decorative element */}
                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    style={{
                        height: '2px',
                        background: 'linear-gradient(90deg, transparent, var(--primary), transparent)',
                        marginTop: '5rem',
                        transformOrigin: 'center'
                    }}
                />
            </div>
        </section>
    );
};

export default RitualAccordion;
