import { useState } from "react";
import type { IconType } from "react-icons";

interface SocialIconProps {
  href: string;
  icon: IconType;
  color: string;
}

export const SocialIcon = ({ href, icon, color }: SocialIconProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const IconComponent = icon;
  return (
    <a
      href={href}
      className={`flex items-center gap-2 text-gray-600 dark:text-gray-100 transition-all bg-gray-100 dark:bg-slate-500 p-3 rounded-4xl hover:scale-110`}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <IconComponent
        style={{
          color: isHovered ? color : undefined,
        }}
      />
    </a>
  );
};
