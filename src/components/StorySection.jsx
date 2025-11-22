import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';
import kishaImage from '../assets/Kisha1.webp';

gsap.registerPlugin(ScrollTrigger);

const storyChapters = [
    {
        id: 'beginning',
        title: 'The Beginning',
        text: 'Born in the shadow of Mount Fuji, the journey began with a single drop of ink. A fascination with the permanence of art on the impermanence of skin.',
        image: `url(${kishaImage})`,
        symbol: '始',
        accent: '#cc3333'
    },
    {
        id: 'journey',
        title: 'The Journey',
        text: 'Years of apprenticeship under the masters of Tokyo. Learning that the needle is not a tool, but an extension of the soul. Pain is fleeting, art is eternal.',
        image: `url(${kishaImage})`,
        symbol: '旅',
        accent: '#d4af37'
    },
    {
        id: 'mastery',
        title: 'The Mastery',
        text: 'Now, bridging the gap between ancient tradition and modern expression. Every piece is a collaboration, a story woven into the very fabric of existence.',
        image: `url(${kishaImage})`,
        symbol: '極',
        accent: '#cc3333'
    }
];

const StorySection = () => {
    const [activeChapter, setActiveChapter] = useState(storyChapters[0]);
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const chaptersRef = useRef([]);
    const visualRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Chapters auto-activation on scroll
            chaptersRef.current.forEach((chapter, index) => {
                if (!chapter) return;

                // Auto-activate chapter on scroll
                ScrollTrigger.create({
                    trigger: chapter,
                    start: 'top center',
                    end: 'bottom center',
                    onEnter: () => setActiveChapter(storyChapters[index]),
                    onEnterBack: () => setActiveChapter(storyChapters[index]),
                });
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);


    return (
        <section
            ref={sectionRef}
            style={{
                padding: '8rem 2rem 100vh 2rem',
                position: 'relative',
                background: 'transparent',
                overflow: 'visible',
                minHeight: '100vh'
            }}
        >
            {/* Ambient background effects */}
            <div style={{
                position: 'absolute',
                top: '10%',
                left: '-10%',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(204, 51, 51, 0.1) 0%, transparent 70%)',
                filter: 'blur(100px)',
                pointerEvents: 'none',
            }} />

            <div style={{
                maxWidth: '1400px',
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '6rem',
                alignItems: 'start'
            }}>

                {/* Left Column: Story Text */}
                <div style={{ position: 'relative', zIndex: 1 }}>
                    <h2
                        ref={titleRef}
                        style={{
                            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                            marginBottom: '4rem',
                            fontFamily: 'var(--font-heading)',
                            fontWeight: 800,
                            letterSpacing: '-0.03em',
                            lineHeight: 1.1,
                            color: 'var(--text-color)'
                        }}
                    >
                        The <span style={{
                            background: 'linear-gradient(135deg, #cc3333, #ff6b35)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}>Master's</span> Path
                    </h2>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '50vh' }}>
                        {storyChapters.map((chapter, index) => (
                            <div
                                key={chapter.id}
                                ref={(el) => (chaptersRef.current[index] = el)}
                                onClick={() => setActiveChapter(chapter)}
                                style={{
                                    cursor: 'pointer',
                                    padding: '2rem',
                                    borderRadius: '16px',
                                    background: activeChapter.id === chapter.id
                                        ? 'var(--card-bg)'
                                        : 'transparent',
                                    border: `1px solid ${activeChapter.id === chapter.id
                                        ? 'rgba(204, 51, 51, 0.3)'
                                        : 'var(--glass-border)'}`,
                                    transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    backdropFilter: activeChapter.id === chapter.id ? 'blur(10px)' : 'none',
                                    marginBottom: index === storyChapters.length - 1 ? '50vh' : '0'
                                }}
                                onMouseEnter={(e) => {
                                    if (activeChapter.id !== chapter.id) {
                                        e.currentTarget.style.background = 'var(--card-bg-hover)';
                                        e.currentTarget.style.borderColor = 'var(--glass-border)';
                                        e.currentTarget.style.transform = 'translateX(8px)';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (activeChapter.id !== chapter.id) {
                                        e.currentTarget.style.background = 'transparent';
                                        e.currentTarget.style.borderColor = 'var(--glass-border)';
                                        e.currentTarget.style.transform = 'translateX(0)';
                                    }
                                }}
                            >
                                {/* Active indicator */}
                                {activeChapter.id === chapter.id && (
                                    <div style={{
                                        position: 'absolute',
                                        left: 0,
                                        top: 0,
                                        bottom: 0,
                                        width: '4px',
                                        background: 'linear-gradient(180deg, #cc3333, #ff6b35)',
                                        borderRadius: '0 4px 4px 0',
                                    }} />
                                )}

                                {/* Chapter number */}
                                <div style={{
                                    fontSize: '0.75rem',
                                    fontFamily: 'var(--font-body)',
                                    fontWeight: 700,
                                    color: chapter.accent,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.15em',
                                    marginBottom: '0.75rem',
                                }}>
                                    Chapter {index + 1}
                                </div>

                                <h3 style={{
                                    fontSize: '1.75rem',
                                    marginBottom: '1rem',
                                    fontFamily: 'var(--font-heading)',
                                    fontWeight: 700,
                                    color: 'var(--text-color)',
                                    letterSpacing: '-0.02em'
                                }}>
                                    {chapter.title}
                                </h3>

                                <p style={{
                                    color: 'var(--text-muted)',
                                    fontFamily: 'var(--font-body)',
                                    fontSize: '1rem',
                                    lineHeight: 1.7,
                                    fontWeight: 400
                                }}>
                                    {chapter.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column: Interactive Visual */}
                <div
                    ref={visualRef}
                    style={{
                        height: '80vh',
                        position: 'sticky',
                        top: '10vh',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <div style={{
                        height: '100%',
                        maxHeight: '600px',
                        width: '100%',
                        position: 'relative',
                        perspective: '1000px'
                    }}>
                        <AnimatePresence mode='wait'>
                            <motion.div
                                key={activeChapter.id}
                                initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
                                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                                exit={{ opacity: 0, scale: 0.95, rotateY: 15 }}
                                transition={{
                                    duration: 0.6,
                                    ease: [0.22, 1, 0.36, 1]
                                }}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    background: activeChapter.image,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    borderRadius: '24px',
                                    boxShadow: '0 24px 64px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    border: '1px solid rgba(255, 255, 255, 0.08)',
                                    transformStyle: 'preserve-3d'
                                }}
                            >
                                {/* Gradient overlay */}
                                <div style={{
                                    position: 'absolute',
                                    inset: 0,
                                    background: `radial-gradient(circle at 30% 30%, ${activeChapter.accent}20 0%, transparent 70%)`,
                                    pointerEvents: 'none',
                                }} />

                                {/* Decorative grid */}
                                <div style={{
                                    position: 'absolute',
                                    inset: '40px',
                                    border: '1px solid var(--glass-border)',
                                    borderRadius: '12px',
                                    pointerEvents: 'none'
                                }} />

                                {/* Large Kanji Symbol */}
                                <motion.span
                                    initial={{ opacity: 0, scale: 0.5, rotateZ: -45 }}
                                    animate={{ opacity: 1, scale: 1, rotateZ: 0 }}
                                    transition={{
                                        delay: 0.2,
                                        type: 'spring',
                                        stiffness: 100
                                    }}
                                    style={{
                                        fontSize: 'clamp(8rem, 15vw, 12rem)',
                                        color: 'var(--overlay-text)',
                                        fontFamily: 'var(--font-body)',
                                        fontWeight: 900,
                                        textShadow: '0 20px 40px rgba(0, 0, 0, 0.5)',
                                        position: 'relative',
                                        zIndex: 1
                                    }}
                                >
                                    {activeChapter.symbol}
                                </motion.span>

                                {/* Chapter title - vertical */}
                                <div style={{
                                    position: 'absolute',
                                    bottom: '40px',
                                    right: '40px',
                                    fontSize: '0.875rem',
                                    fontFamily: 'var(--font-body)',
                                    fontWeight: 700,
                                    letterSpacing: '0.2em',
                                    color: 'var(--overlay-text-muted)',
                                    writingMode: 'vertical-rl',
                                    textTransform: 'uppercase'
                                }}>
                                    {activeChapter.title}
                                </div>

                                {/* Accent line */}
                                <div style={{
                                    position: 'absolute',
                                    top: '40px',
                                    left: '40px',
                                    width: '60px',
                                    height: '3px',
                                    background: `linear-gradient(90deg, ${activeChapter.accent}, transparent)`,
                                    borderRadius: '3px'
                                }} />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default StorySection;
