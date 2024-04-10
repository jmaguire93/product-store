import ProductItem from '@/components/products/product-item'
import ProductService from '@/lib/services/product-service'
import { convertDocToObject } from '@/lib/utils'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Product Store',
  description: 'A sample product store'
}

export default async function Home() {
  const products = await ProductService.getProducts()

  return (
    <>
      <div className="grid grid-col-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductItem
            key={product.name}
            product={convertDocToObject(product)}
          />
        ))}
      </div>
    </>
  )
}
