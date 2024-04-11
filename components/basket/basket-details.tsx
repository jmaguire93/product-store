'use client'

import React from 'react'
import AddToBasket from '../products/add-to-basket'
import useBasketStore from '@/lib/hooks/useBasketStore'
import Image from 'next/image'
import Link from 'next/link'
import CheckoutDetails from './checkout-details'
import BasketView from './basket-view'

export default function BasketDetails() {
  const { items } = useBasketStore()

  return (
    <>
      <BasketView
        component={
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
              <CheckoutDetails />
            </div>
          </div>
        }
      />
    </>
  )
}
