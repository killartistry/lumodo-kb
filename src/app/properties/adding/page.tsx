import { PageLayout } from "@/components/PageLayout";

export default function AddingPropertyPage() {
  return (
    <PageLayout title="Adding a Property" subtitle="How to add a new property to your portfolio.">
      <h2>Steps</h2>
      <ol>
        <li>Go to the <strong>Properties</strong> page</li>
        <li>Click the <strong>+ Add Property</strong> button (amber/gold)</li>
        <li>Fill in the required details:
          <ul>
            <li><strong>Property Name</strong></li>
            <li><strong>Type</strong> — Multifamily, Mixed Use, or Commercial</li>
            <li><strong>Location</strong> — Address of the property</li>
            <li><strong>Units</strong> — Total number of units</li>
            <li><strong>Year Acquired</strong></li>
          </ul>
        </li>
        <li>Save the property</li>
      </ol>
      <p>The new property will appear in the Properties table with an Active status and Draft billing by default.</p>
    </PageLayout>
  );
}
