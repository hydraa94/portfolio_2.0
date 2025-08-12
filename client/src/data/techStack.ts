import { Icons } from "@data/icons";

const {
  css3Icon,
  gitIcon,
  githubIcon,
  html5Icon,
  javascriptIcon,
  nodejsIcon,
  reactIcon,
  tailwindcssIcon,
  terminalIcon,
  vscodeIcon,
  firebaseIcon,
  mysqlIcon,
  mongoIcon,
  nextjsIcon,
  monitorIcon,
  toolsIcon,
  databaseIcon,
  gameSolidIcon,
} = Icons;

export interface TechSkill {
  name: string;
  icon: Icons;
  category: "frontend" | "backend" | "tools";
  proficiency: "beginner" | "intermediate" | "advanced";
}

export const techStack: TechSkill[] = [
  // Frontend
  {
    name: "HTML5",
    icon: html5Icon,
    category: "frontend",
    proficiency: "intermediate",
  },
  {
    name: "CSS3",
    icon: css3Icon,
    category: "frontend",
    proficiency: "beginner",
  },
  {
    name: "JavaScript",
    icon: javascriptIcon,
    category: "frontend",
    proficiency: "intermediate",
  },
  {
    name: "React",
    icon: reactIcon,
    category: "frontend",
    proficiency: "beginner",
  },
  {
    name: "Tailwind CSS",
    icon: tailwindcssIcon,
    category: "frontend",
    proficiency: "beginner",
  },

  // Backend & Database
  {
    name: "Javascript",
    icon: javascriptIcon,
    category: "backend",
    proficiency: "intermediate",
  },
  {
    name: "Node.js",
    icon: nodejsIcon,
    category: "backend",
    proficiency: "intermediate",
  },
  {
    name: "NextJS",
    icon: nextjsIcon,
    category: "backend",
    proficiency: "intermediate",
  },
  {
    name: "Firebase DB",
    icon: firebaseIcon,
    category: "backend",
    proficiency: "beginner",
  },
  {
    name: "MySQL",
    icon: mysqlIcon,
    category: "backend",
    proficiency: "beginner",
  },
  {
    name: "Mongo DB",
    icon: mongoIcon,
    category: "backend",
    proficiency: "beginner",
  },

  // Tools
  {
    name: "Git",
    icon: gitIcon,
    category: "tools",
    proficiency: "intermediate",
  },
  {
    name: "GitHub",
    icon: githubIcon,
    category: "tools",
    proficiency: "intermediate",
  },
  {
    name: "VS Code",
    icon: vscodeIcon,
    category: "tools",
    proficiency: "advanced",
  },
  {
    name: "Terminal",
    icon: terminalIcon,
    category: "tools",
    proficiency: "intermediate",
  },
];

export const techCategories = {
  gamedev: "Game Development",
  frontend: "Frontend Development",
  backend: "Backend Development",
  tools: "Development Tools",
};

export const techCategoryIcons = {
  gamedev: gameSolidIcon,
  frontend: monitorIcon,
  backend: databaseIcon,
  tools: toolsIcon,
};
