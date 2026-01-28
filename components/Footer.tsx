"use client";

import { motion } from "motion/react";

// Static year to avoid hydration mismatch
const CURRENT_YEAR = 2026;

const Footer = () => {
  return (
    <>
      <motion.hr
        className="mb-4 border-zinc-600"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={{ transformOrigin: "center" }}
      />
      <motion.div
        className="text-center p-4"
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
          © {CURRENT_YEAR} Andrew Vasquez
        </motion.p>
      </motion.div>
    </>
  );
};

export default Footer;
