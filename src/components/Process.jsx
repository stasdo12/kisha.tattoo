import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
    {
        id: '01',
        title: 'Consultation',
        desc: 'Understanding your vision and story.',
        details: 'We explore symbolism, cultural significance, and personal meaning. Every design begins with understanding your story.',
        color: '#cc3333'
    },
    {
        id: '02',
        title: 'Design',
        desc: 'Crafting a unique piece of art.',
        details: 'Hand-drawn sketches blend traditional Japanese motifs with modern artistry. Each line carries intention.',
        color: '#d4af37'
    },
    {
        id: '03',
        title: 'Session',
        desc: 'The ritual of ink and skin.',
        details: 'A meditative practice. Precision, patience, and respect for the ancient craft of Irezumi.',
        color: '#cc3333'
    },
    {
        id: '04',
        title: 'Aftercare',
        desc: 'Preserving the legacy.',
        details: 'Proper healing ensures your art remains vibrant for decades. Traditional wisdom meets modern care.',
        color: '#d4af37'
    }
];

const Process = () => {
    const containerRef = useRef(null);
    const pinWrapRef = useRef(null);
    const cardsRef = useRef(null);

    useEffect(() => {
        if (!cardsRef.current || !containerRef.current || !pinWrapRef.current) return;

        const ctx = gsap.context(() => {
            const cards = cardsRef.current;
            if (!cards) return;

            const totalWidth = cards.scrollWidth;
            const windowWidth = window.innerWidth;

            gsap.to(cards, {
                x: -(totalWidth - windowWidth),
                ease: 'none',
                scrollTrigger: {
                    trigger: containerRef.current,
                    pin: pinWrapRef.current,
                    scrub: 1,
                    start: 'top top',
                    end: () => `+=${totalWidth}`,
                    invalidateOnRefresh: true,
                }
            });
        }, containerRef);

        return () => {
            ctx.revert();
        };
    }, []);

    return (
        <section
            id="process"
            ref={containerRef}
            style={{
                background: 'linear-gradient(180deg, #0a0a0a 0%, var(--bg-color) 100%)',
                overflow: 'hidden'
            }}
        >
            <div
                ref={pinWrapRef}
                style={{
                    height: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    overflow: 'hidden'
                }}
            >
                {/* Title */}
                <h2 style={{
                    fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                    marginBottom: '4rem',
                    textAlign: 'center',
                    fontFamily: 'Playfair Display, serif',
                    color: 'var(--text-color)',
                    fontWeight: 700,
                    paddingTop: '2rem'
                }}>
                    The <span style={{
                        background: 'linear-gradient(135deg, #cc3333, #ff6b35)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                    }}>Ritual</span>
                </h2>

                {/* Horizontal scrolling cards */}
                <div style={{ overflow: 'hidden', width: '100%' }}>
                    <div
                        ref={cardsRef}
                        style={{
                            display: 'flex',
                            gap: '3rem',
                            paddingLeft: '10vw',
                            paddingRight: '10vw',
                            willChange: 'transform'
                        }}
                    >
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                style={{
                                    minWidth: '420px',
                                    maxWidth: '420px',
                                    padding: '3rem',
                                    background: 'rgba(255, 255, 255, 0.03)',
                                    backdropFilter: 'blur(10px)',
                                    border: '1px solid rgba(255, 255, 255, 0.08)',
                                    borderRadius: '20px',
                                    position: 'relative',
                                    transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
                                    cursor: 'pointer',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                                    e.currentTarget.style.borderColor = `${step.color}40`;
                                    e.currentTarget.style.boxShadow = `0 20px 40px rgba(0, 0, 0, 0.3)`;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}
                            >
                                {/* Accent line */}
                                <div style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '4px',
                                    height: '100%',
                                    background: `linear-gradient(180deg, ${step.color}, transparent)`,
                                    borderRadius: '20px 0 0 20px'
                                }} />

                                {/* Step number */}
                                <span style={{
                                    fontSize: '5rem',
                                    color: step.color,
                                    opacity: 0.2,
                                    fontFamily: 'Playfair Display, serif',
                                    fontWeight: 800,
                                    display: 'block',
                                    marginBottom: '1rem',
                                    lineHeight: 1
                                }}>
                                    {step.id}
                                </span>

                                {/* Title */}
                                <h3 style={{
                                    fontSize: '2rem',
                                    fontFamily: 'Playfair Display, serif',
                                    color: 'var(--text-color)',
                                    marginBottom: '1rem',
                                    fontWeight: 700
                                }}>
                                    {step.title}
                                </h3>

                                {/* Description */}
                                <p style={{
                                    color: 'rgba(255, 255, 255, 0.7)',
                                    fontFamily: 'Inter, sans-serif',
                                    fontSize: '1rem',
                                    marginBottom: '1.5rem',
                                    lineHeight: 1.6
                                }}>
                                    {step.desc}
                                </p>

                                {/* Details */}
                                <p style={{
                                    color: 'var(--text-muted)',
                                    fontFamily: 'Inter, sans-serif',
                                    fontSize: '0.9rem',
                                    lineHeight: 1.7,
                                    fontStyle: 'italic'
                                }}>
                                    {step.details}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Scroll indicator */}
                <div style={{
                    textAlign: 'center',
                    marginTop: '3rem',
                    color: 'var(--text-muted)',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.875rem',
                    opacity: 0.6
                }}>
                    ← Scroll to explore →
                </div>
            </div>
        </section>
    );
};

export default Process;
