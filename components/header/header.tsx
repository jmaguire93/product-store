import Link from 'next/link'
import React from 'react'
import ThemeSwitcher from '../theme-switcher/theme-switcher'
import { ShoppingBasket } from 'lucide-react'

export default function Header() {
  return (
    <header>
      <nav>
        <div className="navbar bg-base-300 justify-between">
          <Link className="btn btn-ghost text-lg" href="/">
            Product Store
          </Link>
          <div className="flex gap-2">
            <ul className="">
              <li>
                <Link href={'/basket'} className="btn btn-ghost">
                  <ShoppingBasket />
                </Link>
              </li>
            </ul>
            <ThemeSwitcher />
          </div>
        </div>
      </nav>
    </header>
  )
}
