import { PageLayout } from "@/components/PageLayout";
import { UIScreenshot, BLUR_PERIOD_STATUS } from "@/components/UIScreenshot";

export default function PeriodReportStatusPage() {
  return (
    <PageLayout title="Period Report Status" subtitle="Track period report submissions across all properties.">
      <UIScreenshot
        src="/images/ui/period-status.png"
        alt="Upload Status — Viewing Period, summary cards, and property submission table"
        blurZones={BLUR_PERIOD_STATUS}
        caption="The Period Report Status page showing submission tracking by property"
      />

      <h2>What You See</h2>
      <p>Accessed via <strong>Reports &gt; Upload Status</strong>. The page shows which properties have submitted their monthly P&amp;L data and which haven&apos;t.</p>

      <h2>Viewing Period</h2>
      <p>A calendar icon with &quot;VIEWING PERIOD&quot; label shows the current month being tracked (e.g., &quot;Feb 2026&quot;). Use the year dropdown to switch between years.</p>

      <h2>Summary Cards</h2>
      <p>Three cards at the top:</p>
      <table>
        <thead><tr><th>Card</th><th>Icon</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>Total Properties</td><td>Building (navy)</td><td>Total number of properties in your portfolio</td></tr>
          <tr><td>Applied</td><td>Checkmark (green)</td><td>Properties whose reports have been received and processed</td></tr>
          <tr><td>Pending</td><td>Clock (amber)</td><td>Properties still awaiting submission</td></tr>
        </tbody>
      </table>

      <h2>Filters</h2>
      <ul>
        <li><strong>Search bar</strong> — Find a specific property by name</li>
        <li><strong>Status dropdown</strong> — Filter to show only Applied, Pending, or All</li>
      </ul>

      <h2>Property Table</h2>
      <table>
        <thead><tr><th>Column</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>Property Name</td><td>Name of the property</td></tr>
          <tr><td>Period</td><td>The reporting month (e.g., &quot;Feb 2026&quot;)</td></tr>
          <tr><td>Status</td><td>Pending (amber badge) or Applied (green badge)</td></tr>
          <tr><td>Last Received P&amp;L</td><td>Date of the most recently received P&amp;L</td></tr>
        </tbody>
      </table>
    </PageLayout>
  );
}
