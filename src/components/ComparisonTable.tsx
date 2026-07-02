import { COMPARISON_ROWS } from "@/lib/constants";

export function ComparisonTable() {
  return (
    <div className="overflow-hidden rounded-xl border border-card-border">
      <div className="grid grid-cols-3 border-b border-card-border bg-card text-sm">
        <div className="p-4 font-medium text-muted" />
        <div className="border-l border-card-border p-4 font-medium text-muted">
          Modeled benchmarks
        </div>
        <div className="border-l border-card-border bg-accent-muted/40 p-4 font-medium text-accent">
          PayerParity
        </div>
      </div>
      {COMPARISON_ROWS.map((row, i) => (
        <div
          key={row.dimension}
          className={`grid grid-cols-3 text-sm ${
            i < COMPARISON_ROWS.length - 1 ? "border-b border-card-border" : ""
          }`}
        >
          <div className="bg-card/50 p-4 font-medium text-foreground">
            {row.dimension}
          </div>
          <div className="border-l border-card-border bg-card/30 p-4 text-muted">
            {row.benchmark}
          </div>
          <div className="border-l border-card-border bg-accent-muted/20 p-4 text-foreground">
            {row.payerParity}
          </div>
        </div>
      ))}
    </div>
  );
}
