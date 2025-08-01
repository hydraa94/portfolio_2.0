import { Container } from "../Layout/Container";
import { Button } from "../UI/Button";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="bg-gradient-to-b from-violet-100 via-white to-white dark:from-indigo-950 dark:via-slate-800 dark:to-slate-900 my-full min-h-screen flex items-center"
    >
      <Container>
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-black dark:text-white mb-4">
            Hello, I'm Muhammad Nailul Autor
          </h1>
          <p className="text-xl text-black dark:text-white mb-8 max-w-5xl mx-auto">
            A passionate learner, skilled programmer, network engineer, reliable
            problem-solver, and tech enthuasiast. <br /> I'm ready to embrace
            new challenges and opportunities.
          </p>
          <Button size="lg">View My Work</Button>
        </div>
      </Container>
    </section>
  );
};
