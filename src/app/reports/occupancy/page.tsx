import { PageLayout } from "@/components/PageLayout";
import { UIScreenshot, BLUR_REPORTS } from "@/components/UIScreenshot";

export default function OccupancyReportsPage() {
  return (
    <PageLayout title="Occupancy Reports" subtitle="Unit-level occupancy data across your portfolio.">
      <UIScreenshot
        src="/images/ui/reports.png"
        alt="Reports page — Occupancy Reports tab"
        blurZones={BLUR_REPORTS}
        caption="The Occupancy Reports tab showing property-level occupancy data"
      />

      <h2>Filters</h2>
      <ul>
        <li><strong>Property dropdown</strong> — Filter by a specific property or view All Properties</li>
        <li><strong>Status dropdown</strong> — Filter by report status (All, Draft, etc.)</li>
        <li><strong>Sort by</strong> — Sort reports by Recently Edited or other criteria</li>
        <li><strong>Refresh</strong> — Reload the report list</li>
      </ul>

      <h2>Report Table</h2>
      <table>
        <thead><tr><th>Column</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>Property</td><td>Name of the property</td></tr>
          <tr><td>Report Period</td><td>Month and year (e.g., &quot;February 2026&quot;)</td></tr>
          <tr><td>Status</td><td>DRAFT (amber badge) or other status</td></tr>
          <tr><td>Occupancy</td><td>Percentage with unit count (e.g., &quot;97.5% — 39/40 units&quot;)</td></tr>
          <tr><td>Created</td><td>Date the report was created</td></tr>
          <tr><td>Last Updated</td><td>Date and time of last update</td></tr>
          <tr><td>Actions</td><td>View button (amber)</td></tr>
        </tbody>
      </table>

      <h2>Viewing a Report</h2>
      <p>Click the <strong>View</strong> button to open the full occupancy report for a property, showing detailed unit-level data.</p>
    </PageLayout>
  );
}
