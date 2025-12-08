"use client"

import { useState } from "react"
import { AppLayout } from "@/components/layout/app-layout"
import { COEWizard } from "@/components/coe-generator/coe-wizard"
import { COEOutput } from "@/components/coe-generator/coe-output"

export default function AICOEGeneratorPage() {
  const [generatedCOE, setGeneratedCOE] = useState(null)
  const [wizardComplete, setWizardComplete] = useState(false)

  const handleGenerateCOE = (coeData: any) => {
    setGeneratedCOE(coeData)
    setWizardComplete(true)
  }

  const handleStartOver = () => {
    setGeneratedCOE(null)
    setWizardComplete(false)
  }

  return (
    <AppLayout>
      <div className="space-y-6">
        {!wizardComplete ? (
          <>
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">AI COE Generator</h1>
              <p className="text-muted-foreground text-lg">
                Build your Center of Excellence blueprint with our intelligent wizard
              </p>
            </div>
            <COEWizard onComplete={handleGenerateCOE} />
          </>
        ) : (
          <COEOutput coeData={generatedCOE} onStartOver={handleStartOver} />
        )}
      </div>
    </AppLayout>
  )
}
