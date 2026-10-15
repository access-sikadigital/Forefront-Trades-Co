import { ServicePageView, pageMetadata } from "@/components/templates/ServicePageTemplate";
import { subServicePages } from "@/content/service-subpages";

const { page, extras } = subServicePages["second-storey"];

export const metadata = pageMetadata(page);

export default function Page() {
  return <ServicePageView page={page} extras={extras} />;
}
