import { Product } from '../models/product'

export function roundToTwoDecimals(num: number) {
  return Math.round((num + Number.EPSILON) * 100) / 100
}

export function convertDocToObject(doc: Product) {
  doc._id = doc._id?.toString()

  return doc
}

export function convertDocsToObjects(docs: Product[]) {
  return docs.map((doc) => convertDocToObject(doc))
}

export function getErrorMessage(error: unknown) {
  let message: string
  if (error instanceof Error) {
    message = error.message
  } else if (error && typeof error === 'object' && 'message' in error) {
    message = String(error.message)
  } else if (typeof error === 'string') {
    message = error
  } else {
    message = 'Unknown error'
  }

  return message
}
