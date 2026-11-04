import { NextResponse } from "next/server";
import type Stripe from "stripe";
import { getStripe } from "@/lib/stripe";
import { MEMBERSHIP } from "@/lib/membership";

const NOT_CONFIGURED = "Dues payments aren't set up yet. Please ask a GPK officer.";
const FAILED = "Couldn't start checkout. Please try again or contact a GPK officer.";

/** Minimal HTML so a member who hits an error still has a way back to the site. */
function errorPage(message: string, status: number): Response {
  const html = `<!doctype html><title>GPK dues</title><p>${message}</p><p><a href="/#membership">Back to the site</a></p>`;
  return new Response(html, { status, headers: { "Content-Type": "text/html; charset=utf-8" } });
}

/** Public origin for Stripe's redirect URLs: the env var, else the (proxy-aware) request origin. */
function siteOrigin(request: Request): string {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "");
  if (configured) return configured;
  const host = request.headers.get("x-forwarded-host") ?? request.headers.get("host");
  const proto = request.headers.get("x-forwarded-proto") ?? new URL(request.url).protocol.replace(":", "");
  return host ? `${proto}://${host}` : new URL(request.url).origin;
}

/** Creates a Stripe hosted Checkout Session and redirects the browser to it. The request body is ignored. */
export async function POST(request: Request): Promise<Response> {
  const priceId = process.env.STRIPE_PRICE_ID;
  if (!process.env.STRIPE_SECRET_KEY || !priceId) return errorPage(NOT_CONFIGURED, 503);

  const siteUrl = siteOrigin(request);

  const params: Stripe.Checkout.SessionCreateParams = {
    mode: "payment",
    line_items: [{ price: priceId, quantity: 1 }],
    customer_creation: "always",
    submit_type: "pay",
    // Stripe requires custom-field keys and dropdown values to be alphanumeric.
    // Both fields are required (no `optional: true`).
    custom_fields: [
      {
        key: "shirtsize",
        label: { type: "custom", custom: "T-shirt size" },
        type: "dropdown",
        dropdown: {
          options: MEMBERSHIP.shirtSizes.map((s) => ({ label: s.label, value: s.value })),
        },
      },
      {
        key: "discord",
        label: { type: "custom", custom: "Discord username" },
        type: "text",
        text: { minimum_length: 2, maximum_length: 37 },
      },
    ],
    metadata: { term: MEMBERSHIP.term },
    payment_intent_data: {
      description: `GPK Membership - ${MEMBERSHIP.term}`,
      metadata: { term: MEMBERSHIP.term },
    },
    success_url: `${siteUrl}/join/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${siteUrl}/#membership`,
  };

  try {
    const session = await getStripe().checkout.sessions.create(params);
    // 303 so the browser follows the redirect with GET rather than re-POSTing.
    if (typeof session.url === "string") return NextResponse.redirect(session.url, 303);
    console.error("checkout session failed:", "session has no url");
  } catch (err) {
    // Log only the message: never the Stripe error object (it can carry request details).
    console.error("checkout session failed:", err instanceof Error ? err.message : String(err));
  }
  return errorPage(FAILED, 502);
}
