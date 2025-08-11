import { motion, useReducedMotion } from "motion/react";
import { memo } from "react";
import { easing } from "../utils/animations.js";

const Icons = memo(({ name, image }) => {
  const shouldReduceMotion = useReducedMotion();

  const hoverVariants = shouldReduceMotion ? {} : {
    scale: 1.08, 
    borderColor: "#71717a",
    backgroundColor: "#18181b",
    transition: { duration: 0.2, ease: easing.smooth }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <motion.div 
        className="inline-flex flex-col justify-center items-center p-2 border rounded-md border-zinc-500 bg-zinc-900"
        whileHover={hoverVariants}
        whileTap={{ scale: 0.95 }}
        style={{ willChange: "transform, border-color, background-color" }}
      >
        <img 
          className="w-9 h-9" 
          src={image} 
          alt={name}
          loading="lazy"
          decoding="async"
        />
      </motion.div>
      <span className="text-zinc-400 text-sm mt-1 font-sans">
        {name}
      </span>
    </div>
  );
});

Icons.displayName = 'Icons';

export default Icons;