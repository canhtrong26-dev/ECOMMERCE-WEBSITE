import Link from 'next/link'

export default function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20">
    
      <div className="text-8xl mb-6">🛒</div>

    
      <h2 className="text-3xl font-bold mb-3">Your cart is empty</h2>

     
      <p className="text-gray-600 mb-8 max-w-md">
        Looks like you haven&apos;t added anything to your cart yet.
        Start shopping to find something you love!
      </p>

      
      <Link
        href="/"
        className="bg-black text-white rounded-full px-10 py-4 font-medium hover:bg-gray-800"
      >
        Shop Now
      </Link>
    </div>
  )
}