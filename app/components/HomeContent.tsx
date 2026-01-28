"use client";

import { motion } from "motion/react";
import About from "@/components/About";
import Navbar from "@/components/Navbar";
import Name from "@/components/Name";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";
import { variants, transitions, staggerContainer } from "@/lib/animations";

export default function HomeContent() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <motion.div
        className="relative z-10 w-full max-w-2xl mx-auto py-8 px-4 sm:py-16 sm:px-8 selection:bg-gray-600 selection:text-white"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        style={{ willChange: "transform, opacity" }}
      >
        <motion.header
          variants={variants.slideDown}
          transition={transitions.spring}
          style={{ willChange: "transform, opacity" }}
        >
          <Navbar />
          <Name />
        </motion.header>

        <motion.main
          id="main-content"
          variants={variants.fadeIn}
          transition={transitions.medium}
          style={{ willChange: "opacity" }}
        >
        <About />
        <Projects />
        <Skills />
      </motion.main>

        <motion.footer
          variants={variants.slideUp}
          transition={transitions.spring}
          style={{ willChange: "transform, opacity" }}
        >
          <Footer />
        </motion.footer>
      </motion.div>
    </>
  );
}
