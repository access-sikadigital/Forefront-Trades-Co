"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowIcon } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type Quote = { quote: string; name: string; project: string };

/**
 * Client quotes. Below md: a swipeable slider (native scroll-snap, so it
 * works with touch, trackpad and keyboard) with arrows and position dots.
 * From md up: the same cards sit side by side as a grid.
 */
export function QuoteSlider({ quotes, className }: { quotes: readonly Quote[]; className?: string }) {
  const track = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);

  // Track which slide is centred.
  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const onScroll = () => {
      const i = Math.round(el.scrollLeft / el.clientWidth);
      setActive(Math.max(0, Math.min(quotes.length - 1, i)));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [quotes.length]);

  const go = (i: number) => {
    const el = track.current;
    if (!el) return;
    const next = (i + quotes.length) % quotes.length;
    el.scrollTo({ left: next * el.clientWidth, behavior: "smooth" });
  };

  return (
    <div role="region" aria-roledescription="carousel" aria-label="Client quotes" className={className}>
      <ul
        ref={track}
        className={cn(
          "flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain rounded-[3px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
          "md:grid md:grid-cols-3 md:gap-px md:overflow-visible md:bg-white/10",
        )}
      >
        {quotes.map((t, i) => (
          <li
            key={t.name}
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${quotes.length}`}
            className="flex w-full shrink-0 snap-center flex-col justify-between gap-8 bg-white/[0.04] p-7 md:bg-ink lg:p-9"
          >
            <blockquote className="font-display text-[1.25rem] leading-[1.35] font-medium tracking-[-0.01em] text-white lg:text-[1.4rem]">
              <span aria-hidden className="mb-4 block font-display text-5xl leading-none text-orange">
                &ldquo;
              </span>
              {t.quote}
            </blockquote>
            <footer className="border-t border-white/10 pt-5">
              <p className="font-display text-base font-semibold text-white">{t.name}</p>
              <p className="label mt-1.5 !text-[0.66rem] !tracking-[0.14em] text-white/55">{t.project}</p>
            </footer>
          </li>
        ))}
      </ul>

      {/* Controls — phones only */}
      <div className="mt-6 flex items-center justify-between md:hidden">
        <div className="flex items-center gap-2">
          {quotes.map((t, i) => (
            <button
              key={t.name}
              type="button"
              onClick={() => go(i)}
              aria-label={`Show quote ${i + 1}`}
              aria-current={active === i}
              className="flex h-8 items-center"
            >
              <span className={cn("block h-1 rounded-full transition-all duration-500", active === i ? "w-8 bg-orange" : "w-3 bg-white/30")} />
            </button>
          ))}
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => go(active - 1)}
            aria-label="Previous quote"
            className="flex size-11 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:border-orange hover:bg-orange"
          >
            <ArrowIcon className="size-4 rotate-180" />
          </button>
          <button
            type="button"
            onClick={() => go(active + 1)}
            aria-label="Next quote"
            className="flex size-11 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:border-orange hover:bg-orange"
          >
            <ArrowIcon className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
