import data from '@/lib/data'
import ProductModel from '@/lib/models/product'
import dbConnect from '@/lib/mongodb/dbConnect'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (request: NextRequest) => {
  // Extract the API key from the request headers
  const apiKey = request.headers.get('api-key')

  // Perform API key validation
  if (!apiKey || apiKey !== process.env.API_KEY) {
    return NextResponse.json({ message: 'Not authenticated' }, { status: 401 })
  }

  const { products } = data

  await dbConnect()
  await ProductModel.deleteMany()
  await ProductModel.insertMany(products)

  return NextResponse.json({
    message: 'Seeded successfully',
    products
  })
}
