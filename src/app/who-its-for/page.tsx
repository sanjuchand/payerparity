import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Who It's For",
  description:
    "PayerParity is built for regional hospitals, safety-net systems, and long-tail health systems — not national payers or the largest incumbents' customers.",
};

const PRIMARY_AUDIENCE = [
  {
    role: "VP / Director of Managed Care Contracting",
    pain: "You know you're underpaid, but modeled benchmarks don't survive a payer's objections at the table.",
    gain: "Payer-sourced proof of what they already pay comparable facilities — harder to dismiss.",
  },
  {
    role: "Hospital or Health System CFO",
    pain: "Revenue leakage from below-market contracts is real, but hard to quantify with defensible data.",
    gain: "A documented, payer-disclosed case for rate improvement tied to specific codes and dollars.",
  },
  {
    role: "VP of Revenue Cycle",
    pain: "Your team surfaces underpayment, but contracting needs ammunition the payer will actually accept.",
    gain: "Leverage built from the payer's own mandated files, not third-party models.",
  },
  {
    role: "Contract Negotiators",
    pain: "Every negotiation starts from the payer's frame. You need evidence that reframes the conversation.",
    gain: "A comparable-facility precedent from the same payer — same code, same methodology.",
  },
];

const FIT_CRITERIA = [
  {
    label: "Good fit",
    items: [
      "Regional or community hospitals and health systems",
      "Safety-net hospitals serving disproportionate low-income populations",
      "Long-tail health systems underserved by large transparency vendors",
      "Facilities preparing for contract renewals with major payers",
      "Teams frustrated with modeled benchmarks that payers dismiss",
    ],
    positive: true,
  },
  {
    label: "Not our focus (yet)",
    items: [
      "National payers looking for their own rate intelligence",
      "The largest health systems already served by incumbents like Turquoise Health",
      "Self-serve data exploration without a contracting objective",
    ],
    positive: false,
  },
];

export default function WhoItsForPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pb-12 pt-16 sm:pt-24">
        <SectionHeading
          eyebrow="Who it's for"
          title="Built for the hospitals payers underestimate"
          description="PayerParity is designed for the long-tail segment — regional and safety-net hospitals that need negotiation leverage, not another data dashboard."
        />
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-6 sm:grid-cols-2">
          {PRIMARY_AUDIENCE.map((persona) => (
            <div
              key={persona.role}
              className="rounded-xl border border-card-border bg-card/50 p-6"
            >
              <h3 className="font-semibold text-foreground">{persona.role}</h3>
              <p className="mt-3 text-sm text-muted">
                <span className="font-medium text-foreground/80">Today: </span>
                {persona.pain}
              </p>
              <p className="mt-2 text-sm text-muted">
                <span className="font-medium text-accent">With PayerParity: </span>
                {persona.gain}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-card-border bg-card/20">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold text-primary">
            What they believe today — and what we change
          </h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <blockquote className="rounded-xl border border-card-border bg-card p-6">
              <p className="leading-relaxed text-muted">
                &ldquo;We know we&apos;re underpaid, but we don&apos;t have proof
                the payer will accept. Modeled benchmarks are easy for a payer to
                wave away in a negotiation.&rdquo;
              </p>
            </blockquote>
            <blockquote className="rounded-xl border border-accent/30 bg-accent-muted/20 p-6">
              <p className="leading-relaxed text-foreground">
                &ldquo;PayerParity doesn&apos;t estimate what I should be paid
                — it finds proof, in the payer&apos;s own disclosed files, of
                what they already pay elsewhere. That&apos;s much harder to argue
                with across the table.&rdquo;
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading title="Is PayerParity right for your facility?" />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {FIT_CRITERIA.map((group) => (
            <div
              key={group.label}
              className={`rounded-xl border p-6 ${
                group.positive
                  ? "border-accent/30 bg-accent-muted/10"
                  : "border-card-border bg-card/30"
              }`}
            >
              <h3
                className={`font-semibold ${
                  group.positive ? "text-accent" : "text-muted"
                }`}
              >
                {group.label}
              </h3>
              <ul className="mt-4 space-y-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-muted"
                  >
                    <span
                      className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${
                        group.positive ? "bg-accent" : "bg-muted/50"
                      }`}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted">
          We also work with RCM firms and consultants who refer hospital clients,
          though our primary focus is the facility contracting team directly.{" "}
          <Link href="/contact" className="text-accent hover:underline">
            Get in touch
          </Link>{" "}
          to discuss your situation.
        </p>
      </section>

      <CTASection />
    </>
  );
}
