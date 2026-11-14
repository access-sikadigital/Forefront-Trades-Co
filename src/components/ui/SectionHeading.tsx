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

/** Intros longer than this read as a paragraph, not a side note. */
const LONG_INTRO_WORDS = 32;

/**
 * Eyebrow → masked-line h2 → optional intro / action. Used by every section.
 * A short intro sits in the right-hand column; a long one would stand far taller
 * than the heading and leave a hole above it, so it runs under the heading
 * instead, with the action beside it.
 */
export function SectionHeading({ label, title, intro, action, light = false, className, titleClassName }: Props) {
  const long = typeof intro === "string" && intro.split(/\s+/).length > LONG_INTRO_WORDS;
  const introText = intro && <p className={cn("text-lead", light ? "text-white/75" : "text-ink/75")}>{intro}</p>;

  const heading = (
    <>
      <Reveal>
        <Eyebrow light={light}>{label}</Eyebrow>
      </Reveal>
      <SplitLines as="h2" className={cn("mt-6 text-h2", light ? "text-white" : "text-purple", titleClassName)}>
        {title}
      </SplitLines>
    </>
  );

  if (long) {
    return (
      <div className={className}>
        <div className="max-w-6xl">{heading}</div>
        <Reveal stagger={0.1} className="mt-8 grid gap-6 lg:mt-10 lg:grid-cols-12 lg:items-end lg:gap-12">
          <div className="lg:col-span-8 xl:col-span-7">{introText}</div>
          {action && <div className="lg:col-span-4 lg:col-start-9 lg:flex lg:justify-end xl:col-start-9">{action}</div>}
        </Reveal>
      </div>
    );
  }

  return (
    <div className={cn("grid gap-8 lg:grid-cols-12 lg:items-end", className)}>
      <div className="lg:col-span-8">{heading}</div>
      {(intro || action) && (
        <Reveal className={cn("space-y-6 lg:col-span-4 lg:col-start-9", !intro && "lg:flex lg:justify-end")} stagger={0.1}>
          {introText}
          {action && <div>{action}</div>}
        </Reveal>
      )}
    </div>
  );
}
