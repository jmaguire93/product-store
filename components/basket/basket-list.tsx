import useBasketStore from '@/lib/hooks/useBasketStore'
import React from 'react'
import BasketItem from './basket-item'

export default function BasketList() {
  const { items } = useBasketStore()
  return (
    <div className="overflow-y-auto my-4">
      {items.map((item) => (
        <BasketItem key={item.name} item={item} />
      ))}
    </div>
  )
}
