"use client"

import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

interface Step4Props {
  data: any
  onChange: (field: string, value: any) => void
}

export function Step4DataSources({ data, onChange }: Step4Props) {
  const sourceOptions = [
    "Enterprise Data Warehouse",
    "Customer Data Platforms",
    "ERP Systems",
    "CRM Systems",
    "Real-time APIs",
    "Third-party Data",
  ]

  return (
    <div className="space-y-8">
      {/* Data Sources */}
      <div className="space-y-3">
        <Label className="text-base font-semibold text-foreground">Available Data Sources</Label>
        <div className="space-y-2">
          {sourceOptions.map((source) => (
            <label
              key={source}
              className="flex items-center p-3 rounded-lg border-2 border-border hover:border-coral-glow/50 cursor-pointer transition-all"
            >
              <input
                type="checkbox"
                checked={data.dataSources.includes(source)}
                onChange={(e) => {
                  const newSources = e.target.checked
                    ? [...data.dataSources, source]
                    : data.dataSources.filter((s: string) => s !== source)
                  onChange("dataSources", newSources)
                }}
                className="w-4 h-4 text-coral-glow rounded"
              />
              <span className="ml-3 text-foreground font-medium">{source}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Data Permissions */}
      <div className="space-y-3">
        <Label htmlFor="permissions" className="text-base font-semibold text-foreground">
          Data Access Permissions & Constraints
        </Label>
        <Textarea
          id="permissions"
          placeholder="Describe any data access limitations, governance policies, or permission constraints..."
          value={data.permissions}
          onChange={(e) => onChange("permissions", e.target.value)}
          className="min-h-32 border-2 border-border rounded-lg p-4"
        />
      </div>
    </div>
  )
}
