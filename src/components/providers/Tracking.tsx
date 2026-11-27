import Script from "next/script";
import { tracking } from "@/config/site";

/**
 * Google Tag Manager and Microsoft Clarity, loaded after hydration.
 * GTM container GTM-K7GQ66C ("FOR-01 - Forefront Trades Co.", access@sikadigital.com) holds
 * GA4 (G-75M832GWDL), Google Ads conversions and call tracking. The site pushes a
 * `generate_lead` dataLayer event on a successful enquiry (see lib/analytics.ts).
 */
export function Tracking() {
  return (
    <>
      <Script id="gtm" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${tracking.gtmId}');`}
      </Script>
      <Script id="clarity" strategy="afterInteractive">
        {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${tracking.clarityId}");`}
      </Script>
    </>
  );
}

/** GTM fallback for visitors without JavaScript. Place first inside <body>. */
export function TrackingNoScript() {
  return (
    <noscript>
      <iframe src={`https://www.googletagmanager.com/ns.html?id=${tracking.gtmId}`} height="0" width="0" style={{ display: "none", visibility: "hidden" }} />
    </noscript>
  );
}
