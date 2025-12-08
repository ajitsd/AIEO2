"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Step1OrgData } from "./steps/step-1-org-data"
import { Step2Goals } from "./steps/step-2-goals"
import { Step3RiskGovernance } from "./steps/step-3-risk-governance"
import { Step4DataSources } from "./steps/step-4-data-sources"

interface COEWizardProps {
  onComplete: (data: any) => void
}

const STEPS = [
  { title: "Organization Data", description: "Size, maturity, and tech stack" },
  { title: "Goals & Priorities", description: "Strategic objectives and focus areas" },
  { title: "Risk & Governance", description: "Risk preferences and compliance needs" },
  { title: "Data Sources", description: "Data integrations and permissions" },
]

export function COEWizard({ onComplete }: COEWizardProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    orgSize: "",
    maturityLevel: "",
    techStack: [],
    goals: [],
    priorities: "",
    riskTolerance: "",
    complianceNeeds: [],
    dataSources: [],
    permissions: "",
  })

  const handleNext = () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleGenerate = () => {
    const coeBlueprint = {
      ...formData,
      generatedAt: new Date().toISOString(),
    }
    onComplete(coeBlueprint)
  }

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const progress = ((currentStep + 1) / STEPS.length) * 100

  return (
    <div className="space-y-8">
      {/* Progress Bar */}
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-foreground">
            Step {currentStep + 1} of {STEPS.length}: {STEPS[currentStep].title}
          </h2>
          <span className="text-sm text-muted-foreground">{Math.round(progress)}%</span>
        </div>
        <Progress value={progress} className="h-2" />
        <p className="text-sm text-muted-foreground">{STEPS[currentStep].description}</p>
      </div>

      {/* Step Content */}
      <Card className="p-8 border-border">
        {currentStep === 0 && <Step1OrgData data={formData} onChange={handleInputChange} />}
        {currentStep === 1 && <Step2Goals data={formData} onChange={handleInputChange} />}
        {currentStep === 2 && <Step3RiskGovernance data={formData} onChange={handleInputChange} />}
        {currentStep === 3 && <Step4DataSources data={formData} onChange={handleInputChange} />}
      </Card>

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <Button onClick={handlePrevious} disabled={currentStep === 0} variant="outline" className="px-8 bg-transparent">
          Previous
        </Button>

        {currentStep === STEPS.length - 1 ? (
          <Button
            onClick={handleGenerate}
            className="bg-coral-glow hover:bg-coral-glow/90 text-white px-8 font-semibold"
          >
            Generate COE Blueprint
          </Button>
        ) : (
          <Button onClick={handleNext} className="bg-coral-glow hover:bg-coral-glow/90 text-white px-8 font-semibold">
            Next
          </Button>
        )}
      </div>
    </div>
  )
}
