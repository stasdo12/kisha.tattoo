import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/index.css';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const heroRef = useRef(null);
    const contentRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const badgeRef = useRef(null);
    const buttonRef = useRef(null);
    const bg1Ref = useRef(null);
    const bg2Ref = useRef(null);

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
                .from(subtitleRef.current, {
                    y: 20,
                    opacity: 0,
                    duration: 1
                }, '-=0.7')
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

            // Subtitle parallax (faster)
            gsap.to(subtitleRef.current, {
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 0.8,
                },
                y: -80,
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
                    willChange: 'transform, opacity'
                }}
            >
                <div
                    ref={badgeRef}
                    style={{ marginBottom: '2rem' }}
                >
                    <span style={{
                        display: 'inline-block',
                        padding: '0.5rem 1rem',
                        border: '1px solid var(--primary)',
                        color: 'var(--primary)',
                        fontFamily: 'Inter, sans-serif',
                        letterSpacing: '0.2em',
                        fontSize: '0.9rem',
                        background: 'var(--glass-bg)',
                        borderRadius: '4px'
                    }}>
                        東京 • 刺青
                    </span>
                </div>

                <h1
                    ref={titleRef}
                    style={{
                        fontSize: 'clamp(3rem, 8vw, 6rem)',
                        marginBottom: '1.5rem',
                        color: 'var(--text-color)',
                        fontFamily: 'Playfair Display, serif',
                        fontWeight: 400,
                        letterSpacing: '-0.02em',
                        textShadow: '0 0 20px rgba(0,0,0,0.1)',
                        willChange: 'transform'
                    }}
                >
                    Master of <span style={{ fontStyle: 'italic', fontFamily: 'Playfair Display, serif', color: 'var(--primary)' }}>Ink</span>
                </h1>

                <p
                    ref={subtitleRef}
                    style={{
                        fontSize: '1.2rem',
                        color: 'var(--text-muted)',
                        maxWidth: '500px',
                        margin: '0 auto 3rem',
                        fontFamily: 'Inter, sans-serif',
                        willChange: 'transform'
                    }}
                >
                    Traditional Japanese Irezumi art for the modern soul.
                    Experience the flow of eternity on your skin.
                </p>

                <div ref={buttonRef}>
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
                </div>
            </div>
        </section>
    );
};

export default Hero;
