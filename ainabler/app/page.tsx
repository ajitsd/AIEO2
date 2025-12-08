"use client"

import { AppLayout } from "@/components/layout/app-layout"
import { Card } from "@/components/ui/card"

export default function Home() {
  return (
    <AppLayout>
      <div className="space-y-8">
        {/* Header Section */}
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">Welcome to AInabler</h1>
          <p className="text-muted-foreground text-lg">
            Enterprise AI enablement platform for CIOs and Business Technology leaders
          </p>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-6 border border-border hover:border-primary transition-colors">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">12</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground">Active Teams</h3>
              <p className="text-sm text-muted-foreground">Teams engaged in AI initiatives</p>
            </div>
          </Card>

          <Card className="p-6 border border-border hover:border-primary transition-colors">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-secondary">156</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground">Trained Users</h3>
              <p className="text-sm text-muted-foreground">Employees upskilled in AI</p>
            </div>
          </Card>

          <Card className="p-6 border border-border hover:border-primary transition-colors">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-accent">$2.4M</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground">Estimated ROI</h3>
              <p className="text-sm text-muted-foreground">Projected value from AI initiatives</p>
            </div>
          </Card>
        </div>

        {/* Getting Started Section */}
        <Card className="p-8 border border-border">
          <h2 className="text-2xl font-bold text-foreground mb-4">Getting Started</h2>
          <p className="text-muted-foreground mb-6">
            Explore our AI enablement tools and resources to drive organizational transformation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-background border border-border hover:border-primary transition-colors cursor-pointer">
              <h3 className="font-semibold text-foreground mb-2">AI COE Generator</h3>
              <p className="text-sm text-muted-foreground">Set up your AI Center of Excellence</p>
            </div>
            <div className="p-4 rounded-lg bg-background border border-border hover:border-primary transition-colors cursor-pointer">
              <h3 className="font-semibold text-foreground mb-2">Training Paths</h3>
              <p className="text-sm text-muted-foreground">Structured learning for your teams</p>
            </div>
            <div className="p-4 rounded-lg bg-background border border-border hover:border-primary transition-colors cursor-pointer">
              <h3 className="font-semibold text-foreground mb-2">Prompt Library</h3>
              <p className="text-sm text-muted-foreground">Access curated AI prompts</p>
            </div>
            <div className="p-4 rounded-lg bg-background border border-border hover:border-primary transition-colors cursor-pointer">
              <h3 className="font-semibold text-foreground mb-2">Skills Scorecard</h3>
              <p className="text-sm text-muted-foreground">Track team AI competencies</p>
            </div>
          </div>
        </Card>
      </div>
    </AppLayout>
  )
}
