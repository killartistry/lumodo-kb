import { PageLayout } from "@/components/PageLayout";
import { UIScreenshot } from "@/components/UIScreenshot";

export default function ExportPage() {
  return (
    <PageLayout title="Exporting to PDF" subtitle="Download your portfolio snapshot as a formatted PDF.">
      <UIScreenshot
        src="/images/ui/export-pdf.png"
        alt="Save as PDF dialog — print preview of the Portfolio Snapshot with KPIs and charts"
        caption="The Export PDF dialog showing a preview of the formatted Portfolio Snapshot"
      />

      <h2>How to Export</h2>
      <ol>
        <li>Navigate to the Dashboard</li>
        <li>Set your desired data period and view (T12, Actual/Compare)</li>
        <li>Click the <strong>Export PDF</strong> button in the top right</li>
        <li>A formatted PDF will download with the current snapshot data</li>
      </ol>

      <h2>What&apos;s Included</h2>
      <p>The exported PDF contains:</p>
      <ul>
        <li>All 6 KPI cards with current values</li>
        <li>Income vs Expense vs NOI chart</li>
        <li>NOI Trend chart</li>
        <li>The selected data period and view settings</li>
      </ul>

      <h2>Use Cases</h2>
      <ul>
        <li>Sharing portfolio performance with investors or stakeholders</li>
        <li>Internal team reporting and reviews</li>
        <li>Record-keeping and compliance documentation</li>
      </ul>
    </PageLayout>
  );
}
