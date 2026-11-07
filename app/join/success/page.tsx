import type { Metadata } from "next";
import Link from "next/link";
import { FaDiscord } from "react-icons/fa";
import { MEMBERSHIP } from "@/lib/membership";

export const metadata: Metadata = {
  title: "You're in | Graphics Programming Knights",
};

// Static page: Stripe redirects here after payment. Reading nothing from the
// request keeps it prerendered so `next build` works with no env vars set.
export default function JoinSuccessPage() {
  return (
    <main className="mx-auto flex min-h-[calc(100svh-4rem)] w-full max-w-7xl flex-col items-center justify-center px-6 py-12 text-text-primary sm:px-10">
      <div className="w-full max-w-2xl rounded-2xl border border-card-border bg-card-background p-8 text-center sm:p-12">
        <div className="mx-auto w-fit rounded-full bg-accent px-5 py-1">
          {MEMBERSHIP.term} Membership
        </div>
        <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl">
          You&apos;re in!
        </h1>
        <p className="mt-4 leading-8 text-text-secondary">
          Thanks for paying your GPK dues. Your T-shirt size and Discord
          username were saved with your payment, and a receipt is on its way to
          your email.
        </p>
        <a
          href={MEMBERSHIP.discordInvite}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex shrink-0 items-center gap-2 rounded-full bg-accent px-6 py-3 text-lg font-medium text-text-primary transition-colors hover:bg-accent-light focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-light"
        >
          Join the Discord
          <FaDiscord className="h-6 w-6" />
        </a>
        <Link
          href="/"
          className="mt-4 block text-sm text-text-secondary transition-colors hover:text-accent-light"
        >
          Back to the site
        </Link>
      </div>
    </main>
  );
}
