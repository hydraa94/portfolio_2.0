export interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
}

export const projects: Project[] = [
  {
    id: "flying-things",
    title: "Flying Things",
    description: "Get high score by clicking and clicking!",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["Unity", "C#", "Game Development"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "proto-shooter",
    title: "Proto Shooter",
    description: "My first top-down shooter game.",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["Unity", "C#", "2D Graphics"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "flappy-box",
    title: "Flappy Box",
    description: "Inspired by Flappy Bird, but with my own lazy assets.",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["Unity", "C#", "Mobile Game"],
    liveUrl: "#",
    githubUrl: "#",
  },
]
