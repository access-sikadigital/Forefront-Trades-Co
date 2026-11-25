"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useId, useState, type FormEvent, type ReactNode } from "react";
import { ArrowIcon, PhoneButton } from "@/components/ui/Button";
import { site } from "@/config/site";
import { cn } from "@/lib/utils";

// Options follow the owner's preview r5.2 (Oct 2026). Keep in step with /api/enquiry/.
export const enquiryServices = [
  "Not sure yet",
  "Bathroom",
  "Kitchen",
  "Laundry",
  "Full home renovation",
  "Ground-floor extension",
  "Second-storey extension",
  "Heritage restoration",
  "More than one space",
] as const;

const budgets = ["Not sure yet", "Under $30k", "$30k–$50k", "$50k–$100k", "$100k–$250k", "$250k or more"];
const timeframes = ["Not sure yet", "As soon as possible", "Within 3 months", "3–6 months", "6–12 months", "12 months or more"];
const planningStages = ["Just ideas", "I have inspiration", "I have a concept", "I have drawings", "I have permits"];
const rangeOptions = ["No preference", "Entry Range", "Premium Range", "Signature Range", "Platinum Range"];

type Status = "idle" | "sending" | "sent" | "error";

// Plain, readable system type for forms (client feedback: brand type too small/condensed to read).
const control =
  "mt-2 block h-[3.25rem] w-full rounded-md border border-ink/20 bg-white px-4 font-sans text-[1.0625rem] text-ink shadow-[inset_0_1px_2px_rgb(0_0_0/0.04)] outline-none transition-colors placeholder:text-ink/40 hover:border-ink/35 focus:border-orange focus:ring-4 focus:ring-orange/15";
const labelClass = "block font-sans text-[0.9375rem] font-medium text-ink";

function Field({ id, label, optional, hint, children }: { id: string; label: string; optional?: boolean | string; hint?: string; children: ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {label}
        {optional && <span className="ml-1.5 font-normal text-ink/50">({optional === true ? "optional" : optional})</span>}
      </label>
      {children}
      {hint && <p className="mt-1.5 text-sm text-ink/55">{hint}</p>}
    </div>
  );
}

/** Native select (accessible, mobile-friendly) restyled with a clean chevron. */
function Select({ id, name, required, defaultValue, placeholder, options }: { id: string; name: string; required?: boolean; defaultValue?: string; placeholder: string; options: readonly string[] }) {
  return (
    <div className="relative">
      <select id={id} name={name} required={required} defaultValue={defaultValue ?? ""} className={cn(control, "cursor-pointer appearance-none pr-12 invalid:text-ink/45")}>
        <option value="" disabled={required}>
          {placeholder}
        </option>
        {options.map((o) => (
          <option key={o} value={o} className="text-ink">
            {o}
          </option>
        ))}
      </select>
      <span aria-hidden className="pointer-events-none absolute top-1/2 right-4 mt-1 -translate-y-1/2 text-ink/60">
        <svg viewBox="0 0 16 16" className="size-4">
          <path d="M3.5 6 8 10.5 12.5 6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </div>
  );
}

/**
 * The site's one enquiry form. Contact details first, then the job (client's
 * requested order); the full version also qualifies budget and plans (Page
 * Blueprint). Posts to /api/enquiry/, then goes to /thank-you/.
 */
