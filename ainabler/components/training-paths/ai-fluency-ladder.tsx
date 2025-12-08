"use client"

import { Card } from "@/components/ui/card"

interface AIFluencyLadderProps {
  roleId: string
}

const FLUENCY_LEVELS = [
  {
    level: "Novice",
    description: "Basic understanding of AI",
    duration: "Week 1-2",
    progress: 0,
  },
  {
    level: "Developing",
    description: "Practical hands-on experience",
    duration: "Week 3-4",
    progress: 25,
  },
  {
    level: "Fluent",
    description: "Independent AI usage",
    duration: "Week 5-6",
    progress: 50,
  },
  {
    level: "Native",
    description: "AI-powered expert",
    duration: "Week 7-8",
    progress: 100,
  },
]

export function AIFluencyLadder({ roleId }: AIFluencyLadderProps) {
  return (
    <Card className="p-6 space-y-4">
      <h3 className="text-lg font-semibold text-secondary">AI Fluency Ladder</h3>
      <div className="space-y-4">
        {FLUENCY_LEVELS.map((level, idx) => (
          <div key={idx} className="space-y-2">
            <div className="flex items-start justify-between">
              <div>
                <p className="font-semibold text-foreground text-sm">{level.level}</p>
                <p className="text-xs text-muted-foreground">{level.description}</p>
              </div>
              <span className="text-xs font-medium text-secondary bg-secondary/10 px-2 py-1 rounded">
                {level.duration}
              </span>
            </div>
            <div className="w-full bg-border rounded-full h-1.5">
              <div className="bg-primary h-1.5 rounded-full transition-all" style={{ width: `${level.progress}%` }} />
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
