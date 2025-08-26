"use client";

import React, { useState } from "react";
import {
  Palette,
  Image as ImageIcon,
  Sun,
  Moon,
  RotateCcw,
  Type,
} from "lucide-react";
import {
  useTheme,
  COLOR_SCHEMES,
  BACKGROUND_OPTIONS,
  FONT_OPTIONS,
  ColorScheme,
  BackgroundOption,
  FontOption,
} from "@/lib/ThemeContext";

export default function ThemeSettings() {
  const {
    colorScheme,
    background,
    font,
    mode,
    setColorScheme,
    setBackground,
    setFont,
    setMode,
    resetToDefaults,
  } = useTheme();

  return (
    <div className="space-y-4 p-3">
      {/* Theme Mode Toggle */}
      <div className="space-y-2">
        <div className="flex rounded-md toggle-container-sm p-0.5">
          <button
            onClick={() => setMode("dark")}
            className={`flex-1 flex items-center justify-center gap-1 py-1 px-2 rounded-sm text-xs transition-all ${
              mode === "dark" ? "gummy-button-accent" : "gummy-button menu-item"
            }`}
          >
            <Moon size={10} />
            Dark
          </button>
          <button
            onClick={() => setMode("light")}
            className={`flex-1 flex items-center justify-center gap-1 py-1 px-2 rounded-sm text-xs transition-all ${
              mode === "light"
                ? "gummy-button-accent"
                : "gummy-button menu-item"
            }`}
          >
            <Sun size={10} />
            Light
          </button>
        </div>
      </div>

      {/* Background Options */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground p-2">
          <ImageIcon size={12} />
          <span>Background</span>
        </div>
        <div className="space-y-2 pl-2">
          {/* Grid for gradient backgrounds */}
          <div className="grid grid-cols-2 gap-2">
            {Object.entries(BACKGROUND_OPTIONS)
              .filter(([key]) => key !== "solid")
              .map(([key, bg]) => (
                <button
                  key={key}
                  onClick={() => setBackground(key as BackgroundOption)}
                  className={`flex items-center gap-2 p-2 rounded-lg text-xs transition-all text-left ${
                    background === key
                      ? "gummy-button-accent"
                      : "gummy-button menu-item"
                  }`}
                >
                  <div
                    className={`w-3 h-3 rounded-full border border-white/20 flex-shrink-0 bg-color-${key}`}
                  />
                  <span className="truncate">{bg.name}</span>
                </button>
              ))}
          </div>

          {/* Solid option at the bottom */}
          {Object.entries(BACKGROUND_OPTIONS)
            .filter(([key]) => key === "solid")
            .map(([key, bg]) => (
              <button
                key={key}
                onClick={() => setBackground(key as BackgroundOption)}
                className={`w-full flex items-center gap-2 p-2 rounded-lg text-xs transition-all text-left ${
                  background === key
                    ? "gummy-button-accent"
                    : "gummy-button menu-item"
                }`}
              >
                <div
                  className={`w-3 h-3 rounded-full border border-white/20 flex-shrink-0 bg-color-${key}`}
                />
                <span>{bg.name}</span>
              </button>
            ))}
        </div>
      </div>

      {/* Color Schemes */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground p-2">
          <Palette size={12} />
          <span>Color Scheme</span>
        </div>
        <div className="grid grid-cols-2 gap-2 pl-2">
          {Object.entries(COLOR_SCHEMES).map(([key, scheme]) => (
            <button
              key={key}
              onClick={() => setColorScheme(key as ColorScheme)}
              className={`flex items-center gap-2 p-2 rounded-lg text-xs transition-all text-left ${
                colorScheme === key
                  ? "gummy-button-accent"
                  : "gummy-button menu-item"
              }`}
            >
              <div
                className={`w-3 h-3 rounded-full border border-white/20 flex-shrink-0 accent-color-${key}`}
              />
              <span className="truncate">{scheme.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Font Options */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground p-2">
          <Type size={12} />
          <span>Font</span>
        </div>
        <div className="grid grid-cols-2 gap-2 pl-2">
          {Object.entries(FONT_OPTIONS).map(([key, fontOption]) => (
            <button
              key={key}
              onClick={() => setFont(key as FontOption)}
              className={`flex items-center justify-center p-2 rounded-lg text-xs transition-all text-center ${
                font === key ? "gummy-button-accent" : "gummy-button menu-item"
              }`}
            >
              <span className={fontOption.className}>{fontOption.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Reset Button */}
      <div className="pt-2 border-t border-white/10">
        <button
          onClick={resetToDefaults}
          className="w-full flex items-center justify-center gap-2 p-2 rounded-lg text-xs gummy-button menu-item transition-all"
        >
          <RotateCcw size={12} />
          Reset to Defaults
        </button>
      </div>
    </div>
  );
}
