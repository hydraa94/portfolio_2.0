import { useState } from "react";
import { IconContext, type IconType } from "react-icons";
import { useTheme } from "@/hooks/useTheme";
import { icons } from "@/data/icons";

type ThemeMode = "light" | "dark" | "system";
type Orientation = "up" | "down" | "left" | "right";
type Corner = "bottom-left" | "bottom-right";

type ThemeSwitcherProps = {
  className?: string;
  icon?: IconType;
  orientation?: Orientation;
  corner?: Corner;
  fixed?: boolean;
};

export const ThemeSwitcher = ({
  className = "",
  icon,
  orientation = "up",
  corner = "bottom-right",
  fixed = false,
}: ThemeSwitcherProps) => {
  const { mode, setMode } = useTheme();
  const [open, setOpen] = useState(false);

  const iconMap: Record<ThemeMode, IconType> = {
    light: icons.lightIcon,
    dark: icons.darkIcon,
    system: icons.systemIcon,
  };

  const Icon = icon || iconMap[mode];

  const options: { label: string; value: ThemeMode; icon: IconType }[] = [
    { label: "Light", value: "light", icon: icons.lightIcon },
    { label: "Dark", value: "dark", icon: icons.darkIcon },
    { label: "System", value: "system", icon: icons.systemIcon },
  ];

  const orientationClasses: Record<Orientation, string> = {
    up: "bottom-14 left-1/2 -translate-x-1/2",
    down: "top-14 left-1/2 -translate-x-1/2",
    left: "right-14 top-1/2 -translate-y-1/2",
    right: "left-14 top-1/2 -translate-y-1/2",
  };

  const cornerClasses: Record<Corner, string> = {
    "bottom-left": "left-14 bottom-8",
    "bottom-right": "right-14 bottom-8",
  };

  const iconClass = "w-6 h-6";
  const iconColorClass = "text-gray-700 dark:text-white";

  return (
    <IconContext.Provider
      value={{ className: `${iconClass} ${iconColorClass}` }}
    >
      <div
        className={`${
          fixed ? `fixed ${cornerClasses[corner]}` : "relative"
        } inline-block text-left`}
      >
        {/* Main button */}
        <button
          onClick={() => setOpen(!open)}
          className={`flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-800 transition-colors shadow-md ${className}`}
        >
          <Icon />
        </button>

        {/* Dropdown dengan animasi fade+slide */}
        <div
          className={`
            absolute ${orientationClasses[orientation]} 
            bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2 w-32 border border-gray-200 dark:border-gray-700 mb-2
            transition-all duration-200 ease-out
            ${
              open
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-2 pointer-events-none"
            }
          `}
        >
          {options.map(({ label, value, icon: ItemIcon }) => (
            <button
              key={value}
              onClick={() => {
                setMode(value);
                setOpen(false);
              }}
              className={`flex items-center gap-2 w-full px-3 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${
                mode === value ? "font-bold" : ""
              }`}
            >
              <ItemIcon className="w-4 h-4 text-gray-600 dark:text-gray-300" />
              <span className="dark:text-gray-100">{label}</span>
            </button>
          ))}
        </div>
      </div>
    </IconContext.Provider>
  );
};
