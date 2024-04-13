'use client'

import { PanelRight } from 'lucide-react'
import React from 'react'
import CheckoutDetails from './checkout-details'
import BasketList from './basket-list'
import BasketView from './basket-view'

export default function BasketDrawer() {
  return (
    <div className="drawer drawer-end z-10">
      <input id="basket-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content swap swap-rotate">
        <label className="swap swap-rotate z-10" htmlFor="basket-drawer">
          {/* this hidden checkbox controls the state */}
          <input type="checkbox" />
          <PanelRight />
        </label>
      </div>
      <div
        className="drawer-side mt-16"
        style={{ height: 'calc(100vh - 64px)' }}
      >
        <label
          htmlFor="basket-drawer"
          aria-label="close sidebar"
          className="drawer-overlay drawer-button"
        ></label>
        <div className="menu py-4 px-2 w-full sm:w-80 min-h-full bg-base-200 text-base-content">
          <BasketView
            component={
              <div
                style={{ height: 'calc(100vh - 139px)' }}
                className="flex flex-col"
              >
                <BasketList />
                <div className="flex-1" />
                {/* <div className="mb-12 sm:mb-0"> */}
                <CheckoutDetails />
                {/* </div> */}
              </div>
            }
          />
        </div>
      </div>
    </div>
  )
}
