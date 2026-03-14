import Link from "next/link";
import { LayoutDashboard, Building2, FileText, ClipboardCheck, Settings } from "lucide-react";
import { UIScreenshot, BLUR_DASHBOARD } from "@/components/UIScreenshot";

const sections = [
  { icon: <LayoutDashboard size={24} />, title: "Dashboard", description: "Portfolio Snapshot with KPIs, charts, and T12 views.", href: "/dashboard" },
  { icon: <Building2 size={24} />, title: "Properties", description: "Manage property assets, details, occupancy, and status.", href: "/properties" },
  { icon: <FileText size={24} />, title: "Reports", description: "Financial reports, occupancy reports, and upload status.", href: "/reports" },
  { icon: <ClipboardCheck size={24} />, title: "Period Report Status", description: "Track period report submissions across all properties.", href: "/period-report-status" },
  { icon: <Settings size={24} />, title: "Settings", description: "User profile, dark/light mode, and team permissions.", href: "/settings" },
];

export default function Home() {
  return (
    <div className="max-w-4xl w-full">
      {/* Hero */}
      <div className="mb-8 sm:mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[var(--primary)] flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-base sm:text-lg">L</span>
          </div>
          <div className="min-w-0">
            <h1 className="text-lg sm:text-2xl font-bold text-[var(--foreground)] truncate">Lumodo Knowledge Base</h1>
            <p className="text-xs sm:text-sm text-[var(--slate)]">Private product documentation</p>
          </div>
        </div>
        <p className="text-sm sm:text-base text-[var(--slate)] leading-relaxed max-w-xl">
          Documentation for the Lumodo platform. Navigate the sections below to learn about each feature you see when you log in.
        </p>
      </div>


      {/* Platform Overview */}
      <div className="mb-8 sm:mb-10">
        <UIScreenshot
          src="/images/ui/dashboard.png"
          alt="Lumodo Dashboard — Portfolio Snapshot with KPIs and charts"
          blurZones={BLUR_DASHBOARD}
        />
      </div>

      {/* 5 Main Sections */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-10">
        {sections.map((s) => (
          <Link key={s.href} href={s.href} className="group block bg-white rounded-xl border border-[var(--border)] p-4 sm:p-5 hover:border-[var(--primary)] hover:shadow-sm active:bg-gray-50 transition-all">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-amber-50 flex items-center justify-center text-[var(--primary)] mb-2.5 sm:mb-3 group-hover:bg-amber-100 transition-colors">
              {s.icon}
            </div>
            <h3 className="font-semibold text-[var(--foreground)] mb-1 text-sm sm:text-base">{s.title}</h3>
            <p className="text-xs sm:text-sm text-[var(--slate)]">{s.description}</p>
          </Link>
        ))}
      </div>

      {/* Quick Links */}
      <div className="bg-white rounded-xl border border-[var(--border)] p-4 sm:p-5">
        <h2 className="text-sm font-semibold text-[var(--foreground)] mb-3">Quick Links</h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/getting-started" className="text-sm text-[var(--primary)] hover:underline">Getting Started</Link>
          <span className="text-[var(--border)]">|</span>
          <Link href="/faq" className="text-sm text-[var(--primary)] hover:underline">FAQ</Link>
          <span className="text-[var(--border)]">|</span>
          <Link href="/glossary" className="text-sm text-[var(--primary)] hover:underline">Glossary</Link>
        </div>
      </div>
    </div>
  );
}
