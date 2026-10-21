"use client"; // Error boundaries must be Client Components

import Link from "next/link";
import { ArrowIcon, PhoneButton } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";

/** Runtime error inside the site layout: say so plainly, offer a retry and a way out. */
export default function Error({ retry }: { error: Error & { digest?: string }; retry: () => void }) {
  return (
    <section className="relative bg-ink-950 text-white">
      <div className="container-x pt-28 pb-20 sm:pt-32 lg:pt-40 lg:pb-28">
        <div className="max-w-3xl">
          <Eyebrow light as="h1" className="!text-[0.8rem] !tracking-[0.16em] text-white/90 sm:!text-[0.9rem]">
            Something went wrong
          </Eyebrow>
          <p className="mt-6 font-display text-h2 font-bold text-white">That didn&rsquo;t load properly.</p>
          <p className="mt-6 text-lead text-white/75">It&rsquo;s on our side, not yours. Try again, or call us and we&rsquo;ll help straight away.</p>
          <div className="mt-9 flex flex-wrap items-center gap-3 sm:gap-4">
            <button
              type="button"
              onClick={() => retry()}
              className="label group inline-flex h-13 items-center gap-3 rounded-[3px] bg-orange px-6 !text-[0.78rem] !tracking-[0.14em] text-white transition-colors duration-500 hover:bg-white hover:text-purple sm:h-14"
            >
              Try again
              <ArrowIcon className="size-4 transition-transform duration-500 group-hover:translate-x-1" />
            </button>
            <PhoneButton variant="glass" />
            <Link href="/" className="label !text-[0.72rem] !tracking-[0.14em] text-white/80 underline underline-offset-4 hover:text-white">
              Back to home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
