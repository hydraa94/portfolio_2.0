import type { Certificate } from "../../data/certificates";

interface CertificateCardProps {
  certificate: Certificate;
}

export const CertificateCard = ({ certificate }: CertificateCardProps) => {
  return (
    <div className="relative group rounded-lg shadow-md overflow-hidden">
      <div className="relative z-10 bg-white dark:bg-gray-800 p-6 transition-transform duration-500 ease-in-out group-hover:translate-y-full h-full">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
              {certificate.title}
            </h3>
            <p className="text-blue-600 font-medium text-sm">
              {certificate.issuer}
            </p>
          </div>
          <h2 className="text-sm text-gray-500 dark:text-gray-300">
            {certificate.date}
          </h2>
        </div>

        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
          {certificate.description}
        </p>
      </div>

      {certificate.image && (
        <img
          src={certificate.image}
          alt={certificate.title}
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
      )}
    </div>
  );
};
