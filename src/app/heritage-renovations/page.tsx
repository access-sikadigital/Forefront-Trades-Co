import { ServicePageTemplate, serviceMetadata } from "@/components/templates/ServicePageTemplate";

export const metadata = serviceMetadata("heritage");

export default function Page() {
  return <ServicePageTemplate slug="heritage" />;
}
