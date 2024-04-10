import ProductItem from '@/components/products/product-item'
import data from '@/lib/data'
import React from 'react'

export const metadata = {
  title: 'Shopping Cart'
}

export default function CartPage() {
  return (
    <div className="grid grid-col-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {data.products.map((product) => (
        <ProductItem key={product.name} product={product} />
      ))}
    </div>
  )
}
