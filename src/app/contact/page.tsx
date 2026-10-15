import type { Metadata } from "next";
import Link from "next/link";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { Reveal } from "@/components/motion/Reveal";
import { Areas } from "@/components/sections/home/Areas";
import { PageHero } from "@/components/sections/shared/PageHero";
import { ArrowIcon } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Call Forefront Trades Co. on ${site.phone.display}, email us, or send an enquiry. Office at ${site.address.full}. Renovations & Extensions across Melbourne's inner west and north.`,
  alternates: { canonical: "/contact/" },
};

const ways = [
  { icon: "handshake" as const, label: "Call", value: site.phone.display, href: site.phone.href, note: "The quickest way to reach us." },
  { icon: "article" as const, label: "Email", value: site.email, href: `mailto:${site.email}`, note: "Send plans or photos any time." },
  { icon: "location_on" as const, label: "Office", value: site.address.full, href: site.address.mapUrl, note: "Open in Google Maps." },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        hero={{
          h1: "Contact Forefront Trades Co.",
          title: ["Call, email or", "send us the details."],
          intro: "We're based in Maribyrnong and build across Melbourne's inner west and north.",
          image: { src: "/images/projects/altona/living.jpg", alt: "Living room with a white sofa and timber chairs, Altona" },
          facts: [
            { label: "Phone", value: site.phone.display },
            { label: "Office", value: site.address.suburb },
            { label: "Registered Builder", value: site.registeredBuilder },
          ],
        }}
      />

      <section className="relative bg-white py-section">
        <div className="container-x grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <SectionHeading label="Get in touch" title="Three ways to reach us." className="lg:block" />
            <Reveal as="ul" stagger={0.08} className="mt-10 space-y-3">
              {ways.map((w) => (
                <li key={w.label}>
                  <a
                    href={w.href}
                    {...(w.label === "Office" && { target: "_blank", rel: "noopener" })}
                    className="group flex items-center gap-5 rounded-[6px] bg-cream-50 p-5 ring-1 ring-purple/8 transition-colors hover:bg-cream sm:p-6"
                  >
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-orange text-white">
                      <Icon name={w.icon} className="size-5" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="label block !text-[0.62rem] !tracking-[0.14em] text-purple/60">{w.label}</span>
                      <span className="mt-1 block font-display text-lg leading-snug font-semibold [overflow-wrap:anywhere] text-purple">{w.value}</span>
                      <span className="mt-0.5 block text-sm text-ink/60">{w.note}</span>
                    </span>
                    <ArrowIcon className="size-4 shrink-0 text-orange transition-transform duration-500 group-hover:translate-x-1" />
                  </a>
                </li>
              ))}
            </Reveal>
            <Reveal className="mt-8">
              <p className="text-base text-ink/70">
                Not sure we build in your suburb?{" "}
                <Link href="/areas/" className="font-semibold text-purple underline underline-offset-4 hover:text-orange">
                  Check the list
                </Link>
                .
              </p>
            </Reveal>
          </div>
          <Reveal className="lg:col-span-7">
            <EnquiryForm className="bg-cream-50" />
          </Reveal>
        </div>
      </section>

      <Areas />
    </>
  );
}
