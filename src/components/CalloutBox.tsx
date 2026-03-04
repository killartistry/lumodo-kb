import { Info, AlertTriangle, CheckCircle } from "lucide-react";

const styles = {
  tip: { bg: "bg-amber-50 border-amber-200", icon: <CheckCircle size={18} className="text-amber-600" /> },
  warning: { bg: "bg-orange-50 border-orange-200", icon: <AlertTriangle size={18} className="text-orange-600" /> },
  info: { bg: "bg-blue-50 border-blue-200", icon: <Info size={18} className="text-blue-600" /> },
};

export function CalloutBox({ type = "info", children }: { type?: "tip" | "warning" | "info"; children: React.ReactNode }) {
  const s = styles[type];
  return (
    <div className={`${s.bg} border rounded-lg p-4 my-4 flex gap-3`}>
      <div className="flex-shrink-0 mt-0.5">{s.icon}</div>
      <div className="text-sm leading-relaxed">{children}</div>
    </div>
  );
}
