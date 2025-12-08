"use client"

import { useState } from "react"
import { RoleCard } from "./role-card"
import { PathDetailsPanel } from "./path-details-panel"

const ROLES = [
  { id: "sales", name: "Sales", icon: "📊" },
  { id: "marketing", name: "Marketing", icon: "📢" },
  { id: "finance", name: "Finance", icon: "💰" },
  { id: "hr", name: "HR", icon: "👥" },
  { id: "legal", name: "Legal", icon: "⚖️" },
  { id: "it", name: "IT", icon: "💻" },
  { id: "engineering", name: "Engineering", icon: "🔧" },
  { id: "cx", name: "CX", icon: "😊" },
  { id: "executives", name: "Executives", icon: "🎯" },
]

export function TrainingPaths() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null)

  return (
    <div className="space-y-6">
      {/* Role Cards Grid */}
      <div>
        <h2 className="text-xl font-semibold text-secondary mb-4">Select Your Role</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {ROLES.map((role) => (
            <RoleCard
              key={role.id}
              role={role}
              isSelected={selectedRole === role.id}
              onSelect={() => setSelectedRole(role.id)}
            />
          ))}
        </div>
      </div>

      {/* Details Panel */}
      {selectedRole && (
        <PathDetailsPanel roleId={selectedRole} roleName={ROLES.find((r) => r.id === selectedRole)?.name || ""} />
      )}
    </div>
  )
}
