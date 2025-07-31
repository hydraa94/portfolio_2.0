


export interface TechSkill {
  name: string;
  icon: string;
  category: "frontend" | "backend" | "gamedev" | "tools";
  proficiency: "beginner" | "intermediate" | "advanced";
}

export const techStack: TechSkill[] = [
  // Game Development
  {
    name: "Unity",
    icon: "🎮",
    category: "gamedev",
    proficiency: "intermediate",
  },
  { name: "C#", icon: "💻", category: "gamedev", proficiency: "intermediate" },
  {
    name: "Game Design",
    icon: "🎯",
    category: "gamedev",
    proficiency: "intermediate",
  },
  {
    name: "2D Graphics",
    icon: "🖼️",
    category: "gamedev",
    proficiency: "beginner",
  },

  // Frontend
  {
    name: "HTML5",
    icon: "🌐",
    category: "frontend",
    proficiency: "intermediate",
  },
  { name: "CSS3", icon: "🎨", category: "frontend", proficiency: "beginner" },
  {
    name: "JavaScript",
    icon: "⚡",
    category: "frontend",
    proficiency: "intermediate",
  },
  { name: "React", icon: "⚛️", category: "frontend", proficiency: "beginner" },
  {
    name: "Tailwind CSS",
    icon: "🌊",
    category: "frontend",
    proficiency: "beginner",
  },

  // Backend & Database
  { name: "Python", icon: "🐍", category: "backend", proficiency: "beginner" },
  { name: "Node.js", icon: "🟢", category: "backend", proficiency: "beginner" },
  {
    name: "API Development",
    icon: "🔌",
    category: "backend",
    proficiency: "beginner",
  },

  // Tools
  { name: "Git", icon: "📝", category: "tools", proficiency: "intermediate" },
  {
    name: "GitHub",
    icon: "🐙",
    category: "tools",
    proficiency: "intermediate",
  },
  { name: "VS Code", icon: "💙", category: "tools", proficiency: "advanced" },
  {
    name: "Command Line",
    icon: "⌨️",
    category: "tools",
    proficiency: "intermediate",
  },
  { name: "Figma", icon: "🎨", category: "tools", proficiency: "beginner" },
];

export const techCategories = {
  gamedev: "Game Development",
  frontend: "Frontend Development",
  backend: "Backend Development",
  tools: "Development Tools",
};
