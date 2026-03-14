import { PageLayout } from "@/components/PageLayout";
import { CalloutBox } from "@/components/CalloutBox";
import { UIScreenshot, BLUR_DASHBOARD } from "@/components/UIScreenshot";

export default function GettingStartedPage() {
  return (
    <PageLayout title="Getting Started" subtitle="Everything you need to know to start using Lumodo.">
      <h2>Logging In</h2>
      <p>Lumodo is invitation-only. You&apos;ll receive an email invitation from your organization&apos;s admin with a link to create your account and set your password.</p>
      <CalloutBox type="info">There is no public signup. If you need access, contact your organization&apos;s admin.</CalloutBox>

      <UIScreenshot
        src="/images/ui/dashboard.png"
        alt="Lumodo Dashboard — the first screen you see after logging in"
        blurZones={BLUR_DASHBOARD}
        caption="The Dashboard is the first screen you see after logging in"
      />

      <h2>Navigating the App</h2>
      <p>When you log in, you&apos;ll see a left sidebar with 5 main sections:</p>
      <ol>
        <li><strong>Dashboard</strong> — Portfolio Snapshot with KPIs, charts, and financial overview</li>
        <li><strong>Properties</strong> — Manage your property assets and details</li>
        <li><strong>Reports</strong> — Financial reports, occupancy reports, and upload status</li>
        <li><strong>Period Report Status</strong> — Track monthly report submissions per property</li>
        <li><strong>Settings</strong> — User profile, dark/light mode, and organization settings</li>
      </ol>


      <h2>Your First Steps</h2>
      <ol>
        <li>Log in with your invitation credentials</li>
        <li>Check the <strong>Dashboard</strong> to see your portfolio&apos;s financial snapshot</li>
        <li>Browse <strong>Properties</strong> to see all assets in your portfolio</li>
        <li>Go to <strong>Reports</strong> to view or create financial and occupancy reports</li>
        <li>Check <strong>Period Report Status</strong> to see which properties have submitted their monthly data</li>
      </ol>
    </PageLayout>
  );
}
