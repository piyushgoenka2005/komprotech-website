"use client"

import * as React from "react"
import { useTheme as useNextTheme } from "next-themes"
import { useTheme, colorThemes, type ColorTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { 
  Monitor, 
  Moon, 
  Sun, 
  Palette,
  Check
} from "lucide-react"

export function ThemeSwitcher() {
  const { theme, setTheme } = useNextTheme()
  const { colorTheme, setColorTheme } = useTheme()

  return (
    <div className="flex items-center gap-2">
      {/* Dark/Light Mode Toggle */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="h-8 w-8 p-0">
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Appearance</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => setTheme("light")}>
            <Sun className="mr-2 h-4 w-4" />
            <span>Light</span>
            {theme === "light" && <Check className="ml-auto h-4 w-4" />}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            <Moon className="mr-2 h-4 w-4" />
            <span>Dark</span>
            {theme === "dark" && <Check className="ml-auto h-4 w-4" />}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("system")}>
            <Monitor className="mr-2 h-4 w-4" />
            <span>System</span>
            {theme === "system" && <Check className="ml-auto h-4 w-4" />}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Color Theme Selector */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="h-8 w-8 p-0">
            <Palette className="h-4 w-4" />
            <span className="sr-only">Change color theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuLabel>Color Theme</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {Object.entries(colorThemes).map(([key, theme]) => (
            <DropdownMenuItem 
              key={key} 
              onClick={() => setColorTheme(key as ColorTheme)}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <div 
                  className="w-4 h-4 rounded-full border border-gray-200 dark:border-gray-700"
                  style={{ backgroundColor: theme.primary }}
                />
                <span>{theme.name}</span>
              </div>
              {colorTheme === key && <Check className="h-4 w-4" />}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

// Inline Theme Selector for showcasing themes
export function InlineThemeSelector() {
  const { colorTheme, setColorTheme } = useTheme()

  return (
    <div className="flex items-center gap-1 p-1 bg-gray-100 dark:bg-gray-800 rounded-lg">
      {Object.entries(colorThemes).map(([key, theme]) => (
        <button
          key={key}
          onClick={() => setColorTheme(key as ColorTheme)}
          className={`w-6 h-6 rounded-md border-2 transition-all duration-200 hover:scale-110 ${
            colorTheme === key 
              ? "border-gray-400 dark:border-gray-500 scale-110" 
              : "border-gray-200 dark:border-gray-700"
          }`}
          style={{ backgroundColor: theme.primary }}
          title={theme.name}
        />
      ))}
    </div>
  )
} 