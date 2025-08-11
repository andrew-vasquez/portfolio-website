// Performance-optimized animation configurations

// Custom easing curves for better feel
export const easing = {
  spring: [0.34, 1.56, 0.64, 1],
  smooth: [0.25, 0.46, 0.45, 0.94],
  bounce: [0.68, -0.55, 0.265, 1.55],
  sharp: [0.4, 0, 0.2, 1],
  gentle: [0.25, 0.1, 0.25, 1]
};

// Optimized viewport settings
export const viewportConfig = {
  once: true,
  margin: "-20px",
  amount: 0.1
};

// Performance-optimized transition presets
export const transitions = {
  fast: { duration: 0.25, ease: easing.smooth },
  medium: { duration: 0.4, ease: easing.smooth },
  slow: { duration: 0.6, ease: easing.gentle },
  spring: { type: "spring", stiffness: 300, damping: 30 },
  bounce: { type: "spring", stiffness: 400, damping: 10 }
};

// Animation variants for consistent behavior
export const variants = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 }
  },
  slideUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
  },
  slideDown: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 }
  },
  slideLeft: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 }
  },
  slideRight: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 }
  },
  scale: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 }
  },
  scaleX: {
    initial: { scaleX: 0 },
    animate: { scaleX: 1 }
  }
};

// Hover animations with performance optimization
export const hoverAnimations = {
  lift: {
    y: -2,
    transition: { duration: 0.2, ease: easing.smooth }
  },
  scale: {
    scale: 1.02,
    transition: { duration: 0.2, ease: easing.smooth }
  },
  glow: {
    boxShadow: "0 0 20px rgba(255, 255, 255, 0.1)",
    transition: { duration: 0.2, ease: easing.smooth }
  }
};

// Container animation for staggered children
export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1
    }
  }
};

// Performance-optimized layout animations
export const layoutTransition = {
  type: "spring",
  stiffness: 500,
  damping: 30
};
