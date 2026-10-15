import { ServicePageTemplate, serviceMetadata } from "@/components/templates/ServicePageTemplate";

export const metadata = serviceMetadata("extensions");

export default function Page() {
  return <ServicePageTemplate slug="extensions" />;
}
