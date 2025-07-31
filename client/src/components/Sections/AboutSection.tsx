import { Container } from "../Layout/Container";
import { SectionTitle } from "../UI/SectionTitle";
import { Avatar } from "../UI/Avatar";

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <Container className="max-w-7xl mx-auto p-14 rounded-2xl bg-white shadow-xl border-2">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-shrink-0">
            <Avatar
              src="/src/assets/profile.png"
              alt="Muhammad Nailul Autor"
              size="xl"
              className="w-48 h-48 border-2 border-gray-600 shadow-xl"
            />
          </div>
          <div className="flex-1">
            <SectionTitle className="text-left mb-6">About Me</SectionTitle>
            <p className="text-gray-600 text-lg leading-relaxed">
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
