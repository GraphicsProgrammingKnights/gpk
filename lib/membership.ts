/**
 * Membership constants shared by the homepage section, the navbar button,
 * the checkout route, and the success page.
 *
 * Once per membership cycle: update `term` here and point STRIPE_PRICE_ID at
 * that cycle's Stripe Price. The Stripe Price is the source of truth for the
 * amount charged; `priceLabel` is display only.
 */
export const MEMBERSHIP = {
  /** Membership cycle label. Mirrors the Stripe Product name ("GPK Membership - 2026-27"). */
  term: "2026-27",
  /** Display only. The amount actually charged comes from the Stripe Price. */
  priceLabel: "$20",
  cadence: "per academic year",
  // TODO(officers): confirm this copy before launch.
  perks: [
    "Official GPK T-shirt (pick your size at checkout)",
    "Member-only events and socials",
    "Supports workshops, monthly challenges, and speaker events",
  ],
  discordInvite: "https://discord.gg/XwDHkT3fRa",
  /** Shown as a required dropdown on Stripe Checkout. Values must be alphanumeric. */
  shirtSizes: [
    { label: "XS", value: "xs" },
    { label: "S", value: "s" },
    { label: "M", value: "m" },
    { label: "L", value: "l" },
    { label: "XL", value: "xl" },
    { label: "2XL", value: "2xl" },
    { label: "3XL", value: "3xl" },
  ],
} as const;
