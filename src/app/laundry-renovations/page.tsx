import { ServicePageTemplate, serviceMetadata } from "@/components/templates/ServicePageTemplate";

export const metadata = serviceMetadata("laundry");

export default function Page() {
  return <ServicePageTemplate slug="laundry" />;
}
