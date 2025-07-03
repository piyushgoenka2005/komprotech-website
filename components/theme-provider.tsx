'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { type ThemeProviderProps } from 'next-themes/dist/types'

// Launch UI Color Themes
export const colorThemes = {
  ember: {
    name: "Ember",
    primary: "rgb(249 115 22)", // orange-500
    primaryForeground: "rgb(255 255 255)",
    secondary: "rgb(251 146 60)", // orange-400
    accent: "rgb(234 88 12)", // orange-600
    muted: "rgb(254 237 218)", // orange-100
    border: "rgb(253 186 116)", // orange-300
  },
  fire: {
    name: "Fire",
    primary: "rgb(239 68 68)", // red-500
    primaryForeground: "rgb(255 255 255)",
    secondary: "rgb(248 113 113)", // red-400
    accent: "rgb(220 38 38)", // red-600
    muted: "rgb(254 226 226)", // red-100
    border: "rgb(252 165 165)", // red-300
  },
  ultraviolet: {
    name: "Ultraviolet",
    primary: "rgb(168 85 247)", // purple-500
    primaryForeground: "rgb(255 255 255)",
    secondary: "rgb(196 181 253)", // purple-300
    accent: "rgb(147 51 234)", // purple-600
    muted: "rgb(243 232 255)", // purple-100
    border: "rgb(196 181 253)", // purple-300
  },
  titanium: {
    name: "Titanium",
    primary: "rgb(71 85 105)", // slate-600
    primaryForeground: "rgb(255 255 255)",
    secondary: "rgb(148 163 184)", // slate-400
    accent: "rgb(51 65 85)", // slate-700
    muted: "rgb(248 250 252)", // slate-50
    border: "rgb(203 213 225)", // slate-300
  },
  ice: {
    name: "Ice",
    primary: "rgb(14 165 233)", // sky-500
    primaryForeground: "rgb(255 255 255)",
    secondary: "rgb(56 189 248)", // sky-400
    accent: "rgb(2 132 199)", // sky-600
    muted: "rgb(240 249 255)", // sky-50
    border: "rgb(125 211 252)", // sky-300
  },
  holo: {
    name: "Holo",
    primary: "rgb(6 182 212)", // cyan-500
    primaryForeground: "rgb(255 255 255)",
    secondary: "rgb(34 211 238)", // cyan-400
    accent: "rgb(8 145 178)", // cyan-600
    muted: "rgb(236 254 255)", // cyan-50
    border: "rgb(103 232 249)", // cyan-300
  },
  emerald: {
    name: "Emerald",
    primary: "rgb(16 185 129)", // emerald-500
    primaryForeground: "rgb(255 255 255)",
    secondary: "rgb(52 211 153)", // emerald-400
    accent: "rgb(5 150 105)", // emerald-600
    muted: "rgb(236 253 245)", // emerald-50
    border: "rgb(110 231 183)", // emerald-300
  },
  electro: {
    name: "Electro",
    primary: "rgb(168 85 247)", // violet-500
    primaryForeground: "rgb(255 255 255)",
    secondary: "rgb(196 181 253)", // violet-300
    accent: "rgb(147 51 234)", // violet-600
    muted: "rgb(245 243 255)", // violet-50
    border: "rgb(196 181 253)", // violet-300
  }
} as const

export type ColorTheme = keyof typeof colorThemes

interface ThemeContextType {
  colorTheme: ColorTheme
  setColorTheme: (theme: ColorTheme) => void
}

const ThemeContext = React.createContext<ThemeContextType | undefined>(undefined)

export function useTheme() {
  const context = React.useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}

interface CustomThemeProviderProps extends ThemeProviderProps {
  children: React.ReactNode
}

export function ThemeProvider({ children, ...props }: CustomThemeProviderProps) {
  const [colorTheme, setColorTheme] = React.useState<ColorTheme>("ember") // Default to Komprotech orange

  // Apply CSS custom properties for the current theme
  React.useEffect(() => {
    const theme = colorThemes[colorTheme]
    const root = document.documentElement
    
    root.style.setProperty("--theme-primary", theme.primary)
    root.style.setProperty("--theme-primary-foreground", theme.primaryForeground)
    root.style.setProperty("--theme-secondary", theme.secondary)
    root.style.setProperty("--theme-accent", theme.accent)
    root.style.setProperty("--theme-muted", theme.muted)
    root.style.setProperty("--theme-border", theme.border)
  }, [colorTheme])

  return (
    <NextThemesProvider {...props}>
      <ThemeContext.Provider value={{ colorTheme, setColorTheme }}>
        {children}
      </ThemeContext.Provider>
    </NextThemesProvider>
  )
}
