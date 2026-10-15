import { Photo } from "@/components/ui/Photo";

/**
 * The inner-page hero background, shared by every hero: phones and tablets get the
 * photo full-bleed under an even charcoal veil; desktop gets it off the right edge
 * with the charcoal fading in from the left. Sits behind a `relative` content layer.
 */
export function HeroBackdrop({ src, preload = true }: { src: string; preload?: boolean }) {
  return (
    <div aria-hidden className="absolute inset-0 lg:left-[45%]">
      <Photo src={src} alt="" frame={0.85} vw={{ desktop: 55, mobile: 100 }} preload={preload} />
      <div className="absolute inset-0 bg-ink-950/50 lg:hidden" />
      <div className="absolute inset-0 bg-linear-to-t from-ink-950 via-ink-950/45 to-ink-950/35 lg:hidden" />
      <div className="absolute inset-0 hidden bg-linear-to-r from-ink-950 via-ink-950/75 via-35% to-ink-950/0 to-80% lg:block" />
      <div className="absolute inset-x-0 top-0 hidden h-40 bg-linear-to-b from-ink-950/55 to-transparent lg:block" />
    </div>
  );
}
