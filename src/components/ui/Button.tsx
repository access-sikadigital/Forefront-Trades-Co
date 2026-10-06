import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { Magnetic } from "@/components/motion/Magnetic";
import { site } from "@/config/site";
import { cn } from "@/lib/utils";

type Variant = "primary" | "light" | "outline" | "outline-light";

const variants: Record<Variant, string> = {
  primary: "bg-orange text-white hover:bg-purple",
  light: "bg-white text-purple hover:bg-orange hover:text-white",
  outline: "border border-purple/30 text-purple hover:border-purple hover:bg-purple hover:text-white",
  "outline-light": "border border-white/35 text-white hover:border-white hover:bg-white hover:text-purple",
};

type Props = Omit<ComponentProps<typeof Link>, "className"> & {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  magnetic?: boolean;
  arrow?: boolean;
};

/** Brand CTA (Guidelines §04: labels & CTAs set in Graphik Regular, +20% tracking). */
export function Button({ children, variant = "primary", className, magnetic = true, arrow = true, ...props }: Props) {
  const button = (
    <Link
      {...props}
      className={cn(
        "group/btn relative inline-flex h-13 items-center gap-2.5 overflow-hidden rounded-[3px] px-5 whitespace-nowrap sm:h-14 sm:gap-3 sm:px-7 transition-colors duration-500 ease-[var(--ease-expo)]",
        "label !text-[0.72rem] !tracking-[0.12em] sm:!text-[0.8rem] sm:!tracking-[0.16em]",
        variants[variant],
        className,
      )}
    >
      <span className="relative block overflow-hidden">
        <span className="block transition-transform duration-500 ease-[var(--ease-expo)] group-hover/btn:-translate-y-full">{children}</span>
        <span aria-hidden className="absolute inset-0 block translate-y-full transition-transform duration-500 ease-[var(--ease-expo)] group-hover/btn:translate-y-0">
          {children}
        </span>
      </span>
      {arrow && <ArrowIcon className="size-4 transition-transform duration-500 ease-[var(--ease-expo)] group-hover/btn:translate-x-1" />}
    </Link>
  );
  return magnetic ? <Magnetic strength={0.25}>{button}</Magnetic> : button;
}

type PhoneVariant = "light" | "dark" | "glass";

const phoneVariants: Record<PhoneVariant, string> = {
  // White on dark sections — contrasts with the orange primary CTA beside it.
  light: "bg-white text-purple hover:bg-cream",
  // Purple on light (cream) backgrounds.
  dark: "bg-purple text-white hover:bg-purple-950",
  // Frosted, for use over video / imagery.
  glass: "border border-white/30 bg-white/10 text-white backdrop-blur-md hover:border-white hover:bg-white hover:text-purple",
};

/** Click-to-call button: an orange phone tile + the number, set as a proper button. */
export function PhoneButton({
  variant = "light",
  size = "md",
  className,
  magnetic = true,
}: {
  variant?: PhoneVariant;
  size?: "sm" | "md";
  className?: string;
  magnetic?: boolean;
}) {
  const button = (
    <a
      href={site.phone.href}
      aria-label={`Call ${site.phone.display}`}
      className={cn(
        "group/phone inline-flex items-center gap-3 rounded-[3px] transition-colors duration-500 ease-[var(--ease-expo)]",
        size === "sm" ? "h-12 pr-5 pl-1.5" : "h-14 pr-6 pl-2",
        phoneVariants[variant],
        className,
      )}
    >
      <span
        className={cn(
          "flex items-center justify-center rounded-[2px] bg-orange text-white transition-transform duration-500 ease-[var(--ease-expo)] group-hover/phone:rotate-[-8deg]",
          size === "sm" ? "size-9" : "size-10",
        )}
      >
        <PhoneIcon className={size === "sm" ? "size-4" : "size-[18px]"} />
      </span>
      <span className="label tabular !text-[0.82rem] !tracking-[0.12em] whitespace-nowrap">{site.phone.display}</span>
    </a>
  );
  return magnetic ? <Magnetic strength={0.25}>{button}</Magnetic> : button;
}

export function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden>
      <path
        d="M5 3.5h3.2l1.6 4.3-2.2 1.5a11 11 0 0 0 5.1 5.1l1.5-2.2 4.3 1.6V17a3.5 3.5 0 0 1-3.5 3.5A13.5 13.5 0 0 1 1.5 7 3.5 3.5 0 0 1 5 3.5Z"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Underlined text link with a sliding arrow. */
export function TextLink({ children, className, light = false, ...props }: Omit<ComponentProps<typeof Link>, "className"> & { children: ReactNode; className?: string; light?: boolean }) {
  return (
    <Link
      {...props}
      className={cn(
        "group/link label inline-flex items-center gap-2.5 whitespace-nowrap !text-[0.7rem] !tracking-[0.12em] sm:!text-[0.78rem] sm:!tracking-[0.16em]",
        light ? "text-white" : "text-purple",
        className,
      )}
    >
      <span className="relative pb-1">
        {children}
        <span className="absolute inset-x-0 bottom-0 h-px origin-left bg-current transition-transform duration-500 ease-[var(--ease-expo)] group-hover/link:scale-x-0 group-hover/link:origin-right" />
        <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-orange transition-transform delay-150 duration-500 ease-[var(--ease-expo)] group-hover/link:scale-x-100" />
      </span>
      <ArrowIcon className="size-3.5 text-orange transition-transform duration-500 ease-[var(--ease-expo)] group-hover/link:translate-x-1" />
    </Link>
  );
}

export function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} aria-hidden>
      <path d="M1 8h13M9 3l5 5-5 5" strokeLinecap="square" />
    </svg>
  );
}
