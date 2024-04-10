import ProductItem from '@/components/products/product-item'
import data from '@/lib/data'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Product Store',
  description: 'A sample product store'
}

export default function Home() {
  return (
    <>
      <div className="grid grid-col-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.products.map((product) => (
          <ProductItem key={product.name} product={product} />
        ))}
      </div>
    </>
  )
}
