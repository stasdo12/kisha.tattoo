import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import showreelPreview from '../assets/1.jpg';
import '../styles/index.css';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const heroRef = useRef(null);
    const contentRef = useRef(null);
    const titleRef = useRef(null);
    const badgeRef = useRef(null);
    const buttonRef = useRef(null);
    const bg1Ref = useRef(null);
    const bg2Ref = useRef(null);
    const showreelRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Initial entrance animations
            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

            tl.from(badgeRef.current, {
                scale: 0.8,
                opacity: 0,
                duration: 1,
                delay: 0.2
            })
                .from(titleRef.current, {
                    y: 30,
                    opacity: 0,
                    duration: 1
                }, '-=0.5')
                .from(buttonRef.current, {
                    y: 20,
                    opacity: 0,
                    duration: 1
                }, '-=0.7');

            // Scroll-triggered parallax and fade-out
            gsap.to(contentRef.current, {
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1,
                },
                opacity: 0,
                y: -100,
            });

            // Showreel fade-out on scroll
            gsap.to(showreelRef.current, {
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: 'top top',
                    end: '40% top',
                    scrub: 1,
                },
                opacity: 0,
                y: 50,
                pointerEvents: 'none'
            });

            // Title parallax (slower)
            gsap.to(titleRef.current, {
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1.5,
                },
                y: -150,
            });

            // Background elements parallax
            gsap.to(bg1Ref.current, {
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 2,
                },
                y: 200,
            });

            gsap.to(bg2Ref.current, {
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 2.5,
                },
                y: 250,
            });

        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={heroRef}
            style={{
                height: '100vh',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                willChange: 'transform'
            }}
        >
            {/* Background Ink Effects */}
            <div
                ref={bg1Ref}
                style={{
                    position: 'absolute',
                    top: '-10%',
                    right: '-10%',
                    width: '60vw',
                    height: '60vw',
                    background: 'radial-gradient(circle, rgba(0,0,0,0.08) 0%, rgba(255,255,255,0) 70%)',
                    filter: 'blur(40px)',
                    zIndex: -1,
                    willChange: 'transform'
                }}
            />
            <div
                ref={bg2Ref}
                style={{
                    position: 'absolute',
                    bottom: '-20%',
                    left: '-10%',
                    width: '50vw',
                    height: '50vw',
                    background: 'radial-gradient(circle, rgba(204,51,51,0.05) 0%, rgba(255,255,255,0) 70%)',
                    filter: 'blur(60px)',
                    zIndex: -1,
                    willChange: 'transform'
                }}
            />

            {/* Content */}
            <div
                ref={contentRef}
                style={{
                    textAlign: 'center',
                    zIndex: 1,
                    willChange: 'transform, opacity',
                    position: 'relative' // For absolute positioning of showreel trigger if needed
                }}
            >
                <div
                    ref={badgeRef}
                    style={{ marginBottom: '1rem' }}
                >
                    <div style={{
                        display: 'inline-block',
                        padding: '0.5rem 1rem',
                        border: '1px solid var(--primary)',
                        borderRadius: '50px',
                        color: 'var(--primary)',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.9rem',
                        letterSpacing: '0.2em',
                        marginBottom: '1rem',
                        textTransform: 'uppercase'
                    }}>
                        喜捨刺青
                    </div>
                </div>

                <h1 ref={titleRef} style={{
                    fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                    lineHeight: 1.2,
                    marginBottom: '4rem',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                    textTransform: 'uppercase',
                    maxWidth: '800px',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                }}>
                    Traditional Japanese <span style={{ color: 'var(--primary)' }}>Irezumi</span> art for the modern <span style={{ color: 'var(--primary)' }}>soul</span>
                </h1>

                <div ref={buttonRef} style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                    <button
                        className="btn btn-primary"
                        style={{
                            padding: '1rem 3rem',
                            fontSize: '1rem',
                            letterSpacing: '0.1em',
                        }}
                    >
                        Book Consultation
                    </button>
                    <button
                        className="btn btn-ghost"
                        style={{
                            padding: '1rem 3rem',
                            fontSize: '1rem',
                            letterSpacing: '0.1em',
                            backdropFilter: 'blur(10px)',
                            background: 'rgba(255,255,255,0.05)'
                        }}
                        onClick={() => {
                            const portfolioSection = document.getElementById('portfolio');
                            if (portfolioSection) {
                                portfolioSection.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                    >
                        View Works
                    </button>
                </div>
            </div>

            {/* Persistent Showreel - Bottom Right */}
            <div
                ref={showreelRef}
                style={{
                    position: 'absolute',
                    bottom: '2rem',
                    right: '2rem',
                    zIndex: 10,
                    width: 'clamp(220px, 20vw, 320px)',
                    background: 'var(--card-bg)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid var(--glass-border)',
                    borderRadius: '4px',
                    overflow: 'hidden',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                {/* Header Bar */}
                <div style={{
                    padding: '0.5rem 0.8rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: 'var(--bg-color)',
                    borderBottom: '1px solid var(--glass-border)'
                }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontSize: '0.7rem',
                        fontFamily: 'var(--font-body)',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        color: 'var(--text-color)'
                    }}>
                        <span style={{ color: 'var(--primary)' }}>▶</span> SHOWREEL
                    </div>
                    <div style={{
                        fontSize: '0.7rem',
                        fontFamily: 'var(--font-body)',
                        color: 'var(--text-muted)',
                        letterSpacing: '0.05em'
                    }}>
                        1:35
                    </div>
                </div>

                {/* Video/Image Content */}
                <div style={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '16/9',
                    overflow: 'hidden'
                }}>
                    <img
                        src={showreelPreview}
                        alt="Showreel"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            transition: 'transform 0.5s ease',
                            cursor: 'pointer'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    />

                    {/* Play Overlay on Hover */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'rgba(0,0,0,0.2)',
                        pointerEvents: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <div style={{
                            width: '40px',
                            height: '40px',
                            background: 'rgba(255,255,255,0.1)',
                            backdropFilter: 'blur(4px)',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: '1px solid rgba(255,255,255,0.2)'
                        }}>
                            <div style={{
                                width: 0,
                                height: 0,
                                borderTop: '6px solid transparent',
                                borderBottom: '6px solid transparent',
                                borderLeft: '10px solid white',
                                marginLeft: '3px'
                            }} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
