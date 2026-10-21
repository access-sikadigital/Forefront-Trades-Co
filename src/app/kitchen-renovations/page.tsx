import { ServicePageTemplate, serviceMetadata } from "@/components/templates/ServicePageTemplate";

export const metadata = serviceMetadata("kitchen");

export default function Page() {
  return <ServicePageTemplate slug="kitchen" />;
}
