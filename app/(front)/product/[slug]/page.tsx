import ProductDetails from '@/components/products/product-details'
import data from '@/lib/data'
import { Product } from '@/lib/models/product'
import React from 'react'

export async function generateMetadata({
  params
}: {
  params: { slug: string }
}) {
  const product = data.products.find((item) => item.slug === params.slug)
  if (!product) {
    return { title: 'Product not found' }
  }
  return {
    title: product.name,
    description: product.description
  }
}

type ProductPageProps = {
  params: { slug: string }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = data.products.find(
    (item) => item.slug === params.slug
  ) as Product

  if (!product) {
    return <div>Product not found</div>
  }

  return <ProductDetails product={product} />
}
