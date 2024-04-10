import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { OrderItem } from '../models/order'
import roundToTwoDecimals from '../utils'

type Basket = {
  items: OrderItem[]
  itemsPrice: number
  taxPrice: number
  shippingPrice: number
  totalPrice: number
}

const initialState: Basket = {
  items: [],
  itemsPrice: 0,
  taxPrice: 0,
  shippingPrice: 0,
  totalPrice: 0
}

export const basketStore = create<Basket>()(
  persist(() => initialState, {
    name: 'BasketStore'
  })
)

export default function useBasketStore() {
  const { items, itemsPrice, taxPrice, shippingPrice, totalPrice } =
    basketStore()

  const addItemToBasket = (item: OrderItem) => {
    // check if items already exists, if it does, update existing basket item quantity, else add new item.
    const exists = items.find((current) => current.slug === item.slug)

    const updatedBasketItems = (
      exists
        ? items.map((current) =>
            current.slug === item.slug
              ? { ...exists, quantity: exists.quantity + 1 }
              : current
          )
        : [...items, { ...item, quantity: 1 }]
    ) as OrderItem[]

    const { itemsPrice, shippingPrice, taxPrice, totalPrice } =
      calculatePrice(updatedBasketItems)

    basketStore.setState({
      items: updatedBasketItems,
      itemsPrice,
      shippingPrice,
      taxPrice,
      totalPrice
    })
  }
  return {
    items,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    addItemToBasket
  }
}

const calculatePrice = (items: OrderItem[]) => {
  const itemsPrice = roundToTwoDecimals(
      items.reduce((acc, item) => acc + item.price * item.quantity, 0)
    ),
    shippingPrice = roundToTwoDecimals(itemsPrice > 100 ? 0 : 100),
    taxPrice = roundToTwoDecimals(Number(0.15 * itemsPrice)),
    totalPrice = roundToTwoDecimals(itemsPrice + shippingPrice + taxPrice)
  return { itemsPrice, shippingPrice, taxPrice, totalPrice }
}
