import { Container } from "./Container";
import DecryptedText from "../UI/DecryptedText";
import { useEffect } from "react";

export const Header = () => {
  // Smooth scroll logic with offset for sticky header
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');
    const offset = 80; // Adjust this if your header height changes

    const handleClick = (e: Event) => {
      e.preventDefault();
      const target = (e.currentTarget as HTMLAnchorElement).getAttribute(
        "href"
      );
      if (target && target !== "#") {
        const element = document.querySelector(target);
        if (element) {
          const elementPosition =
            element.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - offset;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
      }
    };

    links.forEach((link) => link.addEventListener("click", handleClick));

    return () => {
      links.forEach((link) => link.removeEventListener("click", handleClick));
    };
  }, []);

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
