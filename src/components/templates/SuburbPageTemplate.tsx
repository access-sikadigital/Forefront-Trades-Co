import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { SplitLines } from "@/components/motion/SplitLines";
import { FinalCta } from "@/components/sections/home/FinalCta";
import { ServiceCost } from "@/components/sections/service/ServiceCost";
import { ServiceFocus } from "@/components/sections/service/ServiceFocus";
import { FaqSection } from "@/components/sections/shared/FaqSection";
import { PageHero } from "@/components/sections/shared/PageHero";
import { ArrowIcon } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon } from "@/components/ui/Icon";
import { Photo } from "@/components/ui/Photo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { suburbLocal, type SuburbService } from "@/content/suburb-local";
import { findSuburbPage, nearestProjects, pagesForSuburb, pillarPage, serviceLabel, suburbHubPath, suburbName } from "@/content/suburbs";
import { serviceJsonLd } from "@/lib/seo";

const heading = (service: SuburbService, name: string) => (service === "home-renovations" ? `Home Renovations & Extensions in ${name}` : `${serviceLabel[service]} in ${name}`);

export function suburbMetadata(service: SuburbService, suburb: string): Metadata {
  const ref = findSuburbPage(service, suburb);
  const name = suburbName(suburb);
  const local = suburbLocal[suburb];
  const title = service === "home-renovations" ? `Renovations & Extensions ${name}` : `${serviceLabel[service]} ${name}`;
  const lead = service === "home-renovations" ? local?.intro : local?.angles[service];
  return {
    title,
    description: (lead ?? `${heading(service, name)} by Forefront Trades Co., a Registered Builder based in Maribyrnong.`).slice(0, 158),
    alternates: { canonical: ref?.path },
  };
}

/**
 * Suburb page (Page Blueprint, suburb template): local hero → local housing stock →
 * council & overlays → the service angle → nearest real projects → links across
 * to the suburb's other pages and its neighbours → questions → enquiry.
 */
