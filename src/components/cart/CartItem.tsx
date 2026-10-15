'use client'

import Image from 'next/image'
import { useState } from 'react'

const cartItems = [
  {
    id: 1,
    name: 'Gradient Graphic T-shirt',
    image: '/images/769b9d60ff941dde9bc0e54431b8d8fe3182f5e9.png',
    size: 'Large',
    color: 'White',
    price: 145,
  },
  {
    id: 2,
    name: 'Checkered Shirt',
    image: '/images/345742c27cc557f42cf1d489f7cc811856b90e9f.png',
    size: 'Medium',
    color: 'Red',
    price: 180,
  },
  {
    id: 3,
    name: 'Skinny Fit Jeans',
    image: '/images/bbf411c25fc84f87eeac1062fbe47f49c192d4f2.png',
    size: 'Large',
    color: 'Blue',
    price: 240,
  },
]

export default function CartItem() {
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({
    1: 1,
    2: 1,
    3: 1,
  })

  const increase = (id: number) => {
    setQuantities({ ...quantities, [id]: quantities[id] + 1 })
  }

  const decrease = (id: number) => {
    setQuantities({ ...quantities, [id]: Math.max(1, quantities[id] - 1) })
  }

  return (
    <div className="border border-gray-200 rounded-2xl p-5">
      {cartItems.map((item, index) => (
        <div
          key={item.id}
          className={`flex gap-4 ${
            index !== cartItems.length - 1
              ? 'border-b border-gray-200 pb-5 mb-5'
              : ''
          }`}
        >
         
          <div className="bg-gray-100 rounded-xl overflow-hidden w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
            <Image
              src={item.image}
              alt={item.name}
              width={128}
              height={128}
              className="w-full h-full object-cover"
            />
          </div>

       
          <div className="flex-1 flex flex-col justify-between">
            
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-base md:text-lg">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-600">
                  Size: <span className="text-black">{item.size}</span>
                </p>
                <p className="text-sm text-gray-600">
                  Color: <span className="text-black">{item.color}</span>
                </p>
              </div>
              <button className="text-red-500 text-xl" aria-label="Delete">
                🗑
              </button>
            </div>

      
            <div className="flex justify-between items-center mt-4">
              <span className="text-xl md:text-2xl font-bold">
                ${item.price}
              </span>

             
              <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 gap-4">
                <button onClick={() => decrease(item.id)} className="text-lg">
                  −
                </button>
                <span className="font-medium">{quantities[item.id]}</span>
                <button onClick={() => increase(item.id)} className="text-lg">
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}