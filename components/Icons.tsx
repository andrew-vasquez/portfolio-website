"use client";

import { motion, useReducedMotion } from "motion/react";
import { memo } from "react";
import Image from "next/image";
import { easing } from "@/lib/animations";

interface IconsProps {
  name: string;
  image: string;
}

const Icons = memo(({ name, image }: IconsProps) => {
  const shouldReduceMotion = useReducedMotion();

  const hoverVariants = shouldReduceMotion
    ? {}
    : {
        scale: 1.08,
        borderColor: "#71717a",
        backgroundColor: "#18181b",
        transition: { duration: 0.2, ease: easing.smooth },
      };

  return (
    <div className="flex flex-col justify-center items-center">
      <motion.div
        className="inline-flex flex-col justify-center items-center p-2 border rounded-md border-white/[0.06] bg-[#18181b] focus-visible:ring-2 focus-visible:ring-zinc-400"
        whileHover={hoverVariants}
        whileTap={{ scale: 0.95 }}
        role="img"
        aria-label={name}
      >
        <Image
          className="w-9 h-9"
          src={image}
          alt=""
          width={36}
          height={36}
          aria-hidden="true"
        />
      </motion.div>
      <span className="text-zinc-400 text-sm mt-1 font-sans" aria-hidden="true">
        {name}
      </span>
    </div>
  );
});

Icons.displayName = "Icons";

export default Icons;
