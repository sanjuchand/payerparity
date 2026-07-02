import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "PayerParity engagement models are tailored to your facility's contracting needs. Start with a free Parity Report.",
};

const ENGAGEMENT_OPTIONS = [
  {
    title: "Parity Report",
    subtitle: "Free — starting point",
    description:
      "We run your facility's MRF against a comparable in-network hospital and deliver a documented, payer-sourced gap analysis. A real facility, a real payer, a real number — no commitment required.",
    cta: "Request a report",
    href: "/contact?type=report",
    featured: true,
  },
  {
    title: "Contracting engagement",
    subtitle: "Tailored to your renewal",
    description:
      "Ongoing support for contract negotiations — from initial gap analysis through documented negotiating positions for your payer meetings. Scope and structure depend on your facility and timeline.",
    cta: "Book a call",
    href: "/contact",
    featured: false,
  },
  {
    title: "Health system program",
    subtitle: "Multi-facility",
    description:
      "For health systems with multiple hospitals facing the same payer relationships. Coordinated analysis across facilities with system-level contracting strategy.",
    cta: "Book a call",
    href: "/contact",
    featured: false,
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pb-12 pt-16 sm:pt-24">
        <SectionHeading
          eyebrow="Pricing"
          title="Start with proof, then decide"
          description="Every engagement begins with understanding your facility's specific situation. We don't publish rate cards — hospital contracting is too contextual for one-size-fits-all pricing."
        />
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-6 lg:grid-cols-3">
          {ENGAGEMENT_OPTIONS.map((option) => (
            <div
              key={option.title}
              className={`flex flex-col rounded-xl border p-6 ${
                option.featured
                  ? "border-accent/40 bg-accent-muted/20"
                  : "border-card-border bg-card/50"
              }`}
            >
              {option.featured && (
                <span className="mb-3 inline-block w-fit rounded-full bg-accent px-3 py-0.5 text-xs font-medium text-zinc-900">
                  Recommended start
                </span>
              )}
              <h3 className="text-xl font-semibold text-foreground">
                {option.title}
              </h3>
              <p className="mt-1 text-sm text-accent">{option.subtitle}</p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                {option.description}
              </p>
              <Link
                href={option.href}
                className={`mt-6 inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                  option.featured
                    ? "bg-accent text-zinc-900 hover:bg-accent-hover"
                    : "border border-card-border text-foreground hover:border-accent/50 hover:text-accent"
                }`}
              >
                {option.cta}
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-card-border bg-card/30 p-8">
          <h2 className="text-lg font-semibold text-foreground">
            Book a call to discuss your facility
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted">
            PayerParity engagements are structured around your facility&apos;s
            contracting timeline and the payers you&apos;re focused on. After your
            free Parity Report, we&apos;ll discuss what ongoing support looks like
            — whether that&apos;s a one-time analysis for an upcoming renewal, a
            retainer through negotiation season, or a success-based structure tied
            to rate improvement. We&apos;ll find the right fit in a conversation,
            not a pricing page.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block text-sm font-medium text-accent hover:underline"
          >
            Book a call to discuss your facility →
          </Link>
        </div>
      </section>

      <CTASection
        primaryLabel="Get Your Free Parity Report"
        description="The fastest way to understand if PayerParity applies to your situation. We'll show you what your payer's own files reveal — no commitment."
      />
    </>
  );
}
