"use client"

import { Label } from "@/components/ui/label"

interface Step3Props {
  data: any
  onChange: (field: string, value: any) => void
}

export function Step3RiskGovernance({ data, onChange }: Step3Props) {
  const riskOptions = ["Low", "Medium", "High", "Very High"]
  const complianceOptions = ["GDPR", "HIPAA", "SOC 2", "ISO 27001", "Industry-specific regulations"]

  return (
    <div className="space-y-8">
      {/* Risk Tolerance */}
      <div className="space-y-3">
        <Label className="text-base font-semibold text-foreground">Risk Tolerance</Label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {riskOptions.map((risk) => (
            <button
              key={risk}
              onClick={() => onChange("riskTolerance", risk)}
              className={`p-3 rounded-lg border-2 transition-all text-sm font-medium ${
                data.riskTolerance === risk
                  ? "border-coral-glow bg-coral-glow/10 text-foreground"
                  : "border-border hover:border-coral-glow/50 text-foreground"
              }`}
            >
              {risk}
            </button>
          ))}
        </div>
      </div>

      {/* Compliance Requirements */}
      <div className="space-y-3">
        <Label className="text-base font-semibold text-foreground">Compliance & Regulatory Requirements</Label>
        <div className="space-y-2">
          {complianceOptions.map((compliance) => (
            <label
              key={compliance}
              className="flex items-center p-3 rounded-lg border-2 border-border hover:border-coral-glow/50 cursor-pointer transition-all"
            >
              <input
                type="checkbox"
                checked={data.complianceNeeds.includes(compliance)}
                onChange={(e) => {
                  const newCompliance = e.target.checked
                    ? [...data.complianceNeeds, compliance]
                    : data.complianceNeeds.filter((c: string) => c !== compliance)
                  onChange("complianceNeeds", newCompliance)
                }}
                className="w-4 h-4 text-coral-glow rounded"
              />
              <span className="ml-3 text-foreground font-medium">{compliance}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  )
}
