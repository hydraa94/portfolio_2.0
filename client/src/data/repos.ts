export interface Repository {
  id: string
  name: string
  description: string
  language: string
  stars: number
  forks: number
  url: string
}

export const repositories: Repository[] = [
  {
    id: "flying-things",
    name: "Flying-Things",
    description: "My game project based on unity junior programming pathway course.",
    language: "C#",
    stars: 0,
    forks: 0,
    url: "https://github.com/nailul-autor/flying-things",
  },
  {
    id: "fortuna",
    name: "Fortuna",
    description:
      "Fortuna AI is an interactive chatbot built with React, utilizing the power of the Nvidia API to generate AI-driven responses.",
    language: "JavaScript",
    stars: 0,
    forks: 0,
    url: "https://github.com/nailul-autor/fortuna",
  },
  {
    id: "hollow-project",
    name: "Hollow-Project",
    description: "The new Repository for a new Visual Novel Game called Hollow Project",
    language: "C#",
    stars: 0,
    forks: 0,
    url: "https://github.com/nailul-autor/hollow-project",
  },
  {
    id: "hydraa94",
    name: "hydraa94",
    description: "No description available.",
    language: "HTML",
    stars: 0,
    forks: 0,
    url: "https://github.com/nailul-autor/hydraa94",
  },
  {
    id: "portfolio",
    name: "hydraa94.github.io",
    description: "Portfolio Page",
    language: "HTML",
    stars: 0,
    forks: 0,
    url: "https://github.com/nailul-autor/hydraa94.github.io",
  },
  {
    id: "learning-journey",
    name: "learning-journey",
    description: "No description available.",
    language: "Python",
    stars: 0,
    forks: 0,
    url: "https://github.com/nailul-autor/learning-journey",
  },
]

// Add better organization and styling data
export const githubStats = {
  totalStars: 0,
  totalCommits: 47,
  totalPRs: 2,
  totalIssues: 0,
  contributedRepos: 1,
  mostUsedLanguage: "C#",
}
