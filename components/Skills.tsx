"use client";

import { motion, useReducedMotion } from "motion/react";
import Icons from "./Icons";
import {
  transitions,
  easing,
  viewportConfig,
} from "@/lib/animations";

const skillsData = {
  frontEnd: [
    { name: "HTML", image: "/icons/html.svg" },
    { name: "CSS", image: "/icons/css.svg" },
    { name: "JavaScript", image: "/icons/javascript.svg" },
    { name: "TypeScript", image: "/icons/typescript.svg" },
    { name: "React", image: "/icons/react.svg" },
    { name: "Tailwind", image: "/icons/tailwind.svg" },
    { name: "Next.js", image: "/icons/nextjs.svg" },
  ],
  backEnd: [
    { name: "Node.js", image: "/icons/nodejs.svg" },
    { name: "Python", image: "/icons/python.svg" },
    { name: "PostgreSQL", image: "/icons/postgresql.svg" },
    { name: "Prisma", image: "/icons/prisma.svg" },
  ],
  tools: [
    { name: "Git", image: "/icons/git.svg" },
    { name: "GitHub", image: "/icons/github.svg" },
    { name: "VSCode", image: "/icons/vscode.svg" },
  ],
};

const cardHoverEnabled = {
  borderColor: "rgba(255, 255, 255, 0.1)",
  backgroundColor: "#161619",
  transition: { duration: 0.2, ease: easing.smooth },
};

const SkillGroup = ({
  title,
  skills,
  shouldReduceMotion,
}: {
  title: string;
  skills: { name: string; image: string }[];
  shouldReduceMotion: boolean;
}) => (
  <motion.div
    className="border border-white/[0.06] rounded-lg p-4 sm:p-5 mt-4 bg-[#111116]"
    initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={viewportConfig}
    transition={transitions.medium}
    whileHover={shouldReduceMotion ? {} : cardHoverEnabled}
  >
    <h3 className="text-lg sm:text-xl font-medium pb-4 sm:pb-5">
      {title}
    </h3>
    <div className="flex flex-wrap gap-3 sm:gap-5">
      {skills.map((skill) => (
        <Icons key={skill.name} name={skill.name} image={skill.image} />
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  const shouldReduceMotion = useReducedMotion() ?? false;

  return (
    <motion.section
      className="my-12 sm:my-20 below-fold-section"
      style={{ "--section-intrinsic-height": "var(--section-intrinsic-height-skills)" } as React.CSSProperties}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={viewportConfig}
      transition={transitions.medium}
    >
      <motion.h2
        className="text-xl sm:text-2xl font-bold pb-1 text-balance"
        initial={{ opacity: 0, x: -15 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={viewportConfig}
        transition={transitions.spring}
      >
        Skills
      </motion.h2>
      <motion.hr
        className="mb-4 border-white/10"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={viewportConfig}
        transition={transitions.medium}
        style={{ transformOrigin: "left" }}
      />
      <SkillGroup title="Front-End" skills={skillsData.frontEnd} shouldReduceMotion={shouldReduceMotion} />
      <SkillGroup title="Back-End" skills={skillsData.backEnd} shouldReduceMotion={shouldReduceMotion} />
      <SkillGroup title="Tools" skills={skillsData.tools} shouldReduceMotion={shouldReduceMotion} />
    </motion.section>
  );
};

export default Skills;
