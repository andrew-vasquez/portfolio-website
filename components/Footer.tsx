"use client";

import { motion } from "motion/react";

// Static year to avoid hydration mismatch
const CURRENT_YEAR = 2026;

const Footer = () => {
  return (
    <>
      <motion.hr
        className="mb-4 border-white/10"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={{ transformOrigin: "center" }}
      />
      <motion.div
        className="text-center p-4 pb-8"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
      >
        <motion.p
          className="text-zinc-400 text-sm"
          whileHover={{
            scale: 1.02,
            color: "#ffffff",
            transition: { duration: 0.15 },
          }}
        >
          &copy; {CURRENT_YEAR} Andrew Vasquez
        </motion.p>
        <p className="text-zinc-600 text-xs mt-1.5 font-sans">
          Built with Next.js &amp; Tailwind CSS
        </p>
      </motion.div>
    </>
  );
};

export default Footer;
