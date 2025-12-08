"use client"

import type React from "react"

interface MainContentProps {
  children: React.ReactNode
}

export function MainContent({ children }: MainContentProps) {
  return (
    <main className="pt-20 lg:ml-64 min-h-screen bg-background">
      <div className="p-6 lg:p-8">{children}</div>
    </main>
  )
}
