import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AssemblySection = () => {
    const sectionRef = useRef(null);
    const letterRefs = useRef([]);
    const kanjiRefs = useRef([]);
    const glowRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Initial state - all letters hidden and scattered
            letterRefs.current.forEach((letter, index) => {
                const angle = (index - 3.5) * 45; // Spread letters in a circle
                const distance = 400;
                const x = Math.cos(angle * Math.PI / 180) * distance;
                const y = Math.sin(angle * Math.PI / 180) * distance;

                gsap.set(letter, {
                    x,
                    y,
                    opacity: 0,
                    scale: 0.5,
                    rotation: angle
                });
            });

            // Initial state for kanji
            kanjiRefs.current.forEach((kanji, index) => {
                gsap.set(kanji, {
                    x: index === 0 ? -200 : 200,
                    opacity: 0,
                    scale: 0.8
                });
            });

            gsap.set(glowRef.current, { scale: 0, opacity: 0 });
            gsap.set(textRef.current, { opacity: 0, y: 50 });

            // Assembly animation controlled by scroll
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top center',
                    end: 'center center',
                    scrub: 1.5,
                }
            });

            // Animate letters - U comes last (middle letter trick)
            const letterOrder = [0, 1, 3, 4, 5, 6, 7, 2]; // T, R, E, A, R, T, 芸, U (middle)

            letterOrder.forEach((index, i) => {
                tl.to(letterRefs.current[index], {
                    x: 0,
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    rotation: 0,
                    duration: 0.8,
                    ease: 'back.out(1.7)'
                }, i * 0.08);
            });

            // Animate kanji
            tl.to(kanjiRefs.current[0], {
                x: 0,
                opacity: 1,
                scale: 1,
                duration: 0.6,
                ease: 'power2.out'
            }, 0.4)
                .to(kanjiRefs.current[1], {
                    x: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 0.6,
                    ease: 'power2.out'
                }, 0.5)
                .to(glowRef.current, {
                    scale: 1,
                    opacity: 1,
                    duration: 0.8
                }, 0.6)
                .to(textRef.current, {
                    opacity: 1,
                    y: 0,
                    duration: 0.6
                }, 0.9);

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const letters = ['T', 'R', 'U', 'E', 'A', 'R', 'T'];
    const kanji = ['真の', '芸術'];

    return (
        <section ref={sectionRef} style={{
            height: '150vh',
            position: 'relative',
            perspective: '1000px'
        }}>
            <div style={{
                position: 'sticky',
                top: 0,
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
            }}>
                <div style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transformStyle: 'preserve-3d',
                    gap: '3rem'
                }}>
                    {/* English Text Container */}
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        zIndex: 2,
                        gap: 'clamp(0.3rem, 1vw, 0.8rem)'
                    }}>
                        {letters.map((letter, index) => (
                            <React.Fragment key={index}>
                                <span
                                    ref={(el) => (letterRefs.current[index] = el)}
                                    style={{
                                        fontSize: 'clamp(3.5rem, 10vw, 8rem)',
                                        fontFamily: 'var(--font-heading)',
                                        fontWeight: 800,
                                        letterSpacing: '-0.03em',
                                        color: 'var(--text-color)',
                                        position: 'relative',
                                        display: 'inline-block',
                                        cursor: 'pointer',
                                        transition: 'transform 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => {
                                        gsap.to(e.currentTarget, {
                                            y: -10,
                                            scale: 1.1,
                                            duration: 0.3
                                        });
                                    }}
                                    onMouseLeave={(e) => {
                                        gsap.to(e.currentTarget, {
                                            y: 0,
                                            scale: 1,
                                            duration: 0.3
                                        });
                                    }}
                                >
                                    {letter}
                                </span>
                                {/* Dash after TRUE */}
                                {index === 3 && (
                                    <div style={{
                                        width: 'clamp(40px, 6vw, 80px)',
                                        height: '4px',
                                        background: 'linear-gradient(90deg, #cc3333, #d4af37)',
                                        margin: '0 clamp(0.5rem, 2vw, 1.5rem)',
                                        borderRadius: '2px',
                                        boxShadow: '0 0 20px rgba(204, 51, 51, 0.4)'
                                    }} />
                                )}
                            </React.Fragment>
                        ))}
                    </div>

                    {/* Japanese Text Container */}
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        zIndex: 2,
                        gap: '1.5rem'
                    }}>
                        {kanji.map((char, index) => (
                            <React.Fragment key={index}>
                                <span
                                    ref={(el) => (kanjiRefs.current[index] = el)}
                                    style={{
                                        fontSize: 'clamp(2rem, 5vw, 4rem)',
                                        fontFamily: 'var(--font-body)',
                                        fontWeight: 400,
                                        letterSpacing: '0.1em',
                                        color: 'var(--text-color)',
                                        position: 'relative',
                                        display: 'inline-block',
                                        textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
                                        opacity: 0.9
                                    }}
                                >
                                    {char}
                                </span>
                                {/* Dot between kanji */}
                                {index === 0 && (
                                    <div style={{
                                        width: '8px',
                                        height: '8px',
                                        borderRadius: '50%',
                                        background: 'linear-gradient(135deg, #cc3333, #d4af37)',
                                        boxShadow: '0 0 12px rgba(204, 51, 51, 0.6)'
                                    }} />
                                )}
                            </React.Fragment>
                        ))}
                    </div>

                    {/* Center Glow */}
                    <div ref={glowRef} style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '600px',
                        height: '600px',
                        background: 'radial-gradient(circle, rgba(204, 51, 51, 0.2) 0%, rgba(212, 175, 55, 0.15) 40%, transparent 70%)',
                        filter: 'blur(60px)',
                        zIndex: 0,
                        pointerEvents: 'none'
                    }} />
                </div>

                <div
                    ref={textRef}
                    style={{
                        position: 'absolute',
                        bottom: '10%',
                        textAlign: 'center',
                        width: '100%'
                    }}
                >
                    <p style={{
                        fontSize: '1.5rem',
                        letterSpacing: '0.3em',
                        color: 'var(--text-muted)',
                        fontFamily: 'var(--font-body)',
                        fontWeight: '300',
                        textTransform: 'uppercase'
                    }}>
                        真実 • Truth
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AssemblySection;
