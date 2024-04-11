import { OrderItem } from '@/lib/models/order'
import React from 'react'
import AddToBasket from '../products/add-to-basket'
import Image from 'next/image'
import Link from 'next/link'

type BasketItemProps = {
  item: OrderItem
}

export default function BasketItem({ item }: BasketItemProps) {
  return (
    <div className="card bg-base-300 shadow mb-4 ">
      <div className="flex">
        <Link href={`/product/${item.slug}`} className="p-2">
          <Image
            src={item.image}
            alt={item.name}
            width={150}
            height={150}
            className="rounded-lg"
          />
        </Link>
        <div className="text-center">
          <h2 className="pt-2">{item.name}</h2>
          <span className="text-xl">£{item.price}</span>
          <AddToBasket item={{ ...item, quantity: 0 }} />
        </div>
      </div>
    </div>
  )
}
