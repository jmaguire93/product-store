import { cache } from 'react'
import ProductModel, { Product } from '../models/product'
import dbConnect from '../mongodb/dbConnect'

const getProducts = cache(async () => {
  await dbConnect()
  const products = await ProductModel.find({}).sort({ _id: -1 }).lean()

  return products as Product[]
})

const getProductBySlug = cache(async (slug: string) => {
  await dbConnect()
  const product = await ProductModel.findOne({ slug }).lean()

  return product as Product
})

const ProductService = {
  getProducts,
  getProductBySlug
}

export default ProductService
