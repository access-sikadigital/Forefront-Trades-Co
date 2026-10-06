import type { Metadata, Viewport } from "next";
import { Cursor } from "@/components/layout/Cursor";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Preloader } from "@/components/layout/Preloader";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { InlineScript } from "@/components/ui/InlineScript";
import { site } from "@/config/site";
import { fontVariables } from "@/lib/fonts";
import { PRELOADER_SEEN_KEY } from "@/lib/intro";
import { organizationJsonLd } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Renovation & Extension Builders Melbourne | Forefront Trades Co.",
    template: "%s | Forefront Trades Co.",
  },
  description: site.description,
  applicationName: site.name,
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: site.name,
    images: [{ url: "/images/projects/footscray/pool-extension.jpg", width: 2400, height: 1600, alt: "Forefront Trades Co. rear extension and pool, Footscray" }],
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/brand/logo/logomark-orange.svg" },
};

export const viewport: Viewport = {
  themeColor: "#3d1152",
  colorScheme: "light",
};

/** Runs before paint: flags JS, and skips the preloader on repeat visits / reduced motion. */
const bootScript = `(function(){var d=document.documentElement;d.classList.add('js');try{if(sessionStorage.getItem('${PRELOADER_SEEN_KEY}')||matchMedia('(prefers-reduced-motion: reduce)').matches)d.classList.add('preloader-seen')}catch(e){}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-AU" className={fontVariables} suppressHydrationWarning>
      <head>
        <InlineScript html={bootScript} />
      </head>
      <body>
        <a href="#main" className="label fixed top-3 left-3 z-[200] -translate-y-24 bg-orange px-4 py-3 text-white focus:translate-y-0">
          Skip to content
        </a>
        <SmoothScroll>
          <Preloader />
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <Cursor />
        </SmoothScroll>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }} />
      </body>
    </html>
  );
}
