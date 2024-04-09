import Link from 'next/link'
import React from 'react'
import ThemeSwitcher from '../theme-switcher/theme-switcher'

export default function Header() {
  return (
    <header>
      <nav>
        <div className="navbar bg-base-300 justify-between">
          <Link className="btn btn-ghost text-lg" href="/">
            Product Store
          </Link>
          <ThemeSwitcher />
        </div>
      </nav>
    </header>
  )
}
