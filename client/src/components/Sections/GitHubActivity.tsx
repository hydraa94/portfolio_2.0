import { useEffect, useState } from "react";
import { Container } from "../Layout/Container";
import { SectionTitle } from "../UI/SectionTitle";

export const GitHubActivity = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Fungsi untuk update state ketika class dark berubah
    const updateTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    updateTheme(); // cek pertama kali

    // Pantau perubahan class dark (biar realtime saat toggle)
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="github"
      className="py-20 bg-gray-50 dark:bg-slate-900 flex flex-col items-center justify-center"
    >
      <Container>
        <SectionTitle className="dark:text-white">
          GitHub Activities
        </SectionTitle>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
          <img
            src={`https://github-readme-stats.vercel.app/api?username=hydraa94&show_icons=true&theme=${
              isDark ? "dark" : "default"
            }`}
            className="mx-2"
            alt="GitHub Stats"
          />
          <img
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=hydraa94&hide=shaderlab,scss,hlsl&langs_count=10&layout=compact&theme=${
              isDark ? "dark" : "default"
            }`}
            className="mx-2 w-[350px]"
            alt="Top Languages"
          />
        </div>
      </Container>
    </section>
  );
};
