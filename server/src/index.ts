import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";

const app = new Elysia()
  .use(cors())
  .get("/api/hello", () => {
    return { message: "Hello World Backend!" };
  })
  .listen(3000);

console.log(`Server is running on http://localhost:3000/`);
