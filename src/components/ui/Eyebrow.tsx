import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Small-caps section label led by a quarter-arc tick taken from the logomark. */
export function Eyebrow({ children, className, light = false }: { children: ReactNode; className?: string; light?: boolean }) {
  return (
    <p className={cn("label flex items-center gap-3", light ? "text-white/80" : "text-purple/80", className)}>
      <svg viewBox="0 0 12 12" className="size-3 shrink-0 text-orange" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
        <path d="M1.1 1.1h9.8v9.8H1.1z" />
        <path d="M6 10.9A4.9 4.9 0 0 1 10.9 6" />
      </svg>
      {children}
    </p>
  );
}
