"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import { Search, X, FileText, ArrowRight } from "lucide-react";
import Fuse from "fuse.js";

type SearchItem = { title: string; section: string; href: string; content: string };

const searchData: SearchItem[] = [
  { title: "Getting Started", section: "Getting Started", href: "/getting-started", content: "Logging in, navigating the app, first steps, invitation-only access" },
  { title: "Portfolio Snapshot", section: "Dashboard", href: "/dashboard", content: "T12 view, KPI cards, Income vs Expense chart, NOI Trend, portfolio overview, data period" },
  { title: "Key Performance Indicators", section: "Dashboard", href: "/dashboard/kpis", content: "GPR Gross Potential Rent, EGI Effective Gross Income, NOI Net Operating Income, Operating Expense Ratio, Maintenance Expense Ratio, Utility Expense Ratio" },
  { title: "Charts", section: "Dashboard", href: "/dashboard/charts", content: "Income vs Expense vs NOI bar chart, NOI Trend line chart, monthly breakdown" },
  { title: "T12 / Actual / Compare Views", section: "Dashboard", href: "/dashboard/views", content: "Trailing 12 months, Actual vs Compare toggle, data period selector" },
  { title: "Exporting to PDF", section: "Dashboard", href: "/dashboard/export", content: "Export PDF, download portfolio snapshot, formatted report" },
  { title: "Properties Overview", section: "Properties", href: "/properties", content: "Properties table, property name, type, location, units, status, billing, year acquired, actions" },
  { title: "Adding a Property", section: "Properties", href: "/properties/adding", content: "Add property, multifamily, mixed use, commercial, create new" },
  { title: "Editing Details", section: "Properties", href: "/properties/editing", content: "Edit property, update details, inline editing, property information" },
  { title: "Occupancy", section: "Properties", href: "/properties/occupancy", content: "Occupancy tracking, occupied units, vacancy, occupancy rate" },
  { title: "Archiving", section: "Properties", href: "/properties/archiving", content: "Archive property, show archived, unarchive, hide inactive" },
  { title: "Reports Overview", section: "Reports", href: "/reports", content: "Financial reports, occupancy reports, upload status, three tabs" },
  { title: "Financial Reports", section: "Reports", href: "/reports/financial", content: "My Reports, Published to Others, P&L, financial statements" },
  { title: "Occupancy Reports", section: "Reports", href: "/reports/occupancy", content: "Occupancy percentage, units, draft status, property filter, sort" },
  { title: "Creating a Report", section: "Reports", href: "/reports/creating", content: "Create new report, template, report builder" },
  { title: "Period Report Status", section: "Period Report Status", href: "/period-report-status", content: "Upload status, viewing period, total properties, applied, pending, submission tracking" },
  { title: "Applied vs Pending", section: "Period Report Status", href: "/period-report-status/statuses", content: "Applied status green, Pending status amber, report processed, awaiting submission" },
  { title: "Tracking Submissions", section: "Period Report Status", href: "/period-report-status/tracking", content: "Last Received P&L, property submission table, search filter, compliance" },
  { title: "Settings", section: "Settings", href: "/settings", content: "User profile, dark light mode, organization settings, team permissions" },
  { title: "FAQ", section: "FAQ", href: "/faq", content: "Frequently asked questions, how to, help" },
  { title: "Glossary", section: "Glossary", href: "/glossary", content: "NOI T12 GPR EGI Operating Expense Ratio P&L Applied Pending Draft" },
];

const fuse = new Fuse(searchData, { keys: ["title", "section", "content"], threshold: 0.4 });

export function SearchModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const results = query.length > 0 ? fuse.search(query).slice(0, 8) : [];

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (open) onClose();
        else { setQuery(""); setSelectedIndex(0); }
      }
      if (e.key === "Escape" && open) onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  useEffect(() => { if (open) setTimeout(() => inputRef.current?.focus(), 100); }, [open]);

  const navigate = useCallback((href: string) => { router.push(href); onClose(); setQuery(""); }, [router, onClose]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") { e.preventDefault(); setSelectedIndex((i) => Math.min(i + 1, results.length - 1)); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setSelectedIndex((i) => Math.max(i - 1, 0)); }
    else if (e.key === "Enter" && results[selectedIndex]) navigate(results[selectedIndex].item.href);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 search-backdrop flex items-start justify-center pt-[20vh]" onClick={onClose}>
      <div className="bg-[var(--card)] rounded-xl shadow-2xl border border-[var(--border)] w-full max-w-lg mx-4 overflow-hidden" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center gap-3 px-4 py-3 border-b border-[var(--border)]">
          <Search size={18} className="text-[var(--slate)]" />
          <input ref={inputRef} type="text" value={query} onChange={(e) => { setQuery(e.target.value); setSelectedIndex(0); }} onKeyDown={handleKeyDown} placeholder="Search documentation..." className="flex-1 outline-none text-sm bg-transparent text-[var(--foreground)] placeholder:text-[var(--light-slate)]" />
          <button onClick={onClose} className="p-1 rounded hover:bg-[var(--background)]"><X size={16} className="text-[var(--slate)]" /></button>
        </div>
        {query.length > 0 && (
          <div className="max-h-80 overflow-y-auto py-2">
            {results.length > 0 ? results.map((r, i) => (
              <button key={r.item.href} onClick={() => navigate(r.item.href)} className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors ${i === selectedIndex ? "bg-amber-50" : "hover:bg-[var(--background)]"}`}>
                <FileText size={16} className="text-[var(--primary)] flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-[var(--foreground)] truncate">{r.item.title}</p>
                  <p className="text-xs text-[var(--slate)]">{r.item.section}</p>
                </div>
                <ArrowRight size={14} className="text-[var(--light-slate)] flex-shrink-0" />
              </button>
            )) : (
              <p className="px-4 py-6 text-sm text-[var(--slate)] text-center">No results for &ldquo;{query}&rdquo;</p>
            )}
          </div>
        )}
        {query.length === 0 && <div className="px-4 py-6 text-center text-sm text-[var(--light-slate)]">Type to search...</div>}
      </div>
    </div>
  );
}
