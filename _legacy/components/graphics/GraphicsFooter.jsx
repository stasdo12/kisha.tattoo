import React from 'react';
import { Link } from 'react-router-dom';
import useMediaQuery from '../../hooks/useMediaQuery';

const GraphicsFooter = () => {
    const { isMobile, width } = useMediaQuery();
    const isLargeDesktop = width >= 1920;

    const footerWidth = isMobile ? '100%' : isLargeDesktop ? '1920px' : '1440px';
    const footerPadding = isMobile ? '40px 15px' : '40px';

    return (
        <footer style={{
            width: footerWidth,
            margin: '180px auto 0',
            padding: footerPadding,
            background: '#0D0D0D',
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '340px',
                width: '100%',
            }}>
                {/* Top Section */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '100px',
                }}>
                    {/* Heading and Social */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                    }}>
                        <h2 style={{
                            width: '428px',
                            fontFamily: "'PP Neue Montreal', system-ui, sans-serif",
                            fontWeight: 500,
                            fontSize: '52px',
                            lineHeight: '90%',
                            letterSpacing: '-0.02em',
                            color: '#F2F2F2',
                            margin: 0,
                        }}>
                            Relax and book your seat right now
                        </h2>

                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-end',
                            gap: '12px',
                        }}>
                            <div style={{
                                fontFamily: "'PP Neue Montreal', system-ui, sans-serif",
                                fontWeight: 500,
                                fontSize: '12px',
                                lineHeight: '14px',
                                textAlign: 'right',
                                letterSpacing: '-0.02em',
                                color: '#F2F2F2',
                            }}>
                                [ Social media ]
                            </div>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-end',
                                gap: '8px',
                            }}>
                                <a href="#" style={{
                                    fontFamily: "'PP Neue Montreal', system-ui, sans-serif",
                                    fontWeight: 500,
                                    fontSize: '20px',
                                    lineHeight: '100%',
                                    textAlign: 'right',
                                    letterSpacing: '-0.02em',
                                    textDecoration: 'underline',
                                    color: '#F2F2F2',
                                }}>
                                    Instagram
                                </a>
                                <a href="#" style={{
                                    fontFamily: "'PP Neue Montreal', system-ui, sans-serif",
                                    fontWeight: 500,
                                    fontSize: '20px',
                                    lineHeight: '100%',
                                    textAlign: 'right',
                                    letterSpacing: '-0.02em',
                                    textDecoration: 'underline',
                                    color: '#F2F2F2',
                                }}>
                                    What's App
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <a href="#contact" style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                        height: '44px',
                        background: '#F2F2F2',
                        fontFamily: "'PP Neue Montreal', system-ui, sans-serif",
                        fontWeight: 500,
                        fontSize: '20px',
                        lineHeight: '100%',
                        letterSpacing: '-0.02em',
                        color: '#0D0D0D',
                        textDecoration: 'none',
                    }}>
                        Discuss your vision
                    </a>
                </div>

                {/* Bottom Section */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                }}>
                    {/* Logo and Tattoo */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingBottom: '20px',
                        borderBottom: '2px solid #F2F2F2',
                    }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            margin: '0 auto',
                        }}>
                            <div style={{
                                width: '12px',
                                height: '12px',
                                background: '#F2F2F2',
                                borderRadius: '50%',
                            }} />
                            <span style={{
                                fontFamily: "'PP Neue Montreal', system-ui, sans-serif",
                                fontWeight: 500,
                                fontSize: '40px',
                                lineHeight: '48px',
                                letterSpacing: '-0.02em',
                                color: '#F2F2F2',
                            }}>
                                Kisha
                            </span>
                        </div>

                        <Link to="/" style={{
                            fontFamily: "'PP Neue Montreal', system-ui, sans-serif",
                            fontWeight: 500,
                            fontSize: '40px',
                            lineHeight: '48px',
                            letterSpacing: '-0.02em',
                            color: '#F2F2F2',
                            textDecoration: 'none',
                            margin: '0 auto',
                        }}>
                            Tattoo
                        </Link>
                    </div>

                    {/* Copyright */}
                    <div style={{
                        fontFamily: "'PP Neue Montreal', system-ui, sans-serif",
                        fontWeight: 500,
                        fontSize: '12px',
                        lineHeight: '14px',
                        letterSpacing: '-0.02em',
                        color: '#F2F2F2',
                    }}>
                        [ All Rights Reserved. 2025 ]
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default GraphicsFooter;
