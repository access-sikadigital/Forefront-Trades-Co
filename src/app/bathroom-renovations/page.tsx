import { ServicePageTemplate, serviceMetadata } from "@/components/templates/ServicePageTemplate";

export const metadata = serviceMetadata("bathroom");

export default function Page() {
  return <ServicePageTemplate slug="bathroom" />;
}
