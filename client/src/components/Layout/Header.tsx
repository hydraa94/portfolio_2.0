import { Container } from "./Container";
import ScrambleText from "../UI/ScrambleText";

export const Header = () => {
  return (
    <header className="sticky top-0 z-10 bg-violet-50 border-b border-violet-100 dark:bg-blue-900/50 dark:border-blue-800 backdrop-blur backdrop-saturate-150 shadow-lg">
      <Container>
        <nav className="flex items-center justify-between py-4">
          {/* Brand / Logo */}
          <div className="text-xl font-bold">
            <ScrambleText
              texts={["Nailul Autor", "Hydraa"]}
              scrambleSpeed={100}
              holdDuration={2000}
              className="text-blue-900 dark:text-white"
            />
          </div>

          {/* Navigation */}
          <div className="hidden md:flex space-x-5">
            {[
              { href: "#home", label: "Home" },
              { href: "#about", label: "About" },
              { href: "#tech-stack", label: "Skills" },
              { href: "#projects", label: "Projects" },
              { href: "#certificates", label: "Certificates" },
              { href: "#github", label: "GitHub" },
              { href: "#contact", label: "Contact" },
            ].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-blue-900 dark:text-white transition-colors hover:text-blue-700 dark:hover:text-blue-300"
              >
                {label}
              </a>
            ))}
          </div>
        </nav>
      </Container>
    </header>
  );
};
