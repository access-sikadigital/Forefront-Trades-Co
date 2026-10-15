/** Privacy policy and website terms. DRAFTS: TODO(client) legal review before launch. */
// DRAFT: TODO(client) review by the client's lawyer before launch.
// These are starting drafts for the client's review, not legal advice.
// TODO(client): ABN. Add the business's ABN (and legal entity name, if different
// from the trading name) to both documents once confirmed.
// TODO(client): confirm with the lawyer whether the business is covered by the
// Privacy Act small business exemption. The policy is written to follow the APPs
// either way, which is the conservative position.
// TODO(client): confirm which tools are actually live at launch (Google Analytics,
// Google Ads, Meta pixel, GoHighLevel) and remove any that are not used.
import { site } from "@/config/site";

export type LegalDoc = {
  meta: { title: string; description: string };
  title: string;
  updated: string;
  intro: string;
  sections: { heading: string; paragraphs: string[]; list?: string[] }[];
};

// TODO(client): confirm enquiry inbox (site.email is unconfirmed).
const email = site.email;
const phone = site.phone.display;
const address = site.address.full;

export const privacyPolicy: LegalDoc = {
  meta: {
    title: "Privacy Policy",
    description:
      "How Forefront Trades Co. collects, uses, stores and shares your personal information, and how to access, correct or ask questions about it.",
  },
  title: "Privacy Policy",
  updated: "October 2026",
  intro: `This policy explains how ${site.name} ("we", "us", "our") handles personal information collected through ${site.url.replace("https://", "")} and when you deal with us about a renovation or extension. We aim to handle personal information in line with the Australian Privacy Principles in the Privacy Act 1988 (Cth).`,
  sections: [
    {
      heading: "What we collect",
      paragraphs: [
        "We only collect the information we need to respond to you and to quote, plan and build your project.",
        "When you send an enquiry through our website, we ask for:",
      ],
      list: [
        "Your name",
        "Phone number",
        "Email address",
        "Suburb",
        "The service you are interested in",
        "Your budget range",
        "Your timeframe",
        "Whether you already have plans",
        "Any message you choose to include",
      ],
    },
    {
      heading: "Other information we may collect",
      paragraphs: [
        "If you go on to work with us, we may also collect your property address, plans, photos of your home, and details needed for quotes, contracts, permits, insurance and payments.",
        "When you visit our website, our analytics and advertising tools may collect technical information such as your IP address, device and browser type, pages visited, how you arrived at the site, and whether you submitted an enquiry. See \"Cookies, analytics and advertising\" below.",
        "We do not ask for sensitive information (such as health information) through our website. Please do not include it in your message.",
      ],
    },
    {
      heading: "How we collect it",
      paragraphs: [
        "We collect personal information directly from you, for example when you fill in our enquiry form, call, email or message us, or meet us at your home.",
        "We may also receive information from third parties you have involved in your project, such as your architect, designer or other consultants, and from the analytics and advertising tools described below.",
        "You can browse our website without telling us who you are. If you would rather not give us your contact details, we may not be able to respond to your enquiry or provide a quote.",
      ],
    },
    {
      heading: "Why we collect it and how we use it",
      paragraphs: ["We use personal information to:"],
      list: [
        "Respond to your enquiry and arrange a consultation or home visit",
        "Prepare quotes, designs, contracts and project documents",
        "Plan, manage and complete building work, and handle warranty matters",
        "Apply for permits and meet our legal, insurance and regulatory obligations",
        "Communicate with you about your project",
        "Send you occasional updates or marketing, where permitted (see \"Marketing and opting out\")",
        "Understand how people use our website and measure how well our advertising works",
        "Improve our website and services",
      ],
    },
    {
      heading: "Who we share it with",
      paragraphs: [
        "We do not sell your personal information. We share it only where needed for the purposes above, or where the law requires or allows it. This may include:",
      ],
      list: [
        "Our team, who receive new enquiries by SMS and email so they can respond quickly",
        "Our customer relationship management (CRM) system, GoHighLevel, where enquiries are stored and managed",
        "Designers, engineers, surveyors, trades and suppliers working on your project",
        "Building surveyors, councils, insurers and regulators, where needed for your project",
        "Email, SMS, cloud storage, website hosting and IT service providers",
        "Analytics and advertising providers such as Google and Meta (see below)",
        "Our professional advisers, such as accountants and lawyers",
        "Anyone else you ask us to share it with, or where required by law",
      ],
    },
    {
      heading: "Overseas disclosure",
      paragraphs: [
        "Some of the services we use, including our CRM, cloud storage, email and SMS providers, and analytics and advertising platforms such as Google and Meta, may store or process information outside Australia. This may include the United States and other countries where those providers or their data centres are located.",
        "We choose reputable providers, but we do not control where they store data. By giving us your information, you acknowledge it may be handled overseas in this way.",
      ],
    },
    {
      heading: "Marketing and opting out",
      paragraphs: [
        "We may send you emails or SMS messages about our services if you have agreed to this, or where the law otherwise allows it.",
        "Every marketing email or SMS will include a way to unsubscribe. You can also ask us to stop at any time using the contact details below. We will still contact you about an active enquiry or project where needed.",
      ],
    },
    {
      heading: "Cookies, analytics and advertising",
      paragraphs: [
        "Our website may use cookies and similar technologies (small files or code that run in your browser). We may use tools such as Google Analytics, Google Ads and the Meta pixel to:",
      ],
      list: [
        "Understand how visitors find and use our website",
        "Measure how many enquiries come from our advertising",
        "Send conversion information back to Google and Meta so they can report on and improve our ads",
        "Show our ads to people who have visited our website",
      ],
    },
    {
      heading: "Your choices about cookies and tracking",
      paragraphs: [
        "Google and Meta handle the information their tools collect under their own privacy policies. They may combine it with other information they hold about you, for example if you are signed in to a Google, Facebook or Instagram account.",
        "You can block or delete cookies in your browser settings, use Google's opt-out browser add-on for Google Analytics, and adjust your ad preferences in your Google and Meta account settings. Some parts of the website may not work as intended if you block cookies.",
      ],
    },
    {
      heading: "Embedded content",
      paragraphs: [
        "Our website shows Google reviews. Displaying this content may allow Google to collect information about your visit under its own privacy policy.",
        "Videos on our website are hosted on our own website rather than on a third-party video platform.",
        "Our website may link to other sites, such as our social media pages. We are not responsible for how those sites handle your information.",
      ],
    },
    {
      heading: "How we store and protect it",
      paragraphs: [
        "We store personal information electronically, using our CRM and other cloud-based services, and in some cases on paper.",
        "We take reasonable steps to protect it from misuse, interference, loss, and unauthorised access, change or disclosure. These include limiting access to people who need it and using password-protected systems. No method of sending or storing information online is completely secure, so we cannot guarantee the security of information you send us.",
        "We keep personal information for as long as we need it for the purposes above, or as required by law. When we no longer need it, we take reasonable steps to destroy or de-identify it.",
      ],
    },
    {
      heading: "Accessing and correcting your information",
      paragraphs: [
        "You can ask for access to the personal information we hold about you, or ask us to correct it if it is wrong, out of date or incomplete. Contact us using the details below.",
        "We will respond within a reasonable time, usually within 30 days. We may need to confirm your identity first. If we cannot give you access or make a correction, we will explain why in writing, unless it would be unreasonable to do so.",
      ],
    },
    {
      heading: "Complaints",
      paragraphs: [
        "If you have a concern about how we have handled your personal information, please contact us first and give us a chance to put it right. We will look into it and respond within a reasonable time, usually within 30 days.",
        "If you are not satisfied with our response, you can complain to the Office of the Australian Information Commissioner (OAIC) at www.oaic.gov.au or on 1300 363 992.",
      ],
    },
    {
      heading: "Changes to this policy",
      paragraphs: [
        "We may update this policy from time to time. The latest version will always be on this page, with the date it was last updated.",
      ],
    },
    {
      heading: "Contact us",
      paragraphs: [
        "For privacy questions, requests or complaints, contact:",
      ],
      list: [
        site.name,
        address,
        `Phone: ${phone}`,
        `Email: ${email}`,
      ],
    },
  ],
};

