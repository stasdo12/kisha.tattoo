import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import masterImage from '../assets/IMG_5582.webp';
import LazyImage from './LazyImage';

gsap.registerPlugin(ScrollTrigger);

const MasterProfile = () => {
    const sectionRef = useRef(null);
    const imageRef = useRef(null);
    const contentRef = useRef(null);
    const titleRef = useRef(null);
    const textRefs = useRef([]);
    const signatureRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Parallax effect for the image
            gsap.to(imageRef.current, {
                yPercent: 20,
                ease: 'none',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true
                }
            });

            // Content entrance animation
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 60%',
                    end: 'bottom 80%',
                    toggleActions: 'play none none reverse'
                }
            });

            tl.from(titleRef.current, {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: 'power3.out'
            })
                .from(textRefs.current, {
                    y: 30,
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: 'power3.out'
                }, '-=0.5')
                .from(signatureRef.current, {
                    scaleX: 0,
                    opacity: 0,
                    duration: 1,
                    ease: 'power3.out'
                }, '-=0.3');

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            style={{
                position: 'relative',
                padding: '10rem 2rem',
                background: 'var(--bg-color)',
                overflow: 'hidden',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center'
            }}
        >
            {/* Background Kanji Decoration */}
            <div style={{
                position: 'absolute',
                top: '10%',
                right: '-5%',
                fontSize: 'clamp(10rem, 30vw, 40rem)',
                fontFamily: 'var(--font-body)',
                color: 'var(--text-color)',
                opacity: 0.03,
                pointerEvents: 'none',
                zIndex: 0,
                writingMode: 'vertical-rl'
            }}>
                匠
            </div>

            <div style={{
                maxWidth: '1400px',
                margin: '0 auto',
                width: '100%',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: '6rem',
                alignItems: 'center',
                position: 'relative',
                zIndex: 1
            }}>
                {/* Image Side */}
                <div style={{
                    position: 'relative',
                    height: '80vh',
                    minHeight: '600px',
                    borderRadius: '2px',
                    overflow: 'hidden'
                }}>
                    <div
                        ref={imageRef}
                        style={{
                            width: '100%',
                            height: '120%', // Taller for parallax
                            position: 'absolute',
                            top: '-10%',
                            left: 0,
                            backgroundImage: `url(${masterImage})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            filter: 'grayscale(20%) contrast(110%)'
                        }}
                    />
                    {/* Overlay gradient */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(to right, rgba(0,0,0,0.2), transparent)',
                        pointerEvents: 'none'
                    }} />

                    {/* Frame border */}
                    <div style={{
                        position: 'absolute',
                        top: '2rem',
                        left: '2rem',
                        right: '2rem',
                        bottom: '2rem',
                        border: '1px solid rgba(255,255,255,0.2)',
                        pointerEvents: 'none'
                    }} />
                </div>

                {/* Content Side */}
                <div ref={contentRef} style={{ padding: '2rem' }}>
                    <h2
                        ref={titleRef}
                        style={{
                            fontSize: 'clamp(3rem, 6vw, 5rem)',
                            fontFamily: 'var(--font-heading)',
                            color: 'var(--text-color)',
                            marginBottom: '3rem',
                            lineHeight: 1.1
                        }}
                    >
                        The <span style={{ color: 'var(--primary)' }}>Master</span>
                        <br />
                        Behind the Ink
                    </h2>

                    <div style={{
                        fontSize: '1.1rem',
                        lineHeight: 1.8,
                        color: 'var(--text-muted)',
                        fontFamily: 'var(--font-body)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '2rem'
                    }}>
                        <p ref={el => textRefs.current[0] = el}>
                            With over two decades of dedication to the art of Irezumi,
                            I view every tattoo not just as ink on skin, but as a spiritual covenant.
                            My journey began in the traditional studios of Osaka, where I learned
                            that patience is the most vital tool in an artist's kit.
                        </p>
                        <p ref={el => textRefs.current[1] = el}>
                            True mastery lies in the balance between honoring ancient tradition
                            and embracing individual expression. Each design is meticulously crafted
                            to tell your unique story, weaving together symbols of strength,
                            protection, and transformation.
                        </p>
                        <p ref={el => textRefs.current[2] = el}>
                            "The skin is a canvas that breathes, ages, and lives.
                            To mark it is to alter a destiny."
                        </p>
                    </div>

                    {/* Signature / Name Seal */}
                    <div
                        ref={signatureRef}
                        style={{
                            marginTop: '4rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1.5rem'
                        }}
                    >
                        <div style={{
                            width: '60px',
                            height: '60px',
                            border: '2px solid var(--primary)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'var(--primary)',
                            fontSize: '1.5rem',
                            fontFamily: 'serif',
                            fontWeight: 'bold'
                        }}>
                            匠
                        </div>
                        <div style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: '1.5rem',
                            color: 'var(--text-color)',
                            letterSpacing: '0.1em'
                        }}>
                            MASTER KISHA
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MasterProfile;
