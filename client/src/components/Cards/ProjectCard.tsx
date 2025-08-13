import { type Project } from "../../types/project";
import { Button } from "../UI/Button";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export const ProjectCard = ({ project, className }: ProjectCardProps) => {
  const hasImage = !!project.image;

  const truncateDescription = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return `${text.substring(0, maxLength)}...`;
    }
    return text;
  };

  return (
    <div
      className={`bg-white dark:bg-slate-700 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col ${className}`}
    >
      {hasImage ? (
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover"
        />
      ) : (
        <div className="w-full h-48 flex items-center justify-center bg-gray-200 dark:bg-slate-600 text-gray-500 dark:text-gray-400 font-semibold text-center p-4">
          No Image Available
        </div>
      )}

      <div className="p-6 flex flex-col flex-1">
        <h3
          className={`font-semibold text-gray-800 dark:text-gray-50 mb-2 ${
            hasImage ? "text-xl" : "text-xl"
          }`}
        >
          {project.title}
        </h3>

        <p
          className={`text-gray-600 dark:text-gray-100 mb-4 flex-grow ${
            hasImage ? "text-base" : "text-base"
          }`}
        >
          {project.description
            ? truncateDescription(project.description, 150)
            : ""}
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
