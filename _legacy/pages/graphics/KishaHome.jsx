import React from 'react';
import styles from './KishaHome.module.css';

const KishaHome = () => {
    return (
        <div className={styles.kishaHome}>
            {/* Hero Section */}
            <section className={styles.heroSection}>
                {/* Logo and Navigation */}
                <header className={styles.header}>
                    <div className={styles.logo}>
                        <div className={styles.logoDot} />
                        <span>Kisha</span>
                    </div>
                    <div className={styles.logoJapanese}>[ タトゥ ]</div>
                    <div className={styles.logoTattoo}>Tattoo</div>
                </header>

                <div className={styles.heroInfo}>
                    <span>[ Available for cooperation ]</span>
                    <span>[ Munich, Germany ]</span>
                </div>

                <img
                    className={styles.masterHeroImg}
                    src="/src/assets/1.jpg"
                    alt="Master"
                />

                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>
                        Irezumi Mastery. Stories Etched in Skin
                    </h1>

                    <p className={styles.heroDescription}>
                        Five years dedicated to the art of Irezumi: crafting large, meaningful projects that become your personal history
                    </p>
                </div>

                {/* Navigation */}
                <nav className={styles.navigation}>
                    <div className={styles.navItemActive}>Home</div>
                    <div className={styles.navItem}>Works</div>
                    <div className={styles.navItem}>About</div>
                    <div className={styles.navItem}>Stories</div>
                    <div className={styles.navItem}>Contact</div>
                </nav>

                <div className={styles.symbolInfo}>
                    <div className={styles.kanji}>道</div>
                    <p>The Kanji fundamentally means "road" or "path"</p>
                </div>

                <span className={styles.scrollInfo}>[ Scroll for more info ]</span>

                <button className={styles.btnConsultation}>
                    Start your consultation
                </button>
            </section>

            {/* Works Section */}
            <section className={styles.worksSection}>
                <div className={styles.worksSectionHeading}>
                    <span className={styles.tag}>[ Art that becomes a story ]</span>
                    <h2>The image is more than just a picture</h2>
                    <span className={styles.tag}>[ Explore work and tattooing ]</span>
                </div>

                <div className={styles.worksGallery}>
                    <img src="/src/assets/2-main.jpg" alt="Work 1" />
                    <img src="/src/assets/Kisha1.webp" alt="Work 2" />
                    <img src="/src/assets/Kisha-slider2.webp" alt="Work 3" />
                    <img src="/src/assets/Kisha-slider1.webp" alt="Work 4" />
                    <img src="/src/assets/1.jpg" alt="Work 5" />
                    <img src="/src/assets/2-main.jpg" alt="Work 6" />
                </div>
            </section>

            {/* Philosophy Section */}
            <section className={styles.philosophySection}>
                <h2 className={styles.philosophyTitle}>The Love of the Craft</h2>

                <div className={styles.philosophyInfo}>
                    <div className={styles.philosophySymbol}>
                        <div className={styles.kanji}>愛</div>
                        <p>It signifies a profound love or affection for someone or something</p>
                    </div>
                    <p className={styles.philosophyText}>
                        In the world of Irezumi, every line is drawn with intention, powered by deep love for the tradition and dedication to the client's vision. For over five years, I have channeled this passion into creating large, traditional Japanese projects
                    </p>
                </div>

                <img
                    className={styles.philosophyImg}
                    src="/src/assets/IMG_5582.webp"
                    alt="Philosophy"
                />

                <p className={styles.philosophyBottomText}>
                    My work is not driven by fleeting trends, but by profound respect for the metaphor and the core idea. This commitment ensures that your unique vision is transformed into a lasting masterpiece, carefully etched with skill and affection
                </p>
            </section>

            {/* Steps Section */}
            <section className={styles.stepsSection}>
                <h2 className={styles.stepsHeading}>
                    Your journey to Irezumi: a three-step process
                </h2>

                <div className={styles.stepsContainer}>
                    <div className={styles.step}>
                        <div className={styles.stepContent}>
                            <h3>Consultation</h3>
                            <p>We discuss your idea, metaphors, and the philosophy behind the future tattoo. This is the stage where your story becomes our starting point</p>
                        </div>
                        <div className={styles.stepNumber}>一</div>
                    </div>

                    <div className={styles.step}>
                        <div className={styles.stepContent}>
                            <h3>Sketch</h3>
                            <p>I create an individual sketch that respects the traditional canons of Irezumi but reflects your unique goal. The sketch is approved only when we are both confident in its perfection</p>
                        </div>
                        <div className={styles.stepNumber}>二</div>
                    </div>

                    <div className={styles.step}>
                        <div className={styles.stepContent}>
                            <h3>Session</h3>
                            <p>We begin the work. Each session is a focused ritual, dedicated to bringing your project to life</p>
                        </div>
                        <div className={styles.stepNumber}>三</div>
                    </div>
                </div>
            </section>

            {/* Traditional Symbols Section */}
            <section className={styles.tradSection}>
                <div className={styles.tradHeading}>
                    <div className={styles.tradHeadingContent}>
                        <h2>The Language of traditional japanese art</h2>
                        <p>Traditional Japanese tattooing speaks the language of symbols. Here are the meanings of the most popular motifs we work with:</p>
                    </div>
                    <div className={styles.tradSymbolInfo}>
                        <div className={styles.kanji}>忍</div>
                        <p>A symbol that represents an internal strength and discipline</p>
                    </div>
                </div>

                <div className={styles.tradCards}>
                    <div className={styles.tradCard}>
                        <img src="/src/assets/Kisha-slider1.webp" alt="Dragon" />
                        <div className={styles.tradCardInfo}>
                            <h3>Dragon</h3>
                            <p>Wisdom, strength, protection, and supernatural powers. A symbol of water and generosity</p>
                        </div>
                    </div>

                    <div className={styles.tradCard}>
                        <img src="/src/assets/2-main.jpg" alt="Carp" />
                        <div className={styles.tradCardInfo}>
                            <h3>Carp</h3>
                            <p>Perseverance, success in struggle, courage, and the ability to overcome difficulties</p>
                        </div>
                    </div>

                    <div className={styles.tradCard}>
                        <img src="/src/assets/Kisha1.webp" alt="Fox" />
                        <div className={styles.tradCardInfo}>
                            <h3>Fox</h3>
                            <p>Cunning, intellect, longevity, and magical abilities. Often associated with being a guardian against evil</p>
                        </div>
                    </div>

                    <div className={styles.tradCard}>
                        <img src="/src/assets/Kisha-slider2.webp" alt="Cherry Blossom" />
                        <div className={styles.tradCardInfo}>
                            <h3>Cherry Blossom</h3>
                            <p>The transience and beauty of life, the philosophy of "memento mori"</p>
                        </div>
                    </div>

                    <div className={styles.tradCard}>
                        <img src="/src/assets/IMG_5582.webp" alt="Tiger" />
                        <div className={styles.tradCardInfo}>
                            <h3>Tiger</h3>
                            <p>Power, bravery, longevity, and protection against evil and sickness. The symbol of the wind element and the north</p>
                        </div>
                    </div>
                </div>

                <button className={styles.btnConsultation}>
                    Start your consultation
                </button>
            </section>

            {/* FAQ Section */}
            <section className={styles.faqSection}>
                <div className={styles.faqHeading}>
                    <span className={styles.tag}>[ FAQ ]</span>
                    <h2>Have questions? Feel free to ask everything about tattooing</h2>
                </div>

                <div className={styles.faqContent}>
                    <img
                        className={styles.masterFaqImg}
                        src="/src/assets/1.jpg"
                        alt="Master FAQ"
                    />

                    <div className={styles.faqList}>
                        <div className={styles.faqItem}>
                            <h3>How should I prepare for my tattoo session?</h3>
                            <p>Ensure you are well-rested, hydrated, and have eaten. Avoid alcohol and blood thinners for 24 hours prior and wear comfortable, loose clothing</p>
                            <span className={styles.questionNumber}>[ Question №1 ]</span>
                        </div>

                        <div className={styles.faqItem}>
                            <h3>What is your booking process?</h3>
                            <p>Start by submitting an inquiry via WhatsApp or Instagram DM (links at the footer), outlining your vision</p>
                            <span className={styles.questionNumber}>[ Question №2 ]</span>
                        </div>

                        <div className={styles.faqItem}>
                            <h3>How long does a large Irezumi piece take?</h3>
                            <p>Large projects require significant commitment, typically ranging from 5 to 15+ sessions, spaced 4–6 weeks apart for proper healing</p>
                            <span className={styles.questionNumber}>[ Question №3 ]</span>
                        </div>

                        <div className={styles.faqItem}>
                            <h3>How should I care for my new tattoo (Aftercare)?</h3>
                            <p>Keep the area clean, gently wash with mild soap, and apply a thin layer of recommended ointment. Strictly avoid sun, swimming, and soaking for 2–3 weeks</p>
                            <span className={styles.questionNumber}>[ Question №4 ]</span>
                        </div>

                        <div className={styles.faqItem}>
                            <h3>Does traditional Irezumi hurt?</h3>
                            <p>Yes, all tattooing involves discomfort, but your comfort is our priority. We approach the process, which requires endurance (忍), with great care, using mindful techniques and taking regular breaks as needed</p>
                            <span className={styles.questionNumber}>[ Question №5 ]</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className={styles.footer}>
                <div className={styles.footerTop}>
                    <div className={styles.footerContent}>
                        <h2>Relax and book your seat right now</h2>
                        <div className={styles.footerLinks}>
                            <span className={styles.tag}>[ Social media ]</span>
                            <div className={styles.socialLinks}>
                                <a href="#">Instagram</a>
                                <a href="#">What's App</a>
                            </div>
                        </div>
                    </div>
                    <button className={styles.btnFooter}>Discuss your vision</button>
                </div>

                <div className={styles.footerBottom}>
                    <div className={styles.footerLogoWrapper}>
                        <div className={styles.footerLogo}>
                            <div className={styles.logoDot} />
                            <span>Kisha</span>
                        </div>
                        <span>Tattoo</span>
                    </div>
                    <div className={styles.footerCopyright}>
                        <span>[ All Rights Reserved. 2025 ]</span>
                        <span>[ Made by Artem Yavorovskyi ]</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default KishaHome;