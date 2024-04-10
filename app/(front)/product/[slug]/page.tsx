import ProductDetails from '@/components/products/product-details'
import ProductService from '@/lib/services/product-service'
import React from 'react'
import { convertDocToObject } from '../../../../lib/utils/index'

export async function generateMetadata({
  params
}: {
  params: { slug: string }
}) {
  const product = await getProduct(params.slug)

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

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProduct(params.slug)

  if (!product) {
    return <div>Product not found</div>
  }

  return <ProductDetails product={convertDocToObject(product)} />
}

function getProduct(slug: string) {
  return ProductService.getProductBySlug(slug)
}
