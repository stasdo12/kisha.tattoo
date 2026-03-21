import React, { useEffect, useState } from 'react';
import GraphicsHeader from '../../components/graphics/GraphicsHeader';
import GraphicsFooter from '../../components/graphics/GraphicsFooter';
import GraphicsFormPopup from '../../components/graphics/GraphicsFormPopup';
import useMediaQuery from '../../hooks/useMediaQuery';

const GraphicsHome = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const { isMobile, width } = useMediaQuery();

    // Determine breakpoints: Mobile (390px), Tablet (1440px), Desktop (1920px)
    const isLargeDesktop = width >= 1920;
    const isTablet = width >= 1024 && width < 1920;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Figma asset URLs - Updated from latest design
    const images = {
        desktop: {
            masterHeroImg: "https://www.figma.com/api/mcp/asset/65c7658b-b8d9-40b7-a490-344cd1ab7863",
            masterFaqImg: "https://www.figma.com/api/mcp/asset/6e8754f6-ba60-4e7d-8fc1-9ceb1f6419d6",
            philosophyImg: "https://www.figma.com/api/mcp/asset/4a0293c5-c422-4183-a5df-ac26085ec3aa",
            gallery: [
                "https://www.figma.com/api/mcp/asset/96815d2e-2984-4eb3-9f8a-7761cb172768",
                "https://www.figma.com/api/mcp/asset/ea04bc02-085d-4541-babe-cd20619dddd2",
                "https://www.figma.com/api/mcp/asset/439f9fcd-ceab-491a-b850-610a364a3f68",
                "https://www.figma.com/api/mcp/asset/3e654b42-8a1f-4cc7-bd92-f1e1a58cf04a",
                "https://www.figma.com/api/mcp/asset/eb99fff3-bf60-4ff2-9d0e-ecc43245b07e",
                "https://www.figma.com/api/mcp/asset/0a8d6d35-9b05-48b1-9951-b266efb6e39a",
            ],
            symbols: [
                "https://www.figma.com/api/mcp/asset/a7658caa-5be4-4a00-ba8d-d7f80a25ccfb",
                "https://www.figma.com/api/mcp/asset/6d602980-ca1f-42c7-988a-c359791c3d06",
                "https://www.figma.com/api/mcp/asset/92fc4c67-9420-493d-974d-8b87967e691a",
                "https://www.figma.com/api/mcp/asset/ab669319-72ef-4595-84eb-5a8c64195543",
                "https://www.figma.com/api/mcp/asset/36359478-02dc-4ce5-97ea-d37f9b168323",
            ]
        },
        tablet: {
            masterHeroImg: "https://www.figma.com/api/mcp/asset/21535d3d-e26c-42ea-a9fa-d5d8d9c89ece",
            masterFaqImg: "https://www.figma.com/api/mcp/asset/e55f96f6-d019-448b-8f05-efbb26bfddf5",
            philosophyImg: "https://www.figma.com/api/mcp/asset/7e82d467-f688-42e7-b972-2a8b72fad848",
            gallery: [
                "https://www.figma.com/api/mcp/asset/ac9e411a-798a-4471-81c5-3a39a4aac9c6",
                "https://www.figma.com/api/mcp/asset/544c7295-5256-468b-8e65-8a6a7c5fffee",
                "https://www.figma.com/api/mcp/asset/6be9aade-def4-4da5-9b30-47b5362f5ae0",
                "https://www.figma.com/api/mcp/asset/7916195e-b6f7-4151-ac3b-4dbc90f8db3e",
                "https://www.figma.com/api/mcp/asset/021016e2-2af7-4124-9c67-35736a11e87b",
                "https://www.figma.com/api/mcp/asset/d87363b3-5b4c-4656-b829-35af1c87a546",
            ],
            symbols: [
                "https://www.figma.com/api/mcp/asset/a7658caa-5be4-4a00-ba8d-d7f80a25ccfb",
                "https://www.figma.com/api/mcp/asset/dfaf7de4-cf87-4955-9ed8-c92bcef9e83f",
                "https://www.figma.com/api/mcp/asset/a002e2c4-5a00-47f0-9c1d-44f9eeb079c9",
                "https://www.figma.com/api/mcp/asset/3a69d847-65c3-45b5-ba5e-34858b9676c6",
                "https://www.figma.com/api/mcp/asset/21072384-676e-450c-972d-40ac64289257",
            ]
        },
        mobile: {
            masterHeroImg: "https://www.figma.com/api/mcp/asset/18c694b0-1b82-40c5-8c82-2703ee3c66da",
            masterFaqImg: "https://www.figma.com/api/mcp/asset/e788efa6-f1d4-4203-8451-77bbc0a5a9be",
            philosophyImg: "https://www.figma.com/api/mcp/asset/ed40a111-a206-4faf-ab94-bf17aac6950f",
            gallery: [
                "https://www.figma.com/api/mcp/asset/b4bb93b8-239a-4864-9c19-ecf5f4b5ce6b",
                "https://www.figma.com/api/mcp/asset/1b257b7b-6f82-4deb-a169-645a23bc5e1b",
                "https://www.figma.com/api/mcp/asset/ee91e8f7-1b02-4a03-b3ce-8f18805cdc76",
                "https://www.figma.com/api/mcp/asset/c9a6e101-20bf-41f8-96c1-7f8c5bac6380",
                "https://www.figma.com/api/mcp/asset/d05889ce-343f-4124-9309-d5bb67ce0d5a",
                "https://www.figma.com/api/mcp/asset/f07e62ea-493f-4920-9df5-e33c7d309ce0",
            ],
            symbols: [
                "https://www.figma.com/api/mcp/asset/25a6fdd6-983e-41ef-aa29-ccc5f9f395b7",
                "https://www.figma.com/api/mcp/asset/8be29634-871c-4d00-a0e0-524f9edb58e0",
                "https://www.figma.com/api/mcp/asset/27b80774-5df2-458a-afdb-fa87a9d30821",
                "https://www.figma.com/api/mcp/asset/d5462c83-6d35-448d-b937-d6b013d9e36d",
                "https://www.figma.com/api/mcp/asset/ae38f5ad-1aec-4e59-8464-e0163eb70656",
            ]
        }
    };

    const currentImages = isLargeDesktop ? images.desktop : isTablet ? images.tablet : images.mobile;

    const containerStyle = {
        width: '100%',
        minHeight: '100vh',
        background: '#F2F2F2',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontFamily: 'PP Neue Montreal, sans-serif',
        fontWeight: 500
    };

    const sectionStyle = {
        width: isMobile ? '360px' : isLargeDesktop ? '1840px' : '1400px',
        margin: '0 auto'
    };

    return (
        <div style={containerStyle}>
            <GraphicsHeader />
            <GraphicsFormPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />

            {/* Hero Section */}
            <section id="home" style={{
                ...sectionStyle,
                marginTop: isMobile ? '20px' : '0',
                display: 'flex',
                flexDirection: 'column',
                gap: isMobile ? '20px' : '32px'
            }}>
                {/* Hero Info */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '12px',
                    letterSpacing: '-0.24px',
                    color: '#0D0D0D',
                    marginTop: isMobile ? '32px' : isLargeDesktop ? '52px' : '52px'
                }}>
                    <span>[ Available for cooperation ]</span>
                    <span>[ Munich, Germany ]</span>
                </div>

                {/* Hero Content */}
                <div style={{
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    gap: isMobile ? '20px' : isLargeDesktop ? '64px' : '64px',
                    alignItems: isMobile ? 'flex-start' : 'flex-start'
                }}>
                    {/* Master Image */}
                    <img
                        src={currentImages.masterHeroImg}
                        alt="Master"
                        style={{
                            width: isMobile ? '360px' : isLargeDesktop ? '354px' : '240px',
                            height: isMobile ? '387px' : isLargeDesktop ? '384px' : '260px',
                            objectFit: 'cover',
                            order: isMobile ? 0 : isLargeDesktop ? -1 : -1
                        }}
                    />

                    {/* Hero Text */}
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '32px',
                        width: isMobile ? '360px' : '740px',
                        minWidth: isMobile ? '360px' : '740px',
                        flexShrink: 0
                    }}>
                        <h1 style={{
                            margin: 0,
                            fontSize: isMobile ? '40px' : '80px',
                            lineHeight: isMobile ? '36px' : '72px',
                            letterSpacing: isMobile ? '-0.8px' : '-1.6px',
                            color: '#0D0D0D',
                            width: '100%'
                        }}>
                            Irezumi Mastery. Stories Etched in Skin
                        </h1>

                        <p style={{
                            margin: 0,
                            fontSize: isMobile ? '16px' : '20px',
                            lineHeight: isMobile ? '16px' : '20px',
                            letterSpacing: isMobile ? '-0.32px' : '-0.4px',
                            color: '#0D0D0D',
                            maxWidth: isMobile ? '316px' : '340px'
                        }}>
                            Five years dedicated to the art of Irezumi: crafting large, meaningful projects that become your personal history
                        </p>
                    </div>
                </div>

                {/* Kanji Symbol */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: isMobile ? '12px' : '16px',
                    marginTop: isMobile ? '20px' : isLargeDesktop ? '240px' : '116px'
                }}>
                    <div style={{
                        fontSize: isMobile ? '32px' : '80px',
                        lineHeight: isMobile ? '28.8px' : '72px',
                        letterSpacing: isMobile ? '-0.64px' : '-1.6px',
                        color: '#0D0D0D'
                    }}>道</div>
                    <p style={{
                        margin: 0,
                        fontSize: isMobile ? '12px' : '14px',
                        lineHeight: isMobile ? '12px' : '14px',
                        letterSpacing: isMobile ? '-0.24px' : '-0.28px',
                        color: '#BFBFBF',
                        maxWidth: isMobile ? '141px' : '158px'
                    }}>
                        The Kanji fundamentally means "road" or "path"
                    </p>
                </div>

                {/* Scroll Info - Desktop only */}
                {!isMobile && (
                    <div style={{
                        fontSize: '12px',
                        letterSpacing: '-0.24px',
                        color: '#BFBFBF',
                        textAlign: 'right',
                        marginTop: '20px'
                    }}>
                        [ Scroll for more info ]
                    </div>
                )}

                {/* CTA Button */}
                <button
                    onClick={() => setIsPopupOpen(true)}
                    style={{
                        width: '100%',
                        padding: '16px 12px',
                        background: '#0D0D0D',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '20px',
                        lineHeight: '20px',
                        letterSpacing: '-0.4px',
                        color: '#F2F2F2',
                        marginTop: isMobile ? '20px' : '40px',
                        marginBottom: '60px'
                    }}
                >
                    Start your consultation
                </button>
            </section>

            {/* Works Section */}
            <section id="works" style={{
                ...sectionStyle,
                display: 'flex',
                flexDirection: 'column',
                gap: '28px',
                marginBottom: '100px'
            }}>
                {/* Heading */}
                <div style={{
                    borderBottom: '2px solid #0D0D0D',
                    paddingBottom: '20px',
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    justifyContent: isMobile ? 'center' : 'space-between',
                    alignItems: isMobile ? 'center' : 'flex-end',
                    gap: isMobile ? '12px' : 0
                }}>
                    {!isMobile && (
                        <span style={{ fontSize: '12px', letterSpacing: '-0.24px', color: '#0D0D0D' }}>
                            [ Art that becomes a story ]
                        </span>
                    )}
                    <h2 style={{
                        margin: 0,
                        fontSize: isMobile ? '32px' : '52px',
                        lineHeight: isMobile ? '28.8px' : '46.8px',
                        letterSpacing: isMobile ? '-0.64px' : '-1.04px',
                        color: '#0D0D0D',
                        textAlign: 'center',
                        maxWidth: isMobile ? '302px' : '422px'
                    }}>
                        The image is more than just a picture
                    </h2>
                    {!isMobile && (
                        <span style={{ fontSize: '12px', letterSpacing: '-0.24px', color: '#0D0D0D' }}>
                            [ Explore work and tattooing ]
                        </span>
                    )}
                </div>

                {/* Mobile label */}
                {isMobile && (
                    <span style={{ fontSize: '12px', letterSpacing: '-0.24px', color: '#0D0D0D', textAlign: 'center' }}>
                        [ Explore work and tattooing ]
                    </span>
                )}

                {/* Gallery Grid */}
                <div style={{
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    gap: '16px',
                    alignItems: isMobile ? 'center' : 'flex-start'
                }}>
                    {currentImages.gallery.map((img, idx) => {
                        const widths = isMobile ? [360, 360, 360, 360, 360, 360] : isLargeDesktop ? [460, 260, 260, 260, 260, 260] : [389, 186, 186, 186, 186, 186];
                        const heights = isMobile ? [389, 387, 387, 387, 387, 387] : isLargeDesktop ? [552, 312, 312, 312, 312, 312] : [420, 200, 200, 200, 200, 200];

                        return (
                            <img
                                key={idx}
                                src={img}
                                alt={`Gallery ${idx + 1}`}
                                style={{
                                    width: `${widths[idx]}px`,
                                    height: `${heights[idx]}px`,
                                    objectFit: 'cover'
                                }}
                            />
                        );
                    })}
                </div>
            </section>

            {/* Philosophy Section */}
            <section id="about" style={{
                ...sectionStyle,
                display: 'flex',
                flexDirection: 'column',
                gap: isMobile ? '27px' : '32px',
                marginBottom: '100px'
            }}>
                {/* Title */}
                <h2 style={{
                    margin: 0,
                    fontSize: isMobile ? '32px' : '52px',
                    lineHeight: isMobile ? '28.8px' : '46.8px',
                    letterSpacing: isMobile ? '-0.64px' : '-1.04px',
                    color: '#0D0D0D',
                    maxWidth: isMobile ? '151px' : '254px'
                }}>
                    The Love of the Craft
                </h2>

                {/* Content */}
                <div style={{
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    gap: isMobile ? '27px' : isLargeDesktop ? '480px' : '260px',
                    alignItems: isMobile ? 'flex-start' : 'flex-start'
                }}>
                    {/* Symbol Info */}
                    <div style={{
                        display: 'flex',
                        flexDirection: isMobile ? 'column' : 'row',
                        gap: isMobile ? '12px' : '16px',
                        alignItems: isMobile ? 'flex-start' : 'flex-start'
                    }}>
                        <div style={{
                            fontSize: isMobile ? '32px' : '80px',
                            lineHeight: isMobile ? '28.8px' : '72px',
                            letterSpacing: isMobile ? '-0.64px' : '-1.6px',
                            color: '#0D0D0D'
                        }}>愛</div>
                        <p style={{
                            margin: 0,
                            fontSize: isMobile ? '12px' : '14px',
                            lineHeight: isMobile ? '12px' : '14px',
                            letterSpacing: isMobile ? '-0.24px' : '-0.28px',
                            color: '#BFBFBF',
                            maxWidth: isMobile ? '133px' : '158px'
                        }}>
                            It signifies a profound love or affection for someone or something
                        </p>
                    </div>

                    {/* Text Content */}
                    {!isMobile && (
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '32px',
                            maxWidth: '448px'
                        }}>
                            <p style={{
                                margin: 0,
                                fontSize: '20px',
                                lineHeight: '20px',
                                letterSpacing: '-0.4px',
                                color: '#0D0D0D'
                            }}>
                                In the world of Irezumi, every line is drawn with intention, powered by deep love for the tradition and dedication to the client's vision. For over five years, I have channeled this passion into creating large, traditional Japanese projects
                            </p>
                        </div>
                    )}
                </div>

                {/* Mobile text */}
                {isMobile && (
                    <p style={{
                        margin: 0,
                        fontSize: '16px',
                        lineHeight: '16px',
                        letterSpacing: '-0.32px',
                        color: '#0D0D0D'
                    }}>
                        In the world of Irezumi, every line is drawn with intention, powered by deep love for the tradition and dedication to the client's vision. For over five years, I have channeled this passion into creating large, traditional Japanese projects
                    </p>
                )}

                {/* Philosophy Image */}
                <img
                    src={currentImages.philosophyImg}
                    alt="Philosophy"
                    style={{
                        width: '100%',
                        height: isMobile ? '380px' : isLargeDesktop ? '960px' : '720px',
                        objectFit: 'cover'
                    }}
                />

                {/* Bottom Text */}
                <div style={{
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    gap: isMobile ? '20px' : isLargeDesktop ? '480px' : '260px'
                }}>
                    <div style={{ flex: isMobile ? 0 : 1 }} />
                    <p style={{
                        margin: 0,
                        fontSize: isMobile ? '16px' : '20px',
                        lineHeight: isMobile ? '16px' : '20px',
                        letterSpacing: isMobile ? '-0.32px' : '-0.4px',
                        color: '#0D0D0D',
                        maxWidth: '448px'
                    }}>
                        My work is not driven by fleeting trends, but by profound respect for the metaphor and the core idea. This commitment ensures that your unique vision is transformed into a lasting masterpiece, carefully etched with skill and affection
                    </p>
                </div>
            </section>

            {/* Steps Section */}
            <section id="stories" style={{
                ...sectionStyle,
                display: 'flex',
                flexDirection: 'column',
                gap: '28px',
                marginBottom: '100px'
            }}>
                {/* Heading */}
                <div style={{
                    borderBottom: '2px solid #0D0D0D',
                    paddingBottom: '20px',
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <h2 style={{
                        margin: 0,
                        fontSize: isMobile ? '32px' : '52px',
                        lineHeight: isMobile ? '28.8px' : '46.8px',
                        letterSpacing: isMobile ? '-0.64px' : '-1.04px',
                        color: '#0D0D0D',
                        textAlign: 'center',
                        maxWidth: isMobile ? '327px' : '503px'
                    }}>
                        Your journey to Irezumi: a three-step process
                    </h2>
                </div>

                {/* Steps Container */}
                <div style={{
                    background: '#0D0D0D',
                    padding: isMobile ? '20px 24px' : '40px',
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    gap: isMobile ? '28px' : 0,
                    justifyContent: 'space-between'
                }}>
                    {[
                        { title: 'Consultation', text: 'We discuss your idea, metaphors, and the philosophy behind the future tattoo. This is the stage where your story becomes our starting point', number: '一' },
                        { title: 'Sketch', text: 'I create an individual sketch that respects the traditional canons of Irezumi but reflects your unique goal. The sketch is approved only when we are both confident in its perfection', number: '二' },
                        { title: 'Session', text: 'We begin the work. Each session is a focused ritual, dedicated to bringing your project to life', number: '三' }
                    ].map((step, idx) => (
                        <div key={idx} style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            gap: isMobile ? '60px' : idx === 1 ? (isLargeDesktop ? '220px' : '180px') : 0,
                            flex: isMobile ? 'none' : 1,
                            paddingRight: isMobile ? 0 : idx < 2 ? '32px' : 0,
                            paddingBottom: isMobile && idx < 2 ? '12px' : 0,
                            borderRight: !isMobile && idx < 2 ? '1px solid #F2F2F2' : 'none',
                            borderBottom: isMobile && idx < 2 ? '1px solid #F2F2F2' : 'none',
                            minHeight: !isMobile && idx !== 1 ? (isLargeDesktop ? '398px' : '358px') : 'auto'
                        }}>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '20px',
                                width: '100%'
                            }}>
                                <h3 style={{
                                    margin: 0,
                                    fontSize: isMobile ? '24px' : '32px',
                                    lineHeight: isMobile ? '21.6px' : '28.8px',
                                    letterSpacing: isMobile ? '-0.48px' : '-0.64px',
                                    color: '#F2F2F2',
                                    textAlign: 'left'
                                }}>
                                    {step.title}
                                </h3>
                                <p style={{
                                    margin: 0,
                                    fontSize: isMobile ? '16px' : '20px',
                                    lineHeight: isMobile ? '16px' : '20px',
                                    letterSpacing: isMobile ? '-0.32px' : '-0.4px',
                                    color: '#F2F2F2',
                                    maxWidth: isMobile ? '296px' : '360px',
                                    textAlign: 'left',
                                    width: '360px'
                                }}>
                                    {step.text}
                                </p>
                            </div>
                            <div style={{
                                fontSize: isMobile ? '24px' : '32px',
                                lineHeight: isMobile ? '21.6px' : '28.8px',
                                letterSpacing: isMobile ? '-0.48px' : '-0.64px',
                                color: '#F2F2F2'
                            }}>
                                {step.number}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Traditional Symbols Section */}
            <section style={{
                ...sectionStyle,
                display: 'flex',
                flexDirection: 'column',
                gap: '52px',
                marginBottom: '100px'
            }}>
                {/* Heading */}
                <div style={{
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    justifyContent: 'space-between',
                    gap: isMobile ? '32px' : 0
                }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: isMobile ? '28px' : '32px'
                    }}>
                        <h2 style={{
                            margin: 0,
                            fontSize: isMobile ? '32px' : '52px',
                            lineHeight: isMobile ? '28.8px' : '46.8px',
                            letterSpacing: isMobile ? '-0.64px' : '-1.04px',
                            color: '#0D0D0D',
                            maxWidth: isMobile ? '304px' : '513px'
                        }}>
                            The Language of traditional japanese art
                        </h2>
                        <p style={{
                            margin: 0,
                            fontSize: isMobile ? '16px' : '20px',
                            lineHeight: isMobile ? '16px' : '20px',
                            letterSpacing: isMobile ? '-0.32px' : '-0.4px',
                            color: '#0D0D0D',
                            maxWidth: isMobile ? '304px' : '378px'
                        }}>
                            Traditional Japanese tattooing speaks the language of symbols. Here are the meanings of the most popular motifs we work with:
                        </p>
                    </div>

                    {/* Symbol Info */}
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: isMobile ? '12px' : '16px',
                        alignItems: isMobile ? 'flex-start' : 'flex-end'
                    }}>
                        <div style={{
                            fontSize: isMobile ? '32px' : '80px',
                            lineHeight: isMobile ? '28.8px' : '72px',
                            letterSpacing: isMobile ? '-0.64px' : '-1.6px',
                            color: '#0D0D0D'
                        }}>忍</div>
                        <p style={{
                            margin: 0,
                            fontSize: isMobile ? '12px' : '14px',
                            lineHeight: isMobile ? '12px' : '14px',
                            letterSpacing: isMobile ? '-0.24px' : '-0.28px',
                            color: '#BFBFBF',
                            maxWidth: isMobile ? '133px' : '158px',
                            textAlign: isMobile ? 'left' : 'right'
                        }}>
                            A symbol that represents an internal strength and discipline
                        </p>
                    </div>
                </div>

                {/* Symbols Grid */}
                <div style={{
                    display: isMobile ? 'flex' : 'block',
                    flexDirection: isMobile ? 'column' : undefined,
                    gap: isMobile ? '20px' : undefined,
                    height: isMobile ? 'auto' : isLargeDesktop ? '1306px' : '980px',
                    position: isMobile ? 'static' : 'relative',
                    width: '100%'
                }}>
                    {[
                        { title: 'Dragon', text: 'Wisdom, strength, protection, and supernatural powers. A symbol of water and generosity', img: currentImages.symbols[0], left: 0, top: 0 },
                        { title: 'Carp', text: 'Perseverance, success in struggle, courage, and the ability to overcome difficulties', img: currentImages.symbols[1], left: isLargeDesktop ? 928 : 696, top: 0 },
                        { title: 'Fox', text: 'Cunning, intellect, longevity, and magical abilities. Often associated with being a guardian against evil', img: currentImages.symbols[2], left: isLargeDesktop ? 1392 : 1048, top: 0 },
                        { title: 'Cherry Blossom', text: 'The transience and beauty of life, the philosophy of "memento mori"', img: currentImages.symbols[3], left: isLargeDesktop ? 464 : 348, top: isLargeDesktop ? 673 : 505 },
                        { title: 'Tiger', text: 'Power, bravery, longevity, and protection against evil and sickness. The symbol of the wind element and the north', img: currentImages.symbols[4], left: isLargeDesktop ? 928 : 696, top: isLargeDesktop ? 673 : 505 }
                    ].map((symbol, idx) => (
                        <div key={idx} style={{
                            width: isMobile ? '100%' : isLargeDesktop ? '448px' : '338px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: isMobile ? '16px' : '24px',
                            position: isMobile ? 'static' : 'absolute',
                            left: isMobile ? undefined : `${symbol.left}px`,
                            top: isMobile ? undefined : `${symbol.top}px`
                        }}>
                            <img
                                src={symbol.img}
                                alt={symbol.title}
                                style={{
                                    width: '100%',
                                    height: isMobile ? '380px' : isLargeDesktop ? '500px' : '420px',
                                    objectFit: 'cover'
                                }}
                            />
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: isMobile ? '12px' : '20px'
                            }}>
                                <h3 style={{
                                    margin: 0,
                                    fontSize: isMobile ? '24px' : '32px',
                                    lineHeight: isMobile ? '21.6px' : '28.8px',
                                    letterSpacing: isMobile ? '-0.48px' : '-0.64px',
                                    color: '#0D0D0D',
                                    textAlign: 'left'
                                }}>
                                    {symbol.title}
                                </h3>
                                <p style={{
                                    margin: 0,
                                    fontSize: isMobile ? '16px' : '20px',
                                    lineHeight: isMobile ? '16px' : '20px',
                                    letterSpacing: isMobile ? '-0.32px' : '-0.4px',
                                    color: '#0D0D0D',
                                    textAlign: 'left',
                                    width: isMobile ? 'auto' : '340px'
                                }}>
                                    {symbol.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                <button
                    onClick={() => setIsPopupOpen(true)}
                    style={{
                        width: '100%',
                        padding: '16px 12px',
                        background: '#0D0D0D',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '20px',
                        lineHeight: '20px',
                        letterSpacing: '-0.4px',
                        color: '#F2F2F2'
                    }}
                >
                    Start your consultation
                </button>
            </section>

            {/* FAQ Section */}
            <section id="contact" style={{
                ...sectionStyle,
                display: 'flex',
                flexDirection: 'column',
                gap: isMobile ? '32px' : '52px',
                marginBottom: '100px'
            }}>
                {/* Heading */}
                <div style={{
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    gap: isMobile ? '12px' : isLargeDesktop ? '894px' : '674px',
                    alignItems: isMobile ? 'flex-start' : 'flex-start'
                }}>
                    <span style={{
                        fontSize: '12px',
                        letterSpacing: '-0.24px',
                        color: '#0D0D0D'
                    }}>
                        [ FAQ ]
                    </span>
                    <h2 style={{
                        margin: 0,
                        fontSize: isMobile ? '32px' : '52px',
                        lineHeight: isMobile ? '28.8px' : '46.8px',
                        letterSpacing: isMobile ? '-0.64px' : '-1.04px',
                        color: '#0D0D0D',
                        maxWidth: isMobile ? '310px' : '672px'
                    }}>
                        Have questions? Feel free to ask everything about tattooing
                    </h2>
                </div>

                {/* FAQ Content */}
                <div style={{
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    gap: isMobile ? '52px' : isLargeDesktop ? '574px' : '468px'
                }}>
                    {/* Master Image - Desktop */}
                    {!isMobile && (
                        <img
                            src={currentImages.masterFaqImg}
                            alt="Master FAQ"
                            style={{
                                width: isLargeDesktop ? '354px' : '240px',
                                height: isLargeDesktop ? '384px' : '260px',
                                objectFit: 'cover'
                            }}
                        />
                    )}

                    {/* FAQ List */}
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '16px',
                        flex: 1,
                        width: isMobile ? '100%' : isLargeDesktop ? '912px' : '688px'
                    }}>
                        {[
                            {
                                q: 'How should I prepare for my tattoo session?',
                                a: 'Ensure you are well-rested, hydrated, and have eaten. Avoid alcohol and blood thinners for 24 hours prior and wear comfortable, loose clothing',
                                num: 1,
                                rightOffset: 76
                            },
                            {
                                q: 'What is your booking process?',
                                a: 'Start by submitting an inquiry via WhatsApp or Instagram DM (links at the footer), outlining your vision',
                                num: 2,
                                rightOffset: 79
                            },
                            {
                                q: 'How long does a large Irezumi piece take?',
                                a: 'Large projects require significant commitment, typically ranging from 5 to 15+ sessions, spaced 4–6 weeks apart for proper healing',
                                num: 3,
                                rightOffset: 79
                            },
                            {
                                q: 'How should I care for my new tattoo (Aftercare)?',
                                a: 'Keep the area clean, gently wash with mild soap, and apply a thin layer of recommended ointment. Strictly avoid sun, swimming, and soaking for 2–3 weeks',
                                num: 4,
                                rightOffset: 79
                            },
                            {
                                q: 'Does traditional Irezumi hurt?',
                                a: 'Yes, all tattooing involves discomfort, but your comfort is our priority. We approach the process, which requires endurance (忍), with great care, using mindful techniques and taking regular breaks as needed',
                                num: 5,
                                rightOffset: 79
                            }
                        ].map((faq, idx) => (
                            <div key={idx} style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: isMobile ? '12px' : '20px',
                                position: 'relative'
                            }}>
                                {isMobile && (
                                    <span style={{
                                        fontSize: '12px',
                                        letterSpacing: '-0.24px',
                                        color: '#0D0D0D'
                                    }}>
                                        [ Question №{faq.num} ]
                                    </span>
                                )}
                                <h3 style={{
                                    margin: 0,
                                    fontSize: isMobile ? '24px' : '32px',
                                    lineHeight: isMobile ? '21.6px' : '28.8px',
                                    letterSpacing: isMobile ? '-0.48px' : '-0.64px',
                                    color: '#0D0D0D',
                                    textAlign: 'left'
                                }}>
                                    {faq.q}
                                </h3>
                                <p style={{
                                    margin: 0,
                                    fontSize: isMobile ? '16px' : '20px',
                                    lineHeight: isMobile ? '16px' : '20px',
                                    letterSpacing: isMobile ? '-0.32px' : '-0.4px',
                                    color: '#0D0D0D',
                                    maxWidth: '448px',
                                    textAlign: 'left'
                                }}>
                                    {faq.a}
                                </p>
                                {!isMobile && (
                                    <span style={{
                                        position: 'absolute',
                                        right: `${faq.rightOffset}px`,
                                        top: 0,
                                        fontSize: '12px',
                                        letterSpacing: '-0.24px',
                                        color: '#0D0D0D',
                                        transform: 'translateX(100%)'
                                    }}>
                                        [ Question №{faq.num} ]
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Master Image - Mobile */}
                    {isMobile && (
                        <img
                            src={currentImages.masterFaqImg}
                            alt="Master FAQ"
                            style={{
                                width: '360px',
                                height: '387px',
                                objectFit: 'cover'
                            }}
                        />
                    )}
                </div>
            </section>

            <GraphicsFooter />
        </div>
    );
};

export default GraphicsHome;
