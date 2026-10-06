import Link from "next/link";
import { Marquee } from "@/components/motion/Marquee";
import { TextLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { areas } from "@/content/home";

/** Service area: suburb hubs in a velocity-reactive marquee (each a real link). */
export function Areas() {
  const half = Math.ceil(areas.suburbs.length / 2);
  const rows = [areas.suburbs.slice(0, half), areas.suburbs.slice(half)];

  return (
    <section className="relative overflow-hidden bg-cream-50 py-section">
      <div className="container-x">
        <SectionHeading label={areas.label} title={areas.title} intro={areas.text} action={<TextLink href={areas.link.href}>{areas.link.label}</TextLink>} />
      </div>

      <div className="mt-16 space-y-2 lg:mt-24">
        {rows.map((row, r) => (
          <Marquee key={r} speed={r ? 46 : 38} reverse={r === 1}>
            {row.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group flex items-center gap-[clamp(1.25rem,3vw,3rem)] pr-[clamp(1.25rem,3vw,3rem)] font-display text-[clamp(2.75rem,1.5rem+5.5vw,7.5rem)] leading-[1.15] font-bold tracking-[-0.035em]"
              >
                <span className={r ? "text-transparent [-webkit-text-stroke:1.5px_var(--color-purple)] transition-colors duration-500 group-hover:text-purple" : "text-purple transition-colors duration-500 group-hover:text-orange"}>
                  {s.name}
                </span>
                <svg viewBox="0 0 12 12" className="size-[0.32em] shrink-0 text-orange" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
                  <path d="M.8.8h10.4v10.4H.8z" />
                  <path d="M6 11.2A5.2 5.2 0 0 1 11.2 6" />
                </svg>
              </Link>
            ))}
          </Marquee>
        ))}
      </div>
    </section>
  );
}
