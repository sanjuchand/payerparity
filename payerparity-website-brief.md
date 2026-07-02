# PayerParity — Website Brief

_Prepared for: Content & Website Team_
_Status: Pre-launch / first build_

---

## 1. The Business, in One Paragraph

PayerParity turns federally mandated price transparency data (hospital MRFs, payer TiC files) into negotiation leverage for hospitals and health systems. The core insight: payers already disclose, in their own machine-readable files, that they pay other facilities — sometimes in the same corporate network — far more than they pay you for the same service. PayerParity finds that gap and turns it into a documented, payer-sourced case for a better contract. This isn't modeled or estimated data; it's the payer's own numbers used against their own precedent.

**Working proof point:** a Tenet-network case study showing one facility receiving 184.5% of Medicare and a sister facility 153.1% for the same MS-DRGs — reframing a hospital's "$310 deficit" against a national benchmark as a "$2,126 deficit against the payer's own disclosed precedent" at a comparable facility 600 miles away. A second market (Dallas) replicated the finding, proving this isn't a one-off.

**Domain:** PayerParity.com (confirm registration is complete before the team starts building — availability was verified but purchase status should be checked).

**Terminology note for the content team:** Hospital inpatient claims are billed and reimbursed under **MS-DRG** (CMS's Inpatient Prospective Payment System), not CPT. CPT/HCPCS codes apply to outpatient and professional billing, not hospital inpatient stays. Use "MS-DRG," "DRG," or "code" (generically) — never "CPT" — when describing inpatient comparisons. See Section 3 for a fuller methodology note, since this terminology point connects to a real accuracy risk, not just word choice.

---

## 2. Who the Site Is For

**Primary audience — the buyer:**

- VP/Director of Managed Care Contracting
- Hospital or health system CFO
- VP of Revenue Cycle
- Contract negotiators at regional/safety-net hospitals and health systems (the long-tail segment underserved by big vendors)

**What they currently believe:** "We know we're underpaid, but we don't have proof the payer will accept. Modeled benchmarks (Medicare multiples, MGMA) are easy for a payer to wave away in a negotiation."

**What the site needs them to believe instead:** "PayerParity doesn't estimate what I should be paid — it finds proof, in the payer's own disclosed files, of what they already pay elsewhere. That's much harder to argue with across the table."

**Secondary audience (lower priority, don't over-invest here yet):** RCM firms and consultants who might refer or resell; investors/press if this becomes a fundraising asset later.

---

## 3. Positioning & Differentiation

|                         | Modeled benchmarks (MGMA, Medicare multiples) | PayerParity                                            |
| ----------------------- | --------------------------------------------- | ------------------------------------------------------ |
| Source of the number    | Third-party model                             | The payer's own mandated disclosure                    |
| Payer's likely response | "That's not how we calculate rates"           | Harder to dismiss — it's their own file                |
| Specificity             | National/regional average                     | Same payer, comparable facility, same code/methodology |

**Competitive context (internal reference, not necessarily site copy):** Turquoise Health (~$95M raised) is the dominant incumbent, moving from raw data into contracts and payments, serving 4 of 5 national payers and 10 of the top 25 health systems. PayerParity should not try to out-broad them. The site's job is to win the specific fight — payer-sourced negotiation leverage for the long-tail/regional hospital segment — not to look like "another price transparency data company."

**Founder credibility angle (use this — it's the strongest asset in the deck):** built MRFs and worked inside payer contract-modeling tools from the inside, rather than scraping files as an outsider. This "operator, not just analyst" framing should show up on the About/team section and can reasonably appear in hero copy too.

### Methodology Note #1 — Why two hospitals can legitimately have different MS-DRG rates

CMS's IPPS base payment is adjusted, facility by facility, for factors including:

- **Wage index** — local labor cost differences (even within a region, wage index areas can differ)
- **IME (Indirect Medical Education)** — an add-on for teaching hospitals, scaled to resident-to-bed ratio
- **GME (Graduate Medical Education)** — paid separately from the DRG payment for hospitals with approved residency programs, but relevant to why a teaching hospital's economics differ from a non-teaching one
- **DSH / uncompensated care** — an add-on for hospitals serving a disproportionate share of low-income patients
- **Outlier payments** — extra payment for unusually high-cost cases
- **Capital-related cost adjustments**
- **Rural, Sole Community Hospital, or Medicare-Dependent Hospital status**
- **New technology add-on payments**
- **Value-Based Purchasing and Hospital Readmissions Reduction Program adjustments** (small up/down modifiers)

Because commercial payer rates are frequently expressed as a percentage of Medicare (as in the case study — "184.5% of Medicare"), and the _Medicare baseline itself already differs_ between two facilities for the reasons above, a raw dollar or percentage gap between two hospitals isn't automatically evidence of payer inconsistency. **The product's credibility depends on netting out these legitimate factors before presenting a gap as leverage** — otherwise a payer's contracting team can dismiss the finding with "of course, that hospital has a different wage index / teaching status / DSH population." Confirm with the founder that the underlying analysis already controls for this; if it doesn't yet, this affects the methodology, not just the website copy.

### Methodology Note #2 — CMS pricing methodologies aren't all fee-for-service

A second, related accuracy point for the content team: most commercial contracts are priced as a percentage of CMS rates, but **CMS itself uses several different pricing methodologies, not just one flat "fee-for-service" model.** These include:

- **Fee-for-Service (FFS)** — a flat, per-service fee (this is the methodology MRF data is often _presented_ as, but it isn't universal)
- **APC (Ambulatory Payment Classification)** — a bundled outpatient methodology, not FFS
- **DRG / MS-DRG** — the bundled inpatient methodology described in Methodology Note #1, not FFS
- **Case Rate** — a bundled, non-FFS rate for an episode of care
- **Case Rate Per Diem** — a bundled, non-FFS daily rate

The practical implication: MRF files often display or are read as if everything is fee-for-service, but the _underlying_ pricing methodology behind a given rate may not be. **Comparisons across facilities or payers need to confirm the two rates being compared use the same underlying methodology** (e.g., DRG-to-DRG, case rate-to-case rate) — comparing an FFS-based rate to a case-rate-based rate for what looks like "the same service" is not an apples-to-apples comparison and would be a second, distinct rebuttal a payer's contracting team could raise. This is also a genuine value-add worth surfacing in site copy: **decoding which pricing methodology actually underlies a given payer's disclosed rate is part of what PayerParity does for the client** — it's not just file retrieval, it's methodology-aware interpretation.

---

## 4. Site Goals & Primary Conversion Action

Given the buyer (hospital execs, considered B2B sale, no self-serve product yet), this should **not** be a self-serve signup site. Recommended primary conversion path:

**Primary CTA: "Get Your Facility's Parity Report"** — offer to run a hospital's own MRF against a comparable in-network facility and show them a real, specific dollar gap, free, as the lead-in to a sales conversation. This mirrors the proof point that already sold the pitch deck (a real facility, a real payer, a real number) and is a much stronger hook than a generic "Request a Demo" button.

**Secondary CTA:** "Talk to us" / "Book an intro call" for buyers who want to skip straight to a conversation.

_Flag for the founder: pricing model, engagement structure (one-time analysis vs. retainer vs. success-fee), and what happens after someone requests a report were not defined in the business plan or deck. The content team will need this before finalizing the report-request form and any pricing/how-it-works copy._

---

## 5. Site Map & Page-by-Page Brief

### Home

- **Hero:** Lead with the specific proof, not the abstract pitch. Something in the direction of: _"Your payer already pays another hospital more for the same MS-DRG. We find it in their own files."_ Avoid leading with regulatory jargon (MRF, TiC, MS-DRG) in the headline itself — that's credibility-building content for later on the page, not the hook.
- **Proof strip:** the Tenet-style case study, anonymized or named per legal's guidance (public MRF data, but confirm comfort level with naming real payers/systems before publishing).
- **How it's different:** the "modeled benchmark vs. payer's own disclosure" contrast (see Section 3 table) — this is the single most important idea to land.
- **CTA:** Get Your Facility's Parity Report.
- **Founder credibility line:** one sentence on the "built it from the inside" angle, linking to About.

### How It Works

Plain-language walkthrough for a non-technical hospital exec: (1) we pull your payer's disclosed files, (2) we identify the correct pricing methodology behind each rate (DRG, APC, case rate, FFS, etc. — see Methodology Note #2) rather than assuming everything is fee-for-service, (3) we find comparable facilities the same payer already reimburses at a higher rate for the same code and methodology, (4) you get a documented, payer-sourced negotiating position. Keep MRF/TiC/DRG jargon minimal here — define it only if used.

### Proof / Case Study

The full Tenet/El Paso–Dallas story as a proper case study page: the problem, the specific numbers, the reframe (national benchmark deficit vs. payer-precedent deficit), and the replication in a second market. This is your best asset — give it real estate, not just a homepage strip.

### Who It's For

Speak directly to the ICP segments: regional/safety-net hospitals, long-tail health systems, RCM-adjacent teams. Make clear this isn't built for national payers or the largest health systems already served by incumbents — specificity here builds trust rather than narrowing the market.

### About / Team

Founder-operator story: built MRFs, worked inside payer contract-modeling systems. This is a trust page for a buyer about to hand over sensitive contract context — treat it that way.

### Pricing / Engagement _(placeholder until founder input lands)_

Structure the page but leave pricing mechanics flexible until the business model is confirmed. A "book a call to discuss your facility" pattern can carry this page until pricing is finalized.

### Resources (lower priority, phase 2)

Short explainers on HPT, TiC, and the No Surprises Act aimed at SEO and top-of-funnel credibility (e.g., "What is a hospital MRF file?", "Why hospital price transparency data finally has real dollar amounts in 2026," "Fee-for-service vs. DRG vs. case rate: what's actually in your payer's file"). Useful longer-term but not needed for launch.

### Contact / Request Report

The form behind both CTAs. Keep it short: hospital/system name, role, email, and (ideally) a field for "which payer are you most focused on" to make the free-report offer feel concrete rather than generic.

---

## 6. Tone & Voice

- **Confident, evidence-first, not hypey.** The strongest line in the existing deck is a specific dollar figure sourced from a payer's own file — that's the voice. Avoid "revolutionize," "unlock," "AI-powered" filler.
- **Speak to operators, not analysts.** The buyer is a CFO or contracting VP, not a data scientist. Translate MRF/TiC/DRG jargon into plain consequences ("what the payer already pays down the street for the same type of hospital stay").
- **Confrontational but factual, never inflammatory.** The pitch is inherently adversarial (finding leverage against a payer) — the copy should read as "we found the receipts," not "gotcha" tabloid energy.

---

## 7. Design Notes (carried over from the existing pitch deck)

The deck used a dark theme with amber accent colors and clean stat callouts — worth carrying into the site for brand consistency if the deck has already been shown to any early contacts. Confirm with the founder whether the deck's visual system is considered final brand direction or just a pitch-specific treatment.

---

## 8. SEO / Content Considerations

- Regulatory terms (hospital price transparency, MRF, machine-readable file, No Surprises Act, TiC) are real search terms with an underserved, non-jargon explainer market — the Resources section (Section 5) is the vehicle for this, not the core conversion pages.
- Avoid overloading conversion pages (Home, Case Study, Pricing) with SEO copy at the expense of the sharp, specific pitch — SEO content belongs in Resources.

---

## 9. Open Items — Need Founder/Stakeholder Input Before Finalizing

1. **Pricing/engagement model** — one-time analysis, retainer, or success-fee tied to the negotiated increase? Changes the entire Pricing page and the CTA framing.
2. **Legal clearance on naming real entities** — the case study uses real, publicly disclosed data (Tenet, specific facilities). Confirm whether to name them directly or anonymize for the public-facing site (the internal deck named them; a public site is a different exposure level).
3. **Confirm PayerParity.com is actually registered/purchased.**
4. **Company name/legal entity** — confirm "PayerParity" is the final brand name, not just a working project name.
5. **Any early customer or design-partner interest** to reference as social proof (the deck noted this was missing).
6. **Confirm the analysis nets out legitimate MS-DRG rate variation** (wage index, IME, GME, DSH, outlier, capital, rural status, and similar CMS-recognized adjustors — see Methodology Note #1) before any comparison is published as a "gap." This is the single most important accuracy check before the case study goes live: an unadjusted comparison is vulnerable to being dismissed by a payer's contracting team and would undermine the site's core credibility claim.
7. **Confirm the analysis matches pricing methodology, not just code, across compared facilities** (FFS vs. APC vs. DRG vs. case rate vs. case rate per diem — see Methodology Note #2). Any published comparison should confirm both rates being compared were priced under the same methodology; otherwise the finding is a second, distinct point of vulnerability in a payer rebuttal.

---

## 10. Success Metrics for the Site

- Parity Report requests submitted (primary)
- Intro calls booked (secondary)
- Case study page engagement/time-on-page (proxy for whether the core pitch is landing)
- Organic traffic to Resources content (longer-term, phase 2 signal)
