import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Small-caps section label led by a plain orange square. (Deliberately not a mini
 * logomark: the guidelines set a 24px minimum size for the mark.)
 */
export function Eyebrow({ children, className, light = false }: { children: ReactNode; className?: string; light?: boolean }) {
  return (
    <p className={cn("label flex items-center gap-3", light ? "text-white/80" : "text-purple/80", className)}>
      <span aria-hidden className="size-2 shrink-0 bg-orange" />
      {children}
    </p>
  );
}
