import { PageHero } from "@/components/sections/shared/PageHero";
import type { ServicePage } from "@/content/services";

/** Service page hero: the shared inner-page hero fed from the service content. */
export function ServiceHero({ page }: { page: ServicePage }) {
  return <PageHero hero={page.hero} />;
}
