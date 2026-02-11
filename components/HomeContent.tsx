"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import dynamic from "next/dynamic";
import About from "@/components/About";
import Navbar from "@/components/Navbar";
import Name from "@/components/Name";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import { variants, transitions, staggerContainer } from "@/lib/animations";

const PixelSnow = dynamic(() => import("@/components/PixelSnow"), {
  ssr: false,
});

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    setIsMobile(mql.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
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
          pixelResolution={isMobile ? 200 : 800}
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
      >
        <motion.header
          variants={variants.slideDown}
          transition={transitions.spring}
        >
          <Navbar />
          <Name />
        </motion.header>

        <motion.main
          id="main-content"
          variants={variants.fadeIn}
          transition={transitions.medium}
        >
          <About />
          <Projects />
          <Skills />
          <Contact />
        </motion.main>

        <motion.footer
          variants={variants.slideUp}
          transition={transitions.spring}
        >
          <Footer />
        </motion.footer>
      </motion.div>
    </>
  );
}
