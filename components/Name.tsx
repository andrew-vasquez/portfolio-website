"use client";

import { motion } from "motion/react";

const Name = () => {
  const name = "Andrew Vasquez";
  const title = "Full-Stack Developer";

  const letterVariants = {
    hidden: { opacity: 0, y: 5 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center mt-12 sm:mt-20 mb-12 sm:mb-16"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
    >
      <motion.h1
        className="text-2xl sm:text-4xl font-bold block text-center text-balance"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        {name.split("").map((letter, index) => (
          <motion.span
            key={index}
            variants={letterVariants}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.2,
              delay: 0.25 + index * 0.03,
              ease: "easeOut",
            }}
            className={letter === " " ? "inline-block w-2" : "inline-block"}
            whileHover={{
              scale: 1.1,
              color: "#ffffff",
              transition: { duration: 0.15 },
            }}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.h1>
      <motion.p
        className="text-lg sm:text-2xl text-center text-zinc-400 text-pretty"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.6, ease: "easeOut" }}
      >
        {title}
      </motion.p>
      <motion.div
        className="flex items-center gap-2 mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.85, ease: "easeOut" }}
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400/75 animate-ping motion-reduce:animate-none" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
        <span className="text-xs sm:text-sm text-zinc-500 font-sans tracking-wider uppercase">
          Open to opportunities
        </span>
      </motion.div>
    </motion.div>
  );
};

export default Name;
