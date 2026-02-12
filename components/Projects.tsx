"use client";

import { motion } from "motion/react";
import { memo } from "react";
import ProjectCard from "./ProjectCard";
import { projectData } from "@/lib/projectData";
import {
  variants,
  transitions,
  staggerContainer,
  viewportConfig,
} from "@/lib/animations";

const sectionVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { ...transitions.medium, staggerChildren: 0.08 },
  },
};

const Projects = memo(() => {
  const [featured, ...rest] = projectData;

  return (
    <motion.section
      className="my-20 below-fold-section"
      style={{ "--section-intrinsic-height": "var(--section-intrinsic-height-projects)" } as React.CSSProperties}
      variants={sectionVariants}
      initial="initial"
      whileInView="animate"
      viewport={viewportConfig}
    >
      <motion.h2
        className="text-2xl font-bold pb-1 text-balance"
        variants={variants.slideLeft}
        transition={transitions.spring}
      >
        Projects
      </motion.h2>
      <motion.hr
        className="mb-4 border-white/10"
        variants={variants.scaleX}
        transition={transitions.medium}
        style={{ transformOrigin: "left" }}
      />

      {/* Featured project — full width */}
      {featured && (
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={viewportConfig}
        >
          <ProjectCard
            key={featured.title}
            number={1}
            title={featured.title}
            description={featured.description}
            image={featured.image}
            icons={featured.icons}
            iconName={featured.iconName}
            link={featured.link}
            featured
          />
        </motion.div>
      )}

      {/* Remaining projects — 2-column grid */}
      {rest.length > 0 && (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={viewportConfig}
        >
          {rest.map((project, index) => (
            <ProjectCard
              key={project.title}
              number={index + 2}
              title={project.title}
              description={project.description}
              image={project.image}
              icons={project.icons}
              iconName={project.iconName}
              link={project.link}
            />
          ))}
        </motion.div>
      )}
    </motion.section>
  );
});

Projects.displayName = "Projects";

export default Projects;
