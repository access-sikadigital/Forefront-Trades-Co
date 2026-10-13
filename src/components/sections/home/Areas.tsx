import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { serviceArea } from "@/content/areas";
import { areas } from "@/content/home";

/**
 * Service area, placed high on the page (it's one of the first questions people
 * ask). Six councils with their suburbs as a static, scannable grid, and a
 * button through to the full "Check your suburb" page.
 */
export function Areas() {
  return (
    <section className="relative bg-cream py-section">
      <div className="container-x">
        <SectionHeading label={areas.label} title={areas.title} intro={areas.text} action={<Button href={areas.link.href}>{areas.link.label}</Button>} />

        <Reveal as="ul" stagger={0.06} className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-[6px] bg-purple/10 lg:mt-16 lg:grid-cols-3">
          {serviceArea.map((c) => (
            <li key={c.council} className="bg-cream-50 p-4 sm:p-6 lg:p-7">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <h3 className="font-display text-base font-semibold text-purple sm:text-lg">{c.council}</h3>
                <span className="label !text-[0.62rem] !tracking-[0.14em] text-orange tabular">{c.suburbs.length} suburbs</span>
              </div>
              <p className="mt-3 hidden text-base leading-relaxed text-ink/70 sm:block">{c.suburbs.join(" · ")}</p>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
