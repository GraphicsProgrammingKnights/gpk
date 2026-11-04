import { FaArrowRight, FaCheck } from "react-icons/fa";
import { MEMBERSHIP } from "@/lib/membership";

export default function MembershipSection() {
  return (
    <div className="p-8 sm:p-12 bg-card-background border border-card-border text-text-primary rounded-2xl w-full">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
        {/* Left Column: term badge, price, and blurb */}
        <div className="flex flex-col gap-6">
          <div className="px-5 py-1 bg-accent rounded-full w-fit">
            {MEMBERSHIP.term} Membership
          </div>
          <p className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <span className="text-5xl font-bold">{MEMBERSHIP.priceLabel}</span>
            <span className="text-text-secondary">{MEMBERSHIP.cadence}</span>
          </p>
          <p className="leading-8">
            Pay your dues online and you&apos;re a GPK member for the year. Your
            T-shirt size and Discord username are collected at checkout so we can
            order shirts and hand out roles.
          </p>
        </div>

        {/* Right Column: perks and checkout. Stripe collects every field, so no inputs here. */}
        <div className="flex flex-col gap-6">
          <ul className="flex flex-col gap-2">
            {MEMBERSHIP.perks.map((perk) => (
              <li key={perk} className="flex items-start gap-3 leading-8">
                <FaCheck className="mt-2 h-4 w-4 shrink-0 text-accent-light" aria-hidden="true" />
                {perk}
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-3">
            <form method="POST" action="/api/checkout">
              <button
                type="submit"
                className="inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full bg-accent px-6 py-3 text-lg font-medium text-text-primary transition-colors hover:bg-accent-light focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-light"
              >
                Pay dues
                <FaArrowRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </form>
            <p className="text-sm text-text-secondary">
              Secure checkout by Stripe. Name, email, T-shirt size and Discord username are required.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
