"use client"; // Replaces the root layout when it fails, so it brings its own html/body and inline styles.

import { site } from "@/config/site";

export default function GlobalError({ retry }: { error: Error & { digest?: string }; retry: () => void }) {
  return (
    <html lang="en-AU">
      <body style={{ margin: 0, minHeight: "100vh", display: "grid", placeItems: "center", background: "#131213", color: "#fff", fontFamily: "system-ui, sans-serif" }}>
        <main style={{ maxWidth: 560, padding: "48px 24px" }}>
          <p style={{ color: "#ff5000", letterSpacing: "0.16em", textTransform: "uppercase", fontSize: 13, fontWeight: 600 }}>Forefront Trades Co.</p>
          <h1 style={{ fontSize: 40, lineHeight: 1.05, margin: "16px 0" }}>Something went wrong.</h1>
          <p style={{ fontSize: 18, lineHeight: 1.5, opacity: 0.75 }}>Please try again, or call us on {site.phone.display}.</p>
          <div style={{ display: "flex", gap: 12, marginTop: 28, flexWrap: "wrap" }}>
            <button onClick={() => retry()} style={{ background: "#ff5000", color: "#fff", border: 0, padding: "16px 24px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", cursor: "pointer" }}>
              Try again
            </button>
            <a href={site.phone.href} style={{ color: "#fff", border: "1px solid rgba(255,255,255,0.3)", padding: "16px 24px", textDecoration: "none", fontWeight: 700 }}>
              {site.phone.display}
            </a>
          </div>
        </main>
      </body>
    </html>
  );
}
