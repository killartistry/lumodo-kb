"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { SearchModal } from "./SearchModal";
import { Breadcrumbs } from "./Breadcrumbs";

export function TopBar() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <header className="h-14 border-b border-[var(--border)] bg-[var(--card)] flex items-center justify-between px-4 md:px-6 flex-shrink-0">
        <Breadcrumbs />
        <button
          onClick={() => setSearchOpen(true)}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[var(--border)] text-sm text-[var(--slate)] hover:border-[var(--primary)] hover:text-[var(--foreground)] transition-colors"
        >
          <Search size={14} />
          <span className="hidden sm:inline">Search...</span>
          <kbd className="hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-[var(--background)] text-[11px] font-mono text-[var(--light-slate)]">
            ⌘K
          </kbd>
        </button>
      </header>
      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
