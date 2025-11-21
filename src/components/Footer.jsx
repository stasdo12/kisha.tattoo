import React from 'react';
import '../styles/index.css';

const Footer = () => {
    return (
        <footer style={{ padding: '4rem 0', borderTop: '1px solid var(--glass-border)', background: 'var(--bg-darker)' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Kisha<span className="text-gradient">Tattoo</span></h2>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2rem' }}>
                    {['Twitter', 'Instagram', 'LinkedIn', 'GitHub'].map(social => (
                        <a key={social} href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s' }}
                            onMouseOver={(e) => e.target.style.color = 'var(--primary)'}
                            onMouseOut={(e) => e.target.style.color = 'var(--text-muted)'}
                        >
                            {social}
                        </a>
                    ))}
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                    &copy; {new Date().getFullYear()} KishaTattoo. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
