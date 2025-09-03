import { Container } from "../Layout/Container";
import { SectionTitle } from "../UI/SectionTitle";
import { ProjectCard } from "../Cards/ProjectCard";
import { type Project, placeholderProjects } from "../../types/project";
import axios from "axios";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const ProjectsSection = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    axios
      .get<Project[]>(import.meta.env.VITE_API_URL + "/projects")
      .then((res) => setProjects(res.data))
      .catch((err) => console.error(err));
  });

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section
      id="projects"
      className="py-20 bg-gray-50 dark:bg-slate-900 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <Container className="w-full max-w-7xl mx-auto">
        <SectionTitle className="dark:text-white text-2xl sm:text-3xl mb-8">
          Projects
        </SectionTitle>
        <Slider {...settings} className="px-2 sm:px-6">
          {projects
            ? projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  className="mx-2 sm:mx-4"
                />
              ))
            : placeholderProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  className="mx-2 sm:mx-4"
                />
              ))}
        </Slider>
      </Container>
    </section>
  );
};
