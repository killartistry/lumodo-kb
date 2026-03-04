import { PageLayout } from "@/components/PageLayout";

export default function ViewsPage() {
  return (
    <PageLayout title="T12 / Actual / Compare Views" subtitle="Switching between different data views on the Dashboard.">
      <h2>T12 (Trailing 12 Months)</h2>
      <p>The default view. Shows a rolling 12-month window of financial data. The date range updates automatically — for example, if today is March 2026, the T12 view shows April 2025 through March 2026.</p>
      <p>Use the T12 dropdown to select different rolling periods.</p>

      <h2>Actual View</h2>
      <p>Shows the real, reported financial data as submitted by property managers. This is the default mode and reflects what actually happened.</p>

      <h2>Compare View</h2>
      <p>Toggle from Actual to Compare to see your portfolio&apos;s performance against budget. This side-by-side view highlights variances between planned and actual figures.</p>

      <h2>Data Period</h2>
      <p>Use the date picker next to the T12 dropdown to set a custom reporting period. Click <strong>Apply</strong> to update the dashboard with your selected dates.</p>
      <p>The green Data Period badge at the top always shows the currently active date range.</p>
    </PageLayout>
  );
}
