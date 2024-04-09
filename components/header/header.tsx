import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header>
      <nav>
        <div className="navbar bg-base-300">
          <Link className="btn btn-ghost text-lg" href="/">
            Product Store
          </Link>
        </div>
      </nav>
    </header>
  )
}
