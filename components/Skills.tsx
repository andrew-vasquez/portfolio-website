"use client";

import { motion, useReducedMotion } from "motion/react";
import { useMemo } from "react";
import Icons from "./Icons";
import {
  variants,
  transitions,
  staggerContainer,
  viewportConfig,
} from "@/lib/animations";

const Skills = () => {
  const shouldReduceMotion = useReducedMotion();

  // Memoize skill data to prevent unnecessary re-renders
  const skillsData = useMemo(
    () => ({
      frontEnd: [
        { name: "HTML", image: "/icons/html.svg" },
        { name: "CSS", image: "/icons/css.svg" },
        { name: "JavaScript", image: "/icons/javascript.svg" },
        { name: "TypeScript", image: "/icons/typescript.svg" },
        { name: "React", image: "/icons/react.svg" },
        { name: "Tailwind", image: "/icons/tailwind.svg" },
      ],
      backEnd: [
        { name: "Node.js", image: "/icons/nodejs.svg" },
        { name: "Python", image: "/icons/python.svg" },
        { name: "PostgreSQL", image: "/icons/postgresql.svg" },
        { name: "NestJs", image: "/icons/nestjs.svg" },
        { name: "Prisma", image: "/icons/prisma.svg" },
      ],
      tools: [
        { name: "Git", image: "/icons/git.svg" },
        { name: "Github", image: "/icons/github.svg" },
        { name: "VSCode", image: "/icons/vscode.svg" },
      ],
    }),
    []
  );

  const sectionVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { ...transitions.medium, staggerChildren: 0.1 },
    },
  };

  const SkillGroup = ({
    title,
    skills,
    delay = 0,
  }: {
    title: string;
    skills: { name: string; image: string }[];
    delay?: number;
  }) => (
    <>
      <motion.h3
        className="text-lg sm:text-xl font-medium pt-3 pb-4 sm:pb-5"
        variants={variants.slideLeft}
        transition={{ ...transitions.fast, delay }}
      >
        {title}
      </motion.h3>
      <motion.div
        className="flex flex-wrap gap-3 sm:gap-5"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={viewportConfig}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            variants={shouldReduceMotion ? variants.fadeIn : variants.slideUp}
            transition={{
              ...transitions.spring,
              delay: delay + 0.1 + index * 0.05,
            }}
            style={{ willChange: "transform, opacity" }}
          >
            <Icons name={skill.name} image={skill.image} />
          </motion.div>
        ))}
      </motion.div>
    </>
  );

  return (
    <motion.section
      className="my-12 sm:my-20"
      variants={sectionVariants}
      initial="initial"
      whileInView="animate"
      viewport={viewportConfig}
      style={{ willChange: "opacity" }}
    >
      <motion.h2
        className="text-xl sm:text-2xl font-bold pb-1"
        variants={variants.slideLeft}
        transition={transitions.spring}
      >
        Skills
      </motion.h2>
      <motion.hr
        className="mb-4 border-zinc-600"
        variants={variants.scaleX}
        transition={transitions.medium}
        style={{ transformOrigin: "left", willChange: "transform" }}
      />
      <SkillGroup title="Front-End" skills={skillsData.frontEnd} delay={0} />
      <SkillGroup title="Back-End" skills={skillsData.backEnd} delay={0.2} />
      <SkillGroup title="Tools" skills={skillsData.tools} delay={0.4} />
    </motion.section>
  );
};

export default Skills;
