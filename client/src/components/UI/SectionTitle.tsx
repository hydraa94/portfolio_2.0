import type { ReactNode } from "react"

interface SectionTitleProps {
  children: ReactNode
  className?: string
}

export const SectionTitle = ({ children, className = "" }: SectionTitleProps) => {
  return <h2 className={`text-3xl font-bold text-gray-800 mb-8 text-center ${className}`}>{children}</h2>
}
