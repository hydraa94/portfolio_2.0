import type { Project } from "../../data/projects"
import { Button } from "../UI/Button"

interface ProjectCardProps {
  project: Project
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span key={tech} className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          {project.liveUrl && (
            <Button size="sm" variant="primary">
              View Live
            </Button>
          )}
          {project.githubUrl && (
            <Button size="sm" variant="outline">
              GitHub
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
