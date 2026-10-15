'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [showBanner, setShowBanner] = useState(true)

  return (
    <>
      {showBanner && (
        <div className="bg-black text-white text-sm py-2 px-4 relative">
          <p className="text-center">
            Sign up and get 20% off to your first order.{' '}
            <Link href="/signup" className="underline font-medium">
              Sign Up Now
            </Link>
          </p>
          <button
            onClick={() => setShowBanner(false)}
            className="absolute right-4 top-1/2 -translate-y-1/2"
          >
            ✕
          </button>
        </div>
      )}

      
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        
          <Link href="/" className="text-3xl font-bold">
            SHOP.COM
          </Link>

         
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/shop" className="flex items-center gap-1">
              Shop
            </Link>
            <Link href="/sale">On Sale</Link>
            <Link href="/new">New Arrivals</Link>
            <Link href="/brands">Brands</Link>
          </nav>

         
          <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 w-80">
            <Image
              src="/images/Frame.png"
              alt="Search"
              width={24}
              height={24}
              className="mr-2"
            />
            <input
              type="text"
              placeholder="Search for products..."
              className="bg-transparent outline-none w-full text-sm"
            />
          </div>

         
          <div className="flex items-center gap-4">
            <button aria-label="Cart">
              <Image
                src="/images/Vector.png"
                alt="Cart"
                width={24}
                height={24}
                className="mr-2"
              />
            </button>
            <button aria-label="User">
              <Image
                src="/images/Vector (1).png"
                alt="User"
                width={24}
                height={24}
                className="mr-2"
              />
            </button>
          </div>
        </div>
      </header>
    </>
  )
}