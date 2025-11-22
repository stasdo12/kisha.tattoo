import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AssemblySection = () => {
    const sectionRef = useRef(null);
    const cubesContainerRef = useRef(null);
    const cube1Ref = useRef(null);
    const cube2Ref = useRef(null);
    const cube3Ref = useRef(null);
    const cube4Ref = useRef(null);
    const glowRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Initial state - cubes scattered
            gsap.set(cube1Ref.current, { x: -400, y: -300, rotationY: -180, rotationX: 45, opacity: 0 });
            gsap.set(cube2Ref.current, { x: 400, y: -300, rotationY: 180, rotationX: -45, opacity: 0 });
            gsap.set(cube3Ref.current, { x: -400, y: 300, rotationY: 180, rotationX: 45, opacity: 0 });
            gsap.set(cube4Ref.current, { x: 400, y: 300, rotationY: -180, rotationX: -45, opacity: 0 });
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

            // Animate cubes into position - controlled by scroll
            tl.to(cube1Ref.current, {
                x: 0,
                y: 0,
                rotationY: 0,
                rotationX: 0,
                opacity: 1,
                duration: 1,
                ease: 'power2.out'
            }, 0)
                .to(cube2Ref.current, {
                    x: 0,
                    y: 0,
                    rotationY: 0,
                    rotationX: 0,
                    opacity: 1,
                    duration: 1,
                    ease: 'power2.out'
                }, 0.1)
                .to(cube3Ref.current, {
                    x: 0,
                    y: 0,
                    rotationY: 0,
                    rotationX: 0,
                    opacity: 1,
                    duration: 1,
                    ease: 'power2.out'
                }, 0.2)
                .to(cube4Ref.current, {
                    x: 0,
                    y: 0,
                    rotationY: 0,
                    rotationX: 0,
                    opacity: 1,
                    duration: 1,
                    ease: 'power2.out'
                }, 0.3)
                .to(glowRef.current, {
                    scale: 1,
                    opacity: 1,
                    duration: 0.8
                }, 0.5)
                .to(textRef.current, {
                    opacity: 1,
                    y: 0,
                    duration: 0.6
                }, 0.8);

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const cubeStyle = {
        position: 'absolute',
        width: '180px',
        height: '180px',
        transformStyle: 'preserve-3d',
        transition: 'transform 0.3s ease',
        cursor: 'pointer'
    };

    const faceStyle = {
        position: 'absolute',
        width: '180px',
        height: '180px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '3.5rem',
        fontFamily: 'var(--font-heading)',
        fontWeight: 'bold',
        backfaceVisibility: 'hidden',
        border: '2px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 0 20px rgba(255, 255, 255, 0.05)'
    };

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
                <div ref={cubesContainerRef} style={{
                    position: 'relative',
                    width: '400px',
                    height: '400px',
                    transformStyle: 'preserve-3d'
                }}>
                    {/* Cube 1 - TR (Top Left) */}
                    <div
                        ref={cube1Ref}
                        style={{
                            ...cubeStyle,
                            top: '20px',
                            left: '20px'
                        }}
                        onMouseEnter={(e) => {
                            gsap.to(e.currentTarget, {
                                rotationY: '+=15',
                                rotationX: '+=10',
                                scale: 1.05,
                                duration: 0.3
                            });
                        }}
                        onMouseLeave={(e) => {
                            gsap.to(e.currentTarget, {
                                rotationY: '-=15',
                                rotationX: '-=10',
                                scale: 1,
                                duration: 0.3
                            });
                        }}
                    >
                        <div style={{
                            ...faceStyle,
                            background: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 50%, #1a1a1a 100%)',
                            color: '#cc3333',
                            transform: 'translateZ(90px)'
                        }}>TR</div>
                        <div style={{
                            ...faceStyle,
                            background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
                            transform: 'rotateY(90deg) translateZ(90px)'
                        }}></div>
                        <div style={{
                            ...faceStyle,
                            background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
                            transform: 'rotateY(-90deg) translateZ(90px)'
                        }}></div>
                        <div style={{
                            ...faceStyle,
                            background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
                            transform: 'rotateX(90deg) translateZ(90px)'
                        }}></div>
                        <div style={{
                            ...faceStyle,
                            background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
                            transform: 'rotateX(-90deg) translateZ(90px)'
                        }}></div>
                    </div>

                    {/* Cube 2 - UE (Top Right) */}
                    <div
                        ref={cube2Ref}
                        style={{
                            ...cubeStyle,
                            top: '20px',
                            right: '20px'
                        }}
                        onMouseEnter={(e) => {
                            gsap.to(e.currentTarget, {
                                rotationY: '+=15',
                                rotationX: '+=10',
                                scale: 1.05,
                                duration: 0.3
                            });
                        }}
                        onMouseLeave={(e) => {
                            gsap.to(e.currentTarget, {
                                rotationY: '-=15',
                                rotationX: '-=10',
                                scale: 1,
                                duration: 0.3
                            });
                        }}
                    >
                        <div style={{
                            ...faceStyle,
                            background: 'linear-gradient(135deg, #cc3333 0%, #ff4444 50%, #cc3333 100%)',
                            color: '#ffffff',
                            transform: 'translateZ(90px)',
                            textShadow: '0 2px 10px rgba(0,0,0,0.5)'
                        }}>UE</div>
                        <div style={{
                            ...faceStyle,
                            background: 'linear-gradient(135deg, #991111 0%, #cc3333 100%)',
                            transform: 'rotateY(90deg) translateZ(90px)'
                        }}></div>
                        <div style={{
                            ...faceStyle,
                            background: 'linear-gradient(135deg, #991111 0%, #cc3333 100%)',
                            transform: 'rotateY(-90deg) translateZ(90px)'
                        }}></div>
                        <div style={{
                            ...faceStyle,
                            background: 'linear-gradient(135deg, #991111 0%, #cc3333 100%)',
                            transform: 'rotateX(90deg) translateZ(90px)'
                        }}></div>
                        <div style={{
                            ...faceStyle,
                            background: 'linear-gradient(135deg, #991111 0%, #cc3333 100%)',
                            transform: 'rotateX(-90deg) translateZ(90px)'
                        }}></div>
                    </div>

                    {/* Cube 3 - AR (Bottom Left) */}
                    <div
                        ref={cube3Ref}
                        style={{
                            ...cubeStyle,
                            bottom: '20px',
                            left: '20px'
                        }}
                        onMouseEnter={(e) => {
                            gsap.to(e.currentTarget, {
                                rotationY: '+=15',
                                rotationX: '+=10',
                                scale: 1.05,
                                duration: 0.3
                            });
                        }}
                        onMouseLeave={(e) => {
                            gsap.to(e.currentTarget, {
                                rotationY: '-=15',
                                rotationX: '-=10',
                                scale: 1,
                                duration: 0.3
                            });
                        }}
                    >
                        <div style={{
                            ...faceStyle,
                            background: 'linear-gradient(135deg, #660000 0%, #990000 50%, #660000 100%)',
                            color: '#d4af37',
                            transform: 'translateZ(90px)',
                            textShadow: '0 2px 10px rgba(0,0,0,0.5)'
                        }}>AR</div>
                        <div style={{
                            ...faceStyle,
                            background: 'linear-gradient(135deg, #330000 0%, #660000 100%)',
                            transform: 'rotateY(90deg) translateZ(90px)'
                        }}></div>
                        <div style={{
                            ...faceStyle,
                            background: 'linear-gradient(135deg, #330000 0%, #660000 100%)',
                            transform: 'rotateY(-90deg) translateZ(90px)'
                        }}></div>
                        <div style={{
                            ...faceStyle,
                            background: 'linear-gradient(135deg, #330000 0%, #660000 100%)',
                            transform: 'rotateX(90deg) translateZ(90px)'
                        }}></div>
                        <div style={{
                            ...faceStyle,
                            background: 'linear-gradient(135deg, #330000 0%, #660000 100%)',
                            transform: 'rotateX(-90deg) translateZ(90px)'
                        }}></div>
                    </div>

                    {/* Cube 4 - T (Bottom Right) */}
                    <div
                        ref={cube4Ref}
                        style={{
                            ...cubeStyle,
                            bottom: '20px',
                            right: '20px'
                        }}
                        onMouseEnter={(e) => {
                            gsap.to(e.currentTarget, {
                                rotationY: '+=15',
                                rotationX: '+=10',
                                scale: 1.05,
                                duration: 0.3
                            });
                        }}
                        onMouseLeave={(e) => {
                            gsap.to(e.currentTarget, {
                                rotationY: '-=15',
                                rotationX: '-=10',
                                scale: 1,
                                duration: 0.3
                            });
                        }}
                    >
                        <div style={{
                            ...faceStyle,
                            background: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 50%, #1a1a1a 100%)',
                            color: '#cc3333',
                            transform: 'translateZ(90px)'
                        }}>T</div>
                        <div style={{
                            ...faceStyle,
                            background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
                            transform: 'rotateY(90deg) translateZ(90px)'
                        }}></div>
                        <div style={{
                            ...faceStyle,
                            background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
                            transform: 'rotateY(-90deg) translateZ(90px)'
                        }}></div>
                        <div style={{
                            ...faceStyle,
                            background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
                            transform: 'rotateX(90deg) translateZ(90px)'
                        }}></div>
                        <div style={{
                            ...faceStyle,
                            background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
                            transform: 'rotateX(-90deg) translateZ(90px)'
                        }}></div>
                    </div>

                    {/* Center Glow */}
                    <div ref={glowRef} style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '500px',
                        height: '500px',
                        background: 'radial-gradient(circle, rgba(204, 51, 51, 0.4) 0%, rgba(204, 51, 51, 0.2) 30%, transparent 70%)',
                        filter: 'blur(40px)',
                        zIndex: -1,
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
