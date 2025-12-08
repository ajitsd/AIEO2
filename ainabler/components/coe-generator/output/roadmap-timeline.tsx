"use client"

import { Card } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

interface RoadmapTimelineProps {
  maturityLevel: string
}

export function RoadmapTimeline({ maturityLevel }: RoadmapTimelineProps) {
  const roadmapPhases = [
    {
      month: "Month 1",
      title: "Foundation & Planning",
      tasks: [
        "Establish COE structure and governance",
        "Conduct stakeholder alignment",
        "Set up infrastructure and tooling",
        "Define success metrics",
      ],
    },
    {
      month: "Month 2",
      title: "Capability Building",
      tasks: ["Launch training programs", "Build pilot projects", "Establish data pipelines", "Create documentation"],
    },
    {
      month: "Month 3",
      title: "Scaling & Adoption",
      tasks: [
        "Deploy first use cases",
        "Expand team capabilities",
        "Establish governance controls",
        "Measure and optimize performance",
      ],
    },
  ]

  return (
    <Card className="p-8 border-border">
      <h2 className="text-2xl font-bold text-foreground mb-8">90-Day Roadmap</h2>
      <div className="space-y-6">
        {roadmapPhases.map((phase, idx) => (
          <div key={idx} className="relative">
            {/* Timeline connector */}
            {idx < roadmapPhases.length - 1 && <div className="absolute left-6 top-12 w-1 h-12 bg-coral-glow/30" />}

            {/* Phase */}
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-coral-glow/10 border-2 border-coral-glow flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-coral-glow">{idx + 1}</span>
                </div>
              </div>
              <div className="flex-1 pb-6">
                <h3 className="text-lg font-bold text-foreground mb-1">{phase.month}</h3>
                <p className="text-base font-semibold text-coral-glow mb-4">{phase.title}</p>
                <ul className="space-y-2">
                  {phase.tasks.map((task, taskIdx) => (
                    <li key={taskIdx} className="flex items-start gap-3 text-foreground">
                      <CheckCircle2 size={18} className="text-coral-glow flex-shrink-0 mt-0.5" />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
