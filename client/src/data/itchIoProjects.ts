import axios from "axios";

const getItchIoProjects = async () => {
  const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/itchio`);
  return data;
};

const projectsData = await getItchIoProjects();

export interface Project {
  platform: string;
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  pageUrl?: string;
}

export const projects: Project[] = projectsData.games.map((game) => {
  return {
    platform: projectsData.platform,
    id: game.id,
    title: game.title,
    date: game.published,
    description: game.short_text,
    pageUrl: game.url,
  };
});

// export const projects: Project[] = [
//   {
//     id: "flying-things",
//     title: "Flying Things",
//     description: "Get high score by clicking and clicking!",
//     image: "/public/placeholder.png?height=200&width=300",
//     technologies: ["Unity", "C#", "Game Development"],
//     liveUrl: "#",
//     githubUrl: "#",
//   },
//   {
//     id: "proto-shooter",
//     title: "Proto Shooter",
//     description: "My first top-down shooter game.",
//     image: "/public/placeholder.png?height=200&width=300",
//     technologies: ["Unity", "C#", "2D Graphics"],
//     liveUrl: "#",
//     githubUrl: "#",
//   },
//   {
//     id: "flappy-box",
//     title: "Flappy Box",
//     description: "Inspired by Flappy Bird, but with my own lazy assets.",
//     image: "/public/placeholder.png?height=200&width=300",
//     technologies: ["Unity", "C#", "Mobile Game"],
//     liveUrl: "#",
//     githubUrl: "#",
//   },
// ];
