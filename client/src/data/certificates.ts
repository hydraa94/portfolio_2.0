export interface Certificate {
  id: string
  title: string
  issuer: string
  date: string
  description: string
  pdfUrl?: string
  credentialUrl?: string
  image?: string
}

export const certificates: Certificate[] = [
  {
    id: "unity-junior-programmer",
    title: "Unity Junior Programmer Pathway",
    issuer: "Unity Technologies",
    date: "2024",
    description:
      "Completed Unity's comprehensive junior programmer pathway covering C# fundamentals, Unity basics, and game development principles.",
    // pdfUrl will be added later when user provides Google Drive links
  },
  {
    id: "web-development-basics",
    title: "Web Development Fundamentals",
    issuer: "Online Course Platform",
    date: "2024",
    description:
      "Comprehensive course covering HTML5, CSS3, JavaScript fundamentals and responsive web design principles.",
  },
  // Add more certificates as needed
]
