import { PageLayout } from "@/components/PageLayout";
import { UIScreenshot, BLUR_PROPERTIES } from "@/components/UIScreenshot";

export default function EditingPropertyPage() {
  return (
    <PageLayout title="Editing Property Details" subtitle="How to update information for an existing property.">
      <UIScreenshot
        src="/images/ui/properties.png"
        alt="Properties table — Edit link in the Actions column"
        blurZones={BLUR_PROPERTIES}
        caption="Click Edit in the Actions column to modify property details"
      />

      <h2>How to Edit</h2>
      <ol>
        <li>Go to the <strong>Properties</strong> page</li>
        <li>Find the property in the table</li>
        <li>Click <strong>Edit</strong> (blue link) in the Actions column</li>
        <li>The Edit Property dialog will appear</li>
      </ol>

      <UIScreenshot
        src="/images/ui/add-property.png"
        alt="Edit Property dialog — same form as Add New Property with fields pre-filled for editing"
        caption="The Edit Property dialog with all editable fields pre-populated with current values"
      />

      <h2>What You See</h2>
      <p>Clicking <strong>Edit</strong> opens a dialog identical to the Add New Property form, but with all fields pre-filled with the property&apos;s current values. You can update any of the following:</p>

      <h2>Editable Fields</h2>
      <table>
        <thead><tr><th>Field</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>Property Name</td><td>The display name of the property (required)</td></tr>
          <tr><td>Property Type</td><td>Multifamily, Mixed Use, or Commercial</td></tr>
          <tr><td>Use Type</td><td>How the property is used (optional)</td></tr>
          <tr><td>Property Status</td><td>Active or Inactive — controls whether the property appears in reports</td></tr>
          <tr><td>Billing Status</td><td>Draft (Not Billed) or Active — active properties are billed in subscription</td></tr>
          <tr><td>Internal Code</td><td>Your internal reference code (e.g., PROP-001)</td></tr>
          <tr><td>Units Count</td><td>Total number of units in the property</td></tr>
        </tbody>
      </table>

      <h2>Saving Changes</h2>
      <p>After updating the fields, click <strong>Save</strong> to apply your changes. Click <strong>Cancel</strong> to discard edits and return to the Properties table.</p>
    </PageLayout>
  );
}
