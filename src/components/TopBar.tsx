"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { SearchModal } from "./SearchModal";
import { Breadcrumbs } from "./Breadcrumbs";

export function TopBar() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <header className="h-14 border-b border-[var(--border)] flex items-center justify-between pl-14 pr-3 sm:pr-4 md:px-6 flex-shrink-0 bg-white">
        <Breadcrumbs />
        <button
          onClick={() => setSearchOpen(true)}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[var(--border)] text-sm text-[var(--slate)] hover:border-[var(--primary)] hover:text-[var(--foreground)] active:bg-gray-50 transition-colors flex-shrink-0 ml-2"
        >
          <Search size={14} />
          <span className="hidden sm:inline">Search...</span>
          <kbd className="hidden md:inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-[var(--background)] text-[11px] font-mono text-[var(--light-slate)]">
            ⌘K
          </kbd>
        </button>
      </header>
      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
