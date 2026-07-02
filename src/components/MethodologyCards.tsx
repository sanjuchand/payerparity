import { PRICING_METHODOLOGIES } from "@/lib/constants";

export function MethodologyCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {PRICING_METHODOLOGIES.map((method) => (
        <div
          key={method.name}
          className="rounded-xl border border-card-border bg-card/50 p-5"
        >
          <h3 className="font-semibold text-foreground">{method.name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {method.description}
          </p>
        </div>
      ))}
    </div>
  );
}
