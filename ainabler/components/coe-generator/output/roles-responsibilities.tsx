"use client"

import { Card } from "@/components/ui/card"

interface RolesResponsibilitiesProps {
  orgSize: string
}

export function RolesResponsibilities({ orgSize }: RolesResponsibilitiesProps) {
  const rolesMap: Record<string, string[]> = {
    "1-100": ["AI Lead", "Data Engineer", "Domain Expert"],
    "101-500": ["VP AI & Analytics", "AI Team Lead", "Data Engineer", "ML Engineer"],
    "501-2,000": ["Chief AI Officer", "VP AI & Analytics", "AI Center Lead", "Senior Engineers", "Domain Experts"],
    "2,001-10,000": [
      "Chief AI Officer",
      "VP AI & Innovation",
      "Center Directors",
      "Senior Engineers",
      "Governance Officers",
      "Domain Leads",
    ],
    "10,000+": ["Chief AI Officer", "Multiple VPs", "Regional Leaders", "Centers of Excellence", "Governance Board"],
  }

  const roles = rolesMap[orgSize] || rolesMap["101-500"]

  return (
    <Card className="p-8 border-border">
      <h2 className="text-2xl font-bold text-foreground mb-6">Roles & Responsibilities</h2>
      <div className="space-y-3">
        {roles.map((role, idx) => (
          <div key={idx} className="p-3 rounded-lg bg-background border border-border/50">
            <p className="font-semibold text-foreground">{role}</p>
          </div>
        ))}
      </div>
    </Card>
  )
}
