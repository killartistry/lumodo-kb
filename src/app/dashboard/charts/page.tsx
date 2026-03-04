import { PageLayout } from "@/components/PageLayout";

export default function ChartsPage() {
  return (
    <PageLayout title="Charts" subtitle="Understanding the Income vs Expense and NOI Trend charts.">
      <h2>Income vs Expense vs NOI</h2>
      <p>A grouped bar chart showing three values for each month across the trailing 12-month period:</p>
      <ul>
        <li><strong>Income</strong> — Total revenue for the month</li>
        <li><strong>Expense</strong> — Total operating expenses</li>
        <li><strong>NOI</strong> — The difference (income minus expenses)</li>
      </ul>
      <p>The scale typically ranges from $650K to $2.6M depending on portfolio size. Hover over any bar to see exact figures for that month.</p>

      <h2>NOI Trend</h2>
      <p>A line chart showing how Net Operating Income changes over time. This makes it easy to spot:</p>
      <ul>
        <li>Upward trends indicating improving portfolio performance</li>
        <li>Downward trends that may need investigation</li>
        <li>Seasonal patterns in income or expenses</li>
        <li>Sudden drops that could indicate a problem property</li>
      </ul>
      <p>The scale typically ranges from $450K to $1.8M. Use this chart alongside the KPI cards for a complete picture.</p>
    </PageLayout>
  );
}
