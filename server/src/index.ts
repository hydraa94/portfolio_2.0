import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import { config } from "dotenv";
import axios from "axios";

config();

const apiKey = process.env.ITCH_API_KEY;

const getGames = async () => {
  const { data } = await axios.get(`https://itch.io/api/1/${apiKey}/my-games`);
  const fixedData: Array<String> = data.games.map((game: any) => ({
    id: String(game.id),
    image: game.cover_url,
    title: game.title,
    description: game.short_text,
    date: game.published_at,
    url: game.url,
    platform: "Itch.io",
  }));
  return fixedData;
};

const getGithubRepos = async () => {
  const { data } = await axios.get(`https://api.github.com/user/repos`, {
    headers: {
      Authentication: `token ${process.env.GITHUB_TOKEN}`,
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });

  const fixedData: Array<String> = data.map((repo: any) => ({
    id: String(repo.id),
    title: repo.title,
    description: repo.description,
    url: repo.svn_url,
    date: repo.created_at,
    platform: "GitHub",
  }));

  return fixedData;
};

const app = new Elysia()
  .use(cors())
  .get("/projects", async () => {
    const gameDatas = await getGames();
    // const githubDatas = await getGithubRepos();

    return [...gameDatas];
  })
  .get("/", { message: "Use /projects to get data!" })
  .listen(3000);

console.log(`Server is running on http://localhost:3000/`);
