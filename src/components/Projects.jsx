import ProjectCard from './ProjectCard';
import { projectData } from '../data/projectData';
const Projects = () => {
  const projects = projectData;
  return (
    <section className="my-20">
      <h2 className="text-2xl font-bold pb-1">Projects</h2>
      <hr className="mb-4 border-zinc-600" />
      {projects.map((project) => (
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

      
    </section>
  );
};

export default Projects;
