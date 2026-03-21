import React, { useEffect } from 'react';
import GraphicsHeader from '../../components/graphics/GraphicsHeader';
import GraphicsFooter from '../../components/graphics/GraphicsFooter';
import '../../styles/graphics.css';

const GraphicsWorks = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div id="works-page" style={{
            width: '100%',
            minHeight: '4236px',
            position: 'relative',
            background: '#F2F2F2',
            overflow: 'hidden'
        }}>
            <GraphicsHeader />

            {/* Hero Background Image with Overlay */}
            <div style={{
                position: 'absolute',
                width: '1440px',
                height: '780px',
                left: 'calc(50% - 720px)',
                top: '0px',
                zIndex: 0,
            }}>
                <img
                    src="/src/assets/IMG_5582.webp"
                    alt="Hero background"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}
                />
                <div style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    left: '0px',
                    top: '0px',
                    background: 'linear-gradient(0deg, rgba(13, 13, 13, 0.35) 0%, rgba(13, 13, 13, 0.35) 100%)',
                }} />
            </div>

            {/* Latest works Title */}
            <h1 style={{
                position: 'absolute',
                left: 'calc(50% - 700px)',
                top: '63px',
                fontFamily: "'PP Neue Montreal', system-ui, sans-serif",
                fontWeight: 500,
                fontSize: '80px',
                lineHeight: '72px',
                color: '#F2F2F2',
                margin: 0,
                zIndex: 1,
            }}>
                Latest works
            </h1>

            {/* Description Text */}
            <p style={{
                position: 'absolute',
                width: '352px',
                left: 'calc(50% - 700px)',
                top: '155px',
                fontFamily: "'PP Neue Montreal', system-ui, sans-serif",
                fontWeight: 500,
                fontSize: '20px',
                lineHeight: '20px',
                color: '#F2F2F2',
                margin: 0,
                zIndex: 1,
            }}>
                Dive into the collection and witness the result of deep devotion, precise technique, and unwavering standards
            </p>

            {/* Jutsu / Art Section (術) */}
            <div style={{
                position: 'absolute',
                width: '177px',
                left: 'calc(50% - 700px)',
                top: '630px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                gap: '16px',
                zIndex: 1,
            }}>
                <div style={{
                    fontFamily: "'PP Neue Montreal', system-ui, sans-serif",
                    fontWeight: 500,
                    fontSize: '80px',
                    lineHeight: '72px',
                    color: '#F2F2F2',
                }}>
                    術
                </div>
                <div style={{
                    width: '177px',
                    fontFamily: "'PP Neue Montreal', system-ui, sans-serif",
                    fontWeight: 500,
                    fontSize: '14px',
                    lineHeight: '14px',
                    color: '#BFBFBF',
                }}>
                    In the context of large-scale Irezumi, underscores the professionalism of the master
                </div>
            </div>

            {/* Images Grid */}

            {/* Large Image 1 */}
            <img
                src="/src/assets/2-main.jpg"
                alt="Work 1"
                style={{
                    width: '692px',
                    height: '720px',
                    position: 'absolute',
                    left: 'calc(50% - 700px)',
                    top: '860px',
                    objectFit: 'cover',
                }}
            />

            {/* Row 1 - Top Right Images */}
            <img
                src="/src/assets/Kisha1.webp"
                alt="Work 2"
                style={{
                    width: '338px',
                    height: '352px',
                    position: 'absolute',
                    left: 'calc(50% + 8px)',
                    top: '860px',
                    objectFit: 'cover',
                }}
            />

            <img
                src="/src/assets/Kisha-slider2.webp"
                alt="Work 3"
                style={{
                    width: '338px',
                    height: '352px',
                    position: 'absolute',
                    left: 'calc(50% + 362px)',
                    top: '860px',
                    objectFit: 'cover',
                }}
            />

            {/* Row 2 - Middle Right Images */}
            <img
                src="/src/assets/Kisha-slider1.webp"
                alt="Work 4"
                style={{
                    width: '338px',
                    height: '352px',
                    position: 'absolute',
                    left: 'calc(50% + 8px)',
                    top: '1228px',
                    objectFit: 'cover',
                }}
            />

            <img
                src="/src/assets/1.jpg"
                alt="Work 5"
                style={{
                    width: '338px',
                    height: '352px',
                    position: 'absolute',
                    left: 'calc(50% + 362px)',
                    top: '1228px',
                    objectFit: 'cover',
                }}
            />

            {/* Wide Image */}
            <img
                src="/src/assets/IMG_5582.webp"
                alt="Work 6"
                style={{
                    width: '1400px',
                    height: '720px',
                    position: 'absolute',
                    left: 'calc(50% - 700px)',
                    top: '1596px',
                    objectFit: 'cover',
                }}
            />

            {/* Large Images Row */}
            <img
                src="/src/assets/2-main.jpg"
                alt="Work 7"
                style={{
                    width: '692px',
                    height: '720px',
                    position: 'absolute',
                    left: 'calc(50% - 700px)',
                    top: '2332px',
                    objectFit: 'cover',
                }}
            />

            <img
                src="/src/assets/Kisha1.webp"
                alt="Work 8"
                style={{
                    width: '692px',
                    height: '720px',
                    position: 'absolute',
                    left: 'calc(50% + 8px)',
                    top: '2332px',
                    objectFit: 'cover',
                }}
            />

            {/* Bottom Row - 4 Small Images */}
            <img
                src="/src/assets/Kisha-slider2.webp"
                alt="Work 9"
                style={{
                    width: '338px',
                    height: '352px',
                    position: 'absolute',
                    left: 'calc(50% - 700px)',
                    top: '3068px',
                    objectFit: 'cover',
                }}
            />

            <img
                src="/src/assets/Kisha-slider1.webp"
                alt="Work 10"
                style={{
                    width: '338px',
                    height: '352px',
                    position: 'absolute',
                    left: 'calc(50% - 346px)',
                    top: '3068px',
                    objectFit: 'cover',
                }}
            />

            <img
                src="/src/assets/1.jpg"
                alt="Work 11"
                style={{
                    width: '338px',
                    height: '352px',
                    position: 'absolute',
                    left: 'calc(50% + 8px)',
                    top: '3068px',
                    objectFit: 'cover',
                }}
            />

            <img
                src="/src/assets/2-main.jpg"
                alt="Work 12"
                style={{
                    width: '338px',
                    height: '352px',
                    position: 'absolute',
                    left: 'calc(50% + 362px)',
                    top: '3068px',
                    objectFit: 'cover',
                }}
            />

            {/* Footer Section */}
            <div style={{
                position: 'absolute',
                top: '3500px',
                width: '100%',
                left: 0,
            }}>
                <GraphicsFooter />
            </div>

        </div>
    );
};

export default GraphicsWorks;
