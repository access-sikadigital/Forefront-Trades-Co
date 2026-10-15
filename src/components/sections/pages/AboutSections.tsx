import { Reveal } from "@/components/motion/Reveal";
import { SplitLines } from "@/components/motion/SplitLines";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Photo } from "@/components/ui/Photo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { about } from "@/content/pages";

/** About: why we work on a fixed price and a written finish date, beside the founders (50 / 50). */
export function AboutStory() {
  const { story } = about;
  return (
    <section className="relative bg-white py-section">
      <div className="container-x grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <Reveal>
            <Eyebrow>{story.label}</Eyebrow>
          </Reveal>
          <SplitLines as="h2" className="mt-6 text-h2 text-purple">
            {story.title}
          </SplitLines>
          <Reveal stagger={0.08} className="mt-8 space-y-5">
            {story.text.map((para) => (
              <p key={para} className="font-display text-[clamp(1.15rem,0.95rem+0.6vw,1.45rem)] leading-[1.4] font-medium tracking-[-0.01em] text-purple">
                {para}
              </p>
            ))}
          </Reveal>
          <Reveal as="figure" className="mt-9 border-l-2 border-orange pl-5">
            <blockquote className="font-display text-lg leading-snug font-medium text-purple">&ldquo;{story.quote.text}&rdquo;</blockquote>
            <figcaption className="label mt-3 !text-[0.66rem] !tracking-[0.14em] text-ink/60">
              {story.quote.name} · {story.quote.source}
            </figcaption>
          </Reveal>
        </div>
        <Reveal className="relative aspect-[4/3] overflow-hidden rounded-[6px] bg-purple/10">
          <Photo src={story.image.src} alt={story.image.alt} frame={4 / 3} vw={{ desktop: 46, mobile: 100 }} />
        </Reveal>
      </div>
    </section>
  );
}

/** About: the people on the job. Names and roles to come from the client. */
export function AboutTeam() {
  const { team } = about;
  return (
    <section className="relative bg-cream-50 py-section">
      <div className="container-x">
        <SectionHeading label={team.label} title={team.title} intro={team.intro} />
        <Reveal as="ul" stagger={0.08} className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:max-w-[66%] lg:gap-6">
          {team.people.map((p) => (
            <li key={p.image.src}>
              <figure>
                <div className="relative aspect-[4/5] overflow-hidden rounded-[6px] bg-purple/10">
                  <Photo src={p.image.src} alt={p.image.alt} frame={4 / 5} vw={{ desktop: 31, breakpoint: 640, mobile: 100 }} />
                </div>
                <figcaption className="label mt-4 !text-[0.7rem] !tracking-[0.14em] text-purple">{p.role}</figcaption>
              </figure>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
