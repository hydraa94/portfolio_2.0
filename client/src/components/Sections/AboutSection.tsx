import { Container } from "../Layout/Container";
import { SectionTitle } from "../UI/SectionTitle";
import { Avatar } from "../UI/Avatar";

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gray-50 dark:bg-slate-900 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <Container className="w-full max-w-7xl mx-auto p-6 sm:p-10 md:p-14 mb-16 md:mb-[100px] rounded-2xl bg-white border-gray-400 dark:bg-gray-800 shadow-xl dark:shadow-slate-800 border-[2px] dark:border-gray-600">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          <div className="flex-shrink-0">
            <Avatar
              src={"/profile.png"}
              alt="Muhammad Nailul Autor"
              size="xl"
              className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 border-slate-700"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <SectionTitle className="text-black dark:text-gray-100 mb-4 sm:mb-6 text-xl sm:text-2xl">
              About Me
            </SectionTitle>
            <p className="text-black dark:text-gray-100 text-base sm:text-lg md:text-xl leading-relaxed">
              I am a 11th-grade student at SMK Negeri 1 Surabaya with a passion
              for programming. I enjoy exploring new knowledge, discovering
              fresh ideas, and learning valuable lessons. Known for being
              friendly and reliable, I value building trust and meaningful
              connections. I also take pride in my ability to focus and complete
              tasks efficiently, often in a single sitting, depending on their
              complexity.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
