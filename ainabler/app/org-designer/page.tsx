"use client"

import { AppLayout } from "@/components/layout/app-layout"
import { OrgDesigner } from "@/components/org-designer/org-designer"

export default function OrgDesignerPage() {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">Org Designer</h1>
          <p className="text-muted-foreground text-lg">
            Design and optimize your organizational structure with drag-and-drop simplicity
          </p>
        </div>
        <OrgDesigner />
      </div>
    </AppLayout>
  )
}
