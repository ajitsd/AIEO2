"use client"

import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

interface OrgNode {
  id: string
  name: string
  title: string
  location: string
  capacity: number
  skills: string[]
  isNew?: boolean
}

interface RoleInspectorProps {
  node: OrgNode
  onUpdate: (updates: Partial<OrgNode>) => void
}

export function RoleInspector({ node, onUpdate }: RoleInspectorProps) {
  const [skillInput, setSkillInput] = React.useState("")

  const addSkill = () => {
    if (skillInput.trim() && !node.skills.includes(skillInput)) {
      onUpdate({
        skills: [...node.skills, skillInput],
      })
      setSkillInput("")
    }
  }

  const removeSkill = (skill: string) => {
    onUpdate({
      skills: node.skills.filter((s) => s !== skill),
    })
  }

  return (
    <Card className="p-6 border-border bg-white space-y-6 h-full overflow-y-auto">
      <div>
        <h3 className="text-lg font-bold text-foreground mb-4">Role Inspector</h3>
      </div>

      {/* Name */}
      <div>
        <label className="text-xs font-semibold text-muted-foreground block mb-2">Name</label>
        <Input
          value={node.name}
          onChange={(e) => onUpdate({ name: e.target.value })}
          className="bg-white border-border"
        />
      </div>

      {/* Title */}
      <div>
        <label className="text-xs font-semibold text-muted-foreground block mb-2">Job Title</label>
        <Input
          value={node.title}
          onChange={(e) => onUpdate({ title: e.target.value })}
          className="bg-white border-border"
        />
      </div>

      {/* Location */}
      <div>
        <label className="text-xs font-semibold text-muted-foreground block mb-2">Location</label>
        <Input
          value={node.location}
          onChange={(e) => onUpdate({ location: e.target.value })}
          className="bg-white border-border"
        />
      </div>

      {/* Capacity */}
      <div>
        <label className="text-xs font-semibold text-muted-foreground block mb-2">Capacity ({node.capacity}%)</label>
        <input
          type="range"
          min="0"
          max="100"
          value={node.capacity}
          onChange={(e) => onUpdate({ capacity: Number.parseInt(e.target.value) })}
          className="w-full"
        />
      </div>

      {/* Skills */}
      <div>
        <label className="text-xs font-semibold text-muted-foreground block mb-3">Skills</label>
        <div className="flex gap-2 mb-3">
          <Input
            value={skillInput}
            onChange={(e) => setSkillInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && addSkill()}
            placeholder="Add skill..."
            className="bg-white border-border flex-1 text-sm"
          />
          <Button onClick={addSkill} className="bg-coral-glow hover:bg-coral-glow/90 text-white px-3 text-sm">
            Add
          </Button>
        </div>
        <div className="space-y-2">
          {node.skills.map((skill) => (
            <div key={skill} className="flex items-center justify-between bg-blue-slate/5 px-3 py-2 rounded text-sm">
              <span className="text-foreground">{skill}</span>
              <button onClick={() => removeSkill(skill)} className="text-muted-foreground hover:text-coral-glow">
                <X size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}

import React from "react"
