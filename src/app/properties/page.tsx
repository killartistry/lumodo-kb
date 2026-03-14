import { PageLayout } from "@/components/PageLayout";
import { UIScreenshot, BLUR_PROPERTIES } from "@/components/UIScreenshot";

export default function PropertiesPage() {
  return (
    <PageLayout title="Properties" subtitle="Manage your property assets and their details.">
      <UIScreenshot
        src="/images/ui/properties.png"
        alt="Properties page — table with Type, Units, Status, Billing, and Actions columns"
        blurZones={BLUR_PROPERTIES}
        caption="The Properties page with property listings, status badges, and action links"
      />

      <h2>What You See</h2>
      <p>The Properties page shows a table of all properties in your portfolio. The header reads <strong>&quot;Properties&quot;</strong> with the subtitle &quot;Manage your property assets and their details.&quot;</p>

      <h2>Controls</h2>
      <ul>
        <li><strong>Show Archived</strong> — Checkbox to toggle visibility of archived properties</li>
        <li><strong>+ Add Property</strong> — Amber/gold button to add a new property to your portfolio</li>
      </ul>

      <h2>Table Columns</h2>
      <table>
        <thead><tr><th>Column</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>Property Name</td><td>Name of the property</td></tr>
          <tr><td>Type</td><td>Multifamily, Mixed Use, or Commercial</td></tr>
          <tr><td>Location</td><td>Property address</td></tr>
          <tr><td>Units</td><td>Total number of units</td></tr>
          <tr><td>Status</td><td>Active (green badge) or Inactive</td></tr>
          <tr><td>Billing</td><td>Draft (amber badge) or Active</td></tr>
          <tr><td>Year Acquired</td><td>Year the property was acquired</td></tr>
          <tr><td>Actions</td><td>View, Occupancy, Edit links</td></tr>
        </tbody>
      </table>

      <h2>Actions</h2>
      <ul>
        <li><strong>View</strong> — Open the full property detail page</li>
        <li><strong>Occupancy</strong> — View occupancy data for this property</li>
        <li><strong>Edit</strong> — Edit property details inline</li>
      </ul>
    </PageLayout>
  );
}
