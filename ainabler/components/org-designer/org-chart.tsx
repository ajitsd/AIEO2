"use client"

import { Card } from "@/components/ui/card"

interface OrgNode {
  id: string
  name: string
  title: string
  location: string
  capacity: number
  skills: string[]
  isNew?: boolean
}

interface OrgChartProps {
  nodes: OrgNode[]
  selectedNodeId: string | null
  onNodeSelect: (nodeId: string) => void
}

export function OrgChart({ nodes, selectedNodeId, onNodeSelect }: OrgChartProps) {
  return (
    <div className="p-8 space-y-8">
      <div className="space-y-6">
        <div className="text-sm font-medium text-muted-foreground">C-Level Structure</div>

        {/* CEO */}
        <div className="flex justify-center">
          <OrgNode
            node={nodes[0]}
            isSelected={selectedNodeId === nodes[0].id}
            onSelect={() => onNodeSelect(nodes[0].id)}
          />
        </div>

        {/* Connection Line */}
        <div className="flex justify-center">
          <div className="w-0.5 h-8 bg-blue-slate/20" />
        </div>

        {/* Reports */}
        <div className="flex justify-center gap-8">
          {nodes.slice(1).map((node) => (
            <OrgNode
              key={node.id}
              node={node}
              isSelected={selectedNodeId === node.id}
              onSelect={() => onNodeSelect(node.id)}
            />
          ))}
        </div>
      </div>

      {/* Drag & Drop Hint */}
      <div className="text-center text-sm text-muted-foreground border-t border-border pt-6">
        Drag nodes to reorganize | Click to inspect roles
      </div>
    </div>
  )
}

function OrgNode({
  node,
  isSelected,
  onSelect,
}: {
  node: OrgNode
  isSelected: boolean
  onSelect: () => void
}) {
  return (
    <div
      onClick={onSelect}
      className={`cursor-pointer transition-all ${
        isSelected ? "ring-2 ring-coral-glow" : "hover:ring-1 hover:ring-blue-slate/50"
      }`}
    >
      <Card className={`w-56 p-4 border-2 ${isSelected ? "border-coral-glow bg-white" : "border-border bg-white"}`}>
        {/* Badge */}
        {node.isNew && (
          <div className="mb-3">
            <span className="inline-flex px-2 py-1 rounded-full text-xs font-semibold bg-coral-glow/20 text-coral-glow">
              New Role
            </span>
          </div>
        )}

        {/* Name and Title */}
        <div className="mb-3">
          <h3 className="font-bold text-foreground text-sm">{node.name}</h3>
          <p className="text-xs text-blue-slate font-medium">{node.title}</p>
        </div>

        {/* Location */}
        <div className="mb-3">
          <p className="text-xs text-muted-foreground">📍 {node.location}</p>
        </div>

        {/* Capacity Bar */}
        <div className="mb-3">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs font-medium text-muted-foreground">Capacity</span>
            <span className="text-xs font-bold text-blue-slate">{node.capacity}%</span>
          </div>
          <div className="w-full h-1.5 bg-border rounded-full overflow-hidden">
            <div className="h-full bg-blue-slate" style={{ width: `${node.capacity}%` }} />
          </div>
        </div>

        {/* Skills */}
        <div className="flex gap-1 flex-wrap">
          {node.skills.slice(0, 2).map((skill) => (
            <span key={skill} className="inline-flex px-2 py-0.5 rounded text-xs bg-silver/10 text-foreground">
              {skill}
            </span>
          ))}
          {node.skills.length > 2 && (
            <span className="inline-flex px-2 py-0.5 rounded text-xs bg-silver/10 text-muted-foreground">
              +{node.skills.length - 2}
            </span>
          )}
        </div>
      </Card>
    </div>
  )
}
