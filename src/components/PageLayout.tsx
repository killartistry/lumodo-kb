export function PageLayout({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[var(--foreground)]">{title}</h1>
        {subtitle && <p className="text-[var(--slate)] mt-1.5">{subtitle}</p>}
      </div>
      <div className="overflow-x-hidden [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:text-[var(--foreground)] [&_h3]:text-base [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-3 [&_p]:text-[var(--slate)] [&_p]:leading-relaxed [&_p]:mb-4 [&_li]:text-[var(--slate)] [&_strong]:text-[var(--foreground)] [&_table]:w-full [&_table]:block [&_table]:overflow-x-auto [&_th]:text-left [&_th]:p-3 [&_th]:bg-[var(--background)] [&_th]:text-sm [&_th]:font-semibold [&_th]:border-b [&_th]:border-[var(--border)] [&_th]:whitespace-nowrap [&_td]:p-3 [&_td]:text-sm [&_td]:border-b [&_td]:border-[var(--border)] [&_code]:bg-[var(--background)] [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm [&_code]:font-mono [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-4 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:mb-4">
        {children}
      </div>
    </div>
  );
}
