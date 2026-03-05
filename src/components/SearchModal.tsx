"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import { Search, X, FileText, ArrowRight } from "lucide-react";
import Fuse from "fuse.js";

type SearchItem = {
  title: string;
  section: string;
  href: string;
  keywords: string;
  questions: string;
};

const searchData: SearchItem[] = [
  {
    title: "Getting Started",
    section: "Getting Started",
    href: "/getting-started",
    keywords: "login log in sign in sign up access account invitation invite onboarding welcome setup set up first time new user navigate navigation how to use where to start begin intro introduction tutorial walkthrough guide help basics overview",
    questions: "how do I log in, how to sign in, how do I get started, where do I begin, how to access lumodo, how do I get an invitation, I'm new what do I do, how to navigate the app, what is lumodo, how does this work, where is everything, first time using lumodo, how to get access, who gives me access, how do I get invited",
  },
  {
    title: "Portfolio Snapshot",
    section: "Dashboard",
    href: "/dashboard",
    keywords: "dashboard home overview portfolio snapshot summary KPI KPIs card cards metric metrics performance income expense NOI net operating income gross rent revenue T12 trailing twelve months chart charts graph graphs bar line data period date range financial financials money numbers analytics analysis",
    questions: "what is on the dashboard, what does the dashboard show, how do I see my portfolio, where can I see financial data, where are my KPIs, how to view portfolio performance, what is the portfolio snapshot, how to see income and expenses, where is the overview, how do I see how my properties are doing, where can I see overall performance, show me the big picture, how to check financials, where do I see revenue",
  },
  {
    title: "Key Performance Indicators",
    section: "Dashboard",
    href: "/dashboard/kpis",
    keywords: "KPI KPIs key performance indicator indicators GPR gross potential rent EGI effective gross income NOI net operating income operating expense ratio maintenance expense ratio utility expense ratio metric metrics card cards percentage percent what does it mean definition explain",
    questions: "what are the KPIs, what does GPR mean, what is gross potential rent, what does EGI mean, what is effective gross income, what does NOI mean, what is net operating income, what is the operating expense ratio, what is maintenance expense ratio, what is utility expense ratio, how are KPIs calculated, what do the numbers mean, what do the percentages mean, explain the metrics, what do the cards show, how to read the KPIs, what is a good expense ratio",
  },
  {
    title: "Charts",
    section: "Dashboard",
    href: "/dashboard/charts",
    keywords: "chart charts graph graphs bar chart line chart income expense NOI trend visualization visual data monthly breakdown income vs expense grouped bar NOI trend line over time",
    questions: "where are the charts, how to read the charts, what do the charts show, what is the bar chart, what is the line chart, how to see income vs expenses over time, where can I see NOI trend, how to view monthly data, what does the income vs expense chart mean, how to understand the graphs, where are the visualizations",
  },
  {
    title: "T12 / Actual / Compare Views",
    section: "Dashboard",
    href: "/dashboard/views",
    keywords: "T12 trailing 12 months actual compare comparison budget toggle switch view views data period selector date picker time range historical past previous year month",
    questions: "what is T12, what does T12 mean, what is trailing 12 months, how to switch between actual and compare, how to compare against budget, how to change the date range, how to see older data, how to view historical data, how to change the time period, what is actual view, what is compare view, how to toggle views, how do I see past performance, can I look at last year, how to change the period",
  },
  {
    title: "Exporting to PDF",
    section: "Dashboard",
    href: "/dashboard/export",
    keywords: "export PDF download print save report document file snapshot formatted output share send generate",
    questions: "how to export, how to download, how to print, how do I save as PDF, how to export the dashboard, how to download a report, how to get a PDF, can I print the dashboard, how to share the dashboard, how to generate a report PDF, where is the export button, how to save my data, how do I send someone the dashboard, how to export data",
  },
  {
    title: "Properties Overview",
    section: "Properties",
    href: "/properties",
    keywords: "properties property list table all assets buildings portfolio units location address type multifamily mixed use commercial status active inactive billing draft year acquired actions view manage",
    questions: "where are my properties, how to see all properties, where is the property list, how to view property details, what properties do I have, how to find a property, where to manage properties, what columns are in the property table, how to see property status, how to check if a property is active",
  },
  {
    title: "Adding a Property",
    section: "Properties",
    href: "/properties/adding",
    keywords: "add new create property building asset register setup set up name type location units year acquired multifamily mixed use commercial plus button",
    questions: "how to add a property, how do I create a new property, how to register a property, how to add a building, where do I add a new property, what do I need to add a property, what fields are required, how to set up a new property, how to add a multifamily property, how to add a commercial property, where is the add property button",
  },
  {
    title: "Editing Details",
    section: "Properties",
    href: "/properties/editing",
    keywords: "edit update change modify property details name type location units status billing year acquired information fix correct inline editing pencil",
    questions: "how to edit a property, how to change property details, how to update a property, how to modify property information, how to fix property info, how to change the name, how to update the address, how to change property type, how to edit property status, can I change property details after adding, where do I edit a property",
  },
  {
    title: "Occupancy",
    section: "Properties",
    href: "/properties/occupancy",
    keywords: "occupancy occupied vacant vacancy units leased unleased rate percentage full empty available tenant tenants how many",
    questions: "how to check occupancy, how to see vacancy, how many units are occupied, what is the occupancy rate, where to see occupancy, how to track occupancy, how many vacant units, how to check vacancy rate, where do I see how full a property is, how to view unit occupancy, is my property full",
  },
  {
    title: "Archiving",
    section: "Properties",
    href: "/properties/archiving",
    keywords: "archive archived archiving unarchive restore hide show remove delete deactivate inactive old sold disposed property cleanup clean up toggle checkbox show archived",
    questions: "how to archive a property, how to hide a property, how to remove a property, can I delete a property, how to deactivate a property, how to unarchive a property, how to restore an archived property, how to show archived properties, what happens when I archive, how to hide inactive properties, where do archived properties go, how do I get rid of a property, difference between archive and delete, how to bring back an archived property, how to see hidden properties",
  },
  {
    title: "Reports Overview",
    section: "Reports",
    href: "/reports",
    keywords: "reports report overview tabs financial occupancy upload status three tabs reporting section all reports my reports published",
    questions: "where are the reports, what reports are available, how to access reports, what types of reports are there, what is the reports section, how to find reports, where do I go for reports, how to see all reports, what tabs are in reports",
  },
  {
    title: "Financial Reports",
    section: "Reports",
    href: "/reports/financial",
    keywords: "financial reports P&L profit loss income statement revenue expenses my reports published to others create new share",
    questions: "where are financial reports, how to see financial reports, what is a financial report, where is my P&L, how to view profit and loss, how to find my reports, how to see reports published to me, what is the difference between my reports and published, where are reports shared with me, how to access P&L statements",
  },
  {
    title: "Occupancy Reports",
    section: "Reports",
    href: "/reports/occupancy",
    keywords: "occupancy reports unit level vacancy data filter sort property period status draft created updated view percentage units",
    questions: "where are occupancy reports, how to see occupancy reports, how to filter occupancy reports, how to sort reports, how to view occupancy by property, where to see unit level data, how to check occupancy for a specific property, what does draft status mean on a report, how to find a specific occupancy report",
  },
  {
    title: "Creating a Report",
    section: "Reports",
    href: "/reports/creating",
    keywords: "create new report make build generate template scope properties date range configure setup start fresh report builder",
    questions: "how to create a report, how to make a new report, how to generate a report, how to build a report, where do I create a report, how to start a new report, what templates are available, how to select properties for a report, how to set the date range, how to configure a report, how do I make a financial report, how do I create an occupancy report",
  },
  {
    title: "Period Report Status",
    section: "Period Report Status",
    href: "/period-report-status",
    keywords: "period report status upload status submission submissions viewing period month year total properties applied pending summary cards filter search compliance tracking P&L received",
    questions: "where is period report status, how to check submission status, which properties have submitted, who has submitted their report, how to see upload status, how to track submissions, how to see pending properties, how many properties have submitted, where to check if reports are received, how to see which properties are missing reports, how to check compliance, who hasn't submitted yet",
  },
  {
    title: "Applied vs Pending",
    section: "Period Report Status",
    href: "/period-report-status/statuses",
    keywords: "applied pending status green amber badge processed received submitted awaiting waiting not submitted meaning definition difference workflow",
    questions: "what does applied mean, what does pending mean, difference between applied and pending, what is applied status, what is pending status, why is my property showing pending, why is it amber, why is it green, what does the green badge mean, what does the amber badge mean, when does pending change to applied, how does a report become applied, what does it mean when a report is pending",
  },
  {
    title: "Tracking Submissions",
    section: "Period Report Status",
    href: "/period-report-status/tracking",
    keywords: "tracking submissions track monitor last received P&L property table search filter compliance late overdue missing follow up deadline",
    questions: "how to track submissions, how to find late submissions, which properties are overdue, how to see last received P&L, how to monitor compliance, how to check who is late, how to follow up on missing reports, how to identify overdue properties, where to see submission history, how to search for a property submission, best practices for tracking",
  },
  {
    title: "Settings & Account",
    section: "Settings",
    href: "/settings",
    keywords: "settings account profile user preferences dark mode light mode theme appearance toggle sun moon gear icon organization team permissions roles access control admin manager analyst viewer tenant platform role based RBAC invite user manage users",
    questions: "where are settings, how to change settings, how to switch to dark mode, how to turn on light mode, how to change theme, how to change appearance, where is my profile, how to update my profile, how to change my name, what roles are there, what permissions do I have, how to manage users, how to invite someone, who is an admin, what can a viewer see, what can a manager do, what is role based access, how to change permissions, how to add a team member, where is the gear icon",
  },
  {
    title: "FAQ",
    section: "FAQ",
    href: "/faq",
    keywords: "FAQ frequently asked questions help common questions answers how to troubleshoot issues problems support assistance",
    questions: "where is the FAQ, common questions, I need help, I have a question, where can I find answers, how to get help, troubleshooting, I'm stuck, I don't understand, where to find help, support, assistance, something isn't working, I have a problem",
  },
  {
    title: "Glossary",
    section: "Glossary",
    href: "/glossary",
    keywords: "glossary terms definitions terminology vocabulary jargon acronyms abbreviations NOI T12 GPR EGI P&L applied pending draft operating expense ratio occupancy rate meaning what does it mean",
    questions: "what does this term mean, where is the glossary, what are the key terms, what do the abbreviations mean, what are the acronyms, I don't know what NOI means, I don't understand the terminology, where can I look up terms, definition of terms, what is T12, what is GPR, what is EGI, what does P&L stand for, what does draft mean",
  },
];

