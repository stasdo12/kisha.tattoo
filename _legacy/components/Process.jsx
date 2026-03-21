import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
    {
        id: '01',
        title: 'Awakening',
        kanji: '覚醒',
        subtitle: 'Kakusei',
        description: 'The moment you decide to mark your skin, you awaken to your true self.',
        details: 'This is the spark of realization. It is not just about wanting a tattoo; it is about recognizing a hidden part of your soul that demands expression. We discuss your motivations, your fears, and your deepest desires to ensure the art aligns with your true spirit.',
        color: '#cc3333'
    },
    {
        id: '02',
        title: 'Connection',
        kanji: '繋がり',
        subtitle: 'Tsunagari',
        description: 'Art becomes a bridge between your inner world and outer expression.',
        details: 'We build a bond of trust. Through deep consultation, we connect your personal narrative with the rich tapestry of Japanese mythology and symbolism. This connection ensures that the design is not just an image, but a reflection of your inner world.',
        color: '#d4af37'
    },
    {
        id: '03',
        title: 'Courage',
        kanji: '勇気',
        subtitle: 'Yūki',
        description: 'Embracing the needle, you discover strength you never knew existed.',
        details: 'Facing the needle requires a warrior\'s spirit. It is a commitment to endure pain for the sake of beauty and meaning. We honor this courage, creating a safe and sacred space where you can test your limits and discover your resilience.',
        color: '#cc3333'
    },
    {
        id: '04',
        title: 'Transformation',
        kanji: '変容',
        subtitle: 'Henyō',
        description: 'Pain becomes meditation. Each mark is a step toward becoming whole.',
        details: 'The session is a rite of passage. As the ink settles into your skin, you are physically and spiritually altered. The pain becomes a meditative focus, washing away the old and welcoming the new. You leave the studio different from how you entered.',
        color: '#d4af37'
    },
    {
        id: '05',
        title: 'Empowerment',
        kanji: '力',
        subtitle: 'Chikara',
        description: 'Your body becomes a canvas of power, carrying stories only you can tell.',
        details: 'Wearing the art empowers you. It is a permanent talisman of your journey, a source of strength you can draw upon daily. Your body is no longer just a vessel, but a proclaimed masterpiece of your own making.',
        color: '#cc3333'
    },
    {
        id: '06',
        title: 'Legacy',
        kanji: '遺産',
        subtitle: 'Isan',
        description: 'The art lives with you, a permanent reminder of who you chose to become.',
        details: 'Irezumi is a lifelong commitment. It ages with you, evolving as you evolve. It is a legacy you carry to the grave, a testament to your values, your struggles, and your triumphs. It is the ultimate mark of your existence.',
        color: '#d4af37'
    }
];

const Process = () => {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);
    const [flippedCards, setFlippedCards] = useState({});

    const toggleFlip = (index) => {
        setFlippedCards(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    useEffect(() => {
        if (!sectionRef.current) return;

        const ctx = gsap.context(() => {
            // Entrance Animation
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
                        startFloating();
                    }
                }
            );

            // Continuous Floating Animation
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

            // 3D Tilt Effect on Mouse Move (Applied to Outer Container)
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

            if (window.matchMedia('(min-width: 768px)').matches) {
                window.addEventListener('mousemove', handleMouseMove);
            }

            return () => {
                window.removeEventListener('mousemove', handleMouseMove);
            };

        }, sectionRef);

        return () => ctx.revert();
    }, []); // Empty dependency array - GSAP runs once and stays

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
                                position: 'relative',
                                height: '400px',
                                cursor: 'pointer',
                                transformStyle: 'preserve-3d',
                                // GSAP controls transform here (tilt/float)
                            }}
                            onClick={() => toggleFlip(index)}
                        >
                            {/* Inner Flipper Container - Controlled by React State */}
                            <div style={{
                                position: 'relative',
                                width: '100%',
                                height: '100%',
                                transformStyle: 'preserve-3d',
                                transition: 'transform 0.6s cubic-bezier(0.4, 0.2, 0.2, 1)',
                                transform: flippedCards[index] ? 'rotateY(180deg)' : 'rotateY(0deg)'
                            }}>
                                {/* Front Face */}
                                <div style={{
                                    position: 'absolute',
                                    width: '100%',
                                    height: '100%',
                                    backfaceVisibility: 'hidden',
                                    padding: '3rem 2rem',
                                    background: 'var(--card-bg)',
                                    backdropFilter: 'blur(10px)',
                                    border: '1px solid var(--glass-border)',
                                    borderRadius: '20px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    textAlign: 'center',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                                }}>
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

                                    <h3 style={{
                                        fontSize: '1.5rem',
                                        fontFamily: 'var(--font-heading)',
                                        color: 'var(--text-color)',
                                        fontWeight: 700,
                                        margin: 0
                                    }}>
                                        {step.title}
                                    </h3>

                                    <div style={{
                                        marginTop: '2rem',
                                        fontSize: '0.8rem',
                                        color: 'var(--text-muted)',
                                        opacity: 0.6
                                    }}>
                                        Click to reveal
                                    </div>
                                </div>

                                {/* Back Face */}
                                <div style={{
                                    position: 'absolute',
                                    width: '100%',
                                    height: '100%',
                                    backfaceVisibility: 'hidden',
                                    transform: 'rotateY(180deg)',
                                    padding: '3rem 2rem',
                                    background: 'var(--card-bg)',
                                    backdropFilter: 'blur(10px)',
                                    border: `1px solid ${step.color}40`,
                                    borderRadius: '20px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    textAlign: 'center',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                                }}>
                                    <h3 style={{
                                        fontSize: '1.5rem',
                                        fontFamily: 'var(--font-heading)',
                                        color: step.color,
                                        fontWeight: 700,
                                        marginBottom: '1.5rem'
                                    }}>
                                        {step.title}
                                    </h3>

                                    <p style={{
                                        fontSize: '1rem',
                                        color: 'var(--text-color)',
                                        fontFamily: 'var(--font-body)',
                                        marginBottom: '1.5rem',
                                        lineHeight: 1.6
                                    }}>
                                        {step.description}
                                    </p>

                                    <p style={{
                                        fontSize: '0.9rem',
                                        color: 'var(--text-muted)',
                                        fontFamily: 'var(--font-body)',
                                        lineHeight: 1.6,
                                        fontStyle: 'italic'
                                    }}>
                                        {step.details}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
