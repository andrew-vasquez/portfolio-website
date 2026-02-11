"use client";

import { motion, useReducedMotion } from "motion/react";
import { memo } from "react";
import { variants, transitions, viewportConfig, easing } from "@/lib/animations";

const sectionVariantsDefault = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { ...transitions.medium, staggerChildren: 0.1 },
  },
};

const sectionVariantsReduced = {
  initial: { opacity: 0, y: 0 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { ...transitions.medium, staggerChildren: 0.1 },
  },
};

const cardHoverEnabled = {
  borderColor: "rgba(255, 255, 255, 0.1)",
  backgroundColor: "#161619",
  transition: { duration: 0.2, ease: easing.smooth },
};

const About = memo(() => {
  const shouldReduceMotion = useReducedMotion();
  const sectionVariants = shouldReduceMotion ? sectionVariantsReduced : sectionVariantsDefault;
  const cardHover = shouldReduceMotion ? {} : cardHoverEnabled;

  return (
    <motion.section
      className="my-12 sm:my-20"
      variants={sectionVariants}
      initial="initial"
      whileInView="animate"
      viewport={viewportConfig}
    >
      <motion.h2
        className="text-xl sm:text-2xl font-bold pb-1 text-balance"
        variants={variants.slideLeft}
        transition={transitions.spring}
      >
        About Me
      </motion.h2>
      <motion.hr
        className="mb-4 border-white/10"
        variants={variants.scaleX}
        transition={transitions.medium}
        style={{ transformOrigin: "left" }}
      />

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4"
        variants={variants.fadeIn}
        transition={transitions.medium}
      >
        {/* Intro — full width */}
        <motion.div
          className="sm:col-span-3 border border-white/[0.06] rounded-lg p-4 sm:p-5 bg-[#111116]"
          variants={shouldReduceMotion ? variants.fadeIn : variants.slideUp}
          whileHover={cardHover}
        >
          <p className="text-base sm:text-lg leading-7 sm:leading-8 text-pretty text-zinc-400">
            Software engineering student at{" "}
            <strong className="font-medium text-zinc-100">WGU</strong> who
            builds full-stack web apps. I enjoy solving real-world problems with
            modern tools and am always looking to learn something new.
          </p>
        </motion.div>

        {/* Education */}
        <motion.div
          className="border border-white/[0.06] rounded-lg p-4 bg-[#111116]"
          variants={shouldReduceMotion ? variants.fadeIn : variants.slideUp}
          whileHover={cardHover}
        >
          <p className="text-zinc-500 text-[10px] sm:text-xs uppercase tracking-widest font-sans mb-1.5">
            Education
          </p>
          <p className="text-zinc-200 text-sm sm:text-base leading-snug">
            B.S. Software Engineering
          </p>
          <p className="text-zinc-500 text-xs sm:text-sm mt-0.5">
            Western Governors University
          </p>
        </motion.div>

        {/* Stack */}
        <motion.div
          className="border border-white/[0.06] rounded-lg p-4 bg-[#111116]"
          variants={shouldReduceMotion ? variants.fadeIn : variants.slideUp}
          whileHover={cardHover}
        >
          <p className="text-zinc-500 text-[10px] sm:text-xs uppercase tracking-widest font-sans mb-1.5">
            Stack
          </p>
          <p className="text-zinc-200 text-sm sm:text-base leading-snug">
            React &middot; TypeScript &middot; Next.js
          </p>
          <p className="text-zinc-500 text-xs sm:text-sm mt-0.5">
            Node.js &middot; PostgreSQL &middot; Tailwind
          </p>
        </motion.div>

        {/* Status */}
        <motion.div
          className="border border-white/[0.06] rounded-lg p-4 bg-[#111116]"
          variants={shouldReduceMotion ? variants.fadeIn : variants.slideUp}
          whileHover={cardHover}
        >
          <p className="text-zinc-500 text-[10px] sm:text-xs uppercase tracking-widest font-sans mb-1.5">
            Status
          </p>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400/75 animate-ping motion-reduce:animate-none" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <p className="text-zinc-200 text-sm sm:text-base leading-snug">
              Open to opportunities
            </p>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
});

About.displayName = "About";

export default About;