const fuse = new Fuse(searchData, {
  keys: [
    { name: "title", weight: 3 },
    { name: "section", weight: 1.5 },
    { name: "questions", weight: 2 },
    { name: "keywords", weight: 1 },
  ],
  threshold: 0.35,
  ignoreLocation: true,
  minMatchCharLength: 2,
});

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
    <div className="fixed inset-0 z-[10000] search-backdrop flex items-start justify-center pt-[10vh] sm:pt-[20vh] px-3 sm:px-4" onClick={onClose}>
      <div className="bg-white rounded-xl shadow-2xl border border-[var(--border)] w-full max-w-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center gap-3 px-4 py-3 border-b border-[var(--border)]">
          <Search size={18} className="text-[var(--slate)] flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => { setQuery(e.target.value); setSelectedIndex(0); }}
            onKeyDown={handleKeyDown}
            placeholder="Search or ask a question..."
            className="flex-1 outline-none text-base sm:text-sm bg-transparent text-[var(--foreground)] placeholder:text-[var(--light-slate)]"
            autoComplete="off"
            autoCorrect="off"
            spellCheck={false}
          />
          <button onClick={onClose} className="p-1.5 rounded hover:bg-[var(--background)] flex-shrink-0">
            <X size={16} className="text-[var(--slate)]" />
          </button>
        </div>
        {query.length > 0 && (
          <div className="max-h-[60vh] sm:max-h-80 overflow-y-auto py-2">
            {results.length > 0 ? results.map((r, i) => (
              <button
                key={r.item.href}
                onClick={() => navigate(r.item.href)}
                className={`w-full flex items-center gap-3 px-4 py-3 sm:py-2.5 text-left transition-colors ${i === selectedIndex ? "bg-amber-50" : "hover:bg-[var(--background)] active:bg-gray-50"}`}
              >
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
        {query.length === 0 && <div className="px-4 py-6 text-center text-sm text-[var(--light-slate)]">Search or ask a question...</div>}
      </div>
    </div>
  );
}