export function SuburbPageTemplate({ service, suburb }: { service: SuburbService; suburb: string }) {
  const ref = findSuburbPage(service, suburb);
  const local = suburbLocal[suburb];
  const name = suburbName(suburb);
  const pillar = pillarPage(service);
  const isHub = service === "home-renovations";
  const intro = (isHub ? local?.intro : local?.angles[service]) ?? pillar.hero.intro;
  const siblings = pagesForSuburb(suburb).filter((p) => p.service !== service);
  const neighbours = (local?.nearby ?? []).filter((s) => suburbLocal[s]);
  const projects = nearestProjects(suburb);
  const faqs = [...(local ? [local.faq] : []), ...pillar.faqs.slice(0, 4)];

  return (
    <>
      <PageHero
        hero={{
          h1: heading(service, name),
          title: isHub ? ["Renovations & Extensions", `in ${name}.`] : [serviceLabel[service], `in ${name}.`],
          intro,
          image: pillar.hero.image,
          facts: [{ label: "Council", value: local?.council ?? "Inner west" }, pillar.hero.facts[0], { label: "Contract", value: "Fixed price" }],
        }}
      />

      {/* Local housing stock + council & overlays (Blueprint §3–4) */}
      {local && (
        <section className="relative bg-white py-section">
          <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow>Homes in {name}</Eyebrow>
              </Reveal>
              <SplitLines as="h2" className="mt-6 text-h2 text-purple">
                {local.housing.title}
              </SplitLines>
              <Reveal className="mt-6">
                <p className="text-lead text-ink/80">{local.housing.text}</p>
                {!isHub && local.angles[service] && local.angles[service] !== intro && <p className="mt-5 text-lg leading-relaxed text-ink/75">{local.angles[service]}</p>}
              </Reveal>
            </div>
            <Reveal className="self-start rounded-[6px] bg-purple p-7 text-white lg:col-span-5 lg:mt-20 lg:p-9">
              <p className="label !text-[0.66rem] !tracking-[0.14em] text-white/60">Council &amp; overlays</p>
              <p className="mt-3 font-display text-2xl leading-tight font-semibold">{local.council}</p>
              <p className="mt-4 text-base leading-relaxed text-white/80">{local.planning}</p>
              <Link href="/heritage-renovations/" className="label group mt-6 inline-flex items-center gap-2.5 !text-[0.66rem] !tracking-[0.14em] text-white hover:text-orange">
                Renovating under a heritage overlay
                <ArrowIcon className="size-3.5 text-orange transition-transform duration-500 group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
        </section>
      )}

      {/* The service angle (Blueprint §5), from the pillar page */}
      <ServiceFocus page={pillar} />

      {/* Nearest real projects, said plainly (Blueprint §2) */}
      {projects.length > 0 && (
        <section className="relative bg-cream-50 py-section">
          <div className="container-x">
            <SectionHeading label="Nearby work" title="Our nearest photographed jobs." intro={`We don't have a photographed job in ${name} yet. These are the closest.`} />
            <Reveal as="ul" stagger={0.08} className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-16 lg:gap-8">
              {projects.map((pr) => (
                <li key={pr.slug}>
                  <Link href={`/projects/${pr.slug}/`} className="group block">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-[6px] bg-purple/10">
                      <Photo src={pr.cover.src} alt={pr.cover.alt} frame={16 / 10} vw={{ desktop: 46, mobile: 92 }} className="transition-transform duration-[1.2s] ease-[var(--ease-expo)] group-hover:scale-[1.04]" />
                      <span className="label absolute top-4 left-4 rounded-full bg-cream-50/90 px-3 py-1.5 !text-[0.62rem] !tracking-[0.12em] text-purple backdrop-blur">{pr.suburb}</span>
                    </div>
                    <p className="mt-4 flex items-start justify-between gap-4 font-display text-xl leading-snug font-semibold text-purple">
                      {pr.title}
                      <ArrowIcon className="mt-1.5 size-4 shrink-0 text-orange transition-transform duration-500 group-hover:translate-x-1" />
                    </p>
                    <p className="mt-1 text-base text-ink/65">{pr.summary}</p>
                  </Link>
                </li>
              ))}
            </Reveal>
          </div>
        </section>
      )}

      <ServiceCost page={pillar} />

      {/* Links across (Blueprint §6): the suburb's other pages, the pillar, the neighbours */}
      <section className="relative bg-white py-section">
        <div className="container-x grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <Reveal>
              <Eyebrow>More for {name}</Eyebrow>
            </Reveal>
            <SplitLines as="h2" className="mt-6 text-h2 text-purple">
              Also in {name}.
            </SplitLines>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-7 lg:col-start-6">
            <Reveal as="ul" stagger={0.05} className="space-y-2">
              <li className="label !text-[0.62rem] !tracking-[0.14em] text-purple/60">Services here</li>
              {[...(isHub ? [] : [{ href: suburbHubPath(suburb), label: `Renovations & Extensions in ${name}` }]), ...siblings.filter((s) => s.service !== "home-renovations").map((s) => ({ href: s.path, label: `${serviceLabel[s.service]} in ${name}` })), { href: pillar.path, label: `${pillar.name} across Melbourne` }].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="group flex items-center justify-between gap-4 border-b border-purple/10 py-3 font-display text-base font-semibold text-purple hover:text-orange">
                    {l.label}
                    <ArrowIcon className="size-3.5 shrink-0 text-orange transition-transform duration-500 group-hover:translate-x-1" />
                  </Link>
                </li>
              ))}
            </Reveal>
            <Reveal as="ul" stagger={0.05} className="space-y-2">
              <li className="label !text-[0.62rem] !tracking-[0.14em] text-purple/60">Nearby suburbs</li>
              {neighbours.map((s) => (
                <li key={s}>
                  <Link href={suburbHubPath(s)} className="group flex items-center justify-between gap-4 border-b border-purple/10 py-3 font-display text-base font-semibold text-purple hover:text-orange">
                    <span className="flex items-center gap-2.5">
                      <Icon name="location_on" className="size-4 text-orange" />
                      {suburbName(s)}
                    </span>
                    <ArrowIcon className="size-3.5 shrink-0 text-orange transition-transform duration-500 group-hover:translate-x-1" />
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/areas/" className="group flex items-center justify-between gap-4 py-3 font-display text-base font-semibold text-purple hover:text-orange">
                  All 42 suburbs
                  <ArrowIcon className="size-3.5 shrink-0 text-orange transition-transform duration-500 group-hover:translate-x-1" />
                </Link>
              </li>
            </Reveal>
          </div>
        </div>
      </section>

      <FaqSection faqs={faqs} path={pillar.path} title={`Questions from ${name}.`} />
      <FinalCta />
      {ref && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd({ name: heading(service, name), path: ref.path, description: intro, faqs })) }}
        />
      )}
    </>
  );
}
