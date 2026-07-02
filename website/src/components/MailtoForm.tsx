"use client";

import { useSearchParams } from "next/navigation";
import { FormEvent, useState, Suspense } from "react";
import { SITE } from "@/lib/constants";

type FormType = "report" | "contact";

function MailtoFormInner() {
  const searchParams = useSearchParams();
  const defaultType: FormType =
    searchParams.get("type") === "report" ? "report" : "contact";

  const [formType, setFormType] = useState<FormType>(defaultType);
  const [hospital, setHospital] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [payer, setPayer] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const subject =
      formType === "report"
        ? `Parity Report Request — ${hospital || "Hospital"}`
        : `Intro Call Request — ${hospital || "Hospital"}`;

    const body = [
      formType === "report"
        ? "I'd like to request a free Parity Report for my facility."
        : "I'd like to schedule an intro call.",
      "",
      `Hospital / Health System: ${hospital}`,
      `Role: ${role}`,
      `Email: ${email}`,
      payer ? `Primary payer of focus: ${payer}` : "",
      message ? `\nAdditional context:\n${message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex gap-2 rounded-lg border border-card-border bg-card/50 p-1">
        <button
          type="button"
          onClick={() => setFormType("report")}
          className={`flex-1 rounded-md px-4 py-2 text-sm font-medium transition-colors ${
            formType === "report"
              ? "bg-accent text-zinc-900"
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
              ? "bg-accent text-zinc-900"
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
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full resize-none rounded-lg border border-card-border bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted/60 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            placeholder="Contract renewal timeline, specific MS-DRGs of concern, etc."
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-zinc-900 transition-colors hover:bg-accent-hover sm:w-auto"
      >
        {formType === "report" ? "Send report request" : "Send intro request"}
      </button>

      <p className="text-xs text-muted">
        Submitting opens your email client with a pre-filled message to{" "}
        <a href={`mailto:${SITE.email}`} className="text-accent hover:underline">
          {SITE.email}
        </a>
        . We typically respond within one business day.
      </p>
    </form>
  );
}

export function MailtoForm() {
  return (
    <Suspense fallback={<div className="h-96 animate-pulse rounded-xl bg-card" />}>
      <MailtoFormInner />
    </Suspense>
  );
}
