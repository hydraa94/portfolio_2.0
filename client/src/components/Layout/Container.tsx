import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export const Container = ({ children, className = "" }: ContainerProps) => {
  return (
    <div
      className={`max-w-8xl mx-auto px-[16px] sm:px-[28px] lg:px-[100px] ${className}`}
    >
      {children}
    </div>
  );
};
