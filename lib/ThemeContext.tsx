"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

// Available font options
export const FONT_OPTIONS = {
  mono: {
    name: "Monospace",
    value: "mono",
    className: "font-mono",
  },
  sans: {
    name: "Sans Serif",
    value: "sans",
    className: "font-sans",
  },
  serif: {
    name: "Serif",
    value: "serif",
    className: "font-serif",
  },
  condensed: {
    name: "Condensed",
    value: "condensed",
    className: "font-mono tracking-tighter",
  },
} as const;

// Available color schemes
export const COLOR_SCHEMES = {
  honey: {
    name: "Warm Honey",
    value: "honey",
    accent: "#d4a574",
  },
  berry: {
    name: "Soft Berry",
    value: "berry",
    accent: "#b67b7b",
  },
  sage: {
    name: "Gentle Sage",
    value: "sage",
    accent: "#8fb08f",
  },
  sky: {
    name: "Calm Sky",
    value: "sky",
    accent: "#7ba3c4",
  },
  lavender: {
    name: "Cozy Lavender",
    value: "lavender",
    accent: "#a396b6",
  },
  monochrome: {
    name: "Soft Monochrome",
    value: "monochrome",
    accent: "#8b7f73",
  },
} as const;

// Available background options
export const BACKGROUND_OPTIONS = {
  solid: {
    name: "Solid",
    value: "solid",
    className: "bg-solid",
  },
  gradientHoney: {
    name: "Warm",
    value: "gradient-honey",
    className: "bg-gradient-honey",
  },
  gradientBerry: {
    name: "Berry",
    value: "gradient-berry",
    className: "bg-gradient-berry",
  },
  gradientSage: {
    name: "Sage",
    value: "gradient-sage",
    className: "bg-gradient-sage",
  },
  gradientSky: {
    name: "Sky",
    value: "gradient-sky",
    className: "bg-gradient-sky",
  },
  gradientLavender: {
    name: "Lavender",
    value: "gradient-lavender",
    className: "bg-gradient-lavender",
  },
  gradientMonochrome: {
    name: "Monochrome",
    value: "gradient-monochrome",
    className: "bg-gradient-monochrome",
  },
} as const;

export type ColorScheme = keyof typeof COLOR_SCHEMES;
export type BackgroundOption = keyof typeof BACKGROUND_OPTIONS;
export type FontOption = keyof typeof FONT_OPTIONS;
export type ThemeMode = "light" | "dark";

interface ThemeContextType {
  // Current theme settings
  colorScheme: ColorScheme;
  background: BackgroundOption;
  font: FontOption;
  mode: ThemeMode;

  // Setters
  setColorScheme: (scheme: ColorScheme) => void;
  setBackground: (bg: BackgroundOption) => void;
  setFont: (font: FontOption) => void;
  setMode: (mode: ThemeMode) => void;

  // Helper methods
  getCurrentScheme: () => (typeof COLOR_SCHEMES)[ColorScheme];
  getCurrentBackground: () => (typeof BACKGROUND_OPTIONS)[BackgroundOption];
  getCurrentFont: () => (typeof FONT_OPTIONS)[FontOption];
  resetToDefaults: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const STORAGE_KEYS = {
  colorScheme: "blackbox-ui-color-scheme",
  background: "blackbox-ui-background",
  font: "blackbox-ui-font",
  mode: "blackbox-ui-theme-mode",
} as const;

const DEFAULT_SETTINGS = {
  colorScheme: "berry" as ColorScheme,
  background: "solid" as BackgroundOption,
  font: "mono" as FontOption,
  mode: "dark" as ThemeMode,
} as const;

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [colorScheme, setColorSchemeState] = useState<ColorScheme>(
    DEFAULT_SETTINGS.colorScheme
  );
  const [background, setBackgroundState] = useState<BackgroundOption>(
    DEFAULT_SETTINGS.background
  );
  const [font, setFontState] = useState<FontOption>(DEFAULT_SETTINGS.font);
  const [mode, setModeState] = useState<ThemeMode>(DEFAULT_SETTINGS.mode);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const savedColorScheme = localStorage.getItem(
        STORAGE_KEYS.colorScheme
      ) as ColorScheme;
      const savedBackground = localStorage.getItem(
        STORAGE_KEYS.background
      ) as BackgroundOption;
      const savedFont = localStorage.getItem(STORAGE_KEYS.font) as FontOption;
      const savedMode = localStorage.getItem(STORAGE_KEYS.mode) as ThemeMode;

