"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap } from "lucide-react"

interface WorkflowsListProps {
  roleId: string
}

const WORKFLOWS_BY_ROLE: Record<string, Array<{ name: string; impact: string }>> = {
  sales: [
    { name: "Lead Qualification", impact: "High" },
    { name: "Email Generation", impact: "High" },
    { name: "Sales Forecasting", impact: "Medium" },
    { name: "Objection Handling", impact: "High" },
    { name: "Contract Review", impact: "Medium" },
  ],
  marketing: [
    { name: "Content Creation", impact: "High" },
    { name: "Campaign Planning", impact: "High" },
    { name: "Audience Segmentation", impact: "High" },
    { name: "Ad Copy Generation", impact: "Medium" },
    { name: "Analytics Summarization", impact: "Medium" },
  ],
  finance: [
    { name: "Financial Analysis", impact: "High" },
    { name: "Report Generation", impact: "High" },
    { name: "Budget Forecasting", impact: "Medium" },
    { name: "Risk Assessment", impact: "High" },
    { name: "Compliance Review", impact: "High" },
  ],
  hr: [
    { name: "Resume Screening", impact: "High" },
    { name: "Interview Synthesis", impact: "High" },
    { name: "Training Content", impact: "Medium" },
    { name: "Policy Documentation", impact: "Medium" },
    { name: "Engagement Analysis", impact: "Medium" },
  ],
  legal: [
    { name: "Contract Review", impact: "High" },
    { name: "Legal Research", impact: "High" },
    { name: "Risk Assessment", impact: "High" },
    { name: "Document Drafting", impact: "Medium" },
    { name: "Compliance Monitoring", impact: "High" },
  ],
  it: [
    { name: "Code Generation", impact: "High" },
    { name: "Documentation", impact: "High" },
    { name: "Debugging", impact: "High" },
    { name: "Security Analysis", impact: "High" },
    { name: "Infrastructure Planning", impact: "Medium" },
  ],
  engineering: [
    { name: "Code Review", impact: "High" },
    { name: "Architecture Design", impact: "High" },
    { name: "Testing Strategy", impact: "Medium" },
    { name: "Performance Tuning", impact: "High" },
    { name: "Documentation", impact: "Medium" },
  ],
  cx: [
    { name: "Ticket Routing", impact: "High" },
    { name: "Response Generation", impact: "High" },
    { name: "Issue Resolution", impact: "High" },
    { name: "Customer Insights", impact: "Medium" },
    { name: "Feedback Analysis", impact: "Medium" },
  ],
  executives: [
    { name: "Strategic Planning", impact: "High" },
    { name: "Board Reporting", impact: "High" },
    { name: "Market Analysis", impact: "High" },
    { name: "Decision Support", impact: "High" },
    { name: "Risk Monitoring", impact: "High" },
  ],
}

export function WorkflowsList({ roleId }: WorkflowsListProps) {
  const workflows = WORKFLOWS_BY_ROLE[roleId] || []

  return (
    <Card className="p-6 space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <Zap className="w-5 h-5 text-primary" />
        <h3 className="text-lg font-semibold text-secondary">Top 5 AI Workflows</h3>
      </div>
      <div className="space-y-3">
        {workflows.map((workflow, idx) => (
          <div key={idx} className="flex items-start gap-3 pb-3 border-b border-border last:border-0">
            <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-xs font-semibold text-primary">
              {idx + 1}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-foreground text-sm">{workflow.name}</p>
              <Badge
                variant="outline"
                className={`mt-1 text-xs ${
                  workflow.impact === "High"
                    ? "border-primary text-primary bg-primary/5"
                    : "border-secondary text-secondary bg-secondary/5"
                }`}
              >
                {workflow.impact} Impact
              </Badge>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
