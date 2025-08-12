import { Container } from "../Layout/Container";
import { SectionTitle } from "../UI/SectionTitle";
import { SocialIcon } from "../Cards/SocialIcon";
import { Icons } from "@/data/icons";

export const ContactSection = () => {
  const { instagramIcon, githubIcon, linkedInIcon, itchIoIcon } = Icons;

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-slate-900">
      <Container>
        <SectionTitle className="dark:text-white">Let's Connect!</SectionTitle>
        <p className="text-center text-gray-600 dark:text-white mb-8 max-w-2xl mx-auto">
          Follow me on my social media accounts to stay updated with my projects
          and activities.
        </p>
        <div className="flex justify-center gap-8 flex-wrap text-3xl">
          <SocialIcon
            href="https://github.com/nailul-autor"
            icon={githubIcon.icon}
            color={githubIcon.color}
          />
          <SocialIcon
            href="https://instagram.com/nailul-autor"
            icon={instagramIcon.icon}
            color={instagramIcon.color}
          />
          <SocialIcon
            href="https://itch.io/nailul-autor"
            icon={itchIoIcon.icon}
            color={itchIoIcon.color}
          />
          <SocialIcon
            href="https://www.linkedin.com/in/m-nailul-autor"
            icon={linkedInIcon.icon}
            color={linkedInIcon.color}
          />
        </div>
      </Container>
    </section>
  );
};
