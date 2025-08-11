import { motion } from "motion/react";
import { memo } from "react";
import ProjectCard from './ProjectCard';
import { projectData } from '../data/projectData';
import { variants, transitions, staggerContainer, viewportConfig } from "../utils/animations.js";

const Projects = memo(() => {
  const sectionVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { ...transitions.medium, staggerChildren: 0.08 }
    }
  };

  return (
    <motion.section 
      className="my-20"
      variants={sectionVariants}
      initial="initial"
      whileInView="animate"
      viewport={viewportConfig}
      style={{ willChange: "opacity" }}
    >
      <motion.h2 
        className="text-2xl font-bold pb-1"
        variants={variants.slideLeft}
        transition={transitions.spring}
      >
        Projects
      </motion.h2>
      <motion.hr 
        className="mb-4 border-zinc-600"
        variants={variants.scaleX}
        transition={transitions.medium}
        style={{ transformOrigin: "left", willChange: "transform" }}
      />
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={viewportConfig}
      >
        {projectData.map((project, index) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            image={project.image}
            icons={project.icons}
            iconName={project.iconName}
            link={project.link}
          />
        ))}
      </motion.div>
    </motion.section>
  );
});

Projects.displayName = 'Projects';

export default Projects;
