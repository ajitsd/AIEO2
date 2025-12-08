"use client"

import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

interface Step2Props {
  data: any
  onChange: (field: string, value: any) => void
}

export function Step2Goals({ data, onChange }: Step2Props) {
  const goalOptions = [
    "Improve operational efficiency",
    "Drive revenue growth",
    "Enhance customer experience",
    "Enable faster decision-making",
    "Reduce costs",
    "Improve data quality",
  ]

  return (
    <div className="space-y-8">
      {/* Strategic Goals */}
      <div className="space-y-3">
        <Label className="text-base font-semibold text-foreground">Strategic Goals (Select at least 2)</Label>
        <div className="space-y-2">
          {goalOptions.map((goal) => (
            <label
              key={goal}
              className="flex items-center p-3 rounded-lg border-2 border-border hover:border-coral-glow/50 cursor-pointer transition-all"
            >
              <input
                type="checkbox"
                checked={data.goals.includes(goal)}
                onChange={(e) => {
                  const newGoals = e.target.checked
                    ? [...data.goals, goal]
                    : data.goals.filter((g: string) => g !== goal)
                  onChange("goals", newGoals)
                }}
                className="w-4 h-4 text-coral-glow rounded"
              />
              <span className="ml-3 text-foreground font-medium">{goal}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Priority Areas */}
      <div className="space-y-3">
        <Label htmlFor="priorities" className="text-base font-semibold text-foreground">
          Key Priority Areas
        </Label>
        <Textarea
          id="priorities"
          placeholder="Describe your organization's top 3-5 priority areas for AI implementation..."
          value={data.priorities}
          onChange={(e) => onChange("priorities", e.target.value)}
          className="min-h-32 border-2 border-border rounded-lg p-4"
        />
      </div>
    </div>
  )
}
