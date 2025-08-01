import { Container } from "../Layout/Container";
import { SectionTitle } from "../UI/SectionTitle";
import { Avatar } from "../UI/Avatar";

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-slate-900">
      <Container className="max-w-7xl mx-auto p-14 mb-[100px] rounded-2xl bg-white dark:bg-gray-800 shadow-xl dark:shadow-slate-800 ">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-shrink-0">
            <Avatar
              src="/src/assets/profile.png"
              alt="Muhammad Nailul Autor"
              size="xl"
              className="w-48 h-48 border-slate-700"
            />
          </div>
          <div className="flex-1">
            <SectionTitle className="text-black dark:text-gray-100 text-left mb-6 text-2xl">
              About Me
            </SectionTitle>
            <p className="text-black dark:text-gray-100 text-xl leading-relaxed">
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
