import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import { config } from "dotenv";
import axios from "axios";
import { Octokit } from "octokit";

config();

const itchApiKey = process.env.ITCH_API_KEY;
const githubToken = process.env.GITHUB_TOKEN;

const octokit = new Octokit({ auth: githubToken });

const getGames = async () => {
  const { data } = await axios.get(
    `https://itch.io/api/1/${itchApiKey}/my-games`
  );
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
  const { data } = await octokit.request(`GET /user/repos`, {
    Headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });

  const fixedData: Array<String> = data.map((repo: any) => ({
    id: String(repo.id),
    title: repo.name,
    description: repo.description,
    url: repo.svn_url,
    date: repo.created_at,
    platform: "GitHub",
  }));

  return fixedData;
};

const app = new Elysia()
  .use(cors())
  .get("/projects", async ({ set }) => {
    set.headers["Cache-Control"] = "s-maxage=60, stale-while-revalidate=86400";
    const gameDatas = await getGames();
    const githubDatas = await getGithubRepos();
    return [...gameDatas, ...githubDatas];
  })
  .get("/", { message: "Use /projects to get data!" })
  .listen(3000);

console.log(`Server is running on http://localhost:3000/`);
