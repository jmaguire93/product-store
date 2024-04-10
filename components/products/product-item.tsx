import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { Product } from '@/lib/models/product'
import AddToBasket from './add-to-basket'

type ProductItemProps = {
  product: Product
}

export default function ProductItem({ product }: ProductItemProps) {
  return (
    <div className="card bg-primary-300 shadow-xl mb-4">
      <figure className="mt-4">
        <Link href={`/product/${product.slug}`}>
          <Image
            src={product.image}
            alt={product.name}
            width={300}
            height={300}
            className="object-cover h-64 w-full rounded"
          />
        </Link>
      </figure>
      <div className="card-body">
        <Link href={`$/product/${product.slug}`}>
          <h2 className="card-title font-normal">{product.name}</h2>
        </Link>
        <p className="mb-2">{product.description}</p>
        <div className="card-actions flex items-center justify-between">
          <span className="text-2xl">£{product.price}</span>
          <AddToBasket item={{ ...product, quantity: 0 }} />
        </div>
      </div>
    </div>
  )
}
