"use client"

import { Card } from "@/components/ui/card"

interface UseCaseMatrixProps {
  goals: string[]
}

export function UseCasePrioritizationMatrix({ goals }: UseCaseMatrixProps) {
  const useCases = [
    { name: "Customer Sentiment Analysis", impact: "High", effort: "Medium" },
    { name: "Automated Report Generation", impact: "High", effort: "Low" },
    { name: "Predictive Analytics", impact: "Medium", effort: "High" },
    { name: "Process Automation", impact: "High", effort: "Medium" },
    { name: "Knowledge Management", impact: "Medium", effort: "Medium" },
  ]

  const getColor = (impact: string, effort: string) => {
    if (impact === "High" && effort === "Low") return "bg-green-50 border-green-200"
    if (impact === "High" && effort === "Medium") return "bg-blue-50 border-blue-200"
    if (impact === "Medium") return "bg-yellow-50 border-yellow-200"
    return "bg-orange-50 border-orange-200"
  }

  return (
    <Card className="p-8 border-border">
      <h2 className="text-2xl font-bold text-foreground mb-6">Use Case Prioritization Matrix</h2>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {useCases.map((useCase, idx) => (
          <div key={idx} className={`p-4 rounded-lg border-2 ${getColor(useCase.impact, useCase.effort)}`}>
            <h3 className="font-semibold text-foreground mb-2">{useCase.name}</h3>
            <div className="flex gap-3">
              <span className="text-xs bg-white px-2 py-1 rounded font-medium">Impact: {useCase.impact}</span>
              <span className="text-xs bg-white px-2 py-1 rounded font-medium">Effort: {useCase.effort}</span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
