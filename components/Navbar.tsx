"use client";

import { motion } from "motion/react";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

// Create a stable cache to prevent re-preloading in StrictMode
const imageCache = new Map();

// Preload images with caching to handle React StrictMode
const preloadImage = (src: string) => {
  if (imageCache.has(src)) {
    return imageCache.get(src);
  }

  const promise = new Promise((resolve, reject) => {
    const img = new window.Image();
    img.onload = resolve;
    img.onerror = reject;
    img.src = src;
  });

  imageCache.set(src, promise);
  return promise;
};

const Navbar = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const hasInitialized = useRef(false);

  useEffect(() => {
    // Prevent double initialization in React StrictMode
    if (hasInitialized.current) return;
    hasInitialized.current = true;

    // Preload all images with caching
    Promise.all([
      preloadImage("/icons/github.svg"),
      preloadImage("/icons/linkedin.svg"),
      preloadImage("/signature-white.png"),
    ])
      .then(() => {
        // Small delay to ensure smooth animation
        setTimeout(() => setImagesLoaded(true), 50);
      })
      .catch(console.error);
  }, []);

  return (
    <nav className="navbar-container w-full flex justify-between items-center">
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={imagesLoaded ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.3, delay: 0.05, ease: "easeOut" }}
        whileHover={{ scale: 1.02, transition: { duration: 0.15 } }}
      >
        <Image
          className="w-32 sm:w-52 pr-2 sm:pr-5"
          src="/signature-white.png"
          alt="Cursive writing with initials A & V"
          width={208}
          height={80}
          priority
        />
      </motion.div>

      <div className="flex gap-1 sm:gap-2 items-center">
        <a target="_blank" href="mailto:andrewvasquez314@gmail.com"></a>
        <motion.a
          className="w-10 sm:w-12 hover:bg-zinc-900 hover:border-zinc-500 p-1.5 sm:p-2 rounded-md border border-transparent"
          target="_blank"
          href="https://github.com/andrew-vasquez"
          initial={{ opacity: 0, y: -5 }}
          animate={imagesLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
        >
          <Image
            src="/icons/github.svg"
            alt="Github Logo"
            width={32}
            height={32}
            className="navbar-icon w-full h-auto block"
          />
        </motion.a>
        <motion.a
          className="w-10 sm:w-12 hover:bg-zinc-900 hover:border-zinc-500 p-1.5 sm:p-2 rounded-md border border-transparent"
          target="_blank"
          href="https://www.linkedin.com/in/andrew-vasquez-000434237/"
          initial={{ opacity: 0, y: -5 }}
          animate={imagesLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3, delay: 0.15, ease: "easeOut" }}
        >
          <Image
            src="/icons/linkedin.svg"
            alt="White Linkedin Logo"
            width={32}
            height={32}
            className="navbar-icon w-full h-auto block"
          />
        </motion.a>
      </div>
    </nav>
  );
};

export default Navbar;
