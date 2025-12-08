"use client"
import { Bell, Settings, User, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-blue-slate border-b border-sidebar-border flex items-center justify-between px-6 z-50">
      {/* Logo/Brand */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-coral-glow flex items-center justify-center">
          <span className="text-white font-bold text-sm">AI</span>
        </div>
        <span className="text-xl font-bold text-white hidden sm:inline">AInabler</span>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-4">
        {/* AI Action Button */}
        <Button className="bg-coral-glow hover:bg-coral-glow/90 text-white flex items-center gap-2">
          <Zap size={18} />
          <span className="hidden sm:inline">AI Action</span>
        </Button>

        {/* Notifications */}
        <button className="p-2 hover:bg-white/10 rounded-lg text-white transition-colors relative">
          <Bell size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-coral-glow rounded-full" />
        </button>

        {/* Settings */}
        <button className="p-2 hover:bg-white/10 rounded-lg text-white transition-colors">
          <Settings size={20} />
        </button>

        {/* Profile */}
        <button className="p-2 hover:bg-white/10 rounded-lg text-white transition-colors">
          <User size={20} />
        </button>
      </div>
    </header>
  )
}
