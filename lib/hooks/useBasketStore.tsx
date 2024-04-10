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

  const getExistingItem = (item: OrderItem) => {
    return items.find((current) => current.slug === item.slug)
  }

  const addToBasket = (item: OrderItem) => {
    // check if items already exists, if it does, update existing basket item quantity, else add new item.
    const exists = getExistingItem(item)
    const updatedItems = exists
      ? items.map((current) =>
          current.slug === item.slug
            ? { ...exists, quantity: exists.quantity + 1 }
            : current
        )
      : [...items, { ...item, quantity: 1 }]

    updateBasket(updatedItems)
  }

  const removeFromBasket = (item: OrderItem) => {
    const exists = getExistingItem(item)

    if (!exists) return

    const updatedItems =
      exists.quantity > 1
        ? items.map((current) =>
            current.slug === item.slug
              ? { ...exists, quantity: exists.quantity - 1 }
              : current
          )
        : items.filter((current) => current.slug !== item.slug)

    updateBasket(updatedItems)
  }

  return {
    items,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    addToBasket,
    removeFromBasket
  }
}

const updateBasket = (items: OrderItem[]) => {
  const { itemsPrice, shippingPrice, taxPrice, totalPrice } =
    calculatePrice(items)

  basketStore.setState({
    items: items,
    itemsPrice,
    shippingPrice,
    taxPrice,
    totalPrice
  })
}

const calculatePrice = (items: OrderItem[]) => {
  const itemsPrice = roundToTwoDecimals(
      items.reduce((acc, item) => acc + item.price * item.quantity, 0)
    ),
    shippingPrice = roundToTwoDecimals(itemsPrice > 100 ? 0 : 10),
    taxPrice = roundToTwoDecimals(Number(0.15 * itemsPrice)),
    totalPrice = roundToTwoDecimals(itemsPrice + shippingPrice + taxPrice)
  return { itemsPrice, shippingPrice, taxPrice, totalPrice }
}
