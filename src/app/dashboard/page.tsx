import { PageLayout } from "@/components/PageLayout";
import { CalloutBox } from "@/components/CalloutBox";

export default function DashboardPage() {
  return (
    <PageLayout title="Portfolio Snapshot" subtitle="Your real-time view of portfolio-wide financial performance.">
      <h2>What You See</h2>
      <p>The Dashboard shows a <strong>Portfolio Snapshot</strong> with a &quot;Portfolio &bull; T12&quot; subtitle. It displays a rolling 12-month view of your entire portfolio&apos;s financial data.</p>

      <h2>Header Controls</h2>
      <ul>
        <li><strong>Data Period badge</strong> — Green badge showing the current date range (e.g., &quot;Apr 2025 - Mar 2026&quot;)</li>
        <li><strong>T12 dropdown</strong> — Select the trailing 12-month period</li>
        <li><strong>Actual / Compare toggle</strong> — Switch between actual performance and budget comparison</li>
        <li><strong>Date picker</strong> — Adjust the reporting period with an Apply button</li>
        <li><strong>Export PDF</strong> — Download the current snapshot as a formatted PDF</li>
      </ul>

      <h2>Key Performance Indicators</h2>
      <p>Six KPI cards displayed in a 3&times;2 grid:</p>
      <table>
        <thead><tr><th>KPI</th><th>Example Value</th><th>What It Means</th></tr></thead>
        <tbody>
          <tr><td>Gross Potential Rent</td><td>$19,037,114.00</td><td>Maximum revenue if all units leased at market rate</td></tr>
          <tr><td>Effective Gross Income</td><td>$19,349,002.00</td><td>GPR minus vacancy/concessions, plus other income</td></tr>
          <tr><td>Net Operating Income</td><td>$7,576,824.00</td><td>Revenue minus operating expenses</td></tr>
          <tr><td>Operating Expense Ratio</td><td>60.84%</td><td>Operating expenses as % of income</td></tr>
          <tr><td>Maintenance Expense Ratio</td><td>11.07%</td><td>Maintenance costs as % of income</td></tr>
          <tr><td>Utility Expense Ratio</td><td>11.19%</td><td>Utility costs as % of income</td></tr>
        </tbody>
      </table>

      <h2>Charts</h2>
      <ul>
        <li><strong>Income vs Expense vs NOI</strong> — Grouped bar chart showing monthly revenue, costs, and NOI</li>
        <li><strong>NOI Trend</strong> — Line chart tracking Net Operating Income over time</li>
      </ul>

      <CalloutBox type="tip">Use the Actual/Compare toggle to quickly see how your portfolio is performing against budget.</CalloutBox>
    </PageLayout>
  );
}
