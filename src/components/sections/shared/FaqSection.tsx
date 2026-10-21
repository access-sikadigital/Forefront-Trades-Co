import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { ArrowIcon } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/content/home";

export type Faq = { q: string; a: string };

/**
 * FAQ (Page Blueprint §9) as native <details> — works without JS and stays
 * crawlable — beside links across to the services (Blueprint §6).
 * Desktop: services panel left, questions right. Phones: questions first.
 */
export function FaqSection({ faqs, path, title = "Asked at every first visit." }: { faqs: Faq[]; path?: string; title?: string }) {
  // Same order, photos and tags as the home page service cards; the current service is left out.
  const others = services.filter((s) => s.href !== path);
  return (
    <section className="relative bg-white py-section">
      <div className="container-x">
        <SectionHeading label="Questions" title={title} />

        <div className="mt-12 grid grid-cols-1 gap-12 lg:mt-16 lg:grid-cols-12 lg:gap-10">
          <Reveal as="div" stagger={0.06} className="border-b border-purple/15 lg:col-span-8 lg:col-start-5 lg:row-start-1 lg:self-start">
            {faqs.map((f) => (
              <details key={f.q} className="group border-t border-purple/15">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 font-display text-[1.15rem] leading-snug font-semibold text-purple sm:text-[1.35rem] [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span aria-hidden className="relative mt-1.5 size-4 shrink-0 text-orange">
                    <span className="absolute top-1/2 left-0 h-0.5 w-4 -translate-y-1/2 bg-current" />
                    <span className="absolute top-0 left-1/2 h-4 w-0.5 -translate-x-1/2 bg-current transition-transform duration-300 group-open:scale-y-0" />
                  </span>
                </summary>
                <p className="pb-7 text-base leading-relaxed text-ink/75 sm:text-lg">{f.a}</p>
              </details>
            ))}
          </Reveal>

          <Reveal as="nav" aria-label={path ? "Other services" : "Our services"} className="lg:col-span-4 lg:col-start-1 lg:row-start-1">
            <p className="label !text-[0.66rem] !tracking-[0.14em] text-purple/60">{path ? "Other services" : "Our services"}</p>
            <ul className="mt-4 overflow-hidden rounded-[6px] bg-cream-50 ring-1 ring-purple/8">
              {others.map((s) => (
                <li key={s.href} className="border-t border-purple/8 first:border-t-0">
                  <Link href={s.href} className="group flex items-center gap-4 p-3 pr-4 transition-colors hover:bg-white">
                    <span className="relative size-14 shrink-0 overflow-hidden rounded-[4px] bg-purple/10 sm:size-16">
                      <Photo
                        src={s.image.src}
                        alt=""
                        frame={1}
                        vw={{ desktop: 5, mobile: 18 }}
                        className="transition-transform duration-700 ease-[var(--ease-expo)] group-hover:scale-110"
                      />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-display text-[1.05rem] leading-tight font-semibold text-purple">{s.title}</span>
                      <span className="mt-1 block truncate text-sm text-ink/60">{s.tags.slice(0, 2).join(" · ")}</span>
                    </span>
                    <span
                      aria-hidden
                      className="flex size-9 shrink-0 items-center justify-center rounded-full border border-purple/15 text-orange transition-colors duration-300 group-hover:border-orange group-hover:bg-orange group-hover:text-white"
                    >
                      <ArrowIcon className="size-3.5" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
