import { Container } from "./Container";

export const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <Container>
        <nav className="flex items-center justify-between py-4">
          <div className="text-xl font-bold text-gray-800">
            {"<Nailul Autor/>"}
          </div>
          <div className="hidden md:flex space-x-5">
            <a
              href="#home"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              About
            </a>
            <a
              href="#tech-stack"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Projects
            </a>
            <a
              href="#certificates"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Certificates
            </a>
            <a
              href="#github"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              GitHub
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Contact
            </a>
          </div>
        </nav>
      </Container>
    </header>
  );
};
