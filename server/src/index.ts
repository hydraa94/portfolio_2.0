import { Hono } from "hono";
import { prettyJSON } from "hono/pretty-json";
import { config } from "dotenv";
import { Octokit } from "octokit";
import { cors } from "hono/cors";
import axios from "axios";

config();

const githubKey = process.env.GITHUB_TOKEN;
const itchKey = process.env.ITCH_API_KEY;

const octokit = new Octokit({ auth: githubKey });
const app = new Hono();

async function getRepos() {
  const { data } = await octokit.request("GET /user/repos", {
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });

  const refinedData = data.map((repo) => ({
    id: repo.id,
    title: repo.name,
    description: repo.description,
    url: repo.html_url,
    platform: "GitHub",
  }));

  return refinedData;
}

async function getProjects() {
  const { data } = await axios.get(`https://itch.io/api/1/${itchKey}/my-games`);

  const refinedData = data.games.map((game: any) => ({
    id: game.id,
    title: game.title,
    description: game.short_text,
    image: game.cover_url,
    url: game.url,
    platform: "Itch.io",
  }));
  return refinedData;
}

app.use(cors());
app.use(prettyJSON());
app.get("/", (c) => {
  return c.text("/");
});

app.get("/projects", async (c) => {
  const reposData = await getRepos();
  const projectsData = await getProjects();

  return c.json([...reposData, ...projectsData]);
});

export default app;
