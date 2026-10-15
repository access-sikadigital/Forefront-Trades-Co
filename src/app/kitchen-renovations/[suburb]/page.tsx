import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SuburbPageTemplate, suburbMetadata } from "@/components/templates/SuburbPageTemplate";
import { findSuburbPage, suburbPages } from "@/content/suburbs";

export const dynamicParams = false;

type Props = { params: Promise<{ suburb: string }> };

export function generateStaticParams() {
  return suburbPages.filter((p) => p.service === "kitchen-renovations").map((p) => ({ suburb: p.suburb }));
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  return suburbMetadata("kitchen-renovations", (await props.params).suburb);
}

export default async function Page(props: Props) {
  const { suburb } = await props.params;
  if (!findSuburbPage("kitchen-renovations", suburb)) notFound();
  return <SuburbPageTemplate service="kitchen-renovations" suburb={suburb} />;
}
