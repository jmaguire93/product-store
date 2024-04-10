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
  const { items, addItemToBasket } = useBasketStore()

  useEffect(() => {
    setExistingItem(items.find((current) => current.slug === item.slug))
  }, [item, items])

  return existingItem ? (
    <div>
      <button className="btn">-</button>
      <span>{existingItem.quantity}</span>
      <button className="btn" onClick={() => addItemToBasket(item)}>
        +
      </button>
    </div>
  ) : (
    <button className="btn btn-primary" onClick={() => addItemToBasket(item)}>
      Add
    </button>
  )
}
