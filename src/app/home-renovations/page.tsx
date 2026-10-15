import { ServicePageTemplate, serviceMetadata } from "@/components/templates/ServicePageTemplate";

export const metadata = serviceMetadata("home");

export default function Page() {
  return <ServicePageTemplate slug="home" />;
}
