import { Container } from "../Layout/Container";
import { SectionTitle } from "../UI/SectionTitle";
import { ProjectCard } from "../Cards/ProjectCard";
import { type Project } from "../../types/project";
import axios from "axios";
import { useState, useEffect } from "react";

export const ProjectsSection = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    axios
      .get<Project[]>(import.meta.env.VITE_API_URL + "/projects")
      .then((res) => setProjects(res.data))
      .catch((err) => console.error(err));
  });

  return (
    <section
      id="projects"
      className="py-20 bg-gray-50 dark:bg-slate-900 min-h-screen flex flex-col items-center justify-center"
    >
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
