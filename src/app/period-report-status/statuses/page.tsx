import { PageLayout } from "@/components/PageLayout";

export default function StatusesPage() {
  return (
    <PageLayout title="Applied vs Pending" subtitle="What the two status types mean.">
      <h2>Applied</h2>
      <p>Shown as a <strong>green badge</strong>. This means the property&apos;s monthly financial report has been:</p>
      <ol>
        <li>Received by the system</li>
        <li>Processed and validated</li>
        <li>Applied to the property&apos;s financial data in Lumodo</li>
      </ol>
      <p>Once a report is Applied, its data appears in the Dashboard KPIs and charts.</p>

      <h2>Pending</h2>
      <p>Shown as an <strong>amber badge</strong>. This means the property has not yet submitted their monthly P&amp;L for the selected period. The report is expected but has not been received.</p>

      <h2>Workflow</h2>
      <ol>
        <li>A property manager submits their monthly P&amp;L data</li>
        <li>The system receives and processes the submission</li>
        <li>Status changes from <strong>Pending</strong> to <strong>Applied</strong></li>
        <li>The <strong>Last Received P&amp;L</strong> date updates</li>
        <li>Dashboard data refreshes to include the new figures</li>
      </ol>
    </PageLayout>
  );
}
