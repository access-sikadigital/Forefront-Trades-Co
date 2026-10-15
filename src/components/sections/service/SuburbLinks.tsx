import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon } from "@/components/ui/Icon";
import type { SuburbService } from "@/content/suburb-local";
import { serviceLabel, suburbName, suburbPages } from "@/content/suburbs";

/** From a pillar page to its suburb pages (Page Blueprint §6: links down to the suburbs). */
export function SuburbLinks({ service }: { service: SuburbService }) {
  const pages = suburbPages.filter((p) => p.service === service).sort((a, b) => suburbName(a.suburb).localeCompare(suburbName(b.suburb)));
  if (!pages.length) return null;
  return (
    <section className="relative bg-ink-950 py-16 text-white lg:py-20">
      <div className="container-x grid gap-8 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-4">
          <Reveal>
            <Eyebrow light>By suburb</Eyebrow>
            <h2 className="mt-5 font-display text-[clamp(1.75rem,1.3rem+1.6vw,3rem)] leading-tight font-bold tracking-[-0.02em]">{serviceLabel[service]} near you.</h2>
            <p className="mt-4 text-base text-white/65">
              {pages.length} suburbs across Melbourne&rsquo;s inner west and north.{" "}
              <Link href="/areas/" className="text-white underline underline-offset-4 hover:text-orange">
                See all areas
              </Link>
            </p>
          </Reveal>
        </div>
        <Reveal as="ul" stagger={0.02} className="flex flex-wrap content-start gap-2 lg:col-span-8">
          {pages.map((p) => (
            <li key={p.path}>
              <Link
                href={p.path}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 font-display text-sm font-semibold text-white/85 transition-colors hover:border-orange hover:bg-orange hover:text-white"
              >
                <Icon name="location_on" className="size-3.5 text-orange" />
                {suburbName(p.suburb)}
              </Link>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
