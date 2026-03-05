"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard, Building2, FileText, ClipboardCheck, Settings,
  BookOpen, HelpCircle, BookText, ChevronDown, ChevronRight,
  Menu, X,
} from "lucide-react";

type NavItem = {
  label: string;
  href?: string;
  icon: React.ReactNode;
  children?: { label: string; href: string }[];
};

const navigation: NavItem[] = [
  {
    label: "Getting Started",
    icon: <BookOpen size={18} />,
    href: "/getting-started",
  },
  {
    label: "Dashboard",
    icon: <LayoutDashboard size={18} />,
    children: [
      { label: "Portfolio Snapshot", href: "/dashboard" },
      { label: "Key Performance Indicators", href: "/dashboard/kpis" },
      { label: "Charts", href: "/dashboard/charts" },
      { label: "T12 / Actual / Compare", href: "/dashboard/views" },
      { label: "Exporting to PDF", href: "/dashboard/export" },
    ],
  },
  {
    label: "Properties",
    icon: <Building2 size={18} />,
    children: [
      { label: "Properties Overview", href: "/properties" },
      { label: "Adding a Property", href: "/properties/adding" },
      { label: "Editing Details", href: "/properties/editing" },
      { label: "Occupancy", href: "/properties/occupancy" },
      { label: "Archiving", href: "/properties/archiving" },
    ],
  },
  {
    label: "Reports",
    icon: <FileText size={18} />,
    children: [
      { label: "Reports Overview", href: "/reports" },
      { label: "Financial Reports", href: "/reports/financial" },
      { label: "Occupancy Reports", href: "/reports/occupancy" },
      { label: "Creating a Report", href: "/reports/creating" },
    ],
  },
  {
    label: "Period Report Status",
    icon: <ClipboardCheck size={18} />,
    children: [
      { label: "Status Overview", href: "/period-report-status" },
      { label: "Applied vs Pending", href: "/period-report-status/statuses" },
      { label: "Tracking Submissions", href: "/period-report-status/tracking" },
    ],
  },
  {
    label: "Settings",
    icon: <Settings size={18} />,
    href: "/settings",
  },
  {
    label: "FAQ",
    icon: <HelpCircle size={18} />,
    href: "/faq",
  },
  {
    label: "Glossary",
    icon: <BookText size={18} />,
    href: "/glossary",
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState<string[]>(["Dashboard", "Properties", "Reports", "Period Report Status"]);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close sidebar on route change (mobile)
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const toggle = (label: string) => {
    setExpanded((prev) =>
      prev.includes(label) ? prev.filter((s) => s !== label) : [...prev, label]
    );
  };

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  const sidebarContent = (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="p-5 border-b border-[var(--border)]">
        <Link href="/" className="flex items-center gap-2.5">
          <Image src="/lumodo-logo.webp" alt="Lumodo" width={36} height={36} className="rounded-lg" />
          <div>
            <h1 className="text-base font-semibold text-[var(--foreground)]">Lumodo</h1>
            <p className="text-[11px] text-[var(--slate)] -mt-0.5">Knowledge Base</p>
          </div>
        </Link>
      </div>

      {/* MENU label */}
      <div className="px-5 pt-4 pb-1">
        <p className="text-[10px] font-semibold tracking-widest text-[var(--light-slate)] uppercase">Menu</p>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 pb-3">
        {navigation.slice(0, 5).map((item) => (
          <NavGroup key={item.label} item={item} expanded={expanded} toggle={toggle} isActive={isActive} />
        ))}

        {/* OTHERS label */}
        <div className="px-2.5 pt-5 pb-1">
          <p className="text-[10px] font-semibold tracking-widest text-[var(--light-slate)] uppercase">Others</p>
        </div>

        {navigation.slice(5).map((item) => (
          <NavGroup key={item.label} item={item} expanded={expanded} toggle={toggle} isActive={isActive} />
        ))}
      </nav>

      <div className="p-4 border-t border-[var(--border)]">
        <p className="text-[11px] text-[var(--light-slate)] text-center">Confidential — Internal Use Only</p>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile hamburger button */}
      <button
        onClick={() => setMobileOpen(true)}
        className="fixed top-3 left-3 md:hidden p-2 rounded-lg border border-gray-200 shadow-sm"
        style={{ zIndex: 40, backgroundColor: '#FFFFFF' }}
        aria-label="Open menu"
      >
        <Menu size={20} />
      </button>

      {/* Mobile overlay + sidebar */}
      {mobileOpen && (
        <div className="fixed inset-0 md:hidden" style={{ zIndex: 9999 }} aria-modal="true">
          {/* Dark backdrop — covers entire screen */}
          <div
            className="absolute inset-0"
            style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}
            onClick={() => setMobileOpen(false)}
          />
          {/* Sidebar panel — hardcoded solid white background */}
          <div
            className="absolute inset-y-0 left-0 w-[280px] max-w-[85vw] shadow-2xl border-r border-[var(--border)] overflow-y-auto"
            style={{ backgroundColor: '#FFFFFF' }}
          >
            {/* Close button inside sidebar */}
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded-lg hover:bg-gray-100 text-gray-500"
              style={{ zIndex: 1 }}
              aria-label="Close menu"
            >
              <X size={18} />
            </button>
            {sidebarContent}
          </div>
        </div>
      )}

      {/* Desktop sidebar — always visible, in normal document flow */}
      <aside
        className="hidden md:block w-[260px] border-r border-[var(--border)] flex-shrink-0"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        {sidebarContent}
      </aside>
    </>
  );
}

function NavGroup({ item, expanded, toggle, isActive }: {
  item: NavItem;
  expanded: string[];
  toggle: (label: string) => void;
  isActive: (href: string) => boolean;
}) {
  if (item.children) {
    return (
      <div className="mb-0.5">
        <button
          onClick={() => toggle(item.label)}
          className="w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-sm text-[var(--slate)] hover:bg-[var(--background)] hover:text-[var(--foreground)] transition-colors"
        >
          {item.icon}
          <span className="flex-1 text-left font-medium">{item.label}</span>
          {expanded.includes(item.label) ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
        </button>
        {expanded.includes(item.label) && (
          <div className="ml-5 mt-0.5 border-l border-[var(--border)] pl-3">
            {item.children.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                className={`block px-2.5 py-1.5 rounded-md text-[13px] transition-colors ${
                  isActive(child.href)
                    ? "text-[var(--primary)] font-medium bg-amber-50"
                    : "text-[var(--slate)] hover:text-[var(--foreground)] hover:bg-[var(--background)]"
                }`}
              >
                {child.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="mb-0.5">
      <Link
        href={item.href!}
        className={`flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-sm transition-colors ${
          isActive(item.href!)
            ? "text-[var(--primary)] font-medium bg-amber-50"
            : "text-[var(--slate)] hover:bg-[var(--background)] hover:text-[var(--foreground)]"
        }`}
      >
        {item.icon}
        <span>{item.label}</span>
      </Link>
    </div>
  );
}
