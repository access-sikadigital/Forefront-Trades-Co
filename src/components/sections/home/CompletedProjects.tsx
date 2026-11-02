"use client";

import Link from "next/link";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { useLenis } from "@/components/providers/SmoothScroll";
import { ArrowIcon } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projectList } from "@/content/projects";

// Shown on the homepage as in the owner's preview r5.2 (Craigieburn and Bentleigh).
const featured = ["craigieburn", "bentleigh"]
  .map((slug) => projectList.find((p) => p.slug === slug))
  .filter((p): p is (typeof projectList)[number] => Boolean(p));

type Open = { project: number; photo: number } | null;

/** Completed projects: one card per project; tap to step through its photos. */
export function CompletedProjects() {
  const [open, setOpen] = useState<Open>(null);
  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (dir: 1 | -1) =>
      setOpen((o) => {
        if (!o) return o;
        const n = featured[o.project].gallery.length;
        return { ...o, photo: (o.photo + dir + n) % n };
      }),
    [],
  );

  return (
    <section className="relative bg-cream-50 py-section">
      <div className="container-x">
        <SectionHeading
          label="Completed projects"
          title="Completed projects."
          intro="Real Forefront projects. Tap a project to see its photos. Prices and ranges aren’t assigned to these photos."
        />

        <Reveal
          as="ul"
          stagger={0.08}
          className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:gap-6"
        >
          {featured.map((p, i) => (
            <li key={p.slug}>
              <button
                type="button"
                onClick={() => setOpen({ project: i, photo: 0 })}
                className="group flex h-full w-full flex-col overflow-hidden rounded-[6px] bg-white text-left ring-1 ring-purple/8 transition-shadow duration-500 hover:shadow-[0_24px_50px_-28px_rgb(61_17_82/0.45)]"
              >
                <span className="relative block aspect-[3/2] overflow-hidden bg-purple/10">
                  <Photo
                    src={p.cover.src}
                    alt={p.cover.alt}
                    frame={3 / 2}
                    vw={{ desktop: 46, mobile: 92 }}
                    className="transition-transform duration-[1.2s] ease-[var(--ease-expo)] group-hover:scale-[1.04]"
                  />
                </span>
                <span className="flex flex-1 flex-col p-6">
                  <span className="font-display text-h3 leading-tight font-bold text-purple">
                    {p.suburb}
                  </span>
                  <span className="mt-1 text-base text-ink/70">{p.scope}</span>
                  <span className="mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-purple/30 px-4 py-2 font-sans text-[0.95rem] font-semibold text-purple transition-colors group-hover:border-purple group-hover:bg-purple group-hover:text-white">
                    View {p.gallery.length} photos
                  </span>
                </span>
              </button>
            </li>
          ))}
        </Reveal>

        <p className="mt-6 text-base text-ink/70">
          See matching rooms on the{" "}
          <Link
            href="/kitchen-renovations/"
            className="text-purple underline underline-offset-4 hover:text-orange"
          >
            kitchen
          </Link>
          ,{" "}
          <Link
            href="/bathroom-renovations/"
            className="text-purple underline underline-offset-4 hover:text-orange"
          >
            bathroom
          </Link>
          ,{" "}
          <Link
            href="/laundry-renovations/"
            className="text-purple underline underline-offset-4 hover:text-orange"
          >
            laundry
          </Link>{" "}
          and{" "}
          <Link
            href="/home-renovations/"
            className="text-purple underline underline-offset-4 hover:text-orange"
          >
            full-home
          </Link>{" "}
          pages.
        </p>
      </div>

      {open && <Gallery open={open} onClose={close} onStep={step} />}
    </section>
  );
}

function Gallery({
  open,
  onClose,
  onStep,
}: {
  open: { project: number; photo: number };
  onClose: () => void;
  onStep: (dir: 1 | -1) => void;
}) {
  const lenis = useLenis();
  const closeBtn = useRef<HTMLButtonElement>(null);
  const project = featured[open.project];
  const img = project.gallery[open.photo];

  useEffect(() => {
    lenis?.stop();
    document.documentElement.style.overflow = "hidden";
    closeBtn.current?.focus({ preventScroll: true });
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onStep(1);
      if (e.key === "ArrowLeft") onStep(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
      lenis?.start();
    };
  }, [lenis, onClose, onStep]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Project photos: ${project.suburb}`}
      className="fixed inset-0 z-[120] flex flex-col bg-purple-950/95 text-white backdrop-blur-md"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="container-x flex items-center justify-between py-5">
        <div>
          <p className="font-display text-lg font-semibold">{project.suburb}</p>
          <p className="label !text-[0.66rem] !tracking-[0.14em] text-white/60">
            {open.photo + 1} / {project.gallery.length}
          </p>
        </div>
        <button
          ref={closeBtn}
          type="button"
          onClick={onClose}
          className="label rounded-full border border-white/30 px-4 py-2 !text-[0.7rem] text-white hover:border-white"
        >
          Close
        </button>
      </div>
      <div className="container-x relative flex min-h-0 flex-1 items-center justify-center pb-6">
        <figure className="relative h-full w-full">
          <Image
            src={img.src}
            alt={img.alt}
            fill
            sizes="100vw"
            quality={85}
            className="object-contain"
          />
        </figure>
        <button
          type="button"
          onClick={() => onStep(-1)}
          aria-label="Previous photo"
          className="absolute top-1/2 left-2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 hover:bg-white/30 sm:left-6"
        >
          <ArrowIcon className="size-4 rotate-180" />
        </button>
        <button
          type="button"
          onClick={() => onStep(1)}
          aria-label="Next photo"
          className="absolute top-1/2 right-2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 hover:bg-white/30 sm:right-6"
        >
          <ArrowIcon className="size-4" />
        </button>
      </div>
      <p className="container-x pb-6 text-center text-sm text-white/70">
        {img.alt}
      </p>
    </div>
  );
}
