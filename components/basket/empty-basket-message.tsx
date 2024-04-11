import { ShoppingBasket } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function EmptyBasketMessage() {
  return (
    <div className="mt-2 flex gap-2">
      Basket is empty.
      <Link href={'/'} className="underline">
        Go Shopping?
      </Link>
      <ShoppingBasket />{' '}
    </div>
  )
}
