"use client";

import { useState } from "react";
import {
  Plus,
  ChevronLeft,
  ChevronRight,
  SettingsIcon,
  MessageSquare,
  Palette,
} from "lucide-react";
import ThemeSettings from "./ThemeSettings";

interface SidebarProps {
  children?: React.ReactNode;
}

export default function Sidebar({ children }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [historyExpanded, setHistoryExpanded] = useState(false);
  const [themeExpanded, setThemeExpanded] = useState(false);

  return (
    <div
      className={`h-screen gummy-panel-strong sidebar-no-shadow border-r border-white/20 flex flex-col transition-all duration-300 flex-shrink-0 ${
        isCollapsed ? "w-12" : "w-80"
      }`}
    >
      {isCollapsed ? (
        /* Collapsed Sidebar */
        <div className="flex flex-col items-center gap-1.5 p-1.5">
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-1.5 gummy-button-accent rounded transition-all"
            title="Expand sidebar"
          >
            <span className="text-sm font-bold">+</span>
          </button>
          <button
            onClick={() => setIsCollapsed(false)}
            className="p-1.5 gummy-button rounded transition-all menu-item"
            title="Demo Items"
          >
            <MessageSquare size={14} />
          </button>
          <button
            onClick={() => setIsCollapsed(false)}
            className="p-1.5 gummy-button rounded transition-all menu-item"
            title="Settings"
          >
            <SettingsIcon size={14} />
          </button>
          <button
            onClick={() => setIsCollapsed(false)}
            className="p-1.5 gummy-button rounded transition-all menu-item"
            title="Theme Settings"
          >
            <Palette size={14} />
          </button>
        </div>
      ) : (
        /* Expanded Sidebar */
        <div className="flex flex-col flex-1 min-h-0">
          {/* Title Header */}
          <div className="flex items-center p-2 border-b border-white/20 h-12 relative">
            <div className="status-dot"></div>
            <div className="flex-1 flex justify-center">
              <span className="text-xs font-medium">Gummy Styling Guide</span>
            </div>
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="absolute right-2 p-1 gummy-button-accent rounded transition-all"
              title="Collapse sidebar"
            >
              <span className="text-sm font-bold">−</span>
            </button>
          </div>

          {/* Demo Items Section */}
          <div className="flex-shrink-0">
            <button
              onClick={() => setHistoryExpanded(!historyExpanded)}
              className="w-full p-2.5 flex items-center justify-between menu-item transition-colors rounded"
            >
              <span className="text-xs font-medium">Demo Components</span>
            </button>

            {historyExpanded && (
              <div className="overflow-y-auto max-h-[33vh]">
                <div className="space-y-1 p-2">
                  <div className="gummy-panel p-3 rounded-lg">
                    <div className="text-xs text-zinc-400 mb-1">
                      Button Showcase
                    </div>
                    <div className="text-xs text-foreground">
                      Various button styles and states
                    </div>
                  </div>
                  <div className="gummy-panel p-3 rounded-lg">
                    <div className="text-xs text-zinc-400 mb-1">
                      Input Components
                    </div>
                    <div className="text-xs text-foreground">
                      Text inputs and form elements
                    </div>
                  </div>
                  <div className="gummy-panel p-3 rounded-lg">
                    <div className="text-xs text-zinc-400 mb-1">
                      Panel Layouts
                    </div>
                    <div className="text-xs text-foreground">
                      Card and panel variations
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Theme Settings Section */}
          <div
            className={`${themeExpanded ? "flex-1 flex flex-col min-h-0" : ""}`}
          >
            <button
              onClick={() => setThemeExpanded(!themeExpanded)}
              className="w-full p-2.5 flex items-center justify-between menu-item transition-colors rounded"
            >
              <span className="text-xs font-medium">Theme</span>
            </button>

            {themeExpanded && (
              <div className="flex-1 overflow-y-auto">
                <ThemeSettings />
              </div>
            )}
          </div>

          {/* Custom Content */}
          {children}
        </div>
      )}
    </div>
  );
}
