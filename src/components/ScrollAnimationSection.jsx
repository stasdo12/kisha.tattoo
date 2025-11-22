import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollAnimationSection = () => {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Title animation - fade in and scale
            gsap.from(titleRef.current, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                    end: 'top 30%',
                    scrub: 1,
                },
                opacity: 0,
                scale: 0.8,
                y: 100,
            });

            // Subtitle animation
            gsap.from(subtitleRef.current, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 70%',
                    end: 'top 30%',
                    scrub: 1,
                },
                opacity: 0,
                y: 50,
            });

            // Cards stagger animation - Apple/Spotify style
            cardsRef.current.forEach((card, index) => {
                if (!card) return;

                // Entrance animation
                gsap.from(card, {
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 85%',
                        end: 'top 50%',
                        scrub: 1,
                    },
                    opacity: 0,
                    y: 100,
                    rotateX: 45,
                    scale: 0.8,
                });

                // Parallax effect on scroll
                gsap.to(card, {
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: 2,
                    },
                    y: index % 2 === 0 ? -50 : 50,
                });
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const cards = [
        {
            emoji: '🦊',
            kanji: '狐',
            title: 'Kitsune',
            subtitle: 'The Shapeshifter',
            description: 'Intelligent and magical foxes with the ability to shapeshift. They are guardians of the rice fields and messengers of Inari, embodying both benevolence and mischief.',
            gradient: 'linear-gradient(135deg, #d4af37 0%, #cc3333 100%)',
        },
        {
            emoji: '👹',
            kanji: '鬼',
            title: 'Oni',
            subtitle: 'The Protector',
            description: 'Fearsome demons that ward off evil spirits and punish the wicked. In tattoos, they often symbolize protection, strength, and the duality of good and evil.',
            gradient: 'linear-gradient(135deg, #cc3333 0%, #661111 100%)',
        },
        {
            emoji: '👺',
            kanji: '天狗',
            title: 'Tengu',
            subtitle: 'The Warrior',
            description: 'Mountain spirits and masters of martial arts. With their long noses or bird-like beaks, they are protectors of the forests and teachers of the samurai way.',
            gradient: 'linear-gradient(135deg, #ff6b35 0%, #8b0000 100%)',
        },
    ];

    return (
        <section
            ref={sectionRef}
            style={{
                minHeight: '150vh',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '10rem 2rem',
                background: 'var(--bg-color)',
                overflow: 'hidden',
            }}
        >
            {/* Ambient background glow */}
            <div style={{
                position: 'absolute',
                top: '20%',
                left: '10%',
                width: '500px',
                height: '500px',
                background: 'radial-gradient(circle, rgba(204, 51, 51, 0.15) 0%, transparent 70%)',
                filter: 'blur(80px)',
                pointerEvents: 'none',
            }} />
            <div style={{
                position: 'absolute',
                bottom: '20%',
                right: '10%',
                width: '500px',
                height: '500px',
                background: 'radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, transparent 70%)',
                filter: 'blur(80px)',
                pointerEvents: 'none',
            }} />

            <div style={{
                maxWidth: '1400px',
                width: '100%',
                position: 'relative',
                zIndex: 1,
            }}>
                {/* Header */}
                <div style={{
                    textAlign: 'center',
                    marginBottom: '8rem',
                }}>
                    <h2
                        ref={titleRef}
                        style={{
                            fontSize: 'clamp(3rem, 8vw, 6rem)',
                            fontFamily: 'var(--font-heading)',
                            fontWeight: 800,
                            color: 'var(--text-color)',
                            marginBottom: '2rem',
                            letterSpacing: '-0.03em',
                            lineHeight: 1.1,
                        }}
                    >
                        The Art of{' '}
                        <span style={{
                            background: 'linear-gradient(135deg, #cc3333, #ff6b35)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}>
                            Irezumi
                        </span>
                    </h2>
                    <p
                        ref={subtitleRef}
                        style={{
                            fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
                            color: 'var(--text-muted)',
                            fontFamily: 'var(--font-body)',
                            maxWidth: '800px',
                            margin: '0 auto',
                            lineHeight: 1.6,
                            fontWeight: 400,
                        }}
                    >
                        Where ancient tradition meets modern artistry. Each piece tells a story,
                        carries meaning, and becomes part of your journey.
                    </p>
                </div>

                {/* Cards Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '2.5rem',
                    perspective: '1000px',
                }}>
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            ref={(el) => (cardsRef.current[index] = el)}
                            style={{
                                position: 'relative',
                                background: 'var(--card-bg)',
                                backdropFilter: 'blur(20px)',
                                border: '1px solid var(--glass-border)',
                                borderRadius: '24px',
                                padding: '3rem 2.5rem',
                                overflow: 'hidden',
                                transition: 'all 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
                                cursor: 'pointer',
                                transformStyle: 'preserve-3d',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-12px) scale(1.02)';
                                e.currentTarget.style.borderColor = 'rgba(204, 51, 51, 0.3)';
                                e.currentTarget.style.boxShadow = '0 24px 48px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(204, 51, 51, 0.1)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                e.currentTarget.style.borderColor = 'var(--glass-border)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            {/* Gradient overlay */}
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                height: '200px',
                                background: card.gradient,
                                opacity: 0.1,
                                pointerEvents: 'none',
                                borderRadius: '24px 24px 0 0',
                            }} />

                            {/* Large Kanji Background */}
                            <div style={{
                                position: 'absolute',
                                top: '50%',
                                right: '-20px',
                                transform: 'translateY(-50%)',
                                fontSize: '15rem',
                                opacity: 0.03,
                                fontFamily: 'var(--font-body)',
                                fontWeight: 900,
                                color: 'var(--text-color)',
                                pointerEvents: 'none',
                                userSelect: 'none',
                                lineHeight: 1,
                            }}>
                                {card.kanji}
                            </div>

                            <div style={{ position: 'relative', zIndex: 1 }}>
                                {/* Emoji Icon */}
                                <div style={{
                                    fontSize: '4.5rem',
                                    marginBottom: '2rem',
                                    filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.3))',
                                }}>
                                    {card.emoji}
                                </div>

                                {/* Title */}
                                <h3 style={{
                                    fontSize: '2.25rem',
                                    fontFamily: 'var(--font-heading)',
                                    fontWeight: 700,
                                    color: 'var(--text-color)',
                                    marginBottom: '0.5rem',
                                    letterSpacing: '-0.02em',
                                }}>
                                    {card.title}
                                </h3>

                                {/* Subtitle */}
                                <div style={{
                                    fontSize: '0.875rem',
                                    fontFamily: 'var(--font-body)',
                                    fontWeight: 600,
                                    color: '#cc3333',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em',
                                    marginBottom: '1.5rem',
                                }}>
                                    {card.subtitle}
                                </div>

                                {/* Description */}
                                <p style={{
                                    fontSize: '1rem',
                                    fontFamily: 'var(--font-body)',
                                    color: 'var(--text-muted)',
                                    lineHeight: 1.7,
                                    fontWeight: 400,
                                }}>
                                    {card.description}
                                </p>

                                {/* Bottom accent line */}
                                <div style={{
                                    marginTop: '2rem',
                                    height: '2px',
                                    background: card.gradient,
                                    borderRadius: '2px',
                                    opacity: 0.5,
                                }} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ScrollAnimationSection;
