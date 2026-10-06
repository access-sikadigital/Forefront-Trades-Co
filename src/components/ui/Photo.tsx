import Image from "next/image";
import { imageManifest } from "@/content/image-manifest";
import { cn } from "@/lib/utils";

type Props = {
  src: string;
  alt: string;
  /** Aspect ratio (w/h) of the frame the photo fills. */
  frame: number;
  /** Frame width as a % of the viewport: desktop (≥ breakpoint) and mobile. */
  vw: { desktop: number; mobile?: number; breakpoint?: number };
  /** Extra coverage needed by motion — e.g. 1.15 for a parallax layer inset 7% or a 1.15× zoom. */
  bleed?: number;
  className?: string;
  preload?: boolean;
  quality?: number;
};

/**
 * next/image for full-bleed, object-cover photography.
 *
 * `sizes` normally describes the frame's *width*, but when a landscape photo
 * fills a portrait frame the browser must cover the frame's *height*, so it
 * needs a far wider source than the frame. Feeding only the frame width makes
 * the browser download a small file and stretch it — the blur we saw.
 * This computes the width the crop actually needs from the photo's intrinsic
 * ratio (see image-manifest.ts), and serves at quality 85.
 */
export function Photo({ src, alt, frame, vw, bleed = 1, className, preload, quality = 85 }: Props) {
  const [w, h] = imageManifest[src] ?? [3, 2];
  const crop = Math.max(1, w / h / frame) * bleed;
  const { desktop, mobile = 100, breakpoint = 1024 } = vw;
  const sizes = `(min-width: ${breakpoint}px) ${Math.ceil(desktop * crop)}vw, ${Math.ceil(mobile * crop)}vw`;

  return <Image src={src} alt={alt} fill sizes={sizes} quality={quality} preload={preload} className={cn("object-cover", className)} />;
}
