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
        <li>Click <strong>Edit</strong> in the Actions column</li>
        <li>Update the desired fields</li>
        <li>Save your changes</li>
      </ol>

      <h2>Editable Fields</h2>
      <ul>
        <li>Property Name</li>
        <li>Type (Multifamily, Mixed Use, Commercial)</li>
        <li>Location</li>
        <li>Units</li>
        <li>Status (Active / Inactive)</li>
        <li>Billing status</li>
        <li>Year Acquired</li>
      </ul>
    </PageLayout>
  );
}
