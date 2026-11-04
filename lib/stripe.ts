import Stripe from "stripe";

let client: Stripe | undefined;

/**
 * Lazily builds the Stripe client. The key is read at call time, never at
 * module scope, so `next build` (which runs with no env vars) never touches it.
 */
export function getStripe(): Stripe {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) throw new Error("STRIPE_SECRET_KEY is not set");
  if (!client) client = new Stripe(key);
  return client;
}
