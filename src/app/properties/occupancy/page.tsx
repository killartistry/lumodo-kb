import { PageLayout } from "@/components/PageLayout";

export default function OccupancyPage() {
  return (
    <PageLayout title="Occupancy" subtitle="Tracking unit occupancy for each property.">
      <h2>Viewing Occupancy</h2>
      <p>Click the <strong>Occupancy</strong> link in the Actions column of any property row to see occupancy data for that property.</p>

      <h2>What You See</h2>
      <ul>
        <li><strong>Occupancy percentage</strong> — Occupied units divided by total units (e.g., 97.5%)</li>
        <li><strong>Unit breakdown</strong> — Shows occupied vs total (e.g., 39/40 units)</li>
        <li><strong>Trends</strong> — How occupancy has changed over time</li>
      </ul>

      <h2>Why It Matters</h2>
      <p>Occupancy directly impacts your revenue. A property at 95% occupancy versus 85% occupancy represents a significant difference in income. Tracking this per property helps identify underperforming assets.</p>
    </PageLayout>
  );
}
