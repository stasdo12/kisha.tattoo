import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import GraphicsHeader from '../../components/graphics/GraphicsHeader';
import GraphicsFooter from '../../components/graphics/GraphicsFooter';
import '../../styles/graphics.css';

const GraphicsArticle = () => {
    const { id } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    return (
        <div id="article-page" style={{
            background: '#F2F2F2',
            minHeight: '3306px',
            position: 'relative',
            width: '100%',
            overflow: 'hidden'
        }}>
            <GraphicsHeader />

            {/* Hero Image */}
            <div style={{
                position: 'absolute',
                width: '1440px',
                height: '780px',
                left: 'calc(50% - 1440px/2)',
                top: '0px',
                background: `linear-gradient(0deg, rgba(13, 13, 13, 0.35), rgba(13, 13, 13, 0.35)), url(/src/assets/IMG_5582.webp)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                zIndex: 0,
            }} />

            {/* Back to Blog Button */}
            <Link to="/graphics/stories" style={{
                position: 'absolute',
                left: '20px',
                top: '63px',
                width: '128px',
                height: '44px',
                background: '#F2F2F2',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textDecoration: 'none',
                zIndex: 1,
            }}>
                <span style={{
                    fontFamily: "'PP Neue Montreal', system-ui, sans-serif",
                    fontWeight: 500,
                    fontSize: '20px',
                    lineHeight: '100%',
                    letterSpacing: '-0.02em',
                    color: '#0D0D0D',
                }}>
                    Back to blog
                </span>
            </Link>

            {/* Article Title */}
            <h1 style={{
                position: 'absolute',
                width: '809px',
                left: '20px',
                top: '147px',
                fontFamily: "'PP Neue Montreal', system-ui, sans-serif",
                fontWeight: 500,
                fontSize: '80px',
                lineHeight: '90%',
                letterSpacing: '-0.02em',
                color: '#F2F2F2',
                margin: 0,
                zIndex: 1,
            }}>
                Chrome tattoos: the hyper-polished future of ink
            </h1>

            {/* Metadata Bar */}
            <div style={{
                position: 'absolute',
                width: '1400px',
                left: '20px',
                top: '740px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                zIndex: 1,
            }}>
                <span style={{
                    fontFamily: "'PP Neue Montreal', system-ui, sans-serif",
                    fontWeight: 500,
                    fontSize: '20px',
                    lineHeight: '100%',
                    letterSpacing: '-0.02em',
                    color: '#F2F2F2',
                }}>
                    Tattoo • October, 2025
                </span>
                <span style={{
                    fontFamily: "'PP Neue Montreal', system-ui, sans-serif",
                    fontWeight: 500,
                    fontSize: '20px',
                    lineHeight: '100%',
                    letterSpacing: '-0.02em',
                    color: '#F2F2F2',
                }}>
                    5 min read
                </span>
            </div>

            {/* Sidebar / Table of Contents */}
            <div style={{
                position: 'absolute',
                width: '338px',
                left: '20px',
                top: '820px',
                background: '#D6D6D6',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '40px',
            }}>
                <span style={{
                    fontFamily: "'PP Neue Montreal', system-ui, sans-serif",
                    fontWeight: 500,
                    fontSize: '32px',
                    lineHeight: '90%',
                    textAlign: 'center',
                    letterSpacing: '-0.02em',
                    color: '#0D0D0D',
                }}>
                    Content
                </span>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div style={{ borderBottom: '1px solid #5C5C5C', paddingBottom: '8px' }}>
                        <span style={{
                            fontFamily: "'PP Neue Montreal', system-ui, sans-serif",
                            fontWeight: 500,
                            fontSize: '20px',
                            lineHeight: '100%',
                            letterSpacing: '-0.02em',
                            color: '#5C5C5C',
                        }}>
                            Chrome Tattoos
                        </span>
                    </div>
                    <div style={{ borderBottom: '1px solid #5C5C5C', paddingBottom: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{
                            fontFamily: "'PP Neue Montreal', system-ui, sans-serif",
                            fontWeight: 500,
                            fontSize: '20px',
                            lineHeight: '100%',
                            letterSpacing: '-0.02em',
                            color: '#5C5C5C',
                            width: '255px',
                        }}>
                            The Rise of Chrome Aesthetics in Art & Tattooing
                        </span>
                        <span style={{
                            fontFamily: "'PP Neue Montreal', system-ui, sans-serif",
                            fontWeight: 500,
                            fontSize: '32px',
                            lineHeight: '90%',
                            letterSpacing: '-0.02em',
                            color: '#0D0D0D',
                        }}>
                            真
                        </span>
                    </div>
                </div>
            </div>

            {/* Article Content */}
            <div style={{
                position: 'absolute',
                width: '692px',
                left: '374px',
                top: '820px',
                display: 'flex',
                flexDirection: 'column',
                gap: '40px',
            }}>
                <p style={{
                    fontFamily: "'PP Neue Montreal', system-ui, sans-serif",
                    fontWeight: 500,
                    fontSize: '20px',
                    lineHeight: '100%',
                    letterSpacing: '-0.02em',
                    color: '#0D0D0D',
                    margin: 0,
                }}>
                    We’ve always stood at the crossroads of innovation and craftsmanship— bringing together some of the most forward-thinking tattoo artists from around the world. From architectural linework to generative art based on brainwaves, pushing boundaries is in our DNA. Today, we’re diving into a tattoo style that’s been capturing the attention of collectors, artists, and design obsessives alike: chrome tattoos. Whether you’ve seen them trending online or you’re just hearing about them for the first time, this blog was written to give you everything you need to know—from the roots of the style to why some of the best chrome tattoo work in the world is being created right here
                </p>

                <h2 style={{
                    fontFamily: "'PP Neue Montreal', system-ui, sans-serif",
                    fontWeight: 500,
                    fontSize: '52px',
                    lineHeight: '90%',
                    letterSpacing: '-0.02em',
                    color: '#0D0D0D',
                    margin: 0,
                }}>
                    Chrome Tattoos
                </h2>

                <p style={{
                    fontFamily: "'PP Neue Montreal', system-ui, sans-serif",
                    fontWeight: 500,
                    fontSize: '20px',
                    lineHeight: '100%',
                    letterSpacing: '-0.02em',
                    color: '#0D0D0D',
                    margin: 0,
                }}>
                    Chrome tattoos are tattoos designed to mimic the reflective, high-shine appearance of polished metal—think liquid silver, molten chrome, or a high-gloss metallic object. The illusion of shine, depth, and reflection is achieved entirely through expert shading, light placement, and hyperrealistic techniques
                </p>

                <p style={{
                    fontFamily: "'PP Neue Montreal', system-ui, sans-serif",
                    fontWeight: 500,
                    fontSize: '20px',
                    lineHeight: '100%',
                    letterSpacing: '-0.02em',
                    color: '#0D0D0D',
                    margin: 0,
                }}>
                    They belong to the broader realism and hyperrealism tattoo family but stand out for their futuristic, surreal, and eye-catching finish. At first glance, a great chrome tattoo can genuinely look like there’s a 3D metallic object embedded in the skin. No filters. No edits. Just insanely skilled artistry
                </p>

                <h2 style={{
                    fontFamily: "'PP Neue Montreal', system-ui, sans-serif",
                    fontWeight: 500,
                    fontSize: '52px',
                    lineHeight: '90%',
                    letterSpacing: '-0.02em',
                    color: '#0D0D0D',
                    margin: 0,
                }}>
                    The Rise of Chrome Aesthetics in Art & Tattooing
                </h2>

                <p style={{
                    fontFamily: "'PP Neue Montreal', system-ui, sans-serif",
                    fontWeight: 500,
                    fontSize: '20px',
                    lineHeight: '100%',
                    letterSpacing: '-0.02em',
                    color: '#0D0D0D',
                    margin: 0,
                }}>
                    The popularity of chrome visuals can be traced back to digital and graphic art—especially the 3D design community. With the rise of Y2K revival aesthetics, liquid metal typography, and surreal renderings in generative art, chrome became a symbol of futuristic luxury and tech-influenced design
                </p>

                <p style={{
                    fontFamily: "'PP Neue Montreal', system-ui, sans-serif",
                    fontWeight: 500,
                    fontSize: '20px',
                    lineHeight: '100%',
                    letterSpacing: '-0.02em',
                    color: '#0D0D0D',
                    margin: 0,
                }}>
                    Tattoo artists started to experiment with how they could bring that same feel into the analog world of ink and skin. The result? Chrome tattoos: a cutting-edge style that blurs the line between fantasy and physicality
                </p>

                <p style={{
                    fontFamily: "'PP Neue Montreal', system-ui, sans-serif",
                    fontWeight: 500,
                    fontSize: '20px',
                    lineHeight: '100%',
                    letterSpacing: '-0.02em',
                    color: '#0D0D0D',
                    margin: 0,
                }}>
                    Today, chrome ink is everywhere in modern design, from album art and fashion to NFTs and immersive installations. And now it’s made its way to tattooing—with Monolith Studio proudly leading the charge
                </p>
            </div>

            {/* Related Articles Title */}
            <h2 style={{
                position: 'absolute',
                left: '20px',
                top: '1861px',
                fontFamily: "'PP Neue Montreal', system-ui, sans-serif",
                fontWeight: 500,
                fontSize: '52px',
                lineHeight: '90%',
                letterSpacing: '-0.02em',
                color: '#0D0D0D',
                margin: 0,
            }}>
                Related articles
            </h2>

            {/* Related Articles Grid */}
            <div style={{
                position: 'absolute',
                left: '20px',
                top: '1948px',
                display: 'flex',
                gap: '16px',
            }}>
                {/* Article 1 */}
                <div style={{ width: '456px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    <div style={{ width: '456px', height: '420px', background: 'url(/src/assets/2-main.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <h3 style={{ fontFamily: "'PP Neue Montreal', system-ui, sans-serif", fontWeight: 500, fontSize: '32px', lineHeight: '90%', letterSpacing: '-0.02em', color: '#0D0D0D', margin: 0 }}>
                            Inspiring small tattoo ideas with Kisha Tattoo
                        </h3>
                        <span style={{ fontFamily: "'PP Neue Montreal', system-ui, sans-serif", fontWeight: 500, fontSize: '20px', lineHeight: '100%', letterSpacing: '-0.02em', color: '#0D0D0D' }}>
                            Tattoo • October, 2025
                        </span>
                    </div>
                </div>

                {/* Article 2 */}
                <div style={{ width: '456px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    <div style={{ width: '456px', height: '420px', background: 'url(/src/assets/Kisha1.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <h3 style={{ fontFamily: "'PP Neue Montreal', system-ui, sans-serif", fontWeight: 500, fontSize: '32px', lineHeight: '90%', letterSpacing: '-0.02em', color: '#0D0D0D', margin: 0 }}>
                            A comprehensive guide to tattoo styles
                        </h3>
                        <span style={{ fontFamily: "'PP Neue Montreal', system-ui, sans-serif", fontWeight: 500, fontSize: '20px', lineHeight: '100%', letterSpacing: '-0.02em', color: '#0D0D0D' }}>
                            Education • September, 2025
                        </span>
                    </div>
                </div>

                {/* Article 3 */}
                <div style={{ width: '456px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    <div style={{ width: '456px', height: '420px', background: 'url(/src/assets/Kisha-slider2.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <h3 style={{ fontFamily: "'PP Neue Montreal', system-ui, sans-serif", fontWeight: 500, fontSize: '32px', lineHeight: '90%', letterSpacing: '-0.02em', color: '#0D0D0D', margin: 0 }}>
                            Abstract Art: a journey beyond reality
                        </h3>
                        <span style={{ fontFamily: "'PP Neue Montreal', system-ui, sans-serif", fontWeight: 500, fontSize: '20px', lineHeight: '100%', letterSpacing: '-0.02em', color: '#0D0D0D' }}>
                            Culture • August, 2025
                        </span>
                    </div>
                </div>
            </div>

            {/* Footer Section */}
            <div style={{
                position: 'absolute',
                top: '2570px',
                width: '100%',
                left: 0,
            }}>
                <GraphicsFooter />
            </div>

        </div>
    );
};

export default GraphicsArticle;
