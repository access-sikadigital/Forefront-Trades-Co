import { Reveal } from "@/components/motion/Reveal";
import { PriceTable } from "@/components/sections/shared/PriceTable";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { consult, consultPriced, inclGst, money, priceCopy, rangeNote, ranges, startingPrices, type PricedRoom } from "@/content/pricing";

type Pricing = { kind: "rates"; room: PricedRoom; compare?: PricedRoom[] } | { kind: "consult"; basis: keyof typeof consultPriced };

/** Which prices a page shows, from its path (pillar, sub-service and suburb pages share the template). */
function pricingFor(path: string): Pricing | null {
  if (path.startsWith("/bathroom-renovations/ensuites/")) return { kind: "rates", room: "ensuite", compare: ["main", "ensuite", "powder"] };
  if (path.startsWith("/bathroom-renovations/")) return { kind: "rates", room: "main", compare: ["main", "ensuite", "powder"] };
  if (path.startsWith("/kitchen-renovations/")) return { kind: "rates", room: "kitchen" };
  if (path.startsWith("/laundry-renovations/")) return { kind: "rates", room: "laundry" };
  if (path.startsWith("/home-renovations/")) return { kind: "consult", basis: "home" };
  if (path.startsWith("/home-extensions/")) return { kind: "consult", basis: "extensions" };
  if (path.startsWith("/heritage-renovations/")) return { kind: "consult", basis: "heritage" };
  return null;
}

const cta = "/book-a-consultation/";

function ConsultFee({ large }: { large: boolean }) {
  const ex = large ? consult.largeEx : consult.standardEx;
  return (
    <div className="min-w-0 rounded-[6px] bg-white p-6 ring-1 ring-purple/8 sm:p-7">
      <p className="label !text-[0.66rem] !tracking-[0.14em] text-purple/60">In-depth home consult</p>
      <p className="mt-3 font-display text-2xl leading-tight font-bold text-purple">
        From {money(ex)} + GST <span className="text-base font-semibold text-ink/60">({money(inclGst(ex))} incl. GST)</span>
      </p>
      <ul className="mt-4 space-y-2 text-base leading-relaxed text-ink/75">
        <li>{consult.terms}</li>
        <li>{consult.local}</li>
        <li>{consult.credit}</li>
        <li className="font-medium text-ink">{consult.firstCall}</li>
      </ul>
    </div>
  );
}

/** Starting prices by range, or how consultation-priced work is priced, plus the consult fee. */
export function ServicePricing({ path }: { path: string }) {
  const pricing = pricingFor(path);
  if (!pricing) return null;

  if (pricing.kind === "consult") {
    return (
      <section id="pricing" className="relative scroll-mt-24 bg-cream-50 py-section">
        <div className="container-x">
          <SectionHeading label="Pricing" title="How this is priced." intro="We price this kind of work after a consultation, not from a published starting rate." />
          <Reveal stagger={0.08} className="mt-10 grid gap-4 lg:mt-14 lg:grid-cols-2 lg:gap-6">
            <div className="flex min-w-0 flex-col rounded-[6px] bg-white p-6 ring-1 ring-purple/8 sm:p-7">
              <p className="label !text-[0.66rem] !tracking-[0.14em] text-purple/60">Price basis</p>
              <p className="mt-3 font-display text-2xl leading-tight font-bold text-purple">
                {pricing.basis === "heritage" ? "Priced after consultation" : "Consultation required"}
              </p>
              <p className="mt-3 flex-1 text-base leading-relaxed text-ink/75">{consultPriced[pricing.basis]}</p>
              <div className="mt-6">
                <Button href={cta}>Book a consultation</Button>
              </div>
            </div>
            <ConsultFee large={pricing.basis !== "heritage"} />
          </Reveal>
        </div>
      </section>
    );
  }

  const row = startingPrices[pricing.room];
  return (
    <section id="pricing" className="relative scroll-mt-24 bg-cream-50 py-section">
      <div className="container-x">
        <SectionHeading label="Pricing" title="Starting prices by range." intro={priceCopy.qualifier} />

        <h3 className="mt-10 font-display text-xl font-semibold text-purple lg:mt-14">{row.label} starting prices</h3>
        <Reveal as="ul" stagger={0.06} className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {ranges.map((r, i) => {
            const ex = row.ex[i];
            return (
              <li key={r.id} className="flex flex-col rounded-[6px] bg-white p-6 ring-1 ring-purple/8">
                <p className="label !text-[0.66rem] !tracking-[0.14em] text-orange">{r.name}</p>
                {ex == null ? (
                  <p className="mt-4 font-display text-2xl leading-tight font-bold text-purple">Price on application</p>
                ) : (
                  <>
                    <p className="mt-4 text-sm text-ink/60">From</p>
                    <p className="font-display text-[1.9rem] leading-tight font-bold text-purple tabular">
                      {money(inclGst(ex))}
                      <span className="ml-1.5 text-sm font-semibold text-ink/60">incl. GST</span>
                    </p>
                    <p className="text-sm text-ink/60 tabular">{money(ex)} + GST</p>
                  </>
                )}
                <p className="mt-4 flex-1 text-base leading-relaxed text-ink/75">{r.fit}</p>
              </li>
            );
          })}
        </Reveal>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink/65">
          {priceCopy.inclusions} {rangeNote}
        </p>

        {pricing.compare && (
          <Reveal className="mt-10">
            <PriceTable rooms={pricing.compare} caption="All bathroom starting prices, incl. GST" />
          </Reveal>
        )}

        <Reveal stagger={0.08} className="mt-10 grid gap-4 lg:grid-cols-2 lg:gap-6">
          <ConsultFee large={false} />
          <div className="flex min-w-0 flex-col rounded-[6px] bg-white p-6 ring-1 ring-purple/8 sm:p-7">
            <p className="label !text-[0.66rem] !tracking-[0.14em] text-purple/60">More than one space</p>
            <p className="mt-3 flex-1 text-base leading-relaxed text-ink/75">{priceCopy.package}</p>
            <div className="mt-6">
              <Button href={cta}>Ask about a package</Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
