import { PageLayout } from "@/components/PageLayout";
import { UIScreenshot } from "@/components/UIScreenshot";

export default function CreatingReportPage() {
  return (
    <PageLayout title="Creating a Report" subtitle="How to create a new report from a template.">
      <UIScreenshot
        src="/images/ui/create-report.png"
        alt="Create Report from Template — Portfolio Performance and Property Monthly Operating Statement templates"
        caption="Choose a report template: Portfolio Performance & Contribution or Property Monthly Operating Statement Review"
      />

      <h2>Steps</h2>
      <ol>
        <li>Go to the <strong>Reports</strong> page</li>
        <li>Select the <strong>Financial Reports</strong> or <strong>Occupancy Reports</strong> tab</li>
        <li>Click <strong>+ Create New Report</strong> (amber/gold button)</li>
        <li>Choose a report template</li>
        <li>Set the scope:
          <ul>
            <li>Select properties to include</li>
            <li>Set the reporting period</li>
          </ul>
        </li>
        <li>Generate the report</li>
      </ol>

      <h2>After Creation</h2>
      <p>New reports start with a <strong>Draft</strong> status and appear in your <strong>My Reports</strong> tab. You can:</p>
      <ul>
        <li>Review and edit the report</li>
        <li>Publish it to share with your team (moves it to &quot;Published to Others&quot;)</li>
        <li>Export it as needed</li>
      </ul>
    </PageLayout>
  );
}
