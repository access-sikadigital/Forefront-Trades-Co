import { Photo } from "@/components/ui/Photo";

/**
 * The inner-page hero background, shared by every hero below the home page: the
 * photo full-bleed under the same charcoal scrims as the home hero (an even veil,
 * a fade up from the bottom and a fade in from the left), so every page opens the
 * same way. Sits behind a `relative` content layer.
 */
export function HeroBackdrop({ src, preload = true, quality }: { src: string; preload?: boolean; quality?: number }) {
  return (
    <div aria-hidden className="absolute inset-0">
      <Photo src={src} alt="" frame={16 / 9} vw={{ desktop: 100, mobile: 100 }} preload={preload} quality={quality} />
      {/* Same three scrims as components/sections/home/Hero.tsx */}
      <div className="absolute inset-0 bg-ink-950/25" />
      <div className="absolute inset-0 bg-linear-to-t from-ink-950 via-ink-950/45 to-ink-950/30" />
      <div className="absolute inset-0 bg-linear-to-r from-ink-950/70 via-ink-950/20 to-transparent" />
    </div>
  );
}
