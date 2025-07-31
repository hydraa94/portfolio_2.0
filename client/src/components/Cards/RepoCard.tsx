import type { Repository } from "../../data/repos"
import { Button } from "../UI/Button"

interface RepoCardProps {
  repo: Repository
}

export const RepoCard = ({ repo }: RepoCardProps) => {
  const languageColors: Record<string, string> = {
    "C#": "bg-purple-500",
    JavaScript: "bg-yellow-500",
    HTML: "bg-orange-500",
    Python: "bg-blue-500",
    CSS: "bg-blue-400",
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 h-full flex flex-col">
      <div className="flex-1">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors">{repo.name}</h3>
          <div className="text-xl">📁</div>
        </div>

        <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
          {repo.description || "No description available."}
        </p>

        <div className="flex items-center justify-between text-sm mb-4">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <span className={`w-3 h-3 rounded-full ${languageColors[repo.language] || "bg-gray-400"}`}></span>
              <span className="text-gray-600">{repo.language}</span>
            </span>
            <span className="flex items-center gap-1 text-gray-500">
              <span>⭐</span>
              <span>{repo.stars}</span>
            </span>
            <span className="flex items-center gap-1 text-gray-500">
              <span>🍴</span>
              <span>{repo.forks}</span>
            </span>
          </div>
        </div>
      </div>

      <Button
        size="sm"
        variant="outline"
        className="w-full hover:bg-blue-50 hover:border-blue-300 transition-colors bg-transparent"
      >
        View on GitHub
      </Button>
    </div>
  )
}
