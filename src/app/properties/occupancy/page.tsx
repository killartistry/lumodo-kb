import { PageLayout } from "@/components/PageLayout";
import { UIScreenshot, BLUR_PROPERTIES } from "@/components/UIScreenshot";

export default function OccupancyPage() {
  return (
    <PageLayout title="Occupancy" subtitle="Tracking unit occupancy for each property.">
      <UIScreenshot
        src="/images/ui/properties.png"
        alt="Properties table — Occupancy link in the Actions column"
        blurZones={BLUR_PROPERTIES}
        caption="Click the Occupancy link in the Actions column to view occupancy data"
      />

      <h2>Viewing Occupancy</h2>
      <p>Click the <strong>Occupancy</strong> link in the Actions column of any property row to see occupancy data for that property.</p>

      <h2>What You See</h2>
      <ul>
        <li><strong>Occupancy percentage</strong> — Occupied units divided by total units (e.g., 97.5%)</li>
        <li><strong>Unit breakdown</strong> — Shows occupied vs total (e.g., 39/40 units)</li>
        <li><strong>Trends</strong> — How occupancy has changed over time</li>
      </ul>

      <h2>Editing Occupancy</h2>
      <p>When you click <strong>Occupancy</strong> on a property, you are taken to the <strong>Occupancy Validation</strong> screen. This is where you confirm monthly occupancy based on the rent roll baseline.</p>

      <UIScreenshot
        src="/images/ui/occupancy-validation.png"
        alt="Occupancy Validation — reporting period selector, summary cards, unit checklist, and action buttons"
        blurZones={[
          { top: "1%", left: "10%", width: "20%", height: "5%" },
          { top: "42%", left: "5%", width: "22%", height: "8%" },
          { top: "42%", left: "27%", width: "22%", height: "8%" },
          { top: "42%", left: "49%", width: "14%", height: "8%" },
          { top: "42%", left: "75%", width: "22%", height: "8%" },
          { top: "90%", left: "5%", width: "20%", height: "6%" },
          { top: "90%", left: "35%", width: "22%", height: "6%" },
        ]}
        caption="The Occupancy Validation screen with period selector, summary cards, and unit-level checklist"
      />

      <h3>Reporting Period</h3>
      <p>At the top, select the <strong>Month</strong> and <strong>Year</strong> dropdowns to choose the reporting period you want to validate (e.g., March 2026).</p>

      <h3>Summary Cards</h3>
      <p>Four cards display the current occupancy snapshot for the selected period:</p>
      <table>
        <thead><tr><th>Card</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>Total Units</td><td>Total number of units in the property</td></tr>
          <tr><td>Occupied</td><td>Number of units currently occupied</td></tr>
          <tr><td>Vacant</td><td>Number of units currently vacant</td></tr>
          <tr><td>Occupancy Rate</td><td>Percentage of units occupied</td></tr>
        </tbody>
      </table>

      <h3>Unit Checklist</h3>
      <p>Below the summary, a <strong>Units</strong> table lists every unit with columns for:</p>
      <ul>
        <li><strong>Unit Number</strong> — The unit identifier</li>
        <li><strong>Bedrooms</strong> — Number of bedrooms</li>
        <li><strong>Occupied</strong> — Checkbox to mark the unit as occupied or vacant</li>
      </ul>
      <p>Use the <strong>Select All (Occupied)</strong> or <strong>Deselect All (Vacant)</strong> buttons to quickly set all units at once, then adjust individual units as needed.</p>

      <h3>Actions</h3>
      <ul>
        <li><strong>Cancel Draft</strong> — Discard the current draft without saving</li>
        <li><strong>Export PDF</strong> — Download the occupancy report as a PDF</li>
        <li><strong>Save Changes</strong> — Save your edits as a draft to return to later</li>
        <li><strong>Finalize Report</strong> — Submit the occupancy validation for this period (changes status from Draft to Applied)</li>
      </ul>

      <h2>Why It Matters</h2>
      <p>Occupancy directly impacts your revenue. A property at 95% occupancy versus 85% occupancy represents a significant difference in income. Tracking this per property helps identify underperforming assets.</p>
    </PageLayout>
  );
}
