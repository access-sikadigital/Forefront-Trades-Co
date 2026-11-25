import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { dcSteps } from "@/content/pricing";
import { cn } from "@/lib/utils";

const phases = ["Design", "Construct", "Handover"] as const;

/**
 * Design & Construct: the eight steps from enquiry to handover, grouped by phase,
 * with the two checkpoints before building marked (owner preview r5.2).
 */
export function DcSteps() {
  return (
    <section className="relative bg-white py-section">
      <div className="container-x">
        <SectionHeading
          label="Our process"
          title="Design, construct, handover."
          intro="One team takes your home from a first conversation to the final walkthrough. Two checkpoints sit between design and building: an agreed contract, and everything ready to start."
        />

        <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-12 lg:gap-6">
          {phases.map((phase) => {
            const steps = dcSteps.map((s, i) => ({ ...s, n: i + 1 })).filter((s) => s.phase === phase);
            return (
              <div key={phase} className={cn(phase === "Design" ? "lg:col-span-5" : phase === "Construct" ? "lg:col-span-4" : "lg:col-span-3")}>
                <p className="label border-b-2 border-orange pb-3 !text-[0.7rem] !tracking-[0.16em] text-purple">{phase}</p>
                <Reveal as="ol" stagger={0.06} className="mt-5 space-y-3">
                  {steps.map((s) => (
                    <li
                      key={s.title}
                      className={cn("rounded-[6px] p-5 ring-1", s.checkpoint ? "bg-purple text-white ring-purple" : "bg-cream-50 ring-purple/8")}
                    >
                      <div className="flex items-center gap-3">
                        <span className={cn("font-display text-sm font-semibold tabular", s.checkpoint ? "text-coral" : "text-orange")}>
                          {String(s.n).padStart(2, "0")}
                        </span>
                        {s.checkpoint && <span className="label rounded-full bg-white/15 px-2.5 py-1 !text-[0.6rem] !tracking-[0.14em] text-white">Checkpoint</span>}
                      </div>
                      <h3 className={cn("mt-2 font-display text-lg leading-tight font-semibold", s.checkpoint ? "text-white" : "text-purple")}>{s.title}</h3>
                      <p className={cn("mt-1.5 text-[0.95rem] leading-relaxed", s.checkpoint ? "text-white/80" : "text-ink/70")}>{s.text}</p>
                    </li>
                  ))}
                </Reveal>
              </div>
            );
          })}
        </div>
        <p className="mt-6 text-sm text-ink/60">What each step involves depends on the project.</p>
      </div>
    </section>
  );
}
