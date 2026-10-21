import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/shared/LegalPage";
import { terms } from "@/content/legal";

export const metadata: Metadata = {
  title: terms.meta.title,
  description: terms.meta.description,
  alternates: { canonical: "/terms/" },
};

export default function Page() {
  return <LegalPage doc={terms} image="/images/projects/footscray/second-living.jpg" />;
}
