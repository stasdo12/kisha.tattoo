import React, { useEffect } from 'react';
import GraphicsHeader from '../../components/graphics/GraphicsHeader';
import GraphicsFooter from '../../components/graphics/GraphicsFooter';
import '../../styles/graphics.css';

const GraphicsContact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div id="contact-page" style={{
            background: '#F2F2F2',
            minHeight: '1457px',
            position: 'relative',
            width: '100%',
            overflow: 'hidden'
        }}>
            <GraphicsHeader />

            {/* Book experience Title */}
            <h1 style={{
                position: 'absolute',
                width: '566px',
                height: '72px',
                left: 'calc(50% - 566px/2 - 417px)', // Based on Figma: left: calc(50% - 566px/2 - 417px) -> approx left: 20px
                top: '63px',
                fontFamily: "'PP Neue Montreal', system-ui, sans-serif",
                fontWeight: 500,
                fontSize: '80px',
                lineHeight: '90%',
                letterSpacing: '-0.02em',
                color: '#0D0D0D',
                margin: 0,
                zIndex: 1,
            }}>
                Book experience
            </h1>

            {/* Form Container */}
            <div style={{
                position: 'absolute',
                width: '692px',
                left: '20px',
                top: '215px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
            }}>

                {/* Name Field */}
                <div style={{
                    display: 'flex',
                    alignItems: 'flex-end',
                    gap: '16px',
                    height: '29px',
                }}>
                    <span style={{
                        fontFamily: "'PP Neue Montreal', system-ui, sans-serif",
                        fontWeight: 500,
                        fontSize: '32px',
                        lineHeight: '90%',
                        letterSpacing: '-0.02em',
                        color: '#0D0D0D',
                        whiteSpace: 'nowrap',
                    }}>
                        My name is
                    </span>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '525px',
                        height: '24px',
                        borderBottom: '1px solid #BFBFBF',
                        paddingBottom: '4px',
                    }}>
                        <input
                            type="text"
                            placeholder="[ Name ]"
                            style={{
                                width: '100%',
                                border: 'none',
                                background: 'transparent',
                                fontFamily: "'PP Neue Montreal', system-ui, sans-serif",
                                fontWeight: 500,
                                fontSize: '16px',
                                textAlign: 'center',
                                color: '#0D0D0D',
                                outline: 'none',
                            }}
                        />
                        <span style={{ fontSize: '16px', color: '#0D0D0D' }}>*</span>
                    </div>
                </div>

                {/* Email Field */}
                <div style={{
                    display: 'flex',
                    alignItems: 'flex-end',
                    gap: '16px',
                    height: '29px',
                }}>
                    <span style={{
                        fontFamily: "'PP Neue Montreal', system-ui, sans-serif",
                        fontWeight: 500,
                        fontSize: '32px',
                        lineHeight: '90%',
                        letterSpacing: '-0.02em',
                        color: '#0D0D0D',
                        whiteSpace: 'nowrap',
                    }}>
                        My email is
                    </span>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '530px',
                        height: '24px',
                        borderBottom: '1px solid #BFBFBF',
                        paddingBottom: '4px',
                    }}>
                        <input
                            type="email"
                            placeholder="[ Email ]"
                            style={{
                                width: '100%',
                                border: 'none',
                                background: 'transparent',
                                fontFamily: "'PP Neue Montreal', system-ui, sans-serif",
                                fontWeight: 500,
                                fontSize: '16px',
                                textAlign: 'center',
                                color: '#0D0D0D',
                                outline: 'none',
                            }}
                        />
                        <span style={{ fontSize: '16px', color: '#0D0D0D' }}>*</span>
                    </div>
                </div>

                {/* Phone Field */}
                <div style={{
                    display: 'flex',
                    alignItems: 'flex-end',
                    gap: '16px',
                    height: '29px',
                }}>
                    <span style={{
                        fontFamily: "'PP Neue Montreal', system-ui, sans-serif",
                        fontWeight: 500,
                        fontSize: '32px',
                        lineHeight: '90%',
                        letterSpacing: '-0.02em',
                        color: '#0D0D0D',
                        whiteSpace: 'nowrap',
                    }}>
                        My phone number is
                    </span>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '406px',
                        height: '24px',
                        borderBottom: '1px solid #BFBFBF',
                        paddingBottom: '4px',
                    }}>
                        <input
                            type="tel"
                            placeholder="[ Number ]"
                            style={{
                                width: '100%',
                                border: 'none',
                                background: 'transparent',
                                fontFamily: "'PP Neue Montreal', system-ui, sans-serif",
                                fontWeight: 500,
                                fontSize: '16px',
                                textAlign: 'center',
                                color: '#0D0D0D',
                                outline: 'none',
                            }}
                        />
                        <span style={{ fontSize: '16px', color: '#0D0D0D' }}>*</span>
                    </div>
                </div>

                {/* Tattoo Idea Field */}
                <div style={{
                    display: 'flex',
                    alignItems: 'flex-end',
                    gap: '20px',
                    height: '29px',
                }}>
                    <span style={{
                        fontFamily: "'PP Neue Montreal', system-ui, sans-serif",
                        fontWeight: 500,
                        fontSize: '32px',
                        lineHeight: '90%',
                        letterSpacing: '-0.02em',
                        color: '#0D0D0D',
                        whiteSpace: 'nowrap',
                    }}>
                        My tattoo idea is
                    </span>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        width: '455px',
                        height: '24px',
                        borderBottom: '1px solid #BFBFBF',
                        paddingBottom: '4px',
                    }}>
                        <input
                            type="text"
                            placeholder="[ Tattoo idea ]"
                            style={{
                                width: '100%',
                                border: 'none',
                                background: 'transparent',
                                fontFamily: "'PP Neue Montreal', system-ui, sans-serif",
                                fontWeight: 500,
                                fontSize: '16px',
                                textAlign: 'center',
                                color: '#0D0D0D',
                                outline: 'none',
                            }}
                        />
                    </div>
                </div>

                {/* Work Together Before */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                    marginTop: '20px',
                }}>
                    <span style={{
                        fontFamily: "'PP Neue Montreal', system-ui, sans-serif",
                        fontWeight: 500,
                        fontSize: '32px',
                        lineHeight: '90%',
                        letterSpacing: '-0.02em',
                        color: '#0D0D0D',
                    }}>
                        Did we work together before?
                    </span>
                    <div style={{
                        display: 'flex',
                        gap: '16px',
                    }}>
                        <button style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '8px 12px',
                            width: '338px',
                            height: '32px',
                            border: '1px solid #0D0D0D',
                            background: 'transparent',
                            fontFamily: "'PP Neue Montreal', system-ui, sans-serif",
                            fontWeight: 500,
                            fontSize: '16px',
                            color: '#0D0D0D',
                            cursor: 'pointer',
                        }}>
                            Yes, I liked it
                        </button>
                        <button style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '8px 12px',
                            width: '338px',
                            height: '32px',
                            border: '1px solid #0D0D0D',
                            background: 'transparent',
                            fontFamily: "'PP Neue Montreal', system-ui, sans-serif",
                            fontWeight: 500,
                            fontSize: '16px',
                            color: '#0D0D0D',
                            cursor: 'pointer',
                        }}>
                            No, I’m new
                        </button>
                    </div>
                </div>

                {/* Tattoo Reference */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                    marginTop: '20px',
                }}>
                    <span style={{
                        fontFamily: "'PP Neue Montreal', system-ui, sans-serif",
                        fontWeight: 500,
                        fontSize: '32px',
                        lineHeight: '90%',
                        letterSpacing: '-0.02em',
                        color: '#0D0D0D',
                    }}>
                        Tattoo reference
                    </span>

                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-end',
                    }}>
                        <span style={{
                            fontFamily: "'PP Neue Montreal', system-ui, sans-serif",
                            fontWeight: 500,
                            fontSize: '16px',
                            lineHeight: '100%',
                            letterSpacing: '-0.02em',
                            color: '#0D0D0D',
                        }}>
                            *Please send the tattoo references and inspiration images you'd like to share with the artist
                        </span>
                        <span style={{
                            fontFamily: "'PP Neue Montreal', system-ui, sans-serif",
                            fontWeight: 500,
                            fontSize: '12px',
                            lineHeight: '100%',
                            letterSpacing: '-0.02em',
                            color: '#BFBFBF',
                        }}>
                            [ max file size 100 mb ]
                        </span>
                    </div>

                    <button style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '8px 12px',
                        width: '692px',
                        height: '32px',
                        border: '1px solid #0D0D0D',
                        background: 'transparent',
                        fontFamily: "'PP Neue Montreal', system-ui, sans-serif",
                        fontWeight: 500,
                        fontSize: '16px',
                        color: '#0D0D0D',
                        cursor: 'pointer',
                    }}>
                        Choose files
                    </button>
                </div>

            </div>

            {/* Footer Section */}
            <div style={{
                position: 'absolute',
                top: '721px',
                width: '100%',
                left: 0,
            }}>
                <GraphicsFooter />
            </div>

        </div>
    );
};

export default GraphicsContact;