export function EnquiryForm({ defaultService, className, compact = false }: { defaultService?: (typeof enquiryServices)[number]; className?: string; compact?: boolean }) {
  const id = useId();
  const router = useRouter();
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    // Phone or email: one is enough (owner preview r5.2).
    if (!String(data.phone ?? "").trim() && !String(data.email ?? "").trim()) {
      setError("Add a phone number or an email address.");
      setStatus("error");
      return;
    }
    const params = new URLSearchParams(window.location.search);
    const utm = Object.fromEntries([...params.entries()].filter(([k]) => k.startsWith("utm_") || k === "gclid" || k === "fbclid"));
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/enquiry/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source: { page: window.location.pathname, utm } }),
      });
      const json = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (res.ok && json.ok) {
        setStatus("sent");
        form.reset();
        // Separate thank-you page: a clean conversion URL for analytics and ad platforms.
        router.push("/thank-you/");
        return;
      }
      setError(json.error === "validation" ? "Please check your name, suburb, project, and your phone number or email." : `We couldn't send that just now. Please call us on ${site.phone.display}.`);
      setStatus("error");
    } catch {
      setError(`We couldn't send that just now. Please call us on ${site.phone.display}.`);
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className={cn("rounded-[6px] bg-white p-7 font-sans text-ink ring-1 ring-ink/10 sm:p-9", className)} role="status">
        <p className="text-base font-semibold text-orange">Enquiry received</p>
        <p className="mt-3 text-2xl leading-tight font-semibold">Thanks. Taking you to the next step&hellip;</p>
        <PhoneButton variant="dark" className="mt-6" />
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className={cn("rounded-[6px] bg-white p-6 font-sans text-ink ring-1 ring-ink/10 sm:p-8", className)}>
      <div className="grid gap-x-4 gap-y-5 sm:grid-cols-2">
        {/* Required: name, suburb, phone or email, project (owner preview r5.2 order) */}
        <Field id={`${id}-name`} label="Name">
          <input id={`${id}-name`} name="name" required autoComplete="name" className={control} />
        </Field>
        <Field id={`${id}-suburb`} label="Suburb">
          <input id={`${id}-suburb`} name="suburb" required autoComplete="address-level2" placeholder="e.g. Yarraville" className={control} />
        </Field>
        <Field id={`${id}-phone`} label="Phone" optional="phone or email">
          <input id={`${id}-phone`} name="phone" type="tel" autoComplete="tel" inputMode="tel" className={control} />
        </Field>
        <Field id={`${id}-email`} label="Email" optional="phone or email">
          <input id={`${id}-email`} name="email" type="email" autoComplete="email" className={control} />
        </Field>
        {/* Full width when it has no partner on its row (no half-empty row) */}
        <div className={cn(!compact && "sm:col-span-2")}>
          <Field id={`${id}-service`} label="Project">
            <Select id={`${id}-service`} name="service" required defaultValue={defaultService} placeholder="Choose…" options={enquiryServices} />
          </Field>
        </div>

        {compact ? (
          <Field id={`${id}-timeframe`} label="Preferred timing" optional>
            <Select id={`${id}-timeframe`} name="timeframe" placeholder="Choose…" options={timeframes} />
          </Field>
        ) : (
          <details className="group rounded-md border border-ink/12 sm:col-span-2 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-3.5">
              <span className="font-sans text-[1.0625rem] font-semibold text-purple">
                Add more detail <span className="ml-1 font-normal text-ink/50">(optional)</span>
              </span>
              <span aria-hidden className="relative size-4 shrink-0 text-orange">
                <span className="absolute top-1/2 left-0 h-0.5 w-4 -translate-y-1/2 bg-current" />
                <span className="absolute top-0 left-1/2 h-4 w-0.5 -translate-x-1/2 bg-current transition-transform duration-300 group-open:scale-y-0" />
              </span>
            </summary>
            <div className="grid gap-x-4 gap-y-5 border-t border-ink/10 p-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <Field id={`${id}-message`} label="About the project" optional>
                  <textarea id={`${id}-message`} name="message" rows={4} className={cn(control, "h-auto resize-y py-3 leading-relaxed")} />
                </Field>
              </div>
              <Field id={`${id}-plans`} label="Where are you up to?" optional>
                <Select id={`${id}-plans`} name="plans" placeholder="Choose…" options={planningStages} />
              </Field>
              <Field id={`${id}-timeframe`} label="Preferred timing" optional hint="A preference, not a booking.">
                <Select id={`${id}-timeframe`} name="timeframe" placeholder="Choose…" options={timeframes} />
              </Field>
              <Field id={`${id}-budget`} label="Approximate budget" optional hint="Helps us understand the project. It isn’t used to set the estimate.">
                <Select id={`${id}-budget`} name="budget" placeholder="Choose…" options={budgets} />
              </Field>
              <Field id={`${id}-range`} label="Range you’re interested in" optional hint="Interest only, not a selection or a quote.">
                <Select id={`${id}-range`} name="range" placeholder="Choose…" options={rangeOptions} />
              </Field>
            </div>
          </details>
        )}

        {/* Honeypot */}
        <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
          <label htmlFor={`${id}-company`}>Company</label>
          <input id={`${id}-company`} name="company" tabIndex={-1} autoComplete="off" />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="group mt-7 inline-flex h-14 w-full items-center justify-center gap-3 rounded-md bg-orange px-6 font-sans text-[1.0625rem] font-semibold text-white transition-colors duration-300 hover:bg-purple disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send my enquiry"}
        <ArrowIcon className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
      </button>
      <p aria-live="polite" className={cn("mt-3 text-[0.9375rem]", status === "error" ? "font-medium text-orange-600" : "text-ink/60")}>
        {status === "error" ? (
          error
        ) : (
          <>
            The first phone or video conversation is free. See our{" "}
            <Link href="/privacy-policy/" className="underline underline-offset-2 hover:text-orange">
              privacy policy
            </Link>
            .
          </>
        )}
      </p>
    </form>
  );
}
