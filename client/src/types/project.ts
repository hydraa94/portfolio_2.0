export interface Project {
  id: string;
  image?: string;
  title: string;
  description: string;
  url: string;
  date: string;
  platform: string;
}

export const placeholderProjects: Project[] = [
  {
    id: "1",
    image: "https://picsum.photos/400/250?random=1",
    title: "Portfolio Website",
    description:
      "A modern personal portfolio showcasing my projects and skills.",
    url: "https://example.com/portfolio",
    date: "2025-01-15",
    platform: "Web",
  },
  {
    id: "2",
    image: "https://picsum.photos/400/250?random=2",
    title: "Todo App",
    description: "A simple todo list app with CRUD functionality.",
    url: "https://example.com/todo",
    date: "2025-02-02",
    platform: "Mobile",
  },
  {
    id: "3",
    image: "https://picsum.photos/400/250?random=3",
    title: "E-commerce Dashboard",
    description:
      "Admin dashboard for managing products, orders, and customers.",
    url: "https://example.com/dashboard",
    date: "2025-03-10",
    platform: "Web",
  },
  {
    id: "4",
    image: "https://picsum.photos/400/250?random=4",
    title: "Chat Application",
    description: "A real-time chat app built with WebSocket support.",
    url: "https://example.com/chat",
    date: "2025-04-01",
    platform: "Desktop",
  },
  {
    id: "5",
    image: "https://picsum.photos/400/250?random=5",
    title: "Blog Platform",
    description:
      "A content management system for writing and publishing blogs.",
    url: "https://example.com/blog",
    date: "2025-04-20",
    platform: "Web",
  },
  {
    id: "6",
    image: "https://picsum.photos/400/250?random=6",
    title: "Fitness Tracker",
    description: "A mobile app to track workouts, calories, and goals.",
    url: "https://example.com/fitness",
    date: "2025-05-12",
    platform: "Mobile",
  },
  {
    id: "7",
    image: "https://picsum.photos/400/250?random=7",
    title: "Weather App",
    description: "A weather forecasting app with location-based data.",
    url: "https://example.com/weather",
    date: "2025-06-08",
    platform: "Web",
  },
  {
    id: "8",
    image: "https://picsum.photos/400/250?random=8",
    title: "Game Leaderboard",
    description: "A leaderboard system for multiplayer games.",
    url: "https://example.com/leaderboard",
    date: "2025-07-04",
    platform: "Game",
  },
  {
    id: "9",
    image: "https://picsum.photos/400/250?random=9",
    title: "Music Streaming App",
    description: "A streaming platform with playlists, albums, and favorites.",
    url: "https://example.com/music",
    date: "2025-07-25",
    platform: "Mobile",
  },
];
