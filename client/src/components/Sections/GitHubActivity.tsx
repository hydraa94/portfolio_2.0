import { Container } from "../Layout/Container";
import { SectionTitle } from "../UI/SectionTitle";

export const GitHubActivity = () => {
  return (
    <section id="github" className="py-20 bg-white">
      <Container>
        <SectionTitle>GitHub Activities</SectionTitle>
        {/* GitHub Stats Section */}
        <div className="flex flec-col justify-center items-center mb-8">
          <img
            src="https://github-readme-stats-neon-three-47.vercel.app/api?username=hydraa94&show_icons=true&theme=transparent"
            className="mx-2"
          />
          <img
            src="https://github-readme-stats-neon-three-47.vercel.app/api/top-langs/?username=hydraa94&hide=shaderlab,scss,hlsl&langs_count=10&layout=compact&theme=transparent"
            className="mx-2 w-[350px]"
          />
        </div>
      </Container>
    </section>
  );
};
