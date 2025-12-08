"use client"

import { Card } from "@/components/ui/card"

interface RoleCardProps {
  role: {
    id: string
    name: string
    icon: string
  }
  isSelected: boolean
  onSelect: () => void
}

export function RoleCard({ role, isSelected, onSelect }: RoleCardProps) {
  return (
    <Card
      className={`p-6 cursor-pointer transition-all border-2 ${
        isSelected ? "border-primary bg-primary/5 shadow-lg" : "border-border hover:border-secondary/50"
      }`}
      onClick={onSelect}
    >
      <div className="flex flex-col items-center gap-3 text-center">
        <div className="text-4xl">{role.icon}</div>
        <h3 className={`font-semibold text-base ${isSelected ? "text-primary" : "text-foreground"}`}>{role.name}</h3>
        {isSelected && (
          <div className="mt-2">
            <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
              Selected
            </span>
          </div>
        )}
      </div>
    </Card>
  )
}
