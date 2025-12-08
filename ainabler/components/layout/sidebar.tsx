"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { ChevronDown, Menu, X } from "lucide-react"

interface SidebarItem {
  label: string
  href: string
  icon?: React.ReactNode
  children?: SidebarItem[]
}

const SIDEBAR_ITEMS: SidebarItem[] = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "AI COE Generator", href: "/ai-coe-generator" },
  { label: "Org Designer", href: "/org-designer" },
  { label: "Knowledge Agent", href: "/knowledge-agent" },
  {
    label: "AI Enablement Hub",
    href: "/ai-enablement-hub",
    children: [
      { label: "Training Paths", href: "/ai-enablement-hub/training-paths" },
      { label: "Prompt Library", href: "/ai-enablement-hub/prompt-library" },
      { label: "Skills Scorecard", href: "/ai-enablement-hub/skills-scorecard" },
      { label: "ROI Calculator", href: "/ai-enablement-hub/roi-calculator" },
      { label: "Change Playbooks", href: "/ai-enablement-hub/change-playbooks" },
    ],
  },
  { label: "AI Adoption Heatmap", href: "/adoption-heatmap" },
  { label: "AjitGPT", href: "/ajit-gpt" },
]

export function Sidebar() {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set())
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const toggleExpanded = (label: string) => {
    const newExpanded = new Set(expandedItems)
    if (newExpanded.has(label)) {
      newExpanded.delete(label)
    } else {
      newExpanded.add(label)
    }
    setExpandedItems(newExpanded)
  }

  const renderItems = (items: SidebarItem[], depth = 0) => {
    return items.map((item) => (
      <div key={item.label}>
        <div className="flex items-center">
          <Link
            href={item.href}
            className="flex-1 px-4 py-3 text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors"
          >
            {item.label}
          </Link>
          {item.children && (
            <button
              onClick={() => toggleExpanded(item.label)}
              className="px-2 py-3 text-sidebar-foreground hover:text-sidebar-primary transition-colors"
            >
              <ChevronDown
                size={16}
                className={`transition-transform ${expandedItems.has(item.label) ? "rotate-180" : ""}`}
              />
            </button>
          )}
        </div>
        {item.children && expandedItems.has(item.label) && (
          <div className="bg-black/10">{renderItems(item.children, depth + 1)}</div>
        )}
      </div>
    ))
  }

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-sidebar hover:bg-sidebar-accent rounded-lg text-sidebar-foreground"
      >
        {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-16 h-[calc(100vh-64px)] w-64 bg-sidebar border-r border-sidebar-border overflow-y-auto transition-all duration-300 lg:translate-x-0 ${
          isMobileOpen ? "translate-x-0 z-40" : "-translate-x-full"
        }`}
      >
        <nav className="py-6">{renderItems(SIDEBAR_ITEMS)}</nav>
      </aside>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div className="fixed inset-0 bg-black/50 lg:hidden z-30 top-16" onClick={() => setIsMobileOpen(false)} />
      )}
    </>
  )
}
