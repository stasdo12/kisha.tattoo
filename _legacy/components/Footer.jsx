import React from 'react';
import { motion } from 'framer-motion';
import '../styles/index.css';

const Footer = () => {
    return (
        <footer style={{ padding: '4rem 0', borderTop: '1px solid var(--glass-border)', background: 'var(--bg-darker)' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Kisha<span className="text-gradient">Tattoo</span></h2>

                {/* Social Media Icons */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '1rem',
                    marginBottom: '2rem'
                }}>
                    {/* Instagram */}
                    <motion.a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            width: '40px',
                            height: '40px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: 'var(--card-bg)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid var(--glass-border)',
                            borderRadius: '10px',
                            cursor: 'pointer',
                            transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
                            textDecoration: 'none'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'linear-gradient(135deg, #833AB4, #FD1D1D, #FCAF45)';
                            e.currentTarget.style.borderColor = 'transparent';
                            e.currentTarget.style.boxShadow = '0 4px 16px rgba(253, 29, 29, 0.4)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'var(--card-bg)';
                            e.currentTarget.style.borderColor = 'var(--glass-border)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM12 7C13.93 7 14.17 7.007 14.97 7.048C15.72 7.086 16.13 7.222 16.41 7.333C16.78 7.481 17.04 7.66 17.31 7.93C17.58 8.2 17.759 8.46 17.907 8.83C18.018 9.11 18.154 9.52 18.192 10.27C18.233 11.07 18.24 11.31 18.24 13.24C18.24 15.17 18.233 15.41 18.192 16.21C18.154 16.96 18.018 17.37 17.907 17.65C17.759 18.02 17.58 18.28 17.31 18.55C17.04 18.82 16.78 18.999 16.41 19.147C16.13 19.258 15.72 19.394 14.97 19.432C14.17 19.473 13.93 19.48 12 19.48C10.07 19.48 9.83 19.473 9.03 19.432C8.28 19.394 7.87 19.258 7.59 19.147C7.22 18.999 6.96 18.82 6.69 18.55C6.42 18.28 6.241 18.02 6.093 17.65C5.982 17.37 5.846 16.96 5.808 16.21C5.767 15.41 5.76 15.17 5.76 13.24C5.76 11.31 5.767 11.07 5.808 10.27C5.846 9.52 5.982 9.11 6.093 8.83C6.241 8.46 6.42 8.2 6.69 7.93C6.96 7.66 7.22 7.481 7.59 7.333C7.87 7.222 8.28 7.086 9.03 7.048C9.83 7.007 10.07 7 12 7Z" fill="var(--text-muted)" />
                            <path d="M12 9C10.343 9 9 10.343 9 12C9 13.657 10.343 15 12 15C13.657 15 15 13.657 15 12C15 10.343 13.657 9 12 9ZM12 13.5C11.172 13.5 10.5 12.828 10.5 12C10.5 11.172 11.172 10.5 12 10.5C12.828 10.5 13.5 11.172 13.5 12C13.5 12.828 12.828 13.5 12 13.5Z" fill="var(--text-muted)" />
                            <circle cx="15.3" cy="8.7" r="0.533" fill="var(--text-muted)" />
                        </svg>
                    </motion.a>

                    {/* Reddit */}
                    <motion.a
                        href="https://reddit.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            width: '40px',
                            height: '40px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: 'var(--card-bg)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid var(--glass-border)',
                            borderRadius: '10px',
                            cursor: 'pointer',
                            transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
                            textDecoration: 'none'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = '#FF4500';
                            e.currentTarget.style.borderColor = 'transparent';
                            e.currentTarget.style.boxShadow = '0 4px 16px rgba(255, 69, 0, 0.4)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'var(--card-bg)';
                            e.currentTarget.style.borderColor = 'var(--glass-border)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM17.14 13.9C17.18 14.11 17.2 14.33 17.2 14.55C17.2 16.69 14.88 18.42 12 18.42C9.12 18.42 6.8 16.69 6.8 14.55C6.8 14.33 6.82 14.11 6.86 13.9C6.33 13.64 5.96 13.09 5.96 12.45C5.96 11.57 6.68 10.85 7.56 10.85C8.03 10.85 8.46 11.05 8.75 11.37C9.77 10.67 11.14 10.22 12.65 10.17L13.32 7.17L15.38 7.63C15.42 8.28 15.96 8.8 16.62 8.8C17.31 8.8 17.87 8.24 17.87 7.55C17.87 6.86 17.31 6.3 16.62 6.3C16.11 6.3 15.67 6.61 15.48 7.05L13.08 6.53L12.31 10.17C13.87 10.21 15.28 10.66 16.32 11.38C16.61 11.06 17.04 10.86 17.51 10.86C18.39 10.86 19.11 11.58 19.11 12.46C19.11 13.09 18.74 13.64 18.21 13.9H17.14Z" fill="var(--text-muted)" />
                            <circle cx="9.5" cy="13" r="0.9" fill="var(--text-muted)" />
                            <circle cx="14.5" cy="13" r="0.9" fill="var(--text-muted)" />
                            <path d="M14.5 15.5C14.5 15.5 13.5 16.5 12 16.5C10.5 16.5 9.5 15.5 9.5 15.5" stroke="var(--text-muted)" strokeWidth="0.8" strokeLinecap="round" />
                        </svg>
                    </motion.a>

                    {/* Facebook */}
                    <motion.a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            width: '40px',
                            height: '40px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: 'var(--card-bg)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid var(--glass-border)',
                            borderRadius: '10px',
                            cursor: 'pointer',
                            transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
                            textDecoration: 'none'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = '#1877F2';
                            e.currentTarget.style.borderColor = 'transparent';
                            e.currentTarget.style.boxShadow = '0 4px 16px rgba(24, 119, 242, 0.4)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'var(--card-bg)';
                            e.currentTarget.style.borderColor = 'var(--glass-border)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2C6.477 2 2 6.477 2 12C2 16.991 5.657 21.128 10.438 21.878V14.891H7.898V12H10.438V9.797C10.438 7.291 11.93 5.907 14.215 5.907C15.309 5.907 16.453 6.102 16.453 6.102V8.562H15.193C13.95 8.562 13.563 9.333 13.563 10.124V12H16.336L15.893 14.891H13.563V21.878C18.343 21.128 22 16.991 22 12C22 6.477 17.523 2 12 2Z" fill="var(--text-muted)" />
                        </svg>
                    </motion.a>
                </div>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                    &copy; {new Date().getFullYear()} KishaTattoo. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
