import { PageLayout } from "@/components/PageLayout";
import { UIScreenshot, BLUR_ADD_PROPERTY } from "@/components/UIScreenshot";

export default function AddingPropertyPage() {
  return (
    <PageLayout title="Adding a Property" subtitle="How to add a new property to your portfolio.">
      <UIScreenshot
        src="/images/ui/add-property.png"
        alt="Add New Property dialog — form fields for Property Name, Type, Status, Billing, and Units"
        blurZones={BLUR_ADD_PROPERTY}
        caption="The Add New Property dialog with all available form fields"
      />

      <h2>Steps</h2>
      <ol>
        <li>Go to the <strong>Properties</strong> page</li>
        <li>Click the <strong>+ Add Property</strong> button (amber/gold)</li>
        <li>Fill in the required details:
          <ul>
            <li><strong>Property Name</strong> (required)</li>
            <li><strong>Property Type</strong> — Multifamily, Mixed Use, or Commercial</li>
            <li><strong>Use Type</strong> — How the property is used (optional)</li>
            <li><strong>Property Status</strong> — Active or Inactive</li>
            <li><strong>Billing Status</strong> — Draft (Not Billed) or Active</li>
            <li><strong>Internal Code</strong> — Your internal reference (e.g., PROP-001)</li>
            <li><strong>Units Count</strong> — Total number of units</li>
          </ul>
        </li>
        <li>Click <strong>Create Property</strong></li>
      </ol>
      <p>The new property will appear in the Properties table with the status and billing settings you selected.</p>
    </PageLayout>
  );
}
