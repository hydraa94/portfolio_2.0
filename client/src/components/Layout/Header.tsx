import { Container } from "./Container";
import DecryptedText from "../UI/DecryptedText";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-violet-50/80 dark:bg-gray-900/80 backdrop-blur shadow-3xl">
      <Container>
        <nav className="flex items-center justify-between py-4">
          {/* Brand / Logo */}
          <div className="text-xl font-bold">
            {"<"}{" "}
            <DecryptedText
              text="Nailul Autor"
              speed={100}
              sequential={true}
              animateOn="view"
              revealDirection="start"
              useOriginalCharsOnly={false}
            />{" "}
            {"/>"}
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
