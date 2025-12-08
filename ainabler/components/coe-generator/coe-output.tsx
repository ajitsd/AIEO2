"use client"

import { Button } from "@/components/ui/button"
import { Download, FileJson } from "lucide-react"
import { UseCasePrioritizationMatrix } from "./output/use-case-matrix"
import { GovernanceFramework } from "./output/governance-framework"
import { RolesResponsibilities } from "./output/roles-responsibilities"
import { RoadmapTimeline } from "./output/roadmap-timeline"

interface COEOutputProps {
  coeData: any
  onStartOver: () => void
}

export function COEOutput({ coeData, onStartOver }: COEOutputProps) {
  const handleExportPDF = () => {
    // Placeholder for PDF export
    console.log("Exporting PDF...")
  }

  const handleExportJSON = () => {
    const dataStr = JSON.stringify(coeData, null, 2)
    const dataBlob = new Blob([dataStr], { type: "application/json" })
    const url = URL.createObjectURL(dataBlob)
    const link = document.createElement("a")
    link.href = url
    link.download = `coe-blueprint-${Date.now()}.json`
    link.click()
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">Your COE Blueprint</h1>
          <p className="text-muted-foreground">AI Center of Excellence framework tailored to your organization</p>
        </div>
        <div className="flex gap-3">
          <Button
            onClick={handleExportPDF}
            variant="outline"
            className="flex items-center gap-2 border-border hover:border-coral-glow bg-transparent"
          >
            <Download size={18} />
            Export PDF
          </Button>
          <Button
            onClick={handleExportJSON}
            className="bg-coral-glow hover:bg-coral-glow/90 text-white flex items-center gap-2"
          >
            <FileJson size={18} />
            Export JSON
          </Button>
        </div>
      </div>

      {/* Blueprint Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Use Case Prioritization Matrix */}
        <div className="lg:col-span-2">
          <UseCasePrioritizationMatrix goals={coeData.goals} />
        </div>

        {/* Governance Framework */}
        <GovernanceFramework riskTolerance={coeData.riskTolerance} complianceNeeds={coeData.complianceNeeds} />

        {/* Roles & Responsibilities */}
        <RolesResponsibilities orgSize={coeData.orgSize} />
      </div>

      {/* 90-Day Roadmap */}
      <RoadmapTimeline maturityLevel={coeData.maturityLevel} />

      {/* Start Over Button */}
      <div className="flex justify-center pt-4">
        <Button
          onClick={onStartOver}
          variant="outline"
          className="border-border hover:border-coral-glow bg-transparent"
        >
          Create New COE Blueprint
        </Button>
      </div>
    </div>
  )
}
