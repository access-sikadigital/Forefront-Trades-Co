import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/shared/LegalPage";
import { privacyPolicy } from "@/content/legal";

export const metadata: Metadata = {
  title: privacyPolicy.meta.title,
  description: privacyPolicy.meta.description,
  alternates: { canonical: "/privacy-policy/" },
};

export default function Page() {
  return <LegalPage doc={privacyPolicy} image="/images/projects/footscray/bedroom.jpg" />;
}
