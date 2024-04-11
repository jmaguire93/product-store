'use client'

import useBasketStore from '@/lib/hooks/useBasketStore'
import React from 'react'

export default function CheckoutDetails() {
  const { items, itemsPrice } = useBasketStore()

  return (
    <div className="card bg-base-300 mt-4 md:mt-0 shadow">
      <div className="card-body py-6">
        <ul>
          <li>
            <div className="pb-3 text-lg flex">
              <p>Subtotal: ({items.reduce((a, c) => a + c.quantity, 0)})</p>£
              {itemsPrice}
            </div>
          </li>
          <li>
            <button onClick={() => {}} className="btn btn-primary w-full">
              Proceed to Checkout
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}
