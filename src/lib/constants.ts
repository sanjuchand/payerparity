export const SITE = {
  name: "PayerParity",
  tagline: "Payer-sourced negotiation leverage for hospitals",
  email: "hello@payerparity.com",
  domain: "payerparity.com",
} as const;

export const NAV_LINKS = [
  { href: "/how-it-works", label: "How It Works" },
  { href: "/case-study", label: "Case Study" },
  { href: "/who-its-for", label: "Who It's For" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
] as const;

export const FOUNDERS = [
  {
    name: "Marcus Chen",
    title: "Co-Founder & CEO",
    bio: "Marcus spent twelve years inside national payer operations — building machine-readable file infrastructure and working directly in contract-modeling systems. He founded PayerParity because hospitals were negotiating blind against data the payers already had to disclose.",
  },
  {
    name: "Dr. Elena Vasquez",
    title: "Co-Founder & Head of Methodology",
    bio: "Elena is a former VP of Revenue Cycle at a regional health system with deep expertise in MS-DRG payment mechanics and CMS adjustors. She leads the methodology layer that ensures comparisons are apples-to-apples before any gap is presented as leverage.",
  },
  {
    name: "James Okonkwo",
    title: "Co-Founder & Head of Product",
    bio: "James built hospital price transparency analytics platforms used by hundreds of facilities nationwide. He leads product development — decoding which pricing methodology underlies each disclosed rate, not just retrieving the file.",
  },
] as const;

export const COMPARISON_ROWS = [
  {
    dimension: "Source of the number",
    benchmark: "Third-party model",
    payerParity: "The payer's own mandated disclosure",
  },
  {
    dimension: "Payer's likely response",
    benchmark: '"That\'s not how we calculate rates"',
    payerParity: "Harder to dismiss — it's their own file",
  },
  {
    dimension: "Specificity",
    benchmark: "National or regional average",
    payerParity: "Same payer, comparable facility, same code and methodology",
  },
] as const;

export const PRICING_METHODOLOGIES = [
  {
    name: "Fee-for-Service (FFS)",
    description:
      "A flat, per-service fee. MRF data is often presented this way, but it is not universal.",
  },
  {
    name: "APC",
    description:
      "Ambulatory Payment Classification — a bundled outpatient methodology, not FFS.",
  },
  {
    name: "DRG / MS-DRG",
    description:
      "The bundled inpatient methodology under CMS's Inpatient Prospective Payment System.",
  },
  {
    name: "Case Rate",
    description: "A bundled, non-FFS rate for an episode of care.",
  },
  {
    name: "Case Rate Per Diem",
    description: "A bundled, non-FFS daily rate.",
  },
] as const;

export const CMS_ADJUSTORS = [
  "Wage index — local labor cost differences",
  "IME — indirect medical education add-ons for teaching hospitals",
  "DSH — disproportionate share hospital adjustments for low-income patient mix",
  "Outlier payments, capital adjustments, and rural or sole community hospital status",
  "Value-based purchasing and readmissions program modifiers",
] as const;
