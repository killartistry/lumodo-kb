"use client";

import { useState } from "react";
import { PageLayout } from "@/components/PageLayout";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "What does the Dashboard show me?", a: "A T12 portfolio snapshot with 6 KPIs (GPR, EGI, NOI, and three expense ratios), an Income vs Expense vs NOI bar chart, and a NOI Trend line chart across all your properties." },
  { q: "How do I add a new property?", a: "Go to Properties and click \"+ Add Property\". Fill in the property name, type, location, units, and year acquired." },
  { q: "What's the difference between Financial and Occupancy reports?", a: "Financial reports cover P&L data — revenue, expenses, and NOI. Occupancy reports track unit-level vacancy and lease status per property." },
  { q: "What does \"Pending\" mean on Period Report Status?", a: "The property manager hasn't submitted their monthly P&L for that period yet. The report is expected but not received." },
  { q: "What does \"Applied\" mean?", a: "The report has been received, processed, and applied to the property's financial data. Its figures now appear in the Dashboard." },
  { q: "How do I export data?", a: "Use the \"Export PDF\" button on the Dashboard to download your portfolio snapshot as a formatted PDF." },
  { q: "Can I see historical data?", a: "Yes. Use the T12 dropdown and date picker on the Dashboard to adjust the reporting period and view older data." },
  { q: "What do the KPI percentages mean?", a: "Operating Expense Ratio, Maintenance Expense Ratio, and Utility Expense Ratio show what portion of your income goes to each expense category. Lower ratios are generally better." },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[var(--border)] last:border-0">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-4 text-left">
        <span className="text-sm font-medium text-[var(--foreground)] pr-4">{q}</span>
        <ChevronDown size={16} className={`text-[var(--slate)] flex-shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <p className="text-sm text-[var(--slate)] pb-4 leading-relaxed">{a}</p>}
    </div>
  );
}

export default function FAQPage() {
  return (
    <PageLayout title="FAQ" subtitle="Frequently asked questions about Lumodo.">
      <div className="bg-[var(--card)] rounded-xl border border-[var(--border)] px-5 mt-4">
        {faqs.map((item) => <FAQItem key={item.q} q={item.q} a={item.a} />)}
      </div>
    </PageLayout>
  );
}
