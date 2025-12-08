"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { OrgChart } from "./org-chart"
import { RoleInspector } from "./role-inspector"
import { RecommendationsPanel } from "./recommendations-panel"

interface OrgNode {
  id: string
  name: string
  title: string
  location: string
  capacity: number
  skills: string[]
  isNew?: boolean
}

const INITIAL_ORG_DATA: OrgNode[] = [
  {
    id: "ceo",
    name: "Jane Smith",
    title: "Chief Executive Officer",
    location: "New York, USA",
    capacity: 100,
    skills: ["Leadership", "Strategy", "AI"],
  },
  {
    id: "cto",
    name: "John Doe",
    title: "Chief Technology Officer",
    location: "San Francisco, USA",
    capacity: 85,
    skills: ["Architecture", "Cloud", "Security"],
  },
  {
    id: "cfo",
    name: "Sarah Johnson",
    title: "Chief Financial Officer",
    location: "New York, USA",
    capacity: 90,
    skills: ["Finance", "Analytics", "Risk Management"],
  },
  {
    id: "coo",
    name: "Mike Chen",
    title: "Chief Operating Officer",
    location: "Austin, USA",
    capacity: 88,
    skills: ["Operations", "Process", "Teams"],
  },
]

export function OrgDesigner() {
  const [orgNodes, setOrgNodes] = useState<OrgNode[]>(INITIAL_ORG_DATA)
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>("ceo")
  const [showRecommendations, setShowRecommendations] = useState(false)

  const selectedNode = orgNodes.find((n) => n.id === selectedNodeId)

  const handleNodeUpdate = (nodeId: string, updates: Partial<OrgNode>) => {
    setOrgNodes((prev) => prev.map((node) => (node.id === nodeId ? { ...node, ...updates } : node)))
  }

  const handleGenerateTOM = () => {
    setShowRecommendations(true)
  }

  return (
    <div className="space-y-6">
      {/* Main Canvas + Inspector Layout */}
      <div className="flex gap-6 h-[600px]">
        {/* Left: Org Chart Canvas */}
        <div className="flex-1 border border-border rounded-lg bg-white overflow-auto">
          <OrgChart nodes={orgNodes} selectedNodeId={selectedNodeId} onNodeSelect={setSelectedNodeId} />
        </div>

        {/* Right: Role Inspector Panel */}
        {selectedNode && (
          <div className="w-80">
            <RoleInspector node={selectedNode} onUpdate={(updates) => handleNodeUpdate(selectedNode.id, updates)} />
          </div>
        )}
      </div>

      {/* Bottom: Recommendations Panel */}
      {showRecommendations && (
        <div>
          <RecommendationsPanel nodes={orgNodes} />
        </div>
      )}

      {/* CTA Button */}
      <div className="flex justify-end">
        <Button
          onClick={handleGenerateTOM}
          className="bg-coral-glow hover:bg-coral-glow/90 text-white px-8 py-6 text-lg font-semibold"
        >
          Generate Target Operating Model
        </Button>
      </div>
    </div>
  )
}
