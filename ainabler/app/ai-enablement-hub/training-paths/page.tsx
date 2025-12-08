"use client"

import { AppLayout } from "@/components/layout/app-layout"
import { TrainingPaths } from "@/components/training-paths/training-paths"

export default function TrainingPathsPage() {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">Training Paths</h1>
          <p className="text-muted-foreground text-lg">
            Tailored AI training and skill development plans for every role in your organization
          </p>
        </div>
        <TrainingPaths />
      </div>
    </AppLayout>
  )
}
