import type { ReactNode } from "react";
import { useInView } from "../hooks/useInView";
import type { CSSVars } from "../types";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const { ref, seen } = useInView<HTMLDivElement>();
  const style: CSSVars = { "--reveal-delay": `${delay}ms` };

  return (
    <div
      ref={ref}
      className={`reveal ${seen ? "is-in" : ""} ${className}`.trim()}
      style={style}
    >
      {children}
    </div>
  );
}
