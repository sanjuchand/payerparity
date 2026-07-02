import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/SectionHeading";
import { FOUNDERS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description:
    "PayerParity was built by operators who worked inside payer contract-modeling systems and hospital price transparency infrastructure.",
};

const PRINCIPLES = [
  {
    title: "Evidence first",
    description:
      "Every claim on this site traces to payer-disclosed data. We don't sell modeled optimism — we find the receipts.",
  },
  {
    title: "Methodology-aware",
    description:
      "Decoding which pricing methodology underlies each rate — DRG, APC, case rate, FFS — is part of the product, not an afterthought.",
  },
  {
    title: "Built for operators",
    description:
      "Our buyers are CFOs and contracting VPs, not data scientists. We translate transparency files into negotiating positions.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pb-12 pt-16 sm:pt-24">
        <SectionHeading
          eyebrow="About"
          title="Built from the inside, not the outside"
          description="PayerParity was founded by people who built machine-readable file infrastructure, worked inside payer contract-modeling tools, and understand hospital payment mechanics at the code and methodology level — not analysts scraping public files from the sidelines."
        />
      </section>

      <section className="border-y border-card-border bg-card/20">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold text-primary">Our story</h2>
          <div className="mt-6 max-w-3xl space-y-4 leading-relaxed text-muted">
            <p>
              Hospital price transparency regulation created an enormous volume of
              publicly available rate data. Most of it sits unused — too raw, too
              complex, and too disconnected from the contracting conversations
              where it could matter most.
            </p>
            <p>
              PayerParity exists because the most powerful comparison in a
              contract negotiation isn&apos;t a national benchmark. It&apos;s
              what the payer already pays another hospital in their own network
              for the same service — documented in files they&apos;re federally
              required to publish, priced under the same methodology.
            </p>
            <p>
              We built the tooling to find that comparison, confirm methodology
              alignment, account for legitimate CMS payment differences, and
              deliver it as a documented negotiating position. Not a dashboard.
              Not a data subscription. Leverage.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading eyebrow="Team" title="Founding team" />
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {FOUNDERS.map((founder) => (
            <div
              key={founder.name}
              className="rounded-xl border border-card-border bg-card/50 p-6"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-muted text-lg font-semibold text-accent">
                {founder.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <h3 className="mt-4 font-semibold text-foreground">
                {founder.name}
              </h3>
              <p className="text-sm text-accent">{founder.title}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {founder.bio}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-card-border bg-card/20">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <SectionHeading title="How we work" />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {PRINCIPLES.map((principle) => (
              <div key={principle.title}>
                <h3 className="font-semibold text-foreground">
                  {principle.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to talk?"
        description="Whether you want a Parity Report for your facility or just want to understand if this applies to your contracting situation, we're happy to have a conversation."
      />
    </>
  );
}
