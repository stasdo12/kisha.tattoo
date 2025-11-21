import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
    {
        id: '01',
        title: 'Consultation',
        kanji: '相談',
        subtitle: 'Sōdan',
        color: '#cc3333'
    },
    {
        id: '02',
        title: 'Design',
        kanji: '設計',
        subtitle: 'Sekkei',
        color: '#d4af37'
    },
    {
        id: '03',
        title: 'Sketch',
        kanji: '下絵',
        subtitle: 'Shitae',
        color: '#cc3333'
    },
    {
        id: '04',
        title: 'Session',
        kanji: '刺青',
        subtitle: 'Irezumi',
        color: '#d4af37'
    },
    {
        id: '05',
        title: 'Aftercare',
        kanji: '養生',
        subtitle: 'Yōjō',
        color: '#cc3333'
    },
    {
        id: '06',
        title: 'Follow-up',
        kanji: '確認',
        subtitle: 'Kakunin',
        color: '#d4af37'
    }
];

const Process = () => {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        if (!sectionRef.current) return;

        const ctx = gsap.context(() => {
            // Animate all cards together with stagger
            gsap.from(cardsRef.current, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 60%',
                    end: 'top 20%',
                    scrub: 1,
                },
                opacity: 0,
                rotateY: 90,
                scale: 0.7,
                y: 100,
                stagger: {
                    amount: 0.6,
                    from: 'start'
                }
            });

            // Add continuous subtle rotation on scroll
            cardsRef.current.forEach((card) => {
                if (!card) return;

                gsap.to(card, {
                    scrollTrigger: {
                        trigger: card,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: 1.5,
                    },
                    y: -15,
                });
            });
        }, sectionRef);

        return () => {
            ctx.revert();
        };
    }, []);

    return (
        <section
            id="process"
            ref={sectionRef}
            style={{
                padding: '6rem 2rem',
                background: 'transparent',
                position: 'relative',
                overflow: 'hidden',
                minHeight: '60vh'
            }}
        >
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                {/* Title */}
                <h2 style={{
                    fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                    marginBottom: '5rem',
                    textAlign: 'center',
                    fontFamily: 'Playfair Display, serif',
                    color: 'var(--text-color)',
                    fontWeight: 700
                }}>
                    The <span style={{
                        background: 'linear-gradient(135deg, #cc3333, #ff6b35)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                    }}>Ritual</span>
                </h2>

                {/* Cards Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '3rem',
                    perspective: '1000px'
                }}>
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            ref={(el) => (cardsRef.current[index] = el)}
                            style={{
                                padding: '3rem 2rem',
                                background: 'rgba(255, 255, 255, 0.03)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(255, 255, 255, 0.08)',
                                borderRadius: '20px',
                                position: 'relative',
                                transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
                                cursor: 'pointer',
                                transformStyle: 'preserve-3d',
                                willChange: 'transform, opacity',
                                textAlign: 'center',
                                minHeight: '200px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-12px) rotateY(5deg)';
                                e.currentTarget.style.borderColor = `${step.color}40`;
                                e.currentTarget.style.boxShadow = `0 24px 48px rgba(0, 0, 0, 0.3)`;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0) rotateY(0deg)';
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
                                fontSize: '1.5rem',
                                color: step.color,
                                opacity: 0.3,
                                fontFamily: 'Playfair Display, serif',
                                fontWeight: 800,
                                display: 'block',
                                marginBottom: '1rem',
                                lineHeight: 1
                            }}>
                                {step.id}
                            </span>

                            {/* Kanji */}
                            <div style={{
                                fontSize: '5rem',
                                marginBottom: '0.5rem',
                                fontWeight: 300,
                                color: step.color,
                                lineHeight: 1,
                                fontFamily: 'serif'
                            }}>
                                {step.kanji}
                            </div>

                            {/* Subtitle (Romanized) */}
                            <p style={{
                                fontSize: '0.875rem',
                                color: 'var(--text-muted)',
                                fontFamily: 'Inter, sans-serif',
                                letterSpacing: '0.15em',
                                textTransform: 'uppercase',
                                marginBottom: '1.5rem',
                                fontWeight: 300
                            }}>
                                {step.subtitle}
                            </p>

                            {/* Title */}
                            <h3 style={{
                                fontSize: '1.5rem',
                                fontFamily: 'Playfair Display, serif',
                                color: 'var(--text-color)',
                                fontWeight: 700,
                                margin: 0
                            }}>
                                {step.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
