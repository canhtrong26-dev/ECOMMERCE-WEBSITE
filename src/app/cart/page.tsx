'use client'

import { useState } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Breadcrumb from '@/components/product/Breadcrumb'
import CartItem from '@/components/cart/CartItem'
import OrderSummary from '@/components/cart/OrderSummary'
import EmptyCart from '@/components/cart/EmptyCart'

export default function CartPage() {
  const [isEmpty, setIsEmpty] = useState(false)

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Cart' },
  ]

  return (
    <>
      <Header />
      <main>
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumb items={breadcrumbItems} />

          <button
            onClick={() => setIsEmpty(!isEmpty)}
            className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
          >
            Toggle: {isEmpty ? 'Hiện giỏ RỖNG' : 'Hiện giỏ CÓ HÀNG'}
          </button>

          <h1 className="text-4xl font-bold mb-6">YOUR CART</h1>

        
          {isEmpty ? (
            <EmptyCart />
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-5 mb-10">
              <CartItem />
              <OrderSummary />
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}