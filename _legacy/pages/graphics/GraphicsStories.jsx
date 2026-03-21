import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import GraphicsHeader from '../../components/graphics/GraphicsHeader';
import GraphicsFooter from '../../components/graphics/GraphicsFooter';
import '../../styles/graphics.css';

const GraphicsStories = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const articles = [
        {
            id: 1,
            title: "Inspiring small tattoo ideas with Kisha Tattoo",
            category: "Tattoo",
            date: "October, 2025",
            image: "/src/assets/2-main.jpg"
        },
        {
            id: 2,
            title: "A comprehensive guide to tattoo styles",
            category: "Education",
            date: "September, 2025",
            image: "/src/assets/Kisha1.webp"
        },
        {
            id: 3,
            title: "Abstract Art: a journey beyond reality",
            category: "Culture",
            date: "August, 2025",
            image: "/src/assets/Kisha-slider2.webp"
        },
        {
            id: 4,
            title: "The history of Irezumi",
            category: "Culture",
            date: "July, 2025",
            image: "/src/assets/Kisha-slider1.webp"
        },
        {
            id: 5,
            title: "Modern techniques in traditional art",
            category: "Tattoo",
            date: "June, 2025",
            image: "/src/assets/1.jpg"
        },
        {
            id: 6,
            title: "Understanding tattoo aftercare",
            category: "Education",
            date: "May, 2025",
            image: "/src/assets/2-main.jpg"
        }
    ];

    return (
        <div id="stories-page" style={{
            background: '#F2F2F2',
            minHeight: '2930px',
            position: 'relative',
            width: '100%',
            overflow: 'hidden'
        }}>
            <GraphicsHeader />

            {/* Hero Title */}
            <h1 style={{
                position: 'absolute',
                width: '809px',
                height: '144px',
                left: 'calc(50% - 809px/2)',
                top: '63px',
                fontFamily: "'PP Neue Montreal', system-ui, sans-serif",
                fontWeight: 500,
                fontSize: '80px',
                lineHeight: '90%',
                textAlign: 'center',
                letterSpacing: '-0.02em',
                color: '#0D0D0D',
                margin: 0,
                zIndex: 1,
            }}>
                The Artisan's Dō: Insights on the Craft
            </h1>

            {/* Featured Article Card */}
            <div style={{
                position: 'absolute',
                width: '448px',
                height: '528px',
                left: 'calc(50% - 448px/2)',
                top: '247px',
                background: '#0D0D0D',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '40px',
                gap: '20px',
                boxSizing: 'border-box',
            }}>
                {/* Image */}
                <div style={{
                    width: '314px',
                    height: '266px',
                    background: 'url(/src/assets/IMG_5582.webp)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }} />

                {/* Text Content */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '20px',
                    width: '368px',
                }}>
                    <h2 style={{
                        width: '368px',
                        fontFamily: "'PP Neue Montreal', system-ui, sans-serif",
                        fontWeight: 500,
                        fontSize: '32px',
                        lineHeight: '90%',
                        textAlign: 'center',
                        letterSpacing: '-0.02em',
                        color: '#F2F2F2',
                        margin: 0,
                    }}>
                        Chrome tattoos: the hyper-polished future of ink
                    </h2>
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
                </div>

                {/* Read Button */}
                <Link to="/graphics/stories/chrome-tattoos" style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '368px',
                    height: '44px',
                    background: '#F2F2F2',
                    textDecoration: 'none',
                }}>
                    <span style={{
                        fontFamily: "'PP Neue Montreal', system-ui, sans-serif",
                        fontWeight: 500,
                        fontSize: '20px',
                        lineHeight: '100%',
                        letterSpacing: '-0.02em',
                        color: '#0D0D0D',
                    }}>
                        Read the article
                    </span>
                </Link>
            </div>

            {/* Side Texts */}
            <span style={{
                position: 'absolute',
                left: 'calc(50% - 628px - 72px)', // 144px width / 2 = 72px
                top: '771px',
                fontFamily: "'PP Neue Montreal', system-ui, sans-serif",
                fontWeight: 500,
                fontSize: '12px',
                lineHeight: '14px',
                letterSpacing: '-0.02em',
                color: '#0D0D0D',
            }}>
                [ Behind-the-scenes stories ]
            </span>

            <span style={{
                position: 'absolute',
                left: 'calc(50% + 629.5px - 70.5px)', // 141px width / 2 = 70.5px
                top: '771px',
                fontFamily: "'PP Neue Montreal', system-ui, sans-serif",
                fontWeight: 500,
                fontSize: '12px',
                lineHeight: '14px',
                letterSpacing: '-0.02em',
                color: '#0D0D0D',
            }}>
                [ Key insights from my work ]
            </span>

            {/* Divider Line */}
            <div style={{
                position: 'absolute',
                width: '1400px',
                height: '2px',
                left: '20px',
                top: '860px',
                background: '#0D0D0D',
            }} />

            {/* All Articles Section */}
            <h2 style={{
                position: 'absolute',
                left: '20px',
                top: '880px',
                fontFamily: "'PP Neue Montreal', system-ui, sans-serif",
                fontWeight: 500,
                fontSize: '52px',
                lineHeight: '90%',
                letterSpacing: '-0.02em',
                color: '#0D0D0D',
                margin: 0,
            }}>
                All articles
            </h2>

            {/* Filter Buttons */}
            <div style={{
                position: 'absolute',
                left: '20px',
                top: '947px',
                display: 'flex',
                gap: '8px',
            }}>
                <button style={{
                    padding: '8px 12px',
                    background: '#0D0D0D',
                    border: 'none',
                    fontFamily: "'PP Neue Montreal', system-ui, sans-serif",
                    fontWeight: 500,
                    fontSize: '16px',
                    color: '#F2F2F2',
                    cursor: 'pointer',
                }}>All</button>
                <button style={{
                    padding: '8px 12px',
                    background: 'transparent',
                    border: 'none',
                    fontFamily: "'PP Neue Montreal', system-ui, sans-serif",
                    fontWeight: 500,
                    fontSize: '16px',
                    color: '#0D0D0D',
                    cursor: 'pointer',
                }}>Tattoo</button>
                <button style={{
                    padding: '8px 12px',
                    background: 'transparent',
                    border: 'none',
                    fontFamily: "'PP Neue Montreal', system-ui, sans-serif",
                    fontWeight: 500,
                    fontSize: '16px',
                    color: '#0D0D0D',
                    cursor: 'pointer',
                }}>Education</button>
                <button style={{
                    padding: '8px 12px',
                    background: 'transparent',
                    border: 'none',
                    fontFamily: "'PP Neue Montreal', system-ui, sans-serif",
                    fontWeight: 500,
                    fontSize: '16px',
                    color: '#0D0D0D',
                    cursor: 'pointer',
                }}>Culture</button>
            </div>

            {/* Articles Grid */}
            <div style={{
                position: 'absolute',
                left: '20px',
                top: '1014px',
                width: '1400px',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
            }}>
                {articles.map((article) => (
                    <Link to={`/graphics/stories/${article.id}`} key={article.id} style={{ textDecoration: 'none' }}>
                        <div style={{
                            width: '456px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '24px',
                            marginBottom: '40px',
                        }}>
                            <div style={{
                                width: '456px',
                                height: '420px',
                                background: `url(${article.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }} />
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '20px',
                            }}>
                                <h3 style={{
                                    fontFamily: "'PP Neue Montreal', system-ui, sans-serif",
                                    fontWeight: 500,
                                    fontSize: '32px',
                                    lineHeight: '90%',
                                    letterSpacing: '-0.02em',
                                    color: '#0D0D0D',
                                    margin: 0,
                                }}>
                                    {article.title}
                                </h3>
                                <span style={{
                                    fontFamily: "'PP Neue Montreal', system-ui, sans-serif",
                                    fontWeight: 500,
                                    fontSize: '20px',
                                    lineHeight: '100%',
                                    letterSpacing: '-0.02em',
                                    color: '#0D0D0D',
                                }}>
                                    {article.category} • {article.date}
                                </span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Footer Section */}
            <div style={{
                position: 'absolute',
                top: '2194px',
                width: '100%',
                left: 0,
            }}>
                <GraphicsFooter />
            </div>

        </div>
    );
};

export default GraphicsStories;
