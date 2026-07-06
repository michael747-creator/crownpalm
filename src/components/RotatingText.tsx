'use client';
import React, { forwardRef, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './RotatingText.css';

type RotatingTextProps = {
    texts: string[];
    mainClassName?: string;
    staggerFrom?: 'first' | 'last';
    initial?: any;
    animate?: any;
    exit?: any;
    staggerDuration?: number;
    transition?: any;
    rotationInterval?: number;
};

export type RotatingTextHandle = {
    next: () => void;
    prev: () => void;
};

const splitToChars = (text: string) => {
    const chars = [] as string[];
    for (let i = 0; i < text.length; i++) {
        chars.push(text[i]);
    }
    return chars;
};

const RotatingText = forwardRef<RotatingTextHandle, RotatingTextProps>(
    (
        {
            texts,
            mainClassName = '',
            staggerFrom = 'first',
            initial = { y: '100%' },
            animate = { y: 0 },
            exit = { y: '-120%' },
            staggerDuration = 0.025,
            transition = { type: 'spring', damping: 30, stiffness: 400 },
            rotationInterval = 2500,
        },
        ref
    ) => {
        const [index, setIndex] = useState(0);
        const intervalRef = useRef<number | null>(null);

        useImperativeHandle(ref, () => ({
            next: () => setIndex((i) => (i + 1) % texts.length),
            prev: () => setIndex((i) => (i - 1 + texts.length) % texts.length),
        }));

        useEffect(() => {
            intervalRef.current = window.setInterval(() => {
                setIndex((i) => (i + 1) % texts.length);
            }, rotationInterval);

            return () => {
                if (intervalRef.current) window.clearInterval(intervalRef.current);
            };
        }, [rotationInterval, texts.length]);

        const current = texts[index] || '';

        const lines = useMemo(() => current.split('\n'), [current]);

        const chars = lines.map((line) => splitToChars(line));

        const getStaggerDelay = (charIndex: number, lineIndex: number) => {
            const lineChars = chars[lineIndex].length;
            if (staggerFrom === 'last') {
                return (lineChars - charIndex - 1) * staggerDuration + lineIndex * 0.01;
            }
            return charIndex * staggerDuration + lineIndex * 0.01;
        };

        return (
            <span className={`text-rotate ${mainClassName}`} aria-live="polite">
                <span className="text-rotate-sr-only">{current}</span>
                <AnimatePresence mode="wait">
                    <motion.span key={`${current}-${index}`} className="text-rotate-word" initial={{ opacity: 1 }} animate={{ opacity: 1 }} exit={{ opacity: 1 }}>
                        <span className="text-rotate-lines">
                            {lines.map((line, li) => (
                                <motion.span key={li} className="text-rotate-element" style={{ display: 'flex', gap: '0' }}>
                                    {chars[li].map((ch, ci) => (
                                        <motion.span
                                            key={`${li}-${ci}-${ch}-${index}`}
                                            className="text-rotate-element"
                                            initial={initial}
                                            animate={animate}
                                            exit={exit}
                                            transition={{ ...transition, delay: getStaggerDelay(ci, li) }}
                                            style={{ display: 'inline-block' }}
                                        >
                                            {ch}
                                        </motion.span>
                                    ))}
                                </motion.span>
                            ))}
                        </span>
                    </motion.span>
                </AnimatePresence>
            </span>
        );
    }
);

RotatingText.displayName = 'RotatingText';

export default RotatingText;
