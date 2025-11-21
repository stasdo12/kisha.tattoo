import React from 'react';
import { motion } from 'framer-motion';

const kanjiList = [
    '龍', '虎', '鬼', '侍', '魂', '道', '空', '美', '力', '和', '夢', '愛',
    '風', '林', '火', '山', '心', '技', '体', '禅', '誠', '勇', '礼', '義',
    '忍', '武', '神', '霊', '光', '闇', '生', '死', '真', '善', '信', '忠'
];

const KanjiBackground = () => {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 0,
            overflow: 'hidden'
        }}>
            {Array.from({ length: 100 }).map((_, index) => {
                const char = kanjiList[Math.floor(Math.random() * kanjiList.length)];
                return (
                    <motion.div
                        key={index}
                        initial={{
                            x: Math.random() * window.innerWidth,
                            y: Math.random() * window.innerHeight,
                            opacity: 0,
                            scale: 0.5 + Math.random() * 0.5
                        }}
                        animate={{
                            y: [null, Math.random() * -50],
                            opacity: [0, 0.15, 0], // Slightly more visible
                            rotate: [0, Math.random() * 10 - 5]
                        }}
                        transition={{
                            duration: 15 + Math.random() * 15,
                            repeat: Infinity,
                            delay: Math.random() * 10,
                            ease: "easeInOut"
                        }}
                        style={{
                            position: 'absolute',
                            fontSize: `${Math.random() * 4 + 2}rem`,
                            color: 'var(--primary)', // ALWAYS RED as requested
                            fontFamily: 'Inter, sans-serif',
                            filter: 'blur(1px)'
                        }}
                    >
                        {char}
                    </motion.div>
                );
            })}
        </div>
    );
};

export default KanjiBackground;
