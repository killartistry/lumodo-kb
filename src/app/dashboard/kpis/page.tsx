import { PageLayout } from "@/components/PageLayout";
import { UIScreenshot, BLUR_DASHBOARD } from "@/components/UIScreenshot";

export default function KPIsPage() {
  return (
    <PageLayout title="Key Performance Indicators" subtitle="Understanding the 6 KPI cards on your Dashboard.">
      <UIScreenshot
        src="/images/ui/dashboard.png"
        alt="Dashboard KPI cards — GPR, EGI, NOI, and expense ratios"
        blurZones={BLUR_DASHBOARD}
        caption="The six KPI cards displayed in a 3×2 grid on the Dashboard"
      />

      <h2>Gross Potential Rent (GPR)</h2>
      <p>The maximum rent your portfolio could generate if every unit were leased at the current market rate. This is the theoretical revenue ceiling.</p>

      <h2>Effective Gross Income (EGI)</h2>
      <p>GPR minus vacancy losses and concessions, plus any other income (late fees, parking, etc.). This is your realistic top-line revenue.</p>

      <h2>Net Operating Income (NOI)</h2>
      <p>Total revenue minus all operating expenses. This excludes debt service (mortgage payments). NOI is the primary measure of property profitability in commercial real estate.</p>

      <h2>Operating Expense Ratio</h2>
      <p>Operating expenses divided by effective gross income. Shows what percentage of your income goes to operating the properties. Lower is better.</p>

      <h2>Maintenance Expense Ratio</h2>
      <p>Maintenance and repair costs as a percentage of income. Helps identify properties that may need capital improvements or are experiencing higher-than-normal maintenance costs.</p>

      <h2>Utility Expense Ratio</h2>
      <p>Utility costs (electric, gas, water, etc.) as a percentage of income. Useful for identifying properties with inefficient energy usage or billing issues.</p>
    </PageLayout>
  );
}
