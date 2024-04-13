'use client'

import useBasketStore from '@/lib/hooks/useBasketStore'
import { OrderItem } from '@/lib/models/order'
import React, { useEffect, useState } from 'react'

type AddToBasketProps = {
  item: OrderItem
}

export default function AddToBasket({ item }: AddToBasketProps) {
  const [existingItem, setExistingItem] = useState<OrderItem | undefined>(
    undefined
  )
  const { items, addToBasket, removeFromBasket } = useBasketStore()

  useEffect(() => {
    setExistingItem(items.find((current) => current.slug === item.slug))
  }, [item, items])

  return existingItem ? (
    <div>
      <button className="btn w-5" onClick={() => removeFromBasket(item)}>
        -
      </button>
      <span className="mx-2 text-sm">{existingItem.quantity}</span>
      <button className="btn w-5" onClick={() => addToBasket(item)}>
        +
      </button>
    </div>
  ) : (
    <button className="btn btn-primary" onClick={() => addToBasket(item)}>
      Add to Basket
    </button>
  )
}
