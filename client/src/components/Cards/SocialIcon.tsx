import type { ReactNode } from "react"

interface SocialIconProps {
  href: string
  icon: ReactNode
  label: string
}

export const SocialIcon = ({ href, icon, label }: SocialIconProps) => {
  return (
    <a
      href={href}
      className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
      <span>{label}</span>
    </a>
  )
}
