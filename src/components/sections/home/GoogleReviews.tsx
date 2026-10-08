"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowIcon } from "@/components/ui/Button";
import { googleReviews } from "@/content/reviews";
import { cn, prefersReducedMotion } from "@/lib/utils";

type Review = (typeof googleReviews.items)[number];

/**
 * Google reviews carousel. Native scroll-snap (touch, trackpad and keyboard all
 * work) with arrows, dots and a gentle auto-advance that stops for good once the
 * visitor interacts, and pauses on hover/focus or when off screen.
 */
export function GoogleReviews({ className }: { className?: string }) {
  const track = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [touched, setTouched] = useState(false);
  const [inView, setInView] = useState(false);
  const count = googleReviews.items.length;

  const cardWidth = () => {
    const el = track.current;
    const first = el?.querySelector("li");
    if (!el || !first) return 1;
    return first.getBoundingClientRect().width + parseFloat(getComputedStyle(el).columnGap || "0");
  };

  const go = useCallback(
    (i: number) => {
      const el = track.current;
      if (!el) return;
      const maxIndex = Math.max(0, Math.round((el.scrollWidth - el.clientWidth) / cardWidth()));
      const next = i > maxIndex ? 0 : i < 0 ? maxIndex : i;
      el.scrollTo({ left: next * cardWidth(), behavior: prefersReducedMotion() ? "auto" : "smooth" });
    },
    [],
  );

  // Which card is at the start of the viewport.
  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const onScroll = () => setActive(Math.round(el.scrollLeft / cardWidth()));
    el.addEventListener("scroll", onScroll, { passive: true });
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.4 });
    io.observe(el);
    return () => {
      el.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  // Auto-advance every 6s while visible and untouched.
  useEffect(() => {
    if (paused || touched || !inView || prefersReducedMotion()) return;
    const id = setInterval(() => go(active + 1), 6000);
    return () => clearInterval(id);
  }, [active, paused, touched, inView, go]);

  const userGo = (i: number) => {
    setTouched(true);
    go(i);
  };

  return (
    <div className={className}>
      {/* Header: source + summary */}
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="flex items-center gap-4">
          <span className="flex size-14 items-center justify-center rounded-full bg-white">
            <GoogleG className="size-7" />
          </span>
          <div>
            <p className="font-display text-xl font-semibold text-white">
              {googleReviews.summary.label} <span className="text-white/50">·</span> {googleReviews.summary.count} reviews on Google
            </p>
            <Stars className="mt-1.5" size="size-4" />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <a
            href={googleReviews.readAllUrl}
            target="_blank"
            rel="noreferrer"
            className="label mr-2 hidden !text-[0.72rem] !tracking-[0.14em] text-white underline-offset-4 hover:text-orange hover:underline sm:inline"
          >
            Read all on Google
          </a>
          <CarouselButton dir="prev" onClick={() => userGo(active - 1)} />
          <CarouselButton dir="next" onClick={() => userGo(active + 1)} />
        </div>
      </div>

      {/* Track */}
      <ul
        ref={track}
        role="region"
        aria-roledescription="carousel"
        aria-label="Google reviews"
        tabIndex={0}
        onPointerEnter={() => setPaused(true)}
        onPointerLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
        onPointerDown={() => setTouched(true)}
        onWheel={(e) => Math.abs(e.deltaX) > Math.abs(e.deltaY) && setTouched(true)}
        className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pb-2 outline-none [scrollbar-width:none] focus-visible:ring-2 focus-visible:ring-orange lg:gap-5 [&::-webkit-scrollbar]:hidden"
      >
        {googleReviews.items.map((r, i) => (
          <ReviewCard key={r.name + r.date} r={r} index={i} total={count} />
        ))}
      </ul>

      {/* Dots + mobile "read all" */}
      <div className="mt-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          {googleReviews.items.map((r, i) => (
            <button
              key={r.name + r.date}
              type="button"
              onClick={() => userGo(i)}
              aria-label={`Show review ${i + 1}`}
              aria-current={active === i}
              className="flex h-8 items-center"
            >
              <span className={cn("block h-1 rounded-full transition-all duration-500", active === i ? "w-8 bg-orange" : "w-3 bg-white/30")} />
            </button>
          ))}
        </div>
        <a href={googleReviews.readAllUrl} target="_blank" rel="noreferrer" className="label !text-[0.7rem] !tracking-[0.14em] text-white underline underline-offset-4 sm:hidden">
          Read all on Google
        </a>
      </div>
    </div>
  );
}

