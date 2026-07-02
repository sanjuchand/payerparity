import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { MethodologyCards } from "@/components/MethodologyCards";
import { SectionHeading } from "@/components/SectionHeading";
import { CMS_ADJUSTORS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "How PayerParity turns payer disclosure files into documented hospital negotiation leverage — methodology-aware, not just file retrieval.",
};

const STEPS = [
  {
    number: "1",
    title: "We pull your payer's disclosed files",
    body: "Federal law requires payers to publish machine-readable files showing what they pay hospitals. These aren't estimates — they're the payer's own contracted rates. We access and parse these files for your specific payer relationships.",
    detail:
      "You don't need to provide sensitive contract terms upfront. We start with publicly mandated disclosure data.",
  },
  {
    number: "2",
    title: "We identify the correct pricing methodology",
    body: "MRF files often display rates as if everything is fee-for-service, but the underlying pricing methodology behind a given rate may not be. Before any comparison, we decode which methodology actually applies:",
    showMethodologies: true,
    detail:
      "Comparing an FFS-based rate to a case-rate-based rate for what looks like the same service is not apples-to-apples. Decoding the methodology behind each disclosed rate is part of what PayerParity does — it's not just file retrieval, it's methodology-aware interpretation.",
  },
  {
    number: "3",
    title: "We find comparable facilities paid more",
    body: "Within your payer's network, we identify hospitals receiving higher reimbursement for the same code under the same pricing methodology. For inpatient stays, that means MS-DRG-to-MS-DRG comparisons under CMS's Inpatient Prospective Payment System — not CPT codes, which apply to outpatient and professional billing.",
    detail:
      "The comparison is payer-specific, code-specific, and methodology-specific. We're not showing you a national average — we're showing you what this payer already pays a facility like yours for the same type of hospital stay, priced the same way.",
    showAdjustors: true,
  },
  {
    number: "4",
    title: "You get a documented negotiating position",
    body: "The output is a payer-sourced case for a better contract — specific codes, specific comparable facilities, specific rate differences, all traceable to the payer's own mandated disclosure.",
    detail:
      "This isn't a modeled benchmark a payer can wave away. It's their own numbers, their own precedent, documented and ready for your next contracting conversation.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pb-12 pt-16 sm:pt-24">
        <SectionHeading
          eyebrow="How it works"
          title="From payer disclosure to negotiation leverage"
          description="A plain-language walkthrough for hospital executives — no data science degree required."
        />
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="space-y-16">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="grid gap-6 border-b border-card-border pb-16 last:border-0 lg:grid-cols-[80px_1fr]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-muted text-lg font-semibold text-accent">
                {step.number}
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-primary">
                  {step.title}
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-muted">
                  {step.body}
                </p>
                {"showMethodologies" in step && step.showMethodologies && (
                  <div className="mt-6">
                    <MethodologyCards />
                  </div>
                )}
                {"showAdjustors" in step && step.showAdjustors && (
                  <div className="mt-6 rounded-xl border border-card-border bg-card/30 p-6">
                    <h3 className="text-sm font-semibold text-foreground">
                      We also account for legitimate CMS payment differences
                    </h3>
                    <p className="mt-2 text-sm text-muted">
                      Because commercial rates are often expressed as a percentage
                      of Medicare, and Medicare&apos;s own payment varies
                      facility-to-facility, we net out CMS-recognized adjustors
                      before presenting a gap as leverage:
                    </p>
                    <ul className="mt-4 space-y-2">
                      {CMS_ADJUSTORS.map((factor) => (
                        <li
                          key={factor}
                          className="flex items-start gap-2 text-sm text-muted"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          {factor}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <p className="mt-4 text-sm leading-relaxed text-muted/80">
                  {step.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-card-border bg-card/20">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-xl font-semibold text-primary">
            A note on terminology
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted">
            Hospital inpatient stays are paid using{" "}
            <strong className="text-foreground">MS-DRG</strong> codes under
            CMS&apos;s Inpatient Prospective Payment System — not CPT codes,
            which apply to outpatient and professional physician billing. When we
            say &ldquo;the same hospital stay,&rdquo; we mean the same
            MS-DRG, priced under the same methodology.
          </p>
          <Link
            href="/case-study"
            className="mt-6 inline-block text-sm font-medium text-accent hover:underline"
          >
            See a real example in our case study →
          </Link>
        </div>
      </section>

      <CTASection />
    </>
  );
}
