import { PageLayout } from "@/components/PageLayout";

export default function FinancialReportsPage() {
  return (
    <PageLayout title="Financial Reports" subtitle="Managing financial reports and P&L statements.">
      <h2>My Reports</h2>
      <p>Reports you&apos;ve created for your own use. These are only visible to you until you publish them.</p>
      <p>If no reports exist yet, you&apos;ll see: <em>&quot;No Reports Yet — Create your first report from a template to get started.&quot;</em></p>

      <h2>Published to Others</h2>
      <p>Reports that have been shared with other users in your organization. The count badge on the tab shows how many published reports exist.</p>

      <h2>Creating a Financial Report</h2>
      <ol>
        <li>Click <strong>+ Create New Report</strong></li>
        <li>Select a financial report template</li>
        <li>Configure the scope (properties, date range)</li>
        <li>Generate the report</li>
        <li>Optionally publish to share with others</li>
      </ol>
    </PageLayout>
  );
}
