import type { ReactNode } from "react";
import { SplitLines } from "@/components/motion/SplitLines";
import { Reveal } from "@/components/motion/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { cn } from "@/lib/utils";

type Props = {
  label: string;
  title: ReactNode;
  intro?: ReactNode;
  action?: ReactNode;
  light?: boolean;
  className?: string;
  titleClassName?: string;
};

/** Eyebrow → masked-line h2 → optional intro / action. Used by every section. */
export function SectionHeading({ label, title, intro, action, light = false, className, titleClassName }: Props) {
  return (
    <div className={cn("grid gap-8 lg:grid-cols-12 lg:items-end", className)}>
      <div className="lg:col-span-7">
        <Reveal>
          <Eyebrow light={light}>{label}</Eyebrow>
        </Reveal>
        <SplitLines as="h2" className={cn("mt-6 text-h2", light ? "text-white" : "text-purple", titleClassName)}>
          {title}
        </SplitLines>
      </div>
      {(intro || action) && (
        <Reveal className="space-y-6 lg:col-span-4 lg:col-start-9" stagger={0.1}>
          {intro && <p className={cn("text-lead", light ? "text-white/75" : "text-ink/75")}>{intro}</p>}
          {action && <div>{action}</div>}
        </Reveal>
      )}
    </div>
  );
}
