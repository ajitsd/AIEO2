"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { WorkflowsList } from "./workflows-list"
import { AIFluencyLadder } from "./ai-fluency-ladder"
import { TrainingPlanCalendar } from "./training-plan-calendar"

interface PathDetailsPanelProps {
  roleId: string
  roleName: string
}

export function PathDetailsPanel({ roleId, roleName }: PathDetailsPanelProps) {
  return (
    <div className="space-y-6 animate-in fade-in">
      {/* Header */}
      <Card className="bg-gradient-to-r from-secondary to-secondary/80 text-white p-8">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold">AI Training Path: {roleName}</h2>
          <p className="text-white/90">Customized learning journey to build AI fluency and drive impact in your role</p>
          <div className="flex gap-2 pt-2">
            <div className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">8-Week Program</div>
            <div className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">Self-Paced</div>
          </div>
        </div>
      </Card>

      {/* Three Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Top 5 Workflows */}
        <div className="lg:col-span-1">
          <WorkflowsList roleId={roleId} />
        </div>

        {/* Middle: AI Fluency Ladder */}
        <div className="lg:col-span-1">
          <AIFluencyLadder roleId={roleId} />
        </div>

        {/* Right: 30-Day Training Plan */}
        <div className="lg:col-span-1">
          <TrainingPlanCalendar roleId={roleId} />
        </div>
      </div>

      {/* CTA Section */}
      <Card className="p-6 border-2 border-primary/20 bg-primary/5">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-foreground">Ready to Get Started?</h3>
            <p className="text-muted-foreground mt-1">Enroll in the {roleName} AI training path today</p>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">Enroll Now</Button>
        </div>
      </Card>
    </div>
  )
}
