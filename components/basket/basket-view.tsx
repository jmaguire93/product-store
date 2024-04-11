import useBasketStore from '@/lib/hooks/useBasketStore'
import React from 'react'
import EmptyBasketMessage from './empty-basket-message'

type BasketViewProps = {
  component: JSX.Element
}

export default function BasketView({ component }: BasketViewProps) {
  const { items } = useBasketStore()

  return (
    <>
      <h1 className="text-xl my-2">Shopping Basket</h1>
      {items.length === 0 ? <EmptyBasketMessage /> : component}
    </>
  )
}
