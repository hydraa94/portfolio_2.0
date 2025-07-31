import { Container } from "../Layout/Container"
import { SectionTitle } from "../UI/SectionTitle"
import { CertificateCard } from "../Cards/CertificateCard"
import { certificates } from "../../data/certificates"

export const CertificatesSection = () => {
  return (
    <section id="certificates" className="py-20 bg-gray-50">
      <Container>
        <SectionTitle>Certificates & Achievements</SectionTitle>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Professional certifications and learning achievements that showcase my commitment to continuous growth
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((certificate) => (
            <CertificateCard key={certificate.id} certificate={certificate} />
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">📄 Certificate PDFs will be available soon via Google Drive links</p>
        </div>
      </Container>
    </section>
  )
}
