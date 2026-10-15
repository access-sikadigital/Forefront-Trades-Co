import { Reveal } from "@/components/motion/Reveal";
import { Photo } from "@/components/ui/Photo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";
import type { ServicePage } from "@/content/services";

/**
 * The service-specific angle (Page Blueprint §3/§5): the decisions that make or
 * break this kind of job, as a numbered list beside a second project photo.
 */
export function ServiceFocus({ page }: { page: ServicePage }) {
  const { focus } = page;
  return (
    <section className="relative bg-white py-section">
      <div className="container-x">
        <SectionHeading label={focus.label} title={focus.title} intro={focus.intro} />

        <div className={cn("mt-12 grid gap-10 lg:mt-16 lg:gap-12", focus.image && "lg:grid-cols-12 lg:items-start")}>
          {focus.image && (
            <Reveal className="relative aspect-[4/3] overflow-hidden rounded-[6px] bg-purple/10 lg:col-span-5 lg:aspect-[4/5]">
              <Photo src={focus.image.src} alt={focus.image.alt} frame={4 / 5} vw={{ desktop: 38, mobile: 92 }} />
            </Reveal>
          )}
          <Reveal
            as="ol"
            stagger={0.08}
            className={cn("grid gap-x-10 sm:grid-cols-2", focus.image ? "lg:col-span-6 lg:col-start-7 lg:grid-cols-1" : "lg:grid-cols-4")}
          >
            {focus.points.map((p, i) => (
              <li key={p.title} className="border-t border-purple/15 py-6 lg:py-7">
                <span className="font-display text-sm font-semibold text-orange tabular">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-2 text-h3 text-purple">{p.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-ink/75 sm:text-lg">{p.text}</p>
              </li>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
