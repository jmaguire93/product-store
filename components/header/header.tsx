'use client'

import Link from 'next/link'
import React from 'react'
import ThemeSwitcher from '../theme-switcher/theme-switcher'
import { ShoppingBasket } from 'lucide-react'
import useBasketStore from '@/lib/hooks/useBasketStore'

export default function Header() {
  const { items } = useBasketStore()

  return (
    <header className="fixed top-0 w-full z-20">
      <nav>
        <div className="navbar shadow bg-base-300 justify-between">
          <Link className="btn btn-ghost text-lg" href="/">
            Product Store
          </Link>
          <div className="flex gap-2 px-2">
            <ul>
              <li>
                <Link href={'/basket'} className="btn btn-ghost">
                  <ShoppingBasket />
                  <div className="badge badge-primary badge-sm">
                    {items.reduce((a, c) => a + c.quantity, 0)}
                  </div>
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
