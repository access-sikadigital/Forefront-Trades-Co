import localFont from "next/font/local";
import { Barlow_Semi_Condensed, Inter_Tight } from "next/font/google";

/**
 * Brand fonts (Brand Guidelines §04):
 *   Graphik            → headings (Bold), sub-headings (Semibold), labels & CTAs (Regular, +20% tracking)
 *   Flama Condensed    → body copy (Book)
 *
 * NOTE: the files in src/assets/fonts are the TRIAL cuts supplied in the brand pack.
 * They are missing glyphs such as & $ % ( ) / and are not licensed for production.
 * Replace them with licensed .woff2 files (same file names) before launch.
 * The *-alt Google fonts fill any missing glyph per-character in the meantime.
 */
export const graphik = localFont({
  src: [
    { path: "../assets/fonts/graphik/Graphik-Regular.woff2", weight: "400", style: "normal" },
    { path: "../assets/fonts/graphik/Graphik-Medium.woff2", weight: "500", style: "normal" },
    { path: "../assets/fonts/graphik/Graphik-Semibold.woff2", weight: "600", style: "normal" },
    { path: "../assets/fonts/graphik/Graphik-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-graphik",
  display: "swap",
  preload: true,
  // No Arial metric fallback: let the *-alt font fill missing trial glyphs instead.
  adjustFontFallback: false,
});

export const flama = localFont({
  src: [
    { path: "../assets/fonts/flama/FlamaCondensed-Light.woff2", weight: "300", style: "normal" },
    { path: "../assets/fonts/flama/FlamaCondensed-Book.woff2", weight: "400", style: "normal" },
    { path: "../assets/fonts/flama/FlamaCondensed-Medium.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-flama",
  display: "swap",
  preload: true,
  adjustFontFallback: false,
});

export const graphikAlt = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-graphik-alt",
  display: "swap",
  // Preloaded: supplies "&" in the hero headline, which must be ready before the split-line intro.
  preload: true,
});

export const flamaAlt = Barlow_Semi_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-flama-alt",
  display: "swap",
  preload: false,
});

export const fontVariables = [graphik.variable, flama.variable, graphikAlt.variable, flamaAlt.variable].join(" ");
