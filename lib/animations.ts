// Performance-optimized animation configurations

// Custom easing curves for better feel - typed as tuples for Motion
export const easing = {
  spring: [0.34, 1.56, 0.64, 1] as [number, number, number, number],
  smooth: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
  bounce: [0.68, -0.55, 0.265, 1.55] as [number, number, number, number],
  sharp: [0.4, 0, 0.2, 1] as [number, number, number, number],
  gentle: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
};

// Optimized viewport settings
export const viewportConfig = {
  once: true,
  margin: "-20px",
  amount: 0.1,
};

// Performance-optimized transition presets
export const transitions = {
  fast: { duration: 0.25, ease: easing.smooth },
  medium: { duration: 0.4, ease: easing.smooth },
  slow: { duration: 0.6, ease: easing.gentle },
  spring: { type: "spring" as const, stiffness: 300, damping: 30 },
  bounce: { type: "spring" as const, stiffness: 400, damping: 10 },
};

// Animation variants for consistent behavior
export const variants = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },
  slideUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  },
  slideDown: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
  },
  slideLeft: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
  },
  slideRight: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
  },
  scale: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
  },
  scaleX: {
    initial: { scaleX: 0 },
    animate: { scaleX: 1 },
  },
};

// Container animation for staggered children
export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};
