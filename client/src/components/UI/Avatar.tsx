interface AvatarProps {
  src: string
  alt: string
  size?: "sm" | "md" | "lg" | "xl"
  className?: string
}

export const Avatar = ({ src, alt, size = "md", className = "" }: AvatarProps) => {
  const sizeClasses = {
    sm: "w-12 h-12",
    md: "w-16 h-16",
    lg: "w-24 h-24",
    xl: "w-32 h-32",
  }

  return (
    <img
      src={src || "/placeholder.svg"}
      alt={alt}
      className={`rounded-full object-cover ${sizeClasses[size]} ${className}`}
    />
  )
}
