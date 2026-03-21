import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const GraphicsFormPopup = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(13, 13, 13, 0.5)',
            zIndex: 2000,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            isolation: 'isolate',
        }} onClick={onClose}>
            <div style={{
                position: 'relative',
                width: '1400px',
                height: '593px',
                background: '#F2F2F2',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '20px',
                gap: '280px',
                boxSizing: 'border-box',
            }} onClick={(e) => e.stopPropagation()}>

                {/* Top Content */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    width: '1360px',
                    height: '115px',
                    zIndex: 0,
                }}>
                    {/* Text Section */}
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '12px',
                        width: '667px',
                    }}>
                        <span style={{
                            fontFamily: "'PP Neue Montreal', system-ui, sans-serif",
                            fontWeight: 500,
                            fontSize: '12px',
                            lineHeight: '14px',
                            letterSpacing: '-0.02em',
                            color: '#0D0D0D',
                        }}>
                            [ Hey, it’s Kisha Tattoo ]
                        </span>
                        <h2 style={{
                            fontFamily: "'PP Neue Montreal', system-ui, sans-serif",
                            fontWeight: 500,
                            fontSize: '52px',
                            lineHeight: '90%',
                            letterSpacing: '-0.02em',
                            color: '#0D0D0D',
                            margin: 0,
                        }}>
                            Drop me a message below or tell me about your tattoo idea
                        </h2>
                    </div>

                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        style={{
                            width: '40px',
                            height: '40px',
                            background: 'transparent',
                            border: 'none',
                            cursor: 'pointer',
                            position: 'relative',
                            padding: 0,
                        }}
                    >
                        <div style={{
                            position: 'absolute',
                            left: '2.86%',
                            right: '30.47%',
                            top: '2.86%',
                            bottom: '30.47%',
                            width: '100%',
                            height: '100%',
                        }}>
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 10L30 30" stroke="#0D0D0D" strokeWidth="2" />
                                <path d="M30 10L10 30" stroke="#0D0D0D" strokeWidth="2" />
                            </svg>
                        </div>
                    </button>
                </div>

                {/* Form Section */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '40px',
                    width: '1360px',
                    zIndex: 1,
                }}>
                    {/* Inputs Row */}
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                        width: '1360px',
                    }}>
                        {/* Name Input */}
                        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '16px', height: '29px' }}>
                            <span style={{
                                fontFamily: "'PP Neue Montreal', system-ui, sans-serif",
                                fontWeight: 500,
                                fontSize: '32px',
                                lineHeight: '90%',
                                letterSpacing: '-0.02em',
                                color: '#0D0D0D',
                            }}>My name is</span>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                width: '505px',
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

                        {/* Email Input */}
                        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '16px', height: '29px' }}>
                            <span style={{
                                fontFamily: "'PP Neue Montreal', system-ui, sans-serif",
                                fontWeight: 500,
                                fontSize: '32px',
                                lineHeight: '90%',
                                letterSpacing: '-0.02em',
                                color: '#0D0D0D',
                            }}>My email is</span>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                width: '510px',
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
                    </div>

                    {/* Tattoo Idea Input */}
                    <div style={{ display: 'flex', alignItems: 'flex-end', gap: '20px', width: '1360px', height: '29px' }}>
                        <span style={{
                            fontFamily: "'PP Neue Montreal', system-ui, sans-serif",
                            fontWeight: 500,
                            fontSize: '32px',
                            lineHeight: '90%',
                            letterSpacing: '-0.02em',
                            color: '#0D0D0D',
                            whiteSpace: 'nowrap',
                        }}>My tattoo idea is</span>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            width: '1123px',
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

                    {/* Send Button */}
                    <button style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '1360px',
                        height: '44px',
                        background: '#0D0D0D',
                        border: 'none',
                        cursor: 'pointer',
                    }}>
                        <span style={{
                            fontFamily: "'PP Neue Montreal', system-ui, sans-serif",
                            fontWeight: 500,
                            fontSize: '20px',
                            lineHeight: '100%',
                            letterSpacing: '-0.02em',
                            color: '#F2F2F2',
                        }}>
                            Send request
                        </span>
                    </button>
                </div>

                {/* Kanji Character */}
                <div style={{
                    position: 'absolute',
                    left: '24px',
                    top: '163px',
                    fontFamily: "'PP Neue Montreal', system-ui, sans-serif",
                    fontWeight: 500,
                    fontSize: '80px',
                    lineHeight: '100%',
                    letterSpacing: '-0.02em',
                    color: '#000000',
                    zIndex: 2,
                    pointerEvents: 'none',
                }}>
                    想
                </div>

            </div>
        </div>
    );
};

export default GraphicsFormPopup;
