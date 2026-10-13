"use client";

import { useId, useMemo, useState } from "react";
import { PhoneButton } from "@/components/ui/Button";
import { serviceArea } from "@/content/areas";
import { cn } from "@/lib/utils";

const all = serviceArea.flatMap((c) => c.suburbs.map((s) => ({ suburb: s, council: c.council })));
const norm = (v: string) => v.toLowerCase().replace(/[^a-z]/g, "");

/** Type a suburb → instant answer: in our area (with council) or "call us". */
export function SuburbChecker() {
  const id = useId();
  const [q, setQ] = useState("");
  const query = norm(q);

  const result = useMemo(() => {
    if (query.length < 3) return null;
    const exact = all.find((x) => norm(x.suburb) === query);
    if (exact) return { status: "yes" as const, ...exact };
    const partial = all.filter((x) => norm(x.suburb).startsWith(query)).slice(0, 4);
    if (partial.length) return { status: "maybe" as const, partial };
    return { status: "no" as const };
  }, [query]);

  return (
    <div className="rounded-[6px] bg-white p-6 shadow-[0_30px_60px_-35px_rgb(29_7_40/0.6)] sm:p-8">
      <label htmlFor={id} className="label !text-[0.7rem] !tracking-[0.16em] text-purple/70">
        Check your suburb
      </label>
      <input
        id={id}
        type="text"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="e.g. Yarraville"
        autoComplete="address-level2"
        className="mt-3 h-14 w-full rounded-[3px] border border-purple/20 bg-cream-50 px-4 font-display text-lg text-purple outline-none placeholder:text-ink/35 focus:border-orange focus:ring-2 focus:ring-orange/20"
      />

      <div aria-live="polite" className="mt-5 min-h-[3.5rem]">
        {result?.status === "yes" && (
          <p className="flex items-start gap-3 text-lg text-ink">
            <span aria-hidden className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-orange text-sm text-white">
              ✓
            </span>
            <span>
              <strong className="font-display text-purple">Yes, we build in {result.suburb}.</strong> It&rsquo;s in {result.council}, one of our core areas.
            </span>
          </p>
        )}
        {result?.status === "maybe" && (
          <div className="flex flex-wrap items-center gap-2 text-base text-ink/70">
            Did you mean
            {result.partial.map((p) => (
              <button
                key={p.suburb}
                type="button"
                onClick={() => setQ(p.suburb)}
                className="rounded-full border border-purple/20 px-3 py-1 font-display text-sm font-medium text-purple hover:border-orange hover:text-orange"
              >
                {p.suburb}
              </button>
            ))}
          </div>
        )}
        {result?.status === "no" && (
          <div className="space-y-4">
            <p className="text-lg text-ink">
              <strong className="font-display text-purple">Not on our core list</strong>, but we take on larger jobs further out. Give us a call and we&rsquo;ll tell you straight away.
            </p>
            <PhoneButton variant="dark" size="sm" />
          </div>
        )}
        {!result && <p className={cn("text-base text-ink/55")}>Start typing your suburb to check.</p>}
      </div>
    </div>
  );
}
