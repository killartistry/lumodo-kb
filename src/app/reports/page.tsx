import { PageLayout } from "@/components/PageLayout";

export default function ReportsPage() {
  return (
    <PageLayout title="Reports" subtitle="Performance reports for your organization.">
      <h2>What You See</h2>
      <p>The Reports page has three tabs:</p>
      <ol>
        <li><strong>Financial Reports</strong> — P&amp;L data and financial statements</li>
        <li><strong>Occupancy Reports</strong> — Unit-level vacancy and lease data (shows a count badge)</li>
        <li><strong>Upload Status</strong> — Links to the Period Report Status page for submission tracking</li>
      </ol>

      <h2>Financial Reports Tab</h2>
      <p>Contains two sub-tabs:</p>
      <ul>
        <li><strong>My Reports</strong> — Reports you&apos;ve created for personal use</li>
        <li><strong>Published to Others</strong> — Reports shared with your team</li>
      </ul>
      <p>The <strong>+ Create New Report</strong> button (amber/gold) lets you start a new report from a template.</p>

      <h2>Occupancy Reports Tab</h2>
      <p>Shows a filterable table of occupancy reports with columns for Property, Report Period, Status, Occupancy, Created, Last Updated, and Actions.</p>

      <h2>Upload Status Tab</h2>
      <p>Links to the <strong>Period Report Status</strong> section for tracking which properties have submitted their monthly financials.</p>
    </PageLayout>
  );
}
