import type {
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
  ReactNode,
} from "react";

type ButtonProps = {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  className?: string;
  href?: string | null;
  target?: string;
} & (
  | ButtonHTMLAttributes<HTMLButtonElement>
  | AnchorHTMLAttributes<HTMLAnchorElement>
);

export const Button = ({
  variant = "primary",
  size = "md",
  children,
  className = "",
  href = null,
  target,
  ...props
}: ButtonProps) => {
  const baseClasses =
    "inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none";

  const variantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary: "bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500",
    outline:
      "border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500",
  };

  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        className={classes}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={classes}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
};
