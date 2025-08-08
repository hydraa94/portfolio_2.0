import { Container } from "../Layout/Container";
import { SectionTitle } from "../UI/SectionTitle";

export const GitHubActivity = () => {
  return (
    <section
      id="github"
      className="py-20 bg-gray-50 dark:bg-slate-900 flex flex-col items-center justify-center"
    >
      <Container>
        <SectionTitle className="dark:text-white">
          GitHub Activities
        </SectionTitle>

        {/* GitHub Stats Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
          <img
            src="https://github-readme-stats-neon-three-47.vercel.app/api?username=hydraa94&show_icons=true&theme=transparent"
            className="mx-2"
            alt="GitHub Stats"
          />
          <img
            src="https://github-readme-stats-neon-three-47.vercel.app/api/top-langs/?username=hydraa94&hide=shaderlab,scss,hlsl&langs_count=10&layout=compact&theme=transparent"
            className="mx-2 w-[350px]"
            alt="Top Languages"
          />
        </div>
      </Container>
    </section>
  );
};
