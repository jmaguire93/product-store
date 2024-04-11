import { Product } from '@/lib/models/product'
import Image from 'next/image'
import React from 'react'
import AddToBasket from './add-to-basket'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'
import BasketDrawer from '../basket/basket-drawer'

type ProductDetailsProps = {
  product: Product
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  return (
    <div className="my-2">
      <Link href="/" className="flex my-2">
        <ChevronLeft /> Back
      </Link>
      <div className="absolute top-6 right-2">
        <BasketDrawer />
      </div>
      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2">
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            className="rounded-lg"
            style={{
              width: '100%',
              height: 'auto'
            }}
          />
        </div>
        <div className="mt-4 md:mt-0">
          <ul className="space-y-4">
            <li>
              <h1 className="text-xl">{product.name}</h1>
            </li>
            <li>
              <div className="flex items-center">
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-10"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
                <p className="ms-2 text-sm font-bold ">4.5</p>
                <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full "></span>
                <a
                  href="#"
                  className="text-sm font-medium  underline hover:no-underline"
                >
                  8 reviews
                </a>
              </div>
            </li>
            <li>
              <div className="divider"></div>
            </li>
            <li>
              Description: <p>{product.description}</p>
            </li>
          </ul>
        </div>
        <div>
          <div className="card bg-base-300 shadow mt-3 md:mt-0">
            <div className="card-body">
              <div className="mb-2 flex justify-between">
                <div>Price</div>
                <div>£{product.price}</div>
              </div>
              <div className="mb-2 flex justify-between">
                <div>Status</div>
                <div>
                  {product.countInStock > 0 ? 'In stock' : 'Unavailable'}
                </div>
              </div>
              {product.countInStock > 0 ? (
                <div className="card-actions justify-center">
                  <AddToBasket item={{ ...product, quantity: 0 }} />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
