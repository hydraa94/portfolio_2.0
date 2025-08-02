import type { Certificate } from "../../data/certificates"
import { Button } from "../UI/Button"

interface CertificateCardProps {
  certificate: Certificate
}

export const CertificateCard = ({ certificate }: CertificateCardProps) => {
  return (
    <div className="bg-white dark: rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-100">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-800 mb-1">{certificate.title}</h3>
          <p className="text-blue-600 font-medium text-sm">{certificate.issuer}</p>
          <p className="text-gray-500 text-sm">{certificate.date}</p>
        </div>
        <div className="text-3xl">🏆</div>
      </div>

      <p className="text-gray-600 text-sm mb-4 leading-relaxed">{certificate.description}</p>

      <div className="flex gap-2">
        {certificate.pdfUrl && (
          <Button size="sm" variant="primary">
            View Certificate
          </Button>
        )}
        {certificate.credentialUrl && (
          <Button size="sm" variant="outline">
            Verify
          </Button>
        )}
        {!certificate.pdfUrl && !certificate.credentialUrl && (
          <Button size="sm" variant="outline" disabled>
            Coming Soon
          </Button>
        )}
      </div>
    </div>
  )
}
