/**
 * Enquiry endpoint for every form on the site (Page Blueprint: enquiry flow into
 * GoHighLevel). Validates, then forwards the lead with its source data to the
 * GHL inbound webhook set in GHL_WEBHOOK_URL.
 *
 * TODO(client): create the GHL inbound webhook and set GHL_WEBHOOK_URL in the
 * hosting environment. Until then this returns 503 and the form asks people to
 * call, so no enquiry is silently lost.
 */

const SERVICES = ["Kitchen", "Bathroom", "Laundry", "Full home renovation", "Extension", "Heritage / period home", "Not sure yet"];

type Enquiry = {
  name: string;
  phone: string;
  email: string;
  suburb: string;
  service: string;
  budget?: string;
  timeframe?: string;
  plans?: string;
  message?: string;
  source?: { page?: string; utm?: Record<string, string> };
};

const clean = (v: unknown, max = 500) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "invalid" }, { status: 400 });
  }

  // Honeypot: real people never fill this field.
  if (clean(body.company)) return Response.json({ ok: true });

  const lead: Enquiry = {
    name: clean(body.name, 120),
    phone: clean(body.phone, 40),
    email: clean(body.email, 160),
    suburb: clean(body.suburb, 80),
    service: clean(body.service, 60),
    budget: clean(body.budget, 60),
    timeframe: clean(body.timeframe, 60),
    plans: clean(body.plans, 60),
    message: clean(body.message, 2000),
    source: typeof body.source === "object" && body.source ? (body.source as Enquiry["source"]) : undefined,
  };

  const missing = (["name", "phone", "email", "suburb", "service"] as const).filter((k) => !lead[k]);
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email);
  const phoneOk = lead.phone.replace(/\D/g, "").length >= 8;
  if (missing.length || !emailOk || !phoneOk || !SERVICES.includes(lead.service)) {
    return Response.json({ ok: false, error: "validation", missing }, { status: 422 });
  }

  const webhook = process.env.GHL_WEBHOOK_URL;
  if (!webhook) return Response.json({ ok: false, error: "not-configured" }, { status: 503 });

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...lead, submittedAt: new Date().toISOString() }),
    });
    if (!res.ok) throw new Error(`GHL ${res.status}`);
    return Response.json({ ok: true });
  } catch {
    return Response.json({ ok: false, error: "upstream" }, { status: 502 });
  }
}
