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
                const startX = Math.random() * 100; // %
                const startY = Math.random() * 100; // %
                const duration = 8 + Math.random() * 10; // Faster: 8-18 seconds
                const moveY = -100 - Math.random() * 150; // More movement: 100-250px

                return (
                    <motion.div
                        key={index}
                        initial={{
                            opacity: 0,
                            scale: 0.5 + Math.random() * 0.5,
                            y: 0
                        }}
                        animate={{
                            opacity: [0, 0.8, 0], // More visible
                            y: moveY, // Move up relative to start
                            rotate: [0, Math.random() * 40 - 20] // More rotation: -20 to 20 degrees
                        }}
                        transition={{
                            duration: duration,
                            repeat: Infinity,
                            delay: Math.random() * 10, // Faster start: 0-10s delay
                            ease: "linear" // Smoother continuous movement
                        }}
                        style={{
                            position: 'absolute',
                            top: `${startY}%`,
                            left: `${startX}%`,
                            fontSize: `${Math.random() * 4 + 2}rem`,
                            color: 'var(--primary)',
                            fontFamily: 'var(--font-body)',
                            willChange: 'transform, opacity'
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
