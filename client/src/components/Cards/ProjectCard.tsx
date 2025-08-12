import { type Project } from "../../types/project";
import { Button } from "../UI/Button";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="bg-white dark:bg-slate-700 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow min-h-20 flex flex-col">
      <img
        src={project.image || "/placeholder.svg"}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-50 mb-2">
          {project.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-100 mb-4 flex-grow">
          {project.description}
        </p>

        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded">
              {project.platform}
            </span>
          </div>
          <div className="flex flex-col gap-2">
            {project.url && (
              <Button
                size="sm"
                variant="primary"
                target="_blank"
                href={project.url}
              >
                View Page
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
