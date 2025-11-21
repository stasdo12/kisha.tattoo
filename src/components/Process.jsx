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
            // 1. Entrance Animation (Triggered, not scrubbed)
            // This ensures they always appear fully when the section is reached.
            gsap.fromTo(cardsRef.current,
                {
                    opacity: 0,
                    rotateX: -30,
                    y: 100,
                    scale: 0.8
                },
                {
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 70%',
                        end: 'bottom 20%',
                        toggleActions: 'play none none reverse'
                    },
                    opacity: 1,
                    rotateX: 0,
                    y: 0,
                    scale: 1,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: 'back.out(1.2)',
                    onComplete: () => {
                        // Start floating animation after entrance
                        startFloating();
                    }
                }
            );

            // 2. Continuous Floating Animation
            const startFloating = () => {
                cardsRef.current.forEach((card, i) => {
                    if (!card) return;
                    gsap.to(card, {
                        y: -10,
                        duration: 2 + Math.random(),
                        repeat: -1,
                        yoyo: true,
                        ease: 'sine.inOut',
                        delay: i * 0.1
                    });
                });
            };

            // 3. 3D Tilt Effect on Mouse Move (for the container)
            // Adding a subtle parallax effect to the whole grid based on mouse position
            const handleMouseMove = (e) => {
                const { clientX, clientY } = e;
                const xPos = (clientX / window.innerWidth - 0.5) * 20;
                const yPos = (clientY / window.innerHeight - 0.5) * 20;

                gsap.to(cardsRef.current, {
                    rotateY: xPos,
                    rotateX: -yPos,
                    stagger: 0.05,
                    duration: 1,
                    ease: 'power2.out'
                });
            };

            // Only add mouse move listener if device is likely desktop
            if (window.matchMedia('(min-width: 768px)').matches) {
                window.addEventListener('mousemove', handleMouseMove);
            }

            return () => {
                window.removeEventListener('mousemove', handleMouseMove);
            };

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
                    fontFamily: 'var(--font-heading)',
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
                                fontFamily: 'var(--font-heading)',
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
                                fontFamily: 'var(--font-body)',
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
                                fontFamily: 'var(--font-heading)',
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