function ReviewCard({ r, index, total }: { r: Review; index: number; total: number }) {
  const [open, setOpen] = useState(false);
  const long = r.text.length > 200;
  const initials = r.name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <li
      aria-roledescription="slide"
      aria-label={`Review ${index + 1} of ${total}`}
      className="flex w-[86%] shrink-0 snap-start flex-col rounded-[6px] bg-cream-50 p-6 text-purple sm:w-[calc(50%-0.5rem)] sm:p-7 lg:w-[calc((100%-2.5rem)/3)]"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <span aria-hidden className="flex size-11 items-center justify-center rounded-full bg-purple font-display text-sm font-bold text-white">
            {initials}
          </span>
          <div>
            <p className="font-display text-base leading-tight font-semibold">{r.name}</p>
            <p className="mt-0.5 text-sm text-ink/55">{r.date}</p>
          </div>
        </div>
        <GoogleG className="size-5 shrink-0" />
      </div>
      <Stars className="mt-5" size="size-[1.1rem]" />
      <blockquote className="mt-3 flex-1">
        <p className={cn("text-lg leading-snug text-ink/85", !open && long && "line-clamp-5")}>{r.text}</p>
      </blockquote>
      {long && (
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="label mt-4 w-fit !text-[0.66rem] !tracking-[0.14em] text-orange hover:underline"
        >
          {open ? "Show less" : "Read more"}
        </button>
      )}
    </li>
  );
}

function Stars({ className, size }: { className?: string; size: string }) {
  return (
    <span className={cn("flex gap-0.5 text-[#FBBC04]", className)} role="img" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} viewBox="0 0 20 20" className={size} fill="currentColor" aria-hidden>
          <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9z" />
        </svg>
      ))}
    </span>
  );
}

function CarouselButton({ dir, onClick }: { dir: "prev" | "next"; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={dir === "prev" ? "Previous review" : "Next review"}
      className="flex size-12 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:border-orange hover:bg-orange"
    >
      <ArrowIcon className={cn("size-4", dir === "prev" && "rotate-180")} />
    </button>
  );
}

/** Google "G" mark, used only to attribute where the reviews come from. */
export function GoogleG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} role="img" aria-label="Google">
      <path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9.1 3.6l6.8-6.8C35.8 2.4 30.3 0 24 0 14.6 0 6.6 5.4 2.6 13.3l7.9 6.1C12.4 13.6 17.7 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.1 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.4c-.5 2.9-2.2 5.3-4.6 6.9l7.4 5.8c4.3-4 6.9-9.9 6.9-17.2z" />
      <path fill="#FBBC05" d="M10.5 28.6c-.5-1.4-.8-3-.8-4.6s.3-3.2.8-4.6l-7.9-6.1C1 16.6 0 20.2 0 24s1 7.4 2.6 10.7l7.9-6.1z" />
      <path fill="#34A853" d="M24 48c6.5 0 11.9-2.1 15.9-5.8l-7.4-5.8c-2.2 1.5-5 2.3-8.5 2.3-6.3 0-11.6-4.1-13.5-9.9l-7.9 6.1C6.6 42.6 14.6 48 24 48z" />
    </svg>
  );
}

/** Google-style rating badge: pill, "G" mark, gold stars, score, source line. */
export function GoogleRatingBadge({ score, href, className }: { score: number; href?: string; className?: string }) {
  const body = (
    <>
      <GoogleG className="size-9 shrink-0" />
      <span className="flex flex-col gap-1">
        <span className="flex items-center gap-3">
          <span className="flex gap-0.5 text-[#FBBC04]" role="img" aria-label={`${score} out of 5 stars`}>
            {Array.from({ length: 5 }, (_, i) => (
              <svg key={i} viewBox="0 0 20 20" className="size-[1.15rem]" fill="currentColor" aria-hidden>
                <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9z" />
              </svg>
            ))}
          </span>
          <span className="font-display text-[1.35rem] leading-none font-bold text-ink tabular">{score.toFixed(1)}</span>
        </span>
        <span className="text-[0.92rem] leading-none text-ink/60">Rated on Google Reviews</span>
      </span>
    </>
  );
  const cls = cn(
    "inline-flex w-fit items-center gap-4 rounded-full bg-cream-50 py-3.5 pr-7 pl-5 shadow-[0_10px_30px_-12px_rgb(0_0_0/0.45)] ring-1 ring-black/5",
    href && "transition-transform duration-500 ease-[var(--ease-expo)] hover:-translate-y-0.5",
    className,
  );
  return href ? (
    <a href={href} target="_blank" rel="noreferrer" className={cls} aria-label={`Rated ${score.toFixed(1)} out of 5 on Google Reviews`}>
      {body}
    </a>
  ) : (
    <span className={cls}>{body}</span>
  );
}
