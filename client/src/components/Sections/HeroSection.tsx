import { Container } from "../Layout/Container";
import { Button } from "../UI/Button";
import DecryptedText from "../UI/DecryptedText";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="bg-gradient-to-b from-violet-100 via-white to-white dark:from-indigo-950 dark:via-slate-800 dark:to-slate-900 my-full min-h-screen flex items-center"
    >
      <Container>
        <div className="text-center">
          <h1 className="text-3xl md:text-6xl font-bold text-black dark:text-white mb-4">
            Hello, I'm{" "}
            <DecryptedText
              text="Muhammad Nailul Autor"
              speed={90}
              sequential={true}
              animateOn="view"
              revealDirection="start"
              useOriginalCharsOnly={false}
            />
          </h1>
          <p className="text-lg md:text-2xl text-black dark:text-white mb-8 max-w-6xl mx-auto">
            A passionate learner, skilled programmer, network engineer, reliable
            problem-solver, and tech enthuasiast. <br /> I'm ready to embrace
            new challenges and opportunities.
          </p>
          <Button size="lg" href="#projects">
            View My Work
          </Button>
        </div>
      </Container>
    </section>
  );
};
