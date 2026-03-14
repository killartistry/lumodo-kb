import { PageLayout } from "@/components/PageLayout";
import { UIScreenshot } from "@/components/UIScreenshot";

export default function SettingsPage() {
  return (
    <PageLayout title="Settings & Account" subtitle="User profile, appearance, and organization settings.">
      <UIScreenshot
        src="/images/ui/settings-menu.png"
        alt="Profile dropdown — Change Password, Admin Panel, and Log out options"
        blurZones={[
          { top: "1%", left: "78%", width: "22%", height: "12%" },
        ]}
        caption="The user profile dropdown with Change Password, Admin Panel, and Log out options"
      />

      <h2>What You See</h2>
      <p>Settings are accessed from the top-right area of the app. You&apos;ll see:</p>
      <ul>
        <li><strong>Settings gear icon</strong> — Opens organization and account settings</li>
        <li><strong>Dark/Light mode toggle</strong> — Sun/moon icon to switch appearance</li>
        <li><strong>User avatar</strong> — Your profile dropdown with your name</li>
      </ul>

      <h2>Dark / Light Mode</h2>
      <p>Click the sun/moon icon in the top-right to toggle between dark and light themes. The app remembers your preference.</p>

      <h2>User Profile</h2>
      <p>Click your avatar or name to open the profile dropdown. From here you can:</p>
      <ul>
        <li><strong>Change Password</strong> — Update your account password</li>
        <li><strong>Admin Panel</strong> — Access organization admin settings (admin roles only)</li>
        <li><strong>Log out</strong> — Sign out of your account</li>
      </ul>

      <h2>Organization Settings</h2>
      <p>Available to Tenant Admins. Manage your organization&apos;s name, settings, and configurations.</p>

      <h2>Team & Permissions</h2>
      <p>Lumodo uses a 5-tier role-based access control system:</p>
      <table>
        <thead><tr><th>Role</th><th>Access</th></tr></thead>
        <tbody>
          <tr><td>Platform Admin</td><td>Full system access, manage all tenants</td></tr>
          <tr><td>Tenant Admin</td><td>Full access within your organization, manage users</td></tr>
          <tr><td>Manager</td><td>Create/edit properties, generate reports, view analytics</td></tr>
          <tr><td>Analyst</td><td>View dashboards and reports, export data</td></tr>
          <tr><td>Viewer</td><td>Read-only access to dashboards and published reports</td></tr>
        </tbody>
      </table>
    </PageLayout>
  );
}
