"use client"

import { Card } from "@/components/ui/card"
import { AlertCircle, TrendingUp, Users } from "lucide-react"

interface OrgNode {
  id: string
  name: string
  title: string
  location: string
  capacity: number
  skills: string[]
  isNew?: boolean
}

interface RecommendationsPanelProps {
  nodes: OrgNode[]
}

export function RecommendationsPanel({ nodes }: RecommendationsPanelProps) {
  const onshoreCount = nodes.filter((n) => n.location.includes("USA")).length
  const offshoreCount = nodes.length - onshoreCount
  const avgCapacity = Math.round(nodes.reduce((sum, n) => sum + n.capacity, 0) / nodes.length)

  const recommendations = [
    {
      type: "team-design",
      title: "Expand Engineering Team",
      description: "Current tech team capacity is at 85%. Recommend hiring 2 senior engineers.",
      priority: "high",
      icon: Users,
    },
    {
      type: "offshore",
      title: "Optimize Geographic Distribution",
      description: `Currently ${onshoreCount} onshore, ${offshoreCount} offshore. Consider 60/40 split.`,
      priority: "medium",
      icon: TrendingUp,
    },
    {
      type: "gaps",
      title: "Skills Gap: AI/ML Expertise",
      description: "Only 50% of team has AI skills. Recommend training or hiring.",
      priority: "high",
      icon: AlertCircle,
    },
  ]

  return (
    <Card className="p-6 border-border bg-white space-y-4">
      <div>
        <h3 className="text-lg font-bold text-foreground mb-1">Organizational Recommendations</h3>
        <p className="text-sm text-muted-foreground">Data-driven insights for team optimization</p>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="p-4 bg-blue-slate/5 rounded-lg">
          <p className="text-xs text-muted-foreground mb-1">Avg Capacity</p>
          <p className="text-2xl font-bold text-blue-slate">{avgCapacity}%</p>
        </div>
        <div className="p-4 bg-blue-slate/5 rounded-lg">
          <p className="text-xs text-muted-foreground mb-1">Onshore/Offshore</p>
          <p className="text-sm font-bold text-blue-slate">
            {onshoreCount}/{offshoreCount}
          </p>
        </div>
        <div className="p-4 bg-blue-slate/5 rounded-lg">
          <p className="text-xs text-muted-foreground mb-1">Team Size</p>
          <p className="text-2xl font-bold text-blue-slate">{nodes.length}</p>
        </div>
      </div>

      <div className="space-y-3">
        {recommendations.map((rec) => {
          const Icon = rec.icon
          return (
            <div
              key={rec.type}
              className={`p-4 rounded-lg border-l-4 ${
                rec.priority === "high" ? "border-coral-glow bg-coral-glow/5" : "border-blue-slate bg-blue-slate/5"
              }`}
            >
              <div className="flex gap-3">
                <Icon size={20} className={rec.priority === "high" ? "text-coral-glow" : "text-blue-slate"} />
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground text-sm">{rec.title}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{rec.description}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </Card>
  )
}
