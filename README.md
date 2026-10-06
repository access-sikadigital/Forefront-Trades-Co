# Forefront Trades Co. — Website 2.0

Premium design & construct renovation and extension builder, Melbourne.
Next.js 16 (App Router, Turbopack) · Tailwind CSS v4 · GSAP 3.15 (ScrollTrigger, SplitText, DrawSVG, CustomEase) · Lenis.

```bash
npm run dev     # http://localhost:3000
npm run build && npm start
```

## Source of truth

| What | Where |
| --- | --- |
| Brand (colours, type, logo, shapes, icons) | Brand Guidelines 2026 → `src/app/globals.css` `@theme`, `public/brand/` |
| Every URL, keyword, template, build tier | Keyword Map & Sitemap v2 → `src/config/routes.ts` |
| Phone, address, nav, registered builder | `src/config/site.ts` |
| Page copy | `src/content/*.ts` (copy is data — sections never hard-code it) |

Set `built: true` on a route in `routes.ts` when its page ships — only built, indexable routes enter `sitemap.xml`.

## Structure

```
src/
  app/                 routes, layout (fonts, preloader, header/footer), sitemap.ts, robots.ts
  assets/fonts/        Graphik + Flama Condensed (TRIAL — see below)
  components/
    layout/            Header, MenuOverlay, Footer, Preloader, Cursor
    motion/            reusable animation primitives (the only place GSAP lives, plus sections that need bespoke timelines)
                       SplitLines · Reveal · ImageReveal (wipe | logomark tiles) · TextScrub · Counter · Marquee · Magnetic
    providers/         SmoothScroll (Lenis on the GSAP ticker, exposes useLenis)
    sections/home/     one file per home-page section
    ui/                Button/TextLink, Logo (generated from the official SVG), Logomark (drawable), Icon, Eyebrow, SectionHeading
  config/              site.ts, routes.ts
  content/             home.ts
  hooks/               useMediaQuery, useReducedMotion, useIsomorphicLayoutEffect
  lib/                 gsap.ts (plugin registration + house eases), fonts.ts, intro.ts, seo.ts, utils.ts
```

## Photos

Use `<Photo>` (`src/components/ui/Photo.tsx`) for photography, never bare `next/image`. Pass the frame's aspect ratio and width in vw; it reads each photo's real size from `src/content/image-manifest.ts` and requests a source wide enough for the object-cover crop, at quality 85. A landscape photo in a portrait frame needs a source much wider than the frame — sizing by frame width alone is what made images blurry.

After adding or replacing anything in `public/images`, run `npm run images:manifest`.

## Motion system

- House eases `ftc.out` (0.16,1,0.3,1) and `ftc.inOut` (0.76,0,0.24,1) are registered in `lib/gsap.ts` and mirrored as CSS `--ease-expo` / `--ease-quart`.
- `lib/intro.ts` signals when the first-visit preloader finishes; above-the-fold animations use `afterIntro`.
- Elements with `data-reveal` are hidden before hydration (no flash) and revealed by their primitive.
- Every primitive honours `prefers-reduced-motion` (no Lenis, no pinning/scrub, preloader skipped, hero video paused).

## Before launch — open items

1. **Fonts:** the supplied Graphik and Flama files are *trial* cuts. They're missing glyphs (`& $ % ( ) / ' "`) and aren't licensed for the web. Drop licensed `.woff2` files into `src/assets/fonts/` and update `src/lib/fonts.ts`. Until then, Inter Tight / Barlow Semi Condensed fill the missing glyphs.
2. **Client confirmations** (Sitemap v2 → Open Questions) are marked `TODO(client)` in code: tracked phone number, email, social handles, primary offer ($10k interior design vs free consultation).
3. Google reviews feed for `/reviews/` and the home testimonial block (no quotes are invented — only the real video testimonial and the 4.9★ rating are shown).
4. GoHighLevel enquiry flow for `/book-a-consultation/` (service → qualifying questions → contact, UTM + suburb passed through).
