import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
    { title: 'Tebori', desc: 'Traditional hand-poked tattooing. The authentic Japanese method for rich, lasting color.', icon: '🥢' },
    { title: 'Machine', desc: 'Modern precision for intricate fine lines and smooth shading.', icon: '⚙️' },
    { title: 'Custom Design', desc: 'One-of-a-kind pieces tailored to your story and body flow.', icon: '🐉' },
];

const Services = () => {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Title animation
            gsap.from(titleRef.current, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 75%',
                    end: 'top 40%',
                    scrub: 1,
                },
                opacity: 0,
                y: 50,
            });

            // Cards stagger animation
            cardsRef.current.forEach((card, index) => {
                if (!card) return;

                const direction = index === 0 ? -100 : index === 2 ? 100 : 0;
                const yOffset = index === 1 ? 100 : 0;

                gsap.from(card, {
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 85%',
                        end: 'top 50%',
                        scrub: 1,
                    },
                    opacity: 0,
                    x: direction,
                    y: yOffset,
                    scale: 0.9,
                });
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="services"
            ref={sectionRef}
            style={{
                padding: '6rem 2rem',
                position: 'relative',
                overflow: 'hidden',
                background: 'linear-gradient(180deg, var(--bg-color) 0%, #0a0a0a 100%)'
            }}
        >
            <div className="container">
                <div
                    ref={titleRef}
                    style={{ textAlign: 'center', marginBottom: '5rem' }}
                >
                    <h2 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                        marginBottom: '1rem',
                        color: 'var(--text-color)',
                        fontFamily: 'Playfair Display, serif',
                        fontWeight: 700
                    }}>
                        Our <span style={{
                            background: 'linear-gradient(135deg, #cc3333, #ff6b35)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}>Craft</span>
                    </h2>
                    <p style={{
                        color: 'var(--text-muted)',
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '1.1rem'
                    }}>
                        Precision. Tradition. Artistry.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {services.map((service, index) => (
                        <div
                            key={index}
                            ref={(el) => (cardsRef.current[index] = el)}
                            style={{ willChange: 'transform, opacity' }}
                        >
                            <ServiceCard service={service} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const ServiceCard = ({ service }) => (
    <div
        className="glass"
        style={{
            padding: '3rem',
            height: '100%',
            background: 'rgba(255, 255, 255, 0.03)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '16px',
            transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
            cursor: 'pointer',
            color: 'var(--text-color)',
            position: 'relative',
            overflow: 'hidden'
        }}
        onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-12px)';
            e.currentTarget.style.borderColor = 'rgba(204, 51, 51, 0.3)';
            e.currentTarget.style.boxShadow = '0 24px 48px rgba(0, 0, 0, 0.3)';
        }}
        onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
            e.currentTarget.style.boxShadow = 'none';
        }}
    >
        {/* Gradient overlay on hover */}
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '150px',
            background: 'linear-gradient(135deg, rgba(204, 51, 51, 0.1) 0%, transparent 100%)',
            opacity: 0,
            transition: 'opacity 0.4s ease',
            pointerEvents: 'none'
        }} className="card-gradient" />

        <div style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>
            {service.icon}
        </div>
        <h3 style={{
            fontSize: '1.75rem',
            marginBottom: '1rem',
            fontFamily: 'Playfair Display, serif',
            color: 'var(--text-color)',
            fontWeight: 700
        }}>
            {service.title}
        </h3>
        <p style={{
            color: 'var(--text-muted)',
            lineHeight: '1.8',
            fontFamily: 'Inter, sans-serif',
            fontSize: '1rem'
        }}>
            {service.desc}
        </p>
    </div>
);

export default Services;