export const terms: LegalDoc = {
  meta: {
    title: "Terms of Use",
    description:
      "The terms that apply when you use the Forefront Trades Co. website, including content accuracy, intellectual property, liability and governing law.",
  },
  title: "Website Terms of Use",
  updated: "October 2026",
  intro: `These terms apply to your use of the ${site.name} website at ${site.url.replace("https://", "")}. By using the website, you agree to these terms. If you do not agree, please do not use the website.`,
  sections: [
    {
      heading: "About us",
      paragraphs: [
        `This website is operated by ${site.name}, ${address}. We are a registered builder in Victoria (registration ${site.registeredBuilder}).`,
      ],
    },
    {
      heading: "Using the website",
      paragraphs: [
        "You may use this website for your own personal, non-commercial purposes, such as learning about our services and contacting us. When using it, you must not:",
      ],
      list: [
        "Break any law or infringe anyone else's rights",
        "Submit false, misleading or someone else's details through our forms",
        "Send spam, malicious code or anything harmful",
        "Try to gain unauthorised access to the website or the systems behind it",
        "Interfere with the website's operation or other people's use of it",
        "Copy or scrape content in bulk, including by automated means",
      ],
    },
    {
      heading: "General information only, not a quote",
      paragraphs: [
        "The content on this website is general information about our services. It is not a quote, an offer, or professional advice for your particular home or project.",
        "Any prices, cost ranges, cost calculator results, timeframes and examples on the website are indicative only. The actual price, scope, inclusions and timeframe for your project are confirmed only in a written building contract signed by you and us.",
        "Project photos show completed work and are for illustration. Finishes, materials and products shown may not be available or suitable for every project.",
        "Reviews and testimonials reflect individual clients' experiences. Your experience may differ.",
        "We try to keep the website accurate and up to date, but we do not promise that all content is complete, current or error-free. We may change or remove content at any time without notice.",
      ],
    },
    {
      heading: "Intellectual property",
      paragraphs: [
        `The content on this website, including text, photos, videos, designs, graphics and our logo, is owned by or licensed to ${site.name}. It is protected by copyright and other laws.`,
        "You may view and print pages for your own personal use. You must not copy, reproduce, publish, modify or use any content for commercial purposes without our written permission, except as allowed by law.",
      ],
    },
    {
      heading: "Third-party links and content",
      paragraphs: [
        "Our website may include links to other websites, embedded Google reviews, and other third-party content. We provide these for convenience. We do not control and are not responsible for third-party websites or content, and a link does not mean we endorse them.",
      ],
    },
    {
      heading: "Australian Consumer Law",
      paragraphs: [
        "Nothing in these terms excludes, restricts or changes any right or remedy you have under the Australian Consumer Law or any other law that cannot be excluded, restricted or changed. This includes the consumer guarantees and any statutory warranties that apply to domestic building work in Victoria.",
      ],
    },
    {
      heading: "Limitation of liability",
      paragraphs: [
        "Subject to the section above, and to the extent permitted by law:",
      ],
      list: [
        "The website is provided \"as is\", and we do not guarantee it will always be available, uninterrupted or free of viruses or errors",
        "We are not liable for any loss or damage arising from your use of, or reliance on, the website or its content, including any indirect or consequential loss",
        "Where our liability for a breach of a consumer guarantee can be limited, it is limited to supplying the relevant services again, or paying the cost of having them supplied again",
      ],
    },
    {
      heading: "Your building contract comes first",
      paragraphs: [
        "These terms cover use of the website only. If you engage us to carry out work, that work is governed by your written building contract. If anything in these terms conflicts with your contract, the contract applies.",
      ],
    },
    {
      heading: "Privacy",
      paragraphs: [
        "Our Privacy Policy explains how we handle personal information collected through this website, including through our enquiry form, analytics and advertising tools.",
      ],
    },
    {
      heading: "Governing law",
      paragraphs: [
        "These terms are governed by the laws of Victoria, Australia. You and we agree to submit to the non-exclusive jurisdiction of the courts of Victoria and the courts that can hear appeals from them.",
      ],
    },
    {
      heading: "Changes to these terms",
      paragraphs: [
        "We may update these terms from time to time by publishing a new version on this page. The version on this page when you use the website is the one that applies.",
      ],
    },
    {
      heading: "Contact us",
      paragraphs: ["If you have a question about these terms, contact:"],
      list: [
        site.name,
        address,
        `Phone: ${phone}`,
        `Email: ${email}`,
      ],
    },
  ],
};
