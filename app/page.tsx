"use client";

import { ThemeProvider } from "@/lib/ThemeContext";
import Sidebar from "@/components/Sidebar";
import ThemeSettings from "@/components/ThemeSettings";
import GummySelect from "@/components/GummySelect";

export default function UIDemo() {
  return (
    <ThemeProvider>
      <div className="flex h-screen w-full bg-background">
        <Sidebar />

        <main className="flex-1 flex flex-col min-h-0 ml-6">
          {/* Header */}
          <header className="border-b border-border p-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-xl font-semibold accent-text">
                  Gummy Styling Guide
                </h1>
                <p className="text-sm text-muted-foreground">
                  Beautiful gummy UI components with gorgeous themes
                </p>
              </div>
              <div className="status-dot animate-pulse-accent"></div>
            </div>
          </header>

          {/* Main Content Area */}
          <div className="flex-1 overflow-auto p-4 space-y-8">
            {/* Theme Showcase */}
            <section className="space-y-4">
              <h2 className="text-lg font-medium text-foreground">
                Theme System
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Theme Settings Panel */}
                <div className="gummy-panel p-6">
                  <h3 className="text-sm font-medium text-foreground mb-4">
                    Theme Controls
                  </h3>
                  <ThemeSettings />
                </div>

                {/* Color Swatches and Typography */}
                <div className="space-y-6">
                  <div className="gummy-panel p-6">
                    <h3 className="text-sm font-medium text-foreground mb-4">
                      Color Palette
                    </h3>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="space-y-2">
                        <div className="accent-color-honey w-full h-8 rounded"></div>
                        <div className="text-xs text-center text-muted-foreground">
                          Honey
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="accent-color-berry w-full h-8 rounded"></div>
                        <div className="text-xs text-center text-muted-foreground">
                          Berry
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="accent-color-sage w-full h-8 rounded"></div>
                        <div className="text-xs text-center text-muted-foreground">
                          Sage
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="accent-color-sky w-full h-8 rounded"></div>
                        <div className="text-xs text-center text-muted-foreground">
                          Sky
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="accent-color-lavender w-full h-8 rounded"></div>
                        <div className="text-xs text-center text-muted-foreground">
                          Lavender
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="accent-color-monochrome w-full h-8 rounded"></div>
                        <div className="text-xs text-center text-muted-foreground">
                          Mono
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Typography Showcase */}
                  <div className="gummy-panel p-6 space-y-6">
                    <div>
                      <h3 className="text-base font-medium accent-text mb-4">
                        Heading Hierarchy
                      </h3>
                      <div className="space-y-3">
                        <h1 className="text-2xl font-semibold text-foreground">
                          Heading 1
                        </h1>
                        <h2 className="text-xl font-semibold text-foreground">
                          Heading 2
                        </h2>
                        <h3 className="text-lg font-medium text-foreground">
                          Heading 3
                        </h3>
                        <h4 className="text-base font-medium text-foreground">
                          Heading 4
                        </h4>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-base font-medium accent-text">
                        Text Styles
                      </h3>
                      <p className="text-foreground">
                        This is regular body text in the beautiful monospace
                        font family.
                      </p>
                      <p className="text-muted-foreground text-sm">
                        This is muted text for secondary information.
                      </p>
                      <p className="accent-text text-sm">
                        This is accent text that matches your current theme.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-base font-medium accent-text mb-3">
                        Code Display
                      </h3>
                      <code className="bg-muted px-2 py-1 rounded text-sm">
                        const beautiful = &quot;gummy ui&quot;;
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Input Components */}
            <section className="space-y-6">
              <h2 className="text-lg font-medium accent-text">
                Input Components
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column - Input Components */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Standard Inputs */}
                  <div className="gummy-panel p-6">
                    <h3 className="text-sm font-medium text-foreground mb-4">
                      Standard Inputs
                    </h3>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-sm text-muted-foreground">
                          Select
                        </label>
                        <GummySelect
                          options={["Option 1", "Option 2", "Option 3"]}
                          placeholder="Select an option"
                          className="w-full"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm text-muted-foreground">
                          Text Input
                        </label>
                        <input
                          type="text"
                          placeholder="Enter text..."
                          className="gummy-input w-full px-3 py-2 text-sm rounded-md"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Big Chat Input */}
                  <div className="gummy-panel p-6">
                    <h3 className="text-sm font-medium text-foreground mb-4">
                      Beautiful Input
                    </h3>
                    <div className="gummy-panel p-4">
                      <textarea
                        placeholder="Try typing something beautiful..."
                        className="gummy-input w-full h-20 resize-none text-sm"
                      />
                      <div className="flex justify-between items-center mt-3">
                        <div className="flex items-center gap-2">
                          <button className="gummy-button text-xs px-2 py-1 rounded-md">
                            +
                          </button>
                          <button className="gummy-button text-xs px-2 py-1 rounded-md">
                            •••
                          </button>
                        </div>
                        <button className="gummy-button-accent text-xs px-3 py-1 rounded-md">
                          Send
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Panel Components */}
                <div className="space-y-6">
                  {/* Large Strong Accent Panel - aligns with top Standard Inputs section */}
                  <div className="gummy-panel-strong p-6 accent-border">
                    <h4 className="text-sm font-medium accent-text mb-3">
                      Strong Accent Panel
                    </h4>
                    <p className="text-xs text-muted-foreground mb-4">
                      This combines strong styling with accent colors.
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Extra content for balanced visual weight.
                    </p>
                  </div>

                  {/* Smaller Strong Panel - its relative counterpart */}
                  <div className="gummy-panel-strong p-4">
                    <h4 className="text-sm font-medium text-foreground mb-2">
                      Strong Panel
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      This panel has a stronger background for emphasis.
                    </p>
                  </div>

                  {/* Large Accent Panel - aligns with bottom Beautiful Input section */}
                  <div className="gummy-panel p-6 accent-border">
                    <h4 className="text-sm font-medium accent-text mb-3">
                      Accent Panel
                    </h4>
                    <p className="text-xs text-muted-foreground mb-4">
                      This panel features the current accent color.
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Additional content to match the larger input section
                      height.
                    </p>
                  </div>

                  {/* Smaller Standard Panel - its counterpart */}
                  <div className="gummy-panel p-4">
                    <h4 className="text-sm font-medium text-foreground mb-2">
                      Standard Panel
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      This is a beautiful gummy panel with soft shadows.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}
