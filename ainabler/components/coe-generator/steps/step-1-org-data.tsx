"use client"

import { Label } from "@/components/ui/label"

interface Step1Props {
  data: any
  onChange: (field: string, value: any) => void
}

export function Step1OrgData({ data, onChange }: Step1Props) {
  const orgSizeOptions = ["1-100", "101-500", "501-2,000", "2,001-10,000", "10,000+"]
  const maturityOptions = ["Beginner", "Intermediate", "Advanced", "Expert"]
  const techStackOptions = ["Cloud (AWS)", "Cloud (Azure)", "Cloud (GCP)", "On-Premises", "Hybrid"]

  return (
    <div className="space-y-8">
      {/* Organization Size */}
      <div className="space-y-3">
        <Label className="text-base font-semibold text-foreground">Organization Size</Label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {orgSizeOptions.map((size) => (
            <button
              key={size}
              onClick={() => onChange("orgSize", size)}
              className={`p-3 rounded-lg border-2 transition-all text-sm font-medium ${
                data.orgSize === size
                  ? "border-coral-glow bg-coral-glow/10 text-foreground"
                  : "border-border hover:border-coral-glow/50 text-foreground"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Maturity Level */}
      <div className="space-y-3">
        <Label className="text-base font-semibold text-foreground">AI Maturity Level</Label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {maturityOptions.map((level) => (
            <button
              key={level}
              onClick={() => onChange("maturityLevel", level)}
              className={`p-3 rounded-lg border-2 transition-all text-sm font-medium ${
                data.maturityLevel === level
                  ? "border-coral-glow bg-coral-glow/10 text-foreground"
                  : "border-border hover:border-coral-glow/50 text-foreground"
              }`}
            >
              {level}
            </button>
          ))}
        </div>
      </div>

      {/* Technology Stack */}
      <div className="space-y-3">
        <Label className="text-base font-semibold text-foreground">Current Tech Stack</Label>
        <div className="space-y-2">
          {techStackOptions.map((tech) => (
            <label
              key={tech}
              className="flex items-center p-3 rounded-lg border-2 border-border hover:border-coral-glow/50 cursor-pointer transition-all"
            >
              <input
                type="checkbox"
                checked={data.techStack.includes(tech)}
                onChange={(e) => {
                  const newStack = e.target.checked
                    ? [...data.techStack, tech]
                    : data.techStack.filter((t: string) => t !== tech)
                  onChange("techStack", newStack)
                }}
                className="w-4 h-4 text-coral-glow rounded"
              />
              <span className="ml-3 text-foreground font-medium">{tech}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  )
}
