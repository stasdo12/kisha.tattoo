import React, { useEffect } from 'react';
import GraphicsHeader from '../../components/graphics/GraphicsHeader';
import GraphicsFooter from '../../components/graphics/GraphicsFooter';
import '../../styles/graphics.css';

const GraphicsAbout = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div id="about" style={{ background: '#F2F2F2', minHeight: '100vh', position: 'relative', paddingTop: '63px' }}>
            <GraphicsHeader />

            {/* Hero Section */}
            <section style={{
                maxWidth: '1440px',
                margin: '0 auto',
                padding: '0 20px',
                minHeight: '80vh',
                position: 'relative',
            }}>
                {/* Main Heading */}
                <h1 style={{
                    width: '809px',
                    margin: '0 0 100px 0',
                    fontFamily: "'PP Neue Montreal', system-ui, sans-serif",
                    fontWeight: 500,
                    fontSize: '80px',
                    lineHeight: '90%',
                    letterSpacing: '-0.02em',
                    color: '#0D0D0D',
                }}>
                    About Kisha Tattoo. One grand story at a time
                </h1>

                {/* Small Photo - Left */}
                <div style={{
                    position: 'absolute',
                    width: '240px',
                    height: '260px',
                    left: 'calc(50% - 240px/2 - 580px)',
                    top: '300px',
                    overflow: 'hidden',
                }}>
                    <img
                        src="/src/assets/1.jpg"
                        alt="Kisha"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </div>

                {/* Description Text */}
                <p style={{
                    position: 'absolute',
                    width: '340px',
                    left: '284px',
                    top: '500px',
                    fontFamily: "'PP Neue Montreal', system-ui, sans-serif",
                    fontWeight: 500,
                    fontSize: '20px',
                    lineHeight: '100%',
                    letterSpacing: '-0.02em',
                    color: '#0D0D0D',
                    margin: 0,
                }}>
                    Dedicated to preserving the tradition of Japanese tattooing, one grand story at a time
                </p>

                {/* Large Center Kanji 命 */}
                <div style={{
                    position: 'absolute',
                    left: 'calc(50% - 132px/2)',
                    top: '104px',
                    fontFamily: "'PP Neue Montreal', system-ui, sans-serif",
                    fontWeight: 500,
                    fontSize: '131px',
                    lineHeight: '100%',
                    letterSpacing: '-0.02em',
                    color: '#000000',
                }}>
                    命
                </div>
            </section>

            {/* Line */}
            <div style={{
                maxWidth: '1440px',
                margin: '0 auto 80px',
                padding: '0 20px',
            }}>
                <div style={{ width: '100%', maxWidth: '1400px', height: '2px', background: '#0D0D0D' }} />
            </div>

            {/* Journey Section */}
            <section style={{
                maxWidth: '1440px',
                margin: '80px auto',
                padding: '0 20px',
            }}>
                <h2 style={{
                    width: '468px',
                    margin: '0 auto 80px',
                    fontFamily: "'PP Neue Montreal', system-ui, sans-serif",
                    fontWeight: 500,
                    fontSize: '52px',
                    lineHeight: '90%',
                    textAlign: 'center',
                    letterSpacing: '-0.02em',
                    color: '#0D0D0D',
                }}>
                    The journey: etched in discipline
                </h2>
            </section>

            {/* Large Image */}
            <div style={{
                maxWidth: '1440px',
                margin: '0 auto',
                padding: '0 20px',
            }}>
                <div style={{
                    width: '100%',
                    maxWidth: '1400px',
                    height: '720px',
                    background: `url(/src/assets/IMG_5582.webp)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }} />
            </div>

            {/* Description Texts */}
            <div style={{
                maxWidth: '1440px',
                margin: '80px auto',
                padding: '0 20px',
                position: 'relative',
                height: '200px',
            }}>
                <p style={{
                    position: 'absolute',
                    width: '405px',
                    left: '680px',
                    top: '0px',
                    fontFamily: "'PP Neue Montreal', system-ui, sans-serif",
                    fontWeight: 500,
                    fontSize: '20px',
                    lineHeight: '100%',
                    letterSpacing: '-0.02em',
                    color: '#0D0D0D',
                    margin: 0,
                }}>
                    For over five years, my life has been dedicated to the pursuit of traditional Japanese tattooing. My journey began with a profound respect for the legacy of Irezumi, seeing it not as a trend, but as a commitment—a powerful, living art form
                </p>

                <p style={{
                    position: 'absolute',
                    width: '405px',
                    left: '680px',
                    top: '120px',
                    fontFamily: "'PP Neue Montreal', system-ui, sans-serif",
                    fontWeight: 500,
                    fontSize: '20px',
                    lineHeight: '100%',
                    letterSpacing: '-0.02em',
                    color: '#0D0D0D',
                    margin: 0,
                }}>
                    I specialize in the large, complex works that define this tradition: full backpieces, sleeves, and bodysuits. These projects require a special level of discipline and patience, which I bring to every single line
                </p>
            </div>

            {/* Philosophy Section */}
            <div style={{
                maxWidth: '1440px',
                margin: '80px auto',
                padding: '0 20px',
                position: 'relative',
                height: '180px',
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                    maxWidth: '1400px',
                }}>
                    <h2 style={{
                        width: '412px',
                        fontFamily: "'PP Neue Montreal', system-ui, sans-serif",
                        fontWeight: 500,
                        fontSize: '52px',
                        lineHeight: '90%',
                        letterSpacing: '-0.02em',
                        color: '#0D0D0D',
                        margin: 0,
                    }}>
                        The PHILOSOPHY — LOVE AND DEVOTION
                    </h2>

                    <p style={{
                        width: '302px',
                        fontFamily: "'PP Neue Montreal', system-ui, sans-serif",
                        fontWeight: 500,
                        fontSize: '20px',
                        lineHeight: '100%',
                        textAlign: 'right',
                        letterSpacing: '-0.02em',
                        color: '#0D0D0D',
                        margin: 0,
                    }}>
                        In our studio, we are guided by the principle of deep love for the craft and heartfelt devotion to your vision
                    </p>
                </div>
            </div>

            {/* Black Section with Images */}
            <div style={{
                maxWidth: '1440px',
                margin: '80px auto',
                padding: '0 20px',
            }}>
                <div style={{
                    width: '100%',
                    maxWidth: '1400px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    padding: '40px',
                    background: '#0D0D0D',
                }}>
                    {/* Left Side - Text and Small Images */}
                    <div style={{
                        width: '590px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        height: '720px',
                    }}>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '20px',
                            width: '470px',
                        }}>
                            <h3 style={{
                                width: '334px',
                                fontFamily: "'PP Neue Montreal', system-ui, sans-serif",
                                fontWeight: 500,
                                fontSize: '32px',
                                lineHeight: '90%',
                                letterSpacing: '-0.02em',
                                color: '#F2F2F2',
                                margin: 0,
                            }}>
                                The art we create is far more than just an image
                            </h3>

                            <p style={{
                                width: '470px',
                                fontFamily: "'PP Neue Montreal', system-ui, sans-serif",
                                fontWeight: 500,
                                fontSize: '20px',
                                lineHeight: '100%',
                                letterSpacing: '-0.02em',
                                color: '#F2F2F2',
                                margin: 0,
                            }}>
                                It is a profound transformation. Every single element, from the flow of the Nami (Waves) to the intricate scales of the Ryu (Dragon), is drawn with intention and fuelled by this passion. I work directly with you, the client, to distill your unique idea, personal metaphor, or life philosophy into a timeless design
                            </p>
                        </div>

                        <div style={{
                            display: 'flex',
                            gap: '16px',
                            width: '590px',
                        }}>
                            <div style={{
                                width: '186px',
                                height: '200px',
                                background: `url(/src/assets/2-main.jpg)`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }} />
                            <div style={{
                                width: '186px',
                                height: '200px',
                                background: `url(/src/assets/Kisha1.webp)`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }} />
                            <div style={{
                                width: '186px',
                                height: '200px',
                                background: `url(/src/assets/Kisha-slider2.webp)`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }} />
                        </div>
                    </div>

                    {/* Right Side - Large Image */}
                    <div style={{
                        width: '714px',
                        height: '720px',
                        background: `url(/src/assets/Kisha-slider1.webp)`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }} />
                </div>
            </div>

            {/* Commitment Section Header */}
            <section style={{
                maxWidth: '1440px',
                margin: '180px auto 80px',
                padding: '0 20px',
            }}>
                <h2 style={{
                    width: '527px',
                    margin: '0 auto 40px',
                    fontFamily: "'PP Neue Montreal', system-ui, sans-serif",
                    fontWeight: 500,
                    fontSize: '52px',
                    lineHeight: '90%',
                    textAlign: 'center',
                    letterSpacing: '-0.02em',
                    color: '#0D0D0D',
                }}>
                    THE COMMITMENT of ENDURANCE AND MASTERY
                </h2>

                <p style={{
                    width: '354px',
                    margin: '0 auto 80px',
                    fontFamily: "'PP Neue Montreal', system-ui, sans-serif",
                    fontWeight: 500,
                    fontSize: '20px',
                    lineHeight: '100%',
                    textAlign: 'center',
                    letterSpacing: '-0.02em',
                    color: '#0D0D0D',
                }}>
                    Traditional Irezumi is an act of endurance, requiring patience from both the artist and the client
                </p>

                {/* 3 Columns */}
                <div style={{
                    width: '100%',
                    maxWidth: '1400px',
                    display: 'flex',
                    gap: '16px',
                    justifyContent: 'space-between',
                }}>
                    {/* Column A */}
                    <div style={{
                        width: '456px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        padding: '0 32px 0 0',
                        borderRight: '1px solid #0D0D0D',
                        gap: '120px',
                    }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <h3 style={{
                                fontFamily: "'PP Neue Montreal', system-ui, sans-serif",
                                fontWeight: 500,
                                fontSize: '32px',
                                lineHeight: '90%',
                                letterSpacing: '-0.02em',
                                color: '#0D0D0D',
                                margin: 0,
                            }}>For the artist</h3>
                            <p style={{
                                width: '380px',
                                fontFamily: "'PP Neue Montreal', system-ui, sans-serif",
                                fontWeight: 500,
                                fontSize: '20px',
                                lineHeight: '100%',
                                letterSpacing: '-0.02em',
                                color: '#0D0D0D',
                                margin: 0,
                            }}>
                                It requires the focused discipline to master the technique, respect the body's anatomy, and dedicate countless hours to perfection
                            </p>
                        </div>
                        <div style={{
                            fontFamily: "'PP Neue Montreal', system-ui, sans-serif",
                            fontWeight: 500,
                            fontSize: '32px',
                            lineHeight: '90%',
                            letterSpacing: '-0.02em',
                            color: '#0D0D0D',
                            textAlign: 'center',
                        }}>A</div>
                    </div>

                    {/* Column B */}
                    <div style={{
                        width: '456px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        padding: '0 32px 0 0',
                        borderRight: '1px solid #0D0D0D',
                        gap: '120px',
                    }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <h3 style={{
                                fontFamily: "'PP Neue Montreal', system-ui, sans-serif",
                                fontWeight: 500,
                                fontSize: '32px',
                                lineHeight: '90%',
                                letterSpacing: '-0.02em',
                                color: '#0D0D0D',
                                margin: 0,
                            }}>For the client</h3>
                            <p style={{
                                width: '380px',
                                fontFamily: "'PP Neue Montreal', system-ui, sans-serif",
                                fontWeight: 500,
                                fontSize: '20px',
                                lineHeight: '100%',
                                letterSpacing: '-0.02em',
                                color: '#0D0D0D',
                                margin: 0,
                            }}>
                                The courage and patience to commit to a long, multi-session process, knowing that the final masterpiece will be a permanent testament to your inner strength
                            </p>
                        </div>
                        <div style={{
                            fontFamily: "'PP Neue Montreal', system-ui, sans-serif",
                            fontWeight: 500,
                            fontSize: '32px',
                            lineHeight: '90%',
                            letterSpacing: '-0.02em',
                            color: '#0D0D0D',
                            textAlign: 'center',
                        }}>B</div>
                    </div>

                    {/* Column C */}
                    <div style={{
                        width: '456px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        gap: '120px',
                    }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <h3 style={{
                                fontFamily: "'PP Neue Montreal', system-ui, sans-serif",
                                fontWeight: 500,
                                fontSize: '32px',
                                lineHeight: '90%',
                                letterSpacing: '-0.02em',
                                color: '#0D0D0D',
                                margin: 0,
                            }}>My dedication</h3>
                            <p style={{
                                width: '380px',
                                fontFamily: "'PP Neue Montreal', system-ui, sans-serif",
                                fontWeight: 500,
                                fontSize: '20px',
                                lineHeight: '100%',
                                letterSpacing: '-0.02em',
                                color: '#0D0D0D',
                                margin: 0,
                            }}>
                                Is to those who seek an authentic, meaningful, and enduring piece of art. If you are ready to embark on this focused journey, I am here to guide the process and ensure your legacy is beautifully etched in skin
                            </p>
                        </div>
                        <div style={{
                            fontFamily: "'PP Neue Montreal', system-ui, sans-serif",
                            fontWeight: 500,
                            fontSize: '32px',
                            lineHeight: '90%',
                            letterSpacing: '-0.02em',
                            color: '#0D0D0D',
                            textAlign: 'center',
                        }}>C</div>
                    </div>
                </div>
            </section>

            <GraphicsFooter />
        </div>
    );
};

export default GraphicsAbout;
