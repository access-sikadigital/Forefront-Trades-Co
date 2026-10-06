import { cn } from "@/lib/utils";

/**
 * Stroke rebuild of the logomark (outer square, top-left cell, quarter arc)
 * on a 100-unit grid so each part can be drawn with DrawSVG.
 * Use the official filled SVG (public/brand/logo) for static placements.
 */
export function Logomark({ className, strokeWidth = 8.4, title }: { className?: string; strokeWidth?: number; title?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="butt"
      className={cn("block", className)}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      <path data-mark="frame" d="M4.2 4.2 H95.8 V95.8 H4.2 Z" />
      <path data-mark="cell" d="M50 4.2 V50 H4.2" />
      <path data-mark="arc" d="M50 95.8 A45.8 45.8 0 0 1 95.8 50" />
    </svg>
  );
}
