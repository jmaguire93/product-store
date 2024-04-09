import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Product Store',
  description: 'A sample product store'
}

export default function Home() {
  return (
    <>
      <div>Welcome to product store</div>
    </>
  )
}
