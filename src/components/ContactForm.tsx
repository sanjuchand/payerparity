"use client";

import { useSearchParams } from "next/navigation";
import { FormEvent, useState, Suspense } from "react";
import { SITE } from "@/lib/constants";

type FormType = "report" | "contact";
type SubmitState = "idle" | "submitting" | "success" | "error";

const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID
  ? `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID}`
  : null;

function ContactFormInner() {
  const searchParams = useSearchParams();
  const defaultType: FormType =
    searchParams.get("type") === "report" ? "report" : "contact";

  const [formType, setFormType] = useState<FormType>(defaultType);
  const [hospital, setHospital] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [payer, setPayer] = useState("");
  const [message, setMessage] = useState("");
  const [submitState, setSubmitState] = useState<SubmitState>("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!FORMSPREE_ENDPOINT) {
      setSubmitState("error");
      return;
    }

    setSubmitState("submitting");

    const subject =
      formType === "report"
        ? `Parity Report Request — ${hospital}`
        : `Intro Call Request — ${hospital}`;

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _subject: subject,
          form_type: formType === "report" ? "Parity Report Request" : "Intro Call Request",
          hospital,
          role,
          email,
          payer: payer || "Not specified",
          message: message || "None",
          _replyto: email,
        }),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setSubmitState("success");
      setHospital("");
      setRole("");
      setEmail("");
      setPayer("");
      setMessage("");
    } catch {
      setSubmitState("error");
    }
  }

  if (submitState === "success") {
    return (
      <div className="rounded-xl border border-accent/30 bg-accent-muted/20 p-8 text-center">
        <h2 className="text-xl font-semibold text-primary">Message sent</h2>
        <p className="mt-3 text-muted">
          Thanks for reaching out. We&apos;ll get back to you within one business
          day at the email you provided.
        </p>
        <button
          type="button"
          onClick={() => setSubmitState("idle")}
          className="mt-6 text-sm font-medium text-accent hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex gap-2 rounded-lg border border-card-border bg-card/50 p-1">
        <button
          type="button"
          onClick={() => setFormType("report")}
          className={`flex-1 rounded-md px-4 py-2 text-sm font-medium transition-colors ${
            formType === "report"
              ? "bg-accent text-accent-foreground"
              : "text-muted hover:text-foreground"
          }`}
        >
          Request Parity Report
        </button>
        <button
          type="button"
          onClick={() => setFormType("contact")}
          className={`flex-1 rounded-md px-4 py-2 text-sm font-medium transition-colors ${
            formType === "contact"
              ? "bg-accent text-accent-foreground"
              : "text-muted hover:text-foreground"
          }`}
        >
          Book intro call
        </button>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="hospital" className="mb-1.5 block text-sm font-medium text-foreground">
            Hospital or health system name
          </label>
          <input
            id="hospital"
            type="text"
            name="hospital"
            required
            value={hospital}
            onChange={(e) => setHospital(e.target.value)}
            className="w-full rounded-lg border border-card-border bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted/60 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            placeholder="Memorial Regional Medical Center"
          />
        </div>

        <div>
          <label htmlFor="role" className="mb-1.5 block text-sm font-medium text-foreground">
            Your role
          </label>
          <input
            id="role"
            type="text"
            name="role"
            required
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full rounded-lg border border-card-border bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted/60 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            placeholder="VP, Managed Care Contracting"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
            Work email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border border-card-border bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted/60 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            placeholder="you@hospital.org"
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="payer" className="mb-1.5 block text-sm font-medium text-foreground">
            Which payer are you most focused on?{" "}
            <span className="font-normal text-muted">(optional)</span>
          </label>
          <input
            id="payer"
            type="text"
            name="payer"
            value={payer}
            onChange={(e) => setPayer(e.target.value)}
            className="w-full rounded-lg border border-card-border bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted/60 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            placeholder="A major national payer"
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
            Anything else?{" "}
            <span className="font-normal text-muted">(optional)</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full resize-none rounded-lg border border-card-border bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted/60 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            placeholder="Contract renewal timeline, specific MS-DRGs of concern, etc."
          />
        </div>
      </div>

      {submitState === "error" && (
        <p className="rounded-lg border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700">
          {!FORMSPREE_ENDPOINT
            ? "Form is not configured yet. Please email us directly."
            : "Something went wrong. Please try again or email us directly."}
        </p>
      )}

      <button
        type="submit"
        disabled={submitState === "submitting"}
        className="w-full rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {submitState === "submitting"
          ? "Sending..."
          : formType === "report"
            ? "Send report request"
            : "Send intro request"}
      </button>

      <p className="text-xs text-muted">
        Submissions are sent to{" "}
        <a href={`mailto:${SITE.email}`} className="text-accent hover:underline">
          {SITE.email}
        </a>
        . We typically respond within one business day.
      </p>
    </form>
  );
}

export function ContactForm() {
  return (
    <Suspense fallback={<div className="h-96 animate-pulse rounded-xl bg-card" />}>
      <ContactFormInner />
    </Suspense>
  );
}
