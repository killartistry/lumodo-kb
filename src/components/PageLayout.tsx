export function PageLayout({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <div className="max-w-4xl w-full">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-xl sm:text-2xl font-bold text-[var(--foreground)]">{title}</h1>
        {subtitle && <p className="text-sm sm:text-base text-[var(--slate)] mt-1.5">{subtitle}</p>}
      </div>
      <div className="overflow-x-hidden [&_h2]:text-base [&_h2]:sm:text-lg [&_h2]:font-semibold [&_h2]:mt-8 [&_h2]:sm:mt-10 [&_h2]:mb-3 [&_h2]:sm:mb-4 [&_h2]:text-[var(--foreground)] [&_h3]:text-sm [&_h3]:sm:text-base [&_h3]:font-semibold [&_h3]:mt-5 [&_h3]:sm:mt-6 [&_h3]:mb-2 [&_h3]:sm:mb-3 [&_p]:text-sm [&_p]:sm:text-base [&_p]:text-[var(--slate)] [&_p]:leading-relaxed [&_p]:mb-3 [&_p]:sm:mb-4 [&_li]:text-sm [&_li]:sm:text-base [&_li]:text-[var(--slate)] [&_strong]:text-[var(--foreground)] [&_table]:w-full [&_table]:block [&_table]:overflow-x-auto [&_table]:-webkit-overflow-scrolling-touch [&_th]:text-left [&_th]:p-2 [&_th]:sm:p-3 [&_th]:bg-[var(--background)] [&_th]:text-xs [&_th]:sm:text-sm [&_th]:font-semibold [&_th]:border-b [&_th]:border-[var(--border)] [&_th]:whitespace-nowrap [&_td]:p-2 [&_td]:sm:p-3 [&_td]:text-xs [&_td]:sm:text-sm [&_td]:border-b [&_td]:border-[var(--border)] [&_code]:bg-[var(--background)] [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-xs [&_code]:sm:text-sm [&_code]:font-mono [&_ul]:list-disc [&_ul]:pl-4 [&_ul]:sm:pl-5 [&_ul]:mb-3 [&_ul]:sm:mb-4 [&_ol]:list-decimal [&_ol]:pl-4 [&_ol]:sm:pl-5 [&_ol]:mb-3 [&_ol]:sm:mb-4">
        {children}
      </div>
    </div>
  );
}
