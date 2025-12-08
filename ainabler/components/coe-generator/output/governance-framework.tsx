"use client"

import { Card } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

interface GovernanceFrameworkProps {
  riskTolerance: string
  complianceNeeds: string[]
}

export function GovernanceFramework({ riskTolerance, complianceNeeds }: GovernanceFrameworkProps) {
  const frameworkItems = [
    "Data Governance Policy",
    "Model Validation Framework",
    "Risk Management Process",
    "Audit & Compliance",
    "Documentation Standards",
  ]

  return (
    <Card className="p-8 border-border">
      <h2 className="text-2xl font-bold text-foreground mb-4">Governance Framework</h2>
      <div className="space-y-2 mb-6">
        <div>
          <p className="text-sm text-muted-foreground">Risk Tolerance</p>
          <p className="font-semibold text-foreground">{riskTolerance}</p>
        </div>
        {complianceNeeds.length > 0 && (
          <div>
            <p className="text-sm text-muted-foreground mb-2">Compliance Requirements</p>
            <div className="flex flex-wrap gap-2">
              {complianceNeeds.map((need) => (
                <span key={need} className="text-xs bg-coral-glow/10 text-coral-glow px-2 py-1 rounded font-medium">
                  {need}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="space-y-3">
        {frameworkItems.map((item) => (
          <div key={item} className="flex items-center gap-3">
            <CheckCircle size={20} className="text-coral-glow flex-shrink-0" />
            <span className="text-foreground">{item}</span>
          </div>
        ))}
      </div>
    </Card>
  )
}
