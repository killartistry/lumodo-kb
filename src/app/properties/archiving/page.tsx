import { PageLayout } from "@/components/PageLayout";
import { CalloutBox } from "@/components/CalloutBox";

export default function ArchivingPage() {
  return (
    <PageLayout title="Archiving Properties" subtitle="How archiving works and when to use it.">
      <h2>Archive vs Delete</h2>
      <ul>
        <li><strong>Archive</strong> — Hides the property from the default table view but keeps all historical data intact. You can unarchive at any time.</li>
        <li><strong>Delete</strong> — Permanently removes the property and all associated data. This cannot be undone.</li>
      </ul>

      <h2>How to Archive</h2>
      <ol>
        <li>Go to the <strong>Properties</strong> page</li>
        <li>Click <strong>Edit</strong> on the property you want to archive</li>
        <li>Change the status to archived</li>
        <li>The property will disappear from the default view</li>
      </ol>

      <h2>Viewing Archived Properties</h2>
      <p>Check the <strong>Show Archived</strong> checkbox at the top of the Properties page to see archived properties alongside active ones.</p>

      <CalloutBox type="warning">Archiving is recommended over deleting. Archived properties preserve historical financial data for reporting and compliance purposes.</CalloutBox>
    </PageLayout>
  );
}
