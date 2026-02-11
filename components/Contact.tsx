"use client";

import { motion, useReducedMotion } from "motion/react";
import { memo } from "react";
import { Mail } from "lucide-react";
import Image from "next/image";
import { variants, transitions, viewportConfig, easing } from "@/lib/animations";

const Contact = memo(() => {
  const shouldReduceMotion = useReducedMotion();

  const sectionVariants = {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { ...transitions.medium, staggerChildren: 0.1 },
    },
  };

  const linkHover = shouldReduceMotion
    ? {}
    : { y: -2, transition: { duration: 0.2, ease: easing.smooth } };

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
        Get In Touch
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
        I&apos;m always interested in hearing about new projects and
        opportunities. Whether you want to collaborate on something or just say
        hello, feel free to reach out.
      </motion.p>
      <motion.div
        className="flex flex-wrap gap-3 mt-6"
        variants={variants.slideUp}
        transition={{ ...transitions.medium, delay: 0.1 }}
      >
        <motion.a
          href="mailto:avasdev98@gmail.com"
          className="inline-flex items-center gap-2.5 px-5 py-2.5 border border-zinc-600 rounded-lg text-sm font-sans text-zinc-300 hover:text-white hover:border-zinc-400 transition-colors focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#202023]"
          whileHover={linkHover}
          style={{ willChange: "transform" }}
        >
          <Mail className="w-4 h-4" aria-hidden="true" />
          Email
        </motion.a>
        <motion.a
          href="https://github.com/andrew-vasquez"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-5 py-2.5 border border-zinc-600 rounded-lg text-sm font-sans text-zinc-300 hover:text-white hover:border-zinc-400 transition-colors focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#202023]"
          whileHover={linkHover}
          style={{ willChange: "transform" }}
        >
          <Image
            src="/icons/github.svg"
            alt=""
            width={16}
            height={16}
            aria-hidden="true"
          />
          GitHub
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/andrew-vasquez-000434237/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-5 py-2.5 border border-zinc-600 rounded-lg text-sm font-sans text-zinc-300 hover:text-white hover:border-zinc-400 transition-colors focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#202023]"
          whileHover={linkHover}
          style={{ willChange: "transform" }}
        >
          <Image
            src="/icons/linkedin.svg"
            alt=""
            width={16}
            height={16}
            aria-hidden="true"
          />
          LinkedIn
        </motion.a>
      </motion.div>
    </motion.section>
  );
});

Contact.displayName = "Contact";

export default Contact;
