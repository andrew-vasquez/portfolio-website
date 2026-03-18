"use client";

import { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { easing, transitions, viewportConfig } from "@/lib/animations";

interface MotionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function Reveal({ children, className, delay = 0 }: MotionProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={
        shouldReduceMotion
          ? { opacity: 0 }
          : { opacity: 0, y: 16 }
      }
      whileInView={
        shouldReduceMotion
          ? { opacity: 1 }
          : { opacity: 1, y: 0 }
      }
      viewport={viewportConfig}
      transition={{
        ...transitions.medium,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({ children, className, delay = 0 }: MotionProps) {
  void delay;

  return <div className={className}>{children}</div>;
}

interface WordRevealProps {
  lines: string[];
  className?: string;
  delay?: number;
}

export function WordReveal({
  lines,
  className,
  delay = 0,
}: WordRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={className}>
      {lines.map((line, lineIndex) => (
        <span key={`${line}-${lineIndex}`} className="block overflow-hidden pb-1">
          {line.split(" ").map((word, wordIndex) => (
            <motion.span
              key={`${word}-${wordIndex}`}
              className="mr-[0.22em] inline-block"
              initial={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: 14 }
              }
              animate={
                shouldReduceMotion
                  ? { opacity: 1 }
                  : { opacity: 1, y: 0 }
              }
              transition={{
                type: shouldReduceMotion ? "tween" : "spring",
                duration: shouldReduceMotion ? 0.25 : 0.72,
                bounce: shouldReduceMotion ? 0 : 0.18,
                ease: shouldReduceMotion ? easing.smooth : undefined,
                delay: delay + lineIndex * 0.08 + wordIndex * 0.045,
              }}
            >
              {word}
            </motion.span>
          ))}
        </span>
      ))}
    </div>
  );
}
