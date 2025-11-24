import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const LazyImage = ({ src, alt, className, style, placeholderColor = '#1a1a1a' }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const imgRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsInView(true);
                        observer.disconnect();
                    }
                });
            },
            {
                rootMargin: '50px',
                threshold: 0.1
            }
        );

        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        return () => {
            if (observer && observer.disconnect) {
                observer.disconnect();
            }
        };
    }, []);

    return (
        <div
            ref={imgRef}
            className={className}
            style={{
                ...style,
                position: 'relative',
                overflow: 'hidden',
                backgroundColor: placeholderColor
            }}
        >
            {isInView && (
                <motion.img
                    src={src}
                    alt={alt}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isLoaded ? 1 : 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    onLoad={() => setIsLoaded(true)}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block'
                    }}
                    loading="lazy"
                />
            )}

            {!isLoaded && (
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        background: `linear-gradient(110deg, ${placeholderColor} 8%, #2a2a2a 18%, ${placeholderColor} 33%)`,
                        backgroundSize: '200% 100%',
                        animation: 'shine 1.5s linear infinite',
                    }}
                />
            )}

            <style>{`
                @keyframes shine {
                    to {
                        background-position-x: -200%;
                    }
                }
            `}</style>
        </div>
    );
};

export default LazyImage;
