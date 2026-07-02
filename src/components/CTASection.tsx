import Link from "next/link";

type CTASectionProps = {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function CTASection({
  title = "See what your payer already pays elsewhere",
  description = "We'll run your facility's data against comparable in-network hospitals and show you a real, payer-sourced gap — free, as the starting point for a conversation.",
  primaryLabel = "Get Your Facility's Parity Report",
  primaryHref = "/contact?type=report",
  secondaryLabel = "Talk to us",
  secondaryHref = "/contact",
}: CTASectionProps) {
  return (
    <section className="border-y border-card-border bg-accent-muted/30">
      <div className="mx-auto max-w-6xl px-6 py-16 text-center sm:py-20">
        <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-muted">{description}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href={primaryHref}
            className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-zinc-900 transition-colors hover:bg-accent-hover"
          >
            {primaryLabel}
          </Link>
          <Link
            href={secondaryHref}
            className="inline-flex items-center justify-center rounded-lg border border-card-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent/50 hover:text-accent"
          >
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
