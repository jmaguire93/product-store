'use client'

import { useThemeProvider } from '@/providers/theme-provider'
import { Moon, Sun } from 'lucide-react'
import React from 'react'

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useThemeProvider()

  return (
    <label className="swap swap-rotate">
      <input
        type="checkbox"
        checked={theme === 'light'}
        onChange={toggleTheme}
      />
      <Sun className="swap-on w-6 h-6" />
      <Moon className="swap-off w-6 h-6" />
    </label>
  )
}
