import Link from "next/link";
import { ComparisonTable } from "@/components/ComparisonTable";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/SectionHeading";

const STEPS = [
  {
    step: "01",
    title: "Pull payer disclosure files",
    description:
      "We access the machine-readable files your payer is federally required to publish — the same data they use internally.",
  },
  {
    step: "02",
    title: "Decode the pricing methodology",
    description:
      "We identify whether each rate is DRG, APC, case rate, FFS, or another methodology — not everything in an MRF is fee-for-service.",
  },
  {
    step: "03",
    title: "Find comparable facilities",
    description:
      "We locate in-network hospitals the same payer reimburses at a higher rate for the same code and methodology.",
  },
  {
    step: "04",
    title: "Deliver documented leverage",
    description:
      "You receive a payer-sourced, defensible negotiating position — their own numbers, not a modeled estimate.",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(61,183,196,0.12)_0%,_transparent_60%)]" />
        <div className="mx-auto max-w-6xl px-6 pb-20 pt-16 sm:pb-28 sm:pt-24">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
              Payer-sourced negotiation leverage
            </p>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-primary sm:text-5xl lg:text-6xl">
              Your payer already pays another hospital more for the same hospital
              stay.{" "}
              <span className="text-accent">We find it in their own files.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              PayerParity turns federally mandated price transparency data into
              documented negotiation leverage. Not modeled benchmarks — the
              payer&apos;s own disclosed rates, used against their own precedent.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact?type=report"
                className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-hover"
              >
                Get Your Facility&apos;s Parity Report
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center justify-center rounded-lg border border-card-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent/50 hover:text-accent"
              >
                How it works
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-card-border bg-card/30">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <SectionHeading
            eyebrow="Proof point"
            title="A $311 deficit that was really $2,127"
            description="For MS-DRG 690 inside the Tenet network, Texicare pays Resolute Health (New Braunfels) at 184.5% of Medicare and Sierra Campus (El Paso) at 153.1%. Face value, El Paso looks $311 underpaid per case. Held to the payer's own 184.5% precedent, the true gap is $2,127."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-card-border bg-card p-6">
              <p className="text-3xl font-semibold text-accent">184.5%</p>
              <p className="mt-1 text-sm text-muted">Resolute Health · New Braunfels</p>
              <p className="mt-3 text-sm text-muted">
                MS-DRG 690 · $10,666 commercial
              </p>
            </div>
            <div className="rounded-xl border border-card-border bg-card p-6">
              <p className="text-3xl font-semibold text-foreground">153.1%</p>
              <p className="mt-1 text-sm text-muted">Sierra Campus · El Paso</p>
              <p className="mt-3 text-sm text-muted">
                Same MS-DRG · $10,355 commercial
              </p>
            </div>
            <div className="rounded-xl border border-accent/30 bg-accent-muted/20 p-6">
              <p className="text-3xl font-semibold text-accent">$2,127</p>
              <p className="mt-1 text-sm text-muted">vs. $311 face-value deficit</p>
              <p className="mt-3 text-sm text-muted">
                True underpayment per case at payer&apos;s own network standard
              </p>
            </div>
          </div>
          <p className="mt-6 text-sm text-muted">
            The same pattern replicated in a second market (Dallas), proving this
            isn&apos;t a one-off.{" "}
            <Link href="/case-study" className="text-accent hover:underline">
              Read the full case study →
            </Link>
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading
          eyebrow="Why this is different"
          title="Modeled benchmarks vs. payer's own disclosure"
          description="Hospital executives know they're underpaid. The question is whether they have proof a payer will accept at the negotiating table."
        />
        <div className="mt-10">
          <ComparisonTable />
        </div>
      </section>

      <section className="border-t border-card-border bg-card/20">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeading
            eyebrow="Process"
            title="Four steps to documented leverage"
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((item) => (
              <div key={item.step}>
                <span className="font-mono text-sm text-accent">{item.step}</span>
                <h3 className="mt-2 font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <Link
            href="/how-it-works"
            className="mt-10 inline-block text-sm font-medium text-accent hover:underline"
          >
            See the full walkthrough →
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-xl border border-card-border bg-card/50 p-8 sm:p-10">
          <p className="text-lg leading-relaxed text-foreground">
            Built by operators who worked inside payer contract-modeling systems
            and hospital price transparency infrastructure — not analysts
            scraping files from the outside.
          </p>
          <Link
            href="/about"
            className="mt-4 inline-block text-sm font-medium text-accent hover:underline"
          >
            Meet the team →
          </Link>
        </div>
      </section>

      <CTASection />
    </>
  );
}
