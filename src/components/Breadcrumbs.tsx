"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

const labelMap: Record<string, string> = {
  "getting-started": "Getting Started",
  dashboard: "Dashboard",
  kpis: "Key Performance Indicators",
  charts: "Charts",
  views: "T12 / Actual / Compare",
  export: "Exporting to PDF",
  properties: "Properties",
  adding: "Adding a Property",
  editing: "Editing Details",
  occupancy: "Occupancy",
  archiving: "Archiving",
  reports: "Reports",
  financial: "Financial Reports",
  creating: "Creating a Report",
  "period-report-status": "Period Report Status",
  statuses: "Applied vs Pending",
  tracking: "Tracking Submissions",
  settings: "Settings",
  faq: "FAQ",
  glossary: "Glossary",
};

export function Breadcrumbs() {
  const pathname = usePathname();
  if (pathname === "/") return <div className="text-sm font-medium text-[var(--foreground)]">Home</div>;

  const segments = pathname.split("/").filter(Boolean);
  const crumbs = segments.map((seg, i) => ({
    label: labelMap[seg] || seg.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
    href: "/" + segments.slice(0, i + 1).join("/"),
    isLast: i === segments.length - 1,
  }));

  return (
    <nav className="flex items-center gap-1.5 text-sm min-w-0 overflow-hidden">
      <Link href="/" className="text-[var(--slate)] hover:text-[var(--foreground)] transition-colors flex-shrink-0">Home</Link>
      {crumbs.map((crumb) => (
        <span key={crumb.href} className="flex items-center gap-1.5 min-w-0">
          <ChevronRight size={12} className="text-[var(--light-slate)] flex-shrink-0" />
          {crumb.isLast ? (
            <span className="font-medium text-[var(--foreground)] truncate">{crumb.label}</span>
          ) : (
            <Link href={crumb.href} className="text-[var(--slate)] hover:text-[var(--foreground)] transition-colors truncate">{crumb.label}</Link>
          )}
        </span>
      ))}
    </nav>
  );
}
