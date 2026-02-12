// Performance-optimized animation configurations

// Custom easing curves for better feel - typed as tuples for Motion
export const easing = {
  smooth: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
  bounce: [0.68, -0.55, 0.265, 1.55] as [number, number, number, number],
};

// Optimized viewport settings
export const viewportConfig = {
  once: true,
  margin: "-20px",
  amount: 0.1,
};

// Performance-optimized transition presets
export const transitions = {
  medium: { duration: 0.4, ease: easing.smooth },
  spring: { type: "spring" as const, stiffness: 300, damping: 30 },
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
