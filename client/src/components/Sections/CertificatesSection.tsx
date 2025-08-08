import { Container } from "../Layout/Container";
import { SectionTitle } from "../UI/SectionTitle";
import { CertificateCard } from "../Cards/CertificateCard";
import { certificates } from "../../data/certificates";

export const CertificatesSection = () => {
  return (
    <section
      id="certificates"
      className="py-20 bg-gray-50 dark:bg-slate-900 flex flex-col items-center justify-center"
    >
      <Container className="">
        <SectionTitle className="text-white">
          Certificates & Achievements
        </SectionTitle>
        <p className="text-center text-gray-600 dark:text-white mb-12 max-w-2xl mx-auto">
          Professional certifications and learning achievements that showcase my
          commitment to continuous growth
        </p>

        <div className={`grid grid-cols-2 md:grid-cols-4 gap-2`}>
          {certificates.map((certificate) => (
            <CertificateCard key={certificate.id} certificate={certificate} />
          ))}
        </div>
      </Container>
    </section>
  );
};
