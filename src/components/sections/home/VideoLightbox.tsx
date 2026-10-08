"use client";

import { useEffect, useRef } from "react";
import { ArrowIcon } from "@/components/ui/Button";
import { useLenis } from "@/components/providers/SmoothScroll";

type Video = { src: string; poster: string; name: string; project: string };

/** Full-screen player for client videos: sound on, Esc to close, arrows to step through. */
export function VideoLightbox({
  videos,
  index,
  onClose,
  onStep,
}: {
  videos: readonly Video[];
  index: number | null;
  onClose: () => void;
  onStep: (dir: 1 | -1) => void;
}) {
  const lenis = useLenis();
  const closeBtn = useRef<HTMLButtonElement>(null);
  const open = index !== null;
  const v = open ? videos[index] : null;

  useEffect(() => {
    if (!open) return;
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
  }, [open, lenis, onClose, onStep]);

  if (!v || index === null) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Video: ${v.name}`}
      className="fixed inset-0 z-[120] flex flex-col bg-purple-950/95 text-white backdrop-blur-md"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="container-x flex items-center justify-between py-5">
        <div>
          <p className="font-display text-lg font-semibold">{v.name}</p>
          <p className="label !text-[0.66rem] !tracking-[0.14em] text-white/60">{v.project}</p>
        </div>
        <button
          ref={closeBtn}
          type="button"
          onClick={onClose}
          aria-label="Close video"
          className="flex size-12 items-center justify-center rounded-full border border-white/25 transition-colors hover:border-orange hover:bg-orange"
        >
          <svg viewBox="0 0 16 16" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
            <path d="M2 2l12 12M14 2L2 14" strokeLinecap="square" />
          </svg>
        </button>
      </div>

      <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 pb-6">
        <video key={v.src} className="max-h-full max-w-full rounded-[4px] bg-black" src={v.src} poster={v.poster} controls autoPlay playsInline />
        {videos.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => onStep(-1)}
              aria-label="Previous video"
              className="absolute top-1/2 left-4 hidden size-14 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 transition-colors hover:border-orange hover:bg-orange sm:flex lg:left-10"
            >
              <ArrowIcon className="size-5 rotate-180" />
            </button>
            <button
              type="button"
              onClick={() => onStep(1)}
              aria-label="Next video"
              className="absolute top-1/2 right-4 hidden size-14 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 transition-colors hover:border-orange hover:bg-orange sm:flex lg:right-10"
            >
              <ArrowIcon className="size-5" />
            </button>
          </>
        )}
      </div>
      <p className="label pb-5 text-center !text-[0.66rem] text-white/50 tabular">
        {index + 1} / {videos.length}
      </p>
    </div>
  );
}
