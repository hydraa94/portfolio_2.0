import { Container } from "../Layout/Container"
import { SectionTitle } from "../UI/SectionTitle"
import { SocialIcon } from "../Cards/SocialIcon"

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <Container>
        <SectionTitle>Let's Connect!</SectionTitle>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Follow me on my social media accounts to stay updated with my projects and activities.
        </p>
        <div className="flex justify-center gap-8 flex-wrap">
          <SocialIcon
            href="https://github.com/nailul-autor"
            icon={<span className="text-2xl">📱</span>}
            label="GitHub"
          />
          <SocialIcon
            href="https://instagram.com/nailul-autor"
            icon={<span className="text-2xl">📷</span>}
            label="Instagram"
          />
          <SocialIcon href="https://itch.io/nailul-autor" icon={<span className="text-2xl">🎮</span>} label="Itch.io" />
        </div>
      </Container>
    </section>
  )
}
