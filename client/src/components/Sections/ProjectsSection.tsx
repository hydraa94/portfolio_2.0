import { Container } from "../Layout/Container";
import { SectionTitle } from "../UI/SectionTitle";
import { ProjectCard } from "../Cards/ProjectCard";
import { type Project } from "../../types/project";
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
    infinite: true,
    speed: 500,
    slidesToShow: 3, // tampil 3 item sekaligus
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024, // tablet
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 640, // mobile
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
      className="py-20 bg-gray-50 dark:bg-slate-900 min-h-screen items-center justify-center"
    >
      <Container>
        <SectionTitle className="dark:text-white">Projects</SectionTitle>
        <Slider {...settings} className="">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} className="mx-5" />
          ))}
        </Slider>
      </Container>
    </section>
  );
};
