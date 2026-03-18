export const easing = {
  smooth: [0.22, 0.61, 0.36, 1] as [number, number, number, number],
  bounce: [0.2, 0.8, 0.2, 1] as [number, number, number, number],
};

export const viewportConfig = {
  once: true,
  margin: "-80px",
  amount: 0.2,
};

export const transitions = {
  micro: { duration: 0.22, ease: easing.smooth },
  medium: { duration: 0.5, ease: easing.smooth },
  hero: { type: "spring" as const, stiffness: 140, damping: 24, mass: 0.9 },
  spring: { type: "spring" as const, stiffness: 170, damping: 24 },
};

export const variants = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },
  blurUp: {
    initial: { opacity: 0, y: 18, filter: "blur(10px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  },
  slideUp: {
    initial: { opacity: 0, y: 18, filter: "blur(8px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  },
  slideDown: {
    initial: { opacity: 0, y: -18, filter: "blur(8px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  },
  slideLeft: {
    initial: { opacity: 0, x: -18, filter: "blur(8px)" },
    animate: { opacity: 1, x: 0, filter: "blur(0px)" },
  },
  scaleX: {
    initial: { scaleX: 0, opacity: 0.5 },
    animate: { scaleX: 1, opacity: 1 },
  },
};

export const staggerContainer = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
};
