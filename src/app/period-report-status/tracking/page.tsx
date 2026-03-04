import { PageLayout } from "@/components/PageLayout";
import { CalloutBox } from "@/components/CalloutBox";

export default function TrackingPage() {
  return (
    <PageLayout title="Tracking Submissions" subtitle="How to monitor which properties have submitted their reports.">
      <h2>Using the Viewing Period</h2>
      <p>Select the month you want to track using the period selector. The table and summary cards will update to show the submission status for all properties in that period.</p>

      <h2>Identifying Late Submissions</h2>
      <ul>
        <li>Look at the <strong>Pending</strong> count in the summary cards</li>
        <li>Check the <strong>Last Received P&amp;L</strong> column — if the date is several months old, the property may be consistently behind</li>
        <li>Use the Status filter to show only Pending properties</li>
      </ul>

      <h2>Best Practices</h2>
      <ul>
        <li>Check this page weekly to stay on top of submissions</li>
        <li>Follow up with Pending properties before the monthly deadline</li>
        <li>Properties with old &quot;Last Received P&amp;L&quot; dates may need attention</li>
      </ul>

      <CalloutBox type="tip">Use the search bar to quickly find a specific property and check its submission status.</CalloutBox>
    </PageLayout>
  );
}
