import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Case Study",
  description:
    "How Texicare's own disclosed contract data reveals a 31-point markup gap inside the Tenet network for MS-DRG 690 — and a $2,126 per-case underpayment at El Paso.",
};

const PROVIDER_GROUPS = [
  {
    id: "24",
    entity: "Tenet Hospitals Limited",
    facility: "The Hospitals of Providence – Sierra Campus",
    market: "El Paso, TX",
  },
  {
    id: "26",
    entity: "Resolute Hospital Company, LLC",
    facility: "Resolute Health Hospital",
    market: "New Braunfels, TX",
  },
  {
    id: "27",
    entity: "VHS San Antonio Partners, LLC",
    facility: "Baptist Health System",
    market: "San Antonio, TX",
  },
];

export default function CaseStudyPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pb-12 pt-16 sm:pt-24">
        <SectionHeading
          eyebrow="Case study"
          title="The Tenet network rate disparity"
          description="How one payer's own disclosed contract data proves a 31-point negotiation gap inside a single corporate network — and how the same math extends to Dallas."
        />
        <p className="mt-6 text-sm text-muted">
          Source: Texicare In-Network Negotiation File (2026 Code Version) · CMS
          IPPS Web Pricer · MS-DRG 690
        </p>
      </section>

      {/* Part 1: Ownership mapping */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <h2 className="text-2xl font-semibold text-primary">
          Corporate ownership mapping
        </h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-muted">
          Three distinct provider group IDs in the payer&apos;s file. One corporate
          parent: <strong className="text-foreground">Tenet Healthcare
          Corporation</strong>. Cross-referenced against CMS certification numbers
          and public corporate filings.
        </p>
        <div className="mt-8 overflow-x-auto rounded-xl border border-card-border">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="border-b border-card-border bg-card/50">
              <tr>
                <th className="p-4 font-medium text-muted">Group ID</th>
                <th className="p-4 font-medium text-muted">Facility</th>
                <th className="p-4 font-medium text-muted">Market</th>
              </tr>
            </thead>
            <tbody>
              {PROVIDER_GROUPS.map((group) => (
                <tr key={group.id} className="border-b border-card-border last:border-0">
                  <td className="p-4 font-mono text-accent">{group.id}</td>
                  <td className="p-4 text-foreground">{group.facility}</td>
                  <td className="p-4 text-muted">{group.market}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Part 2: The disparity */}
      <section className="border-y border-card-border bg-card/20">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold text-primary">
            The commercial-to-CMS premium disparity
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted">
            Same MS-DRG 690. Same parent company. Two very different markups over
            Medicare — both from Texicare&apos;s own in-network negotiation file.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-xl border border-accent/30 bg-accent-muted/20 p-8">
              <p className="text-sm font-medium uppercase tracking-widest text-accent">
                Higher markup · Group 26
              </p>
              <h3 className="mt-2 text-lg font-semibold text-foreground">
                Resolute Health Hospital
              </h3>
              <p className="text-sm text-muted">New Braunfels, TX</p>
              <div className="mt-6 space-y-2 text-sm">
                <p>
                  <span className="text-muted">Commercial: </span>
                  <span className="font-semibold text-foreground">$10,665.97</span>
                </p>
                <p>
                  <span className="text-muted">CMS floor: </span>
                  <span className="text-foreground">$5,780.23</span>
                </p>
              </div>
              <p className="mt-4 text-4xl font-semibold text-accent">184.5%</p>
              <p className="text-sm text-muted">over Medicare</p>
            </div>

            <div className="rounded-xl border border-card-border bg-card p-8">
              <p className="text-sm font-medium uppercase tracking-widest text-muted">
                Lower markup · Group 24
              </p>
              <h3 className="mt-2 text-lg font-semibold text-foreground">
                Hospitals of Providence – Sierra Campus
              </h3>
              <p className="text-sm text-muted">El Paso, TX</p>
              <div className="mt-6 space-y-2 text-sm">
                <p>
                  <span className="text-muted">Commercial: </span>
                  <span className="font-semibold text-foreground">$10,355.12</span>
                </p>
                <p>
                  <span className="text-muted">CMS floor: </span>
                  <span className="text-foreground">$6,765.13</span>
                </p>
              </div>
              <p className="mt-4 text-4xl font-semibold text-foreground">153.1%</p>
              <p className="text-sm text-muted">over Medicare</p>
            </div>
          </div>

          <div className="mt-8 rounded-xl border border-card-border bg-card/50 p-6">
            <h3 className="font-semibold text-foreground">
              Refuting the &ldquo;cost of living&rdquo; defense
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Payers cite New Braunfels&apos; milder cost-of-living gap (~5% below
              national average) vs. El Paso&apos;s (~13–16% below) to justify a
              lower El Paso rate. But CMS&apos;s own DSH adjustment says the
              opposite: El Paso&apos;s patient mix drives a{" "}
              <strong className="text-foreground">higher</strong> federal
              cost-of-care baseline ($6,765.13 vs. $5,780.23). The payer is
              using consumer cost-of-living optics to absorb the hospital&apos;s
              federal safety-net subsidy.
            </p>
          </div>
        </div>
      </section>

      {/* Part 3: Quantifying underpayment */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-semibold text-primary">
          Quantifying the underpayment
        </h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-muted">
          Texicare has already validated 184.5% as an acceptable Tenet-network
          multiplier for MS-DRG 690. On paper, El Paso appears underpaid by just
          $310.85 per case against the Central Texas bundle. Held to the
          payer&apos;s own precedent, the gap is much larger.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          <div className="rounded-xl border border-card-border p-6 text-center">
            <p className="text-sm font-medium text-muted">Surface deficit</p>
            <p className="mt-3 text-3xl font-semibold text-foreground">$310.85</p>
            <p className="mt-2 text-sm text-muted">per MS-DRG 690 case (face value)</p>
          </div>
          <div className="rounded-xl border border-card-border p-6 text-center">
            <p className="text-sm font-medium text-muted">Parity rate @ 184.5%</p>
            <p className="mt-3 text-3xl font-semibold text-foreground">$12,481.66</p>
            <p className="mt-2 text-sm text-muted">
              $6,765.13 CMS baseline × 1.845
            </p>
          </div>
          <div className="rounded-xl border border-accent/30 bg-accent-muted/20 p-6 text-center">
            <p className="text-sm font-medium text-accent">True deficit</p>
            <p className="mt-3 text-3xl font-semibold text-accent">$2,126.54</p>
            <p className="mt-2 text-sm text-muted">
              per case vs. the payer&apos;s own standard
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-xl border border-accent/20 bg-accent-muted/10 p-6">
          <p className="text-sm font-medium text-accent">Negotiation stance</p>
          <p className="mt-2 leading-relaxed text-muted">
            Demand the payer uncouple federal DSH operating adjustments from
            commercial premium logic and apply a standardized ~1.84× multiplier
            across the entire Tenet network for MS-DRG 690.
          </p>
        </div>
      </section>

      {/* Dallas scenario */}
      <section className="border-t border-card-border bg-card/20">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold text-primary">
            Applying the same model in Dallas–Fort Worth
          </h2>
          <p className="mt-4 text-sm text-muted">
            Tenet Healthsystem Hospitals Dallas, Inc. — Farmers Branch &amp;
            Carrollton, TX (Dallas–Plano–Irving CBSA, wage index 1.0068)
          </p>

          <ol className="mt-8 space-y-6">
            <li className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-muted text-sm font-semibold text-accent">
                1
              </span>
              <div>
                <h3 className="font-semibold text-foreground">
                  Establish the CMS baseline
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  FY2026 base rate $6,752.61 × 66% labor share × 1.0068 Dallas
                  wage index, + 34% nonlabor × DRG 690 weight (0.8095) ≈ $5,491
                  operating baseline before facility-specific DSH, IME, and outlier
                  add-ons.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-muted text-sm font-semibold text-accent">
                2
              </span>
              <div>
                <h3 className="font-semibold text-foreground">
                  Pull the payer&apos;s own precedent
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Texicare already accepts a 153.1%–184.5% commercial markup over
                  CMS for this exact DRG elsewhere in the Tenet network (El Paso,
                  New Braunfels) — a documented ceiling and floor, not a
                  hypothetical.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-muted text-sm font-semibold text-accent">
                3
              </span>
              <div>
                <h3 className="font-semibold text-foreground">
                  Present the parity ask
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Applying the network&apos;s own 153.1%–184.5% range to the Dallas
                  CMS baseline implies a target commercial rate of roughly{" "}
                  <strong className="text-foreground">$8,407–$10,131 per
                  case</strong> — an evidence-based opening position, not a guess.
                </p>
              </div>
            </li>
          </ol>

          <p className="mt-8 text-xs text-muted italic">
            Illustrative scenario built on real CMS FY2026 IPPS rates and the
            published Dallas–Plano–Irving wage index, applying the source
            file&apos;s own network multiplier as negotiation precedent. Actual
            contracted rate requires the payer&apos;s Dallas-specific MRF
            disclosure.
          </p>
        </div>
      </section>

      {/* Two equations - condensed */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-semibold text-primary">
          Two reasons the same DRG pays differently
        </h2>
        <p className="mt-4 max-w-3xl text-muted">
          One is federal formula. The other is pure negotiation.
        </p>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-card-border bg-card/30 p-6">
            <h3 className="font-semibold text-foreground">
              CMS side — why the federal rate varies
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>Area wage index scales 66% of the base rate by CBSA labor costs</li>
              <li>DSH add-ons for hospitals serving more low-income patients</li>
              <li>IME factor for teaching hospitals</li>
              <li>Outlier payments above the fixed-loss threshold</li>
              <li>Geographic reclassification and quality program modifiers</li>
            </ul>
          </div>
          <div className="rounded-xl border border-card-border bg-card/30 p-6">
            <h3 className="font-semibold text-foreground">
              Payer side — why &ldquo;negotiated&rdquo; ≠ 100% of CMS
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>Markup is a leverage outcome, not a formula — 184.5% at one facility, 153.1% at another</li>
              <li>Network adequacy and provider leverage matter more than CMS inputs</li>
              <li>&ldquo;Cost of living&rdquo; is a red herring — CMS ties DSH/IME to patient mix, not geography</li>
              <li>Without MRF evidence, providers negotiate blind</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-card-border bg-card/20">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-xl font-semibold text-primary">
            What PayerParity builds from this
          </h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-3">
            <li className="rounded-xl border border-card-border bg-card/50 p-5 text-sm text-muted">
              <strong className="text-foreground">Evidence, not anecdote.</strong>{" "}
              Every argument from the payer&apos;s own disclosed file, cross-referenced
              against the CMS IPPS Web Pricer.
            </li>
            <li className="rounded-xl border border-card-border bg-card/50 p-5 text-sm text-muted">
              <strong className="text-foreground">Network-wide visibility.</strong>{" "}
              See every provider group under a parent corporation and compare the
              markup the payer already accepts elsewhere in-network.
            </li>
            <li className="rounded-xl border border-card-border bg-card/50 p-5 text-sm text-muted">
              <strong className="text-foreground">Replicable, any market.</strong>{" "}
              The same DRG-to-CMS-baseline method extends from El Paso to Dallas to
              any CBSA in the country.
            </li>
          </ul>
        </div>
      </section>

      <CTASection
        title="Walk into the next negotiation with the payer's own math"
        description="Request a free Parity Report for your facility. We'll map your payer's disclosed rates against comparable in-network facilities and quantify the gap."
      />
    </>
  );
}
