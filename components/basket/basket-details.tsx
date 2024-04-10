'use client'

import React from 'react'
import AddToBasket from '../products/add-to-basket'
import useBasketStore from '@/lib/hooks/useBasketStore'
import { ShoppingBasket } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function BasketDetails() {
  const { items, itemsPrice } = useBasketStore()

  return (
    <>
      <h1 className="text-xl">Shopping Basket</h1>
      {items.length === 0 ? (
        <>
          <div className="mt-2 flex gap-2">
            Basket is empty.
            <Link href={'/'} className="underline">
              Go Shopping?
            </Link>
            <ShoppingBasket />{' '}
          </div>
        </>
      ) : (
        <div className="grid md:grid-cols-4 md:gap-5">
          <div className="overflow-x-auto md:col-span-3">
            <table className="table">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Quantity</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.slug}>
                    <td>
                      <Link
                        href={`/product/${item.slug}`}
                        className="flex items-center"
                      >
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={50}
                          height={50}
                        />
                        <span className="px-2">{item.name}</span>
                      </Link>
                    </td>
                    <td>
                      <AddToBasket item={item} />
                    </td>
                    <td>£{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div>
            <div className="card bg-base-300 mt-4 md:mt-0">
              <div className="card-body">
                <ul>
                  <li>
                    <div className="pb-3 text-xl flex">
                      <p>
                        Subtotal: ({items.reduce((a, c) => a + c.quantity, 0)})
                      </p>
                      £{itemsPrice}
                    </div>
                  </li>
                  <li>
                    <button
                      onClick={() => {}}
                      className="btn btn-primary w-full"
                    >
                      Proceed to Checkout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
