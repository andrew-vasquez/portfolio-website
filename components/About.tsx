"use client";

import { motion, useReducedMotion } from "motion/react";
import { memo } from "react";
import { variants, transitions, viewportConfig } from "@/lib/animations";

const About = memo(() => {
  const shouldReduceMotion = useReducedMotion();

  const sectionVariants = {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { ...transitions.medium, staggerChildren: 0.1 },
    },
  };

  return (
    <motion.section
      className="my-12 sm:my-20"
      variants={sectionVariants}
      initial="initial"
      whileInView="animate"
      viewport={viewportConfig}
      style={{ willChange: "opacity, transform" }}
    >
      <motion.h2
        className="text-xl sm:text-2xl font-bold pb-1 text-balance"
        variants={variants.slideLeft}
        transition={transitions.spring}
      >
        About Me
      </motion.h2>
      <motion.hr
        className="mb-4 border-zinc-600"
        variants={variants.scaleX}
        transition={transitions.medium}
        style={{ transformOrigin: "left", willChange: "transform" }}
      />
      <motion.p
        className="text-base sm:text-lg leading-7 sm:leading-8 mt-4 text-pretty text-zinc-400"
        variants={shouldReduceMotion ? variants.fadeIn : variants.slideUp}
        transition={transitions.medium}
        style={{ willChange: "opacity, transform" }}
      >
        Currently a student at{" "}
        <motion.strong
          className="font-medium text-zinc-100"
          whileHover={
            shouldReduceMotion
              ? {}
              : { color: "#ffffff", transition: { duration: 0.15 } }
          }
        >
          Western Governors University
        </motion.strong>{" "}
        pursuing a degree in{" "}
        <motion.strong
          className="font-medium text-zinc-100"
          whileHover={
            shouldReduceMotion
              ? {}
              : { color: "#ffffff", transition: { duration: 0.15 } }
          }
        >
          Software Engineering
        </motion.strong>
        . I have a passion for learning and building applications that solve
        real-world problems. I enjoy working with modern web technologies and am
        always looking to expand my skill set.
      </motion.p>
    </motion.section>
  );
});

About.displayName = "About";

export default About;
