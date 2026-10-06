import { cn } from "@/lib/utils";

export type BrandIcon =
  | "apartment" | "architecture" | "arrow_upward_alt" | "article" | "attach_money" | "bathroom" | "chair"
  | "check" | "close_small" | "deck" | "enterprise" | "favorite" | "gavel" | "group" | "handshake" | "handyman"
  | "home" | "key_vertical" | "license" | "location_on" | "manufacturing" | "map" | "other_houses" | "percent"
  | "person" | "potted_plant" | "real_estate_agent" | "square_foot" | "storefront" | "thermometer_loss"
  | "timer" | "zoom_out_map";

/**
 * Brand icon set (Brand Guidelines §06), rendered as a CSS mask so it takes
 * the current text colour. Files live in public/brand/icons.
 */
export function Icon({ name, className }: { name: BrandIcon; className?: string }) {
  // The supplied pack is missing "timer"; fall back to a drawn stopwatch.
  if (name === "timer") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={cn("size-6", className)} aria-hidden>
        <circle cx="12" cy="13.5" r="7.5" />
        <path d="M12 13.5V9.5M9.5 2.75h5M18.25 7.25l1.5-1.5" strokeLinecap="square" />
      </svg>
    );
  }
  const url = `url(/brand/icons/${name}.svg)`;
  return (
    <span
      aria-hidden
      className={cn("inline-block size-6 shrink-0 bg-current", className)}
      style={{ maskImage: url, WebkitMaskImage: url, maskSize: "contain", maskRepeat: "no-repeat", maskPosition: "center" }}
    />
  );
}
