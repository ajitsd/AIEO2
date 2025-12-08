"use client"

import type React from "react"
import { Header } from "./header"
import { Sidebar } from "./sidebar"
import { MainContent } from "./main-content"

interface AppLayoutProps {
  children: React.ReactNode
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Sidebar />
      <MainContent>{children}</MainContent>
    </div>
  )
}
