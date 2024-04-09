'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

type ThemeContextType = {
  theme: Theme
  toggleTheme: () => void
}

type ThemeProviderProps = {
  children: React.ReactNode
}

const ThemeContext = createContext<ThemeContextType | null>(null)

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>('light')

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
      window.localStorage.setItem('theme', 'dark')
      document.documentElement.classList.add('dark')
    } else {
      setTheme('light')
      window.localStorage.setItem('theme', 'light')
      document.documentElement.classList.remove('dark')
    }
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme') as Theme | null

    if (localTheme) {
      setTheme(localTheme)

      if (localTheme === 'dark') {
        document.documentElement.classList.add('dark')
      }
    }
  }, [])

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme
      }}
    >
      <div data-theme={theme}>{children}</div>
    </ThemeContext.Provider>
  )
}

export const useThemeProvider = function () {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('useThemeProvider must be used within the ThemeProvider')
  }

  return context
}
