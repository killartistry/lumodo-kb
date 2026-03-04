import { PageLayout } from "@/components/PageLayout";

const terms = [
  { term: "NOI", full: "Net Operating Income", def: "Total revenue minus operating expenses. Excludes debt service. The primary measure of property profitability." },
  { term: "T12", full: "Trailing 12 Months", def: "Rolling 12-month financial summary used to evaluate recent performance." },
  { term: "GPR", full: "Gross Potential Rent", def: "Maximum revenue if all units are leased at market rate." },
  { term: "EGI", full: "Effective Gross Income", def: "GPR minus vacancy and concessions, plus other income." },
  { term: "Operating Expense Ratio", full: "", def: "Operating expenses divided by effective gross income. Shows what percentage of income goes to operations." },
  { term: "Occupancy Rate", full: "", def: "Occupied units divided by total units. Expressed as a percentage." },
  { term: "P&L", full: "Profit & Loss Statement", def: "Monthly or annual income statement showing revenue, expenses, and net income." },
  { term: "Applied", full: "", def: "A submitted report that has been received, processed, and applied to the property's financial data in Lumodo." },
  { term: "Pending", full: "", def: "A report that is expected for a given period but has not yet been submitted." },
  { term: "Draft", full: "", def: "A report or record that is in progress but not yet finalized or published." },
];

export default function GlossaryPage() {
  return (
    <PageLayout title="Glossary" subtitle="Key terms used in Lumodo.">
      <div className="space-y-3 mt-4">
        {terms.map((t) => (
          <div key={t.term} className="bg-[var(--card)] rounded-lg border border-[var(--border)] p-4">
            <div className="flex items-baseline gap-2 mb-1">
              <h3 className="text-sm font-semibold text-[var(--foreground)] m-0">{t.term}</h3>
              {t.full && <span className="text-xs text-[var(--slate)]">({t.full})</span>}
            </div>
            <p className="text-sm text-[var(--slate)] leading-relaxed m-0">{t.def}</p>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
