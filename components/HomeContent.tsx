"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import About from "@/components/About";
import Navbar from "@/components/Navbar";
import Name from "@/components/Name";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import PixelSnow from "@/components/PixelSnow";
import { variants, transitions, staggerContainer } from "@/lib/animations";

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < breakpoint);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [breakpoint]);

  return isMobile;
}

export default function HomeContent() {
  const isMobile = useIsMobile();

  return (
    <>
      <motion.div
        className="fixed inset-0 z-0"
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
      >
        <PixelSnow
          color="#ffffff"
          variant="square"
          pixelResolution={isMobile ? 200 : 450}
          speed={1.25}
          density={0.3}
          flakeSize={0.01}
          brightness={1}
          depthFade={8}
          farPlane={20}
          direction={125}
        />
      </motion.div>
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
          <Contact />
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