      // Load saved settings or use defaults
      setColorSchemeState(
        savedColorScheme && savedColorScheme in COLOR_SCHEMES
          ? savedColorScheme
          : DEFAULT_SETTINGS.colorScheme
      );
      setBackgroundState(
        savedBackground && savedBackground in BACKGROUND_OPTIONS
          ? savedBackground
          : DEFAULT_SETTINGS.background
      );
      setFontState(
        savedFont && savedFont in FONT_OPTIONS
          ? savedFont
          : DEFAULT_SETTINGS.font
      );
      setModeState(
        savedMode && ["light", "dark"].includes(savedMode)
          ? savedMode
          : DEFAULT_SETTINGS.mode
      );
    } catch (error) {
      console.warn("Failed to load theme settings, using defaults:", error);
      setColorSchemeState(DEFAULT_SETTINGS.colorScheme);
      setBackgroundState(DEFAULT_SETTINGS.background);
      setFontState(DEFAULT_SETTINGS.font);
      setModeState(DEFAULT_SETTINGS.mode);
    }
  }, []);

  // Apply theme changes to document
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    // Apply theme mode class properly
    html.classList.remove("dark", "light");
    html.classList.add(mode);

    // Apply color scheme data attribute
    html.setAttribute("data-theme", colorScheme);

    // Apply background class to body
    // Remove all background classes first
    Object.values(BACKGROUND_OPTIONS).forEach((bg) => {
      body.classList.remove(bg.className.replace("bg-", ""));
      body.classList.remove(bg.className);
    });

    // Remove all font classes
    Object.values(FONT_OPTIONS).forEach((f) => {
      f.className.split(" ").forEach((cls) => body.classList.remove(cls));
    });

    // Add current classes
    body.classList.add(BACKGROUND_OPTIONS[background].className);
    FONT_OPTIONS[font].className
      .split(" ")
      .forEach((cls) => body.classList.add(cls));

    // Ensure antialiased is always present
    body.classList.add("antialiased");
  }, [colorScheme, background, font, mode]);

  const setColorScheme = (scheme: ColorScheme) => {
    setColorSchemeState(scheme);
    try {
      localStorage.setItem(STORAGE_KEYS.colorScheme, scheme);
    } catch (error) {
      console.warn("Failed to save color scheme to localStorage:", error);
    }
  };

  const setBackground = (bg: BackgroundOption) => {
    setBackgroundState(bg);
    try {
      localStorage.setItem(STORAGE_KEYS.background, bg);
    } catch (error) {
      console.warn("Failed to save background to localStorage:", error);
    }
  };

  const setFont = (newFont: FontOption) => {
    setFontState(newFont);
    try {
      localStorage.setItem(STORAGE_KEYS.font, newFont);
    } catch (error) {
      console.warn("Failed to save font to localStorage:", error);
    }
  };

  const setMode = (newMode: ThemeMode) => {
    setModeState(newMode);
    try {
      localStorage.setItem(STORAGE_KEYS.mode, newMode);
    } catch (error) {
      console.warn("Failed to save theme mode to localStorage:", error);
    }
  };

  const getCurrentScheme = () => COLOR_SCHEMES[colorScheme];
  const getCurrentBackground = () => BACKGROUND_OPTIONS[background];
  const getCurrentFont = () => FONT_OPTIONS[font];

  const resetToDefaults = () => {
    setColorScheme(DEFAULT_SETTINGS.colorScheme);
    setBackground(DEFAULT_SETTINGS.background);
    setFont(DEFAULT_SETTINGS.font);
    setMode(DEFAULT_SETTINGS.mode);
  };

  const value: ThemeContextType = {
    colorScheme,
    background,
    font,
    mode,
    setColorScheme,
    setBackground,
    setFont,
    setMode,
    getCurrentScheme,
    getCurrentBackground,
    getCurrentFont,
    resetToDefaults,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
