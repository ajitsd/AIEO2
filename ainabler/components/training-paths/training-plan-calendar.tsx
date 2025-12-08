"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "lucide-react"

interface TrainingPlanCalendarProps {
  roleId: string
}

const WEEKS = [
  {
    week: "Week 1",
    title: "AI Fundamentals",
    topics: ["What is AI?", "Prompt Engineering Basics"],
    type: "Foundations",
  },
  {
    week: "Week 2",
    title: "Role-Specific AI",
    topics: ["Use Cases for Your Role", "Tools & Platforms"],
    type: "Applied",
  },
  {
    week: "Week 3",
    title: "Hands-On Practice",
    topics: ["Interactive Workshops", "Real Workflows"],
    type: "Practical",
  },
  {
    week: "Week 4",
    title: "Advanced Techniques",
    topics: ["Optimization", "Best Practices"],
    type: "Advanced",
  },
]

export function TrainingPlanCalendar({ roleId }: TrainingPlanCalendarProps) {
  return (
    <Card className="p-6 space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <Calendar className="w-5 h-5 text-primary" />
        <h3 className="text-lg font-semibold text-secondary">30-Day Plan</h3>
      </div>
      <div className="space-y-3">
        {WEEKS.map((week, idx) => (
          <div key={idx} className="p-3 rounded-lg border border-border hover:border-secondary/50 transition-colors">
            <div className="flex items-start justify-between mb-2">
              <div>
                <p className="font-semibold text-foreground text-sm">{week.week}</p>
                <p className="text-xs text-muted-foreground">{week.title}</p>
              </div>
              <Badge variant="secondary" className="text-xs">
                {week.type}
              </Badge>
            </div>
            <div className="space-y-1">
              {week.topics.map((topic, topicIdx) => (
                <p key={topicIdx} className="text-xs text-muted-foreground flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-primary" />
                  {topic}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
