"use client";

import { useRef, type ElementType } from "react";
import { gsap, SplitText, useGSAP } from "@/lib/gsap";
import { cn, prefersReducedMotion } from "@/lib/utils";

/** Statement copy whose words brighten as they scroll through the viewport. */
export function TextScrub({ as: Tag = "p", text, className }: { as?: ElementType; text: string; className?: string }) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el || prefersReducedMotion()) return;
      const split = SplitText.create(el, {
        type: "words",
        autoSplit: true,
        onSplit: (self) =>
          gsap.fromTo(
            self.words,
            { opacity: 0.18 },
            {
              opacity: 1,
              ease: "none",
              stagger: 0.4,
              scrollTrigger: { trigger: el, start: "top 92%", end: "bottom 60%", scrub: 0.6 },
            },
          ),
      });
      return () => split.revert();
    },
    { scope: ref },
  );

  return (
    <Tag ref={ref} className={cn(className)}>
      {text}
    </Tag>
  );
}
