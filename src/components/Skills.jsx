import { motion, useReducedMotion } from "motion/react";
import { useMemo } from "react";
import Icons from "./Icons.jsx"
import { variants, transitions, staggerContainer, viewportConfig } from "../utils/animations.js";
import htmlLogo from "../assets/icons/html.svg"
import cssLogo from "../assets/icons/css.svg"
import jsLogo from "../assets/icons/javascript.svg"
import reactLogo from "../assets/icons/react.svg"
import tailwindLogo from "../assets/icons/tailwind.svg"
import github from "../assets/icons/github.svg"
import git from "../assets/icons/git.svg"  
import vscode from "../assets/icons/vscode.svg"
import node from "../assets/icons/nodejs.svg"
import python from "../assets/icons/python.svg"
import typescript from "../assets/icons/typescript.svg"

const Skills = () => {
  const shouldReduceMotion = useReducedMotion();

  // Memoize skill data to prevent unnecessary re-renders
  const skillsData = useMemo(() => ({
    frontEnd: [
      { name: "HTML", image: htmlLogo },
      { name: "CSS", image: cssLogo },
      { name: "JavaScript", image: jsLogo },
      { name: "TypeScript", image: typescript },
      { name: "React", image: reactLogo },
      { name: "Tailwind", image: tailwindLogo }
    ],
    backEnd: [
      { name: "Node.js", image: node },
      { name: "Python", image: python }
    ],
    tools: [
      { name: "Git", image: git },
      { name: "Github", image: github },
      { name: "VSCode", image: vscode }
    ]
  }), []);

  const sectionVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { ...transitions.medium, staggerChildren: 0.1 }
    }
  };

  const SkillGroup = ({ title, skills, delay = 0 }) => (
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
            transition={{ ...transitions.spring, delay: delay + 0.1 + index * 0.05 }}
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
        className="text-xl sm:text-2xl font-semibold mb-1"
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

      <SkillGroup title="Front-End" skills={skillsData.frontEnd} delay={0.1} />
      <SkillGroup title="Back-End" skills={skillsData.backEnd} delay={0.2} />
      <SkillGroup title="Tools" skills={skillsData.tools} delay={0.3} />
    </motion.section>
  );
};

export default Skills;
