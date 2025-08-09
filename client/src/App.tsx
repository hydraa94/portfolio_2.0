import { Header } from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";
import { HeroSection } from "@/components/Sections/HeroSection";
import { AboutSection } from "@/components/Sections/AboutSection";
import { TechStackSection } from "@/components/Sections/TechStackSection";
import { ProjectsSection } from "@/components/Sections/ProjectsSection";
import { GitHubActivity } from "@/components/Sections/GitHubActivity";
import { ContactSection } from "@/components/Sections/ContactSection";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 select-none scroll-smooth">
      <Header />
      <HeroSection />
      <main>
        <AboutSection />
        <TechStackSection />
        <ProjectsSection />
        <GitHubActivity />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
