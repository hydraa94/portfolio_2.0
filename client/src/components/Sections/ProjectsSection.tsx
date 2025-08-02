import { Container } from "../Layout/Container";
import { SectionTitle } from "../UI/SectionTitle";
import { ProjectCard } from "../Cards/ProjectCard";
import { projects } from "../../data/projects";

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-slate-900">
      <Container>
        <SectionTitle className="dark:text-white">Projects</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
};
