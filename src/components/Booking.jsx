import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Booking = () => {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const formRef = useRef(null);
    const fieldsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Title animation
            gsap.from(titleRef.current, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 70%',
                    end: 'top 40%',
                    scrub: 1,
                },
                opacity: 0,
                y: 50,
            });

            // Form container
            gsap.from(formRef.current, {
                scrollTrigger: {
                    trigger: formRef.current,
                    start: 'top 75%',
                    end: 'top 45%',
                    scrub: 1,
                },
                opacity: 0,
                y: 30,
            });

            // Stagger form fields
            fieldsRef.current.forEach((field, index) => {
                if (!field) return;
                gsap.from(field, {
                    scrollTrigger: {
                        trigger: field,
                        start: 'top 80%',
                        end: 'top 60%',
                        scrub: 1,
                    },
                    opacity: 0,
                    x: index % 2 === 0 ? -30 : 30,
                });
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="booking"
            ref={sectionRef}
            style={{
                padding: '6rem 2rem',
                position: 'relative',
                background: 'var(--bg-color)'
            }}
        >
            <div className="container" style={{ maxWidth: '800px' }}>
                <div
                    ref={titleRef}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h2 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                        marginBottom: '1rem',
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 700
                    }}>
                        Begin Your <span style={{
                            background: 'linear-gradient(135deg, #cc3333, #ff6b35)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}>Journey</span>
                    </h2>
                    <p style={{
                        color: 'var(--text-muted)',
                        fontFamily: 'var(--font-body)',
                        fontSize: '1.1rem'
                    }}>
                        Consultations are by appointment only. Tell us your story.
                    </p>
                </div>

                <form
                    ref={formRef}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '2rem',
                        background: 'var(--card-bg)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid var(--glass-border)',
                        borderRadius: '20px',
                        padding: '3rem'
                    }}
                >
                    <div
                        ref={(el) => (fieldsRef.current[0] = el)}
                        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}
                    >
                        <input
                            type="text"
                            placeholder="NAME"
                            className="form-input"
                        />
                        <input
                            type="email"
                            placeholder="EMAIL"
                            className="form-input"
                        />
                    </div>

                    <div
                        ref={(el) => (fieldsRef.current[1] = el)}
                        style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
                    >
                        <label style={{
                            fontFamily: 'var(--font-body)',
                            color: 'var(--text-color)',
                            fontSize: '0.875rem',
                            fontWeight: 600,
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em'
                        }}>
                            Concept
                        </label>
                        <textarea
                            rows="6"
                            className="form-input"
                            placeholder="Describe your idea, placement, and size..."
                            style={{ resize: 'vertical' }}
                        />
                    </div>

                    <button
                        ref={(el) => (fieldsRef.current[2] = el)}
                        className="btn btn-primary"
                        type="submit"
                        style={{
                            padding: '1.25rem',
                            fontSize: '1rem',
                            fontWeight: 700,
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase'
                        }}
                    >
                        Send Request
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Booking;
