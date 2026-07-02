import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { SectionHeading } from "@/components/SectionHeading";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a free Parity Report or book an intro call with PayerParity.",
};

export default function ContactPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pb-12 pt-16 sm:pt-24">
        <SectionHeading
          eyebrow="Contact"
          title="Get your facility's Parity Report"
          description="Tell us about your hospital and the payer you're focused on. We'll run your facility against a comparable in-network hospital and show you a real, specific dollar gap — free, as the lead-in to a conversation."
        />
      </section>

      <section className="mx-auto max-w-2xl px-6 pb-24">
        <div className="rounded-xl border border-card-border bg-card/50 p-8">
          <ContactForm />
        </div>

        <div className="mt-10 text-center text-sm text-muted">
          <p>
            Prefer email directly?{" "}
            <a
              href={`mailto:${SITE.email}`}
              className="text-accent hover:underline"
            >
              {SITE.email}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
