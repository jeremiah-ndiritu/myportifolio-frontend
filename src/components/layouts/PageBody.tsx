import type { ReactNode } from "react";

interface PageBodyProps {
  children: ReactNode;
  className?:string
}

export default function PageBody({ children, className='' }: PageBodyProps) {
  return (
    <div
      className={`w-full max-w-7xl mx-auto px-4 py-6 md:py-10 flex-1 ${className}`}
    >
      {children}
    </div>
  );
}
