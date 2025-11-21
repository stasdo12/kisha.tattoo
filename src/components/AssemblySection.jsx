import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AssemblySection = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center center"]
    });

    // Transform values for 4 pieces coming from corners
    const x1 = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"]);
    const y1 = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"]);

    const x2 = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
    const y2 = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"]);

    const x3 = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"]);
    const y3 = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);

    const x4 = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
    const y4 = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);

    const opacity = useTransform(scrollYProgress, [0.5, 1], [0, 1]);
    const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

    return (
        <section ref={ref} style={{ height: '150vh', position: 'relative' }}>
            <div style={{
                position: 'sticky',
                top: 0,
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
            }}>
                <div style={{ position: 'relative', width: '600px', height: '400px' }}>
                    {/* Top Left Piece */}
                    <motion.div style={{
                        x: x1, y: y1,
                        position: 'absolute', top: 0, left: 0, width: '50%', height: '50%',
                        background: 'linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        borderRight: '2px solid var(--bg-color)',
                        borderBottom: '2px solid var(--bg-color)',
                        zIndex: 2
                    }}>
                        <span style={{ fontSize: '4rem', color: '#cc3333', fontFamily: 'Playfair Display, serif' }}>TR</span>
                    </motion.div>

                    {/* Top Right Piece */}
                    <motion.div style={{
                        x: x2, y: y2,
                        position: 'absolute', top: 0, right: 0, width: '50%', height: '50%',
                        background: 'linear-gradient(135deg, #cc3333 0%, #991111 100%)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        borderLeft: '2px solid var(--bg-color)',
                        borderBottom: '2px solid var(--bg-color)',
                        zIndex: 2
                    }}>
                        <span style={{ fontSize: '4rem', color: '#ffffff', fontFamily: 'Playfair Display, serif' }}>UE</span>
                    </motion.div>

                    {/* Bottom Left Piece */}
                    <motion.div style={{
                        x: x3, y: y3,
                        position: 'absolute', bottom: 0, left: 0, width: '50%', height: '50%',
                        background: 'linear-gradient(135deg, #660000 0%, #330000 100%)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        borderRight: '2px solid var(--bg-color)',
                        borderTop: '2px solid var(--bg-color)',
                        zIndex: 2
                    }}>
                        <span style={{ fontSize: '4rem', color: '#d4af37', fontFamily: 'Playfair Display, serif' }}>AR</span>
                    </motion.div>

                    {/* Bottom Right Piece */}
                    <motion.div style={{
                        x: x4, y: y4,
                        position: 'absolute', bottom: 0, right: 0, width: '50%', height: '50%',
                        background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        borderLeft: '2px solid var(--bg-color)',
                        borderTop: '2px solid var(--bg-color)',
                        zIndex: 2
                    }}>
                        <span style={{ fontSize: '4rem', color: '#cc3333', fontFamily: 'Playfair Display, serif' }}>T</span>
                    </motion.div>

                    {/* Center Glow */}
                    <motion.div style={{
                        opacity,
                        scale,
                        position: 'absolute',
                        top: '50%', left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '100%', height: '100%',
                        background: 'radial-gradient(circle, rgba(204, 51, 51, 0.3) 0%, transparent 70%)',
                        zIndex: 1
                    }} />
                </div>

                <motion.div
                    style={{ opacity, position: 'absolute', bottom: '10%', textAlign: 'center' }}
                >
                    <p style={{ fontSize: '1.5rem', letterSpacing: '0.2em', color: 'var(--text-muted)' }}>
                        COMPLETION
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default AssemblySection;
