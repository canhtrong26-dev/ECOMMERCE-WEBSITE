'use client'

import { useState } from 'react'

const colors = ['#4F4631', '#314F4A', '#31344F']
const sizes = ['Small', 'Medium', 'Large', 'X-Large']

export default function ProductInfo() {
  const [selectedColor, setSelectedColor] = useState(colors[2])
  const [selectedSize, setSelectedSize] = useState(sizes[2])
  const [quantity, setQuantity] = useState(1)

  return (
    <div>
      {/* Tên sản phẩm */}
      <h1 className="text-3xl md:text-4xl font-bold mb-3">
        ONE LIFE GRAPHIC T-SHIRT
      </h1>

      {/* Rating */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-yellow-400 text-xl">
          {'★'.repeat(4)}{'☆'.repeat(1)}
        </span>
        <span className="text-sm text-gray-600">4.5/5</span>
      </div>

      {/* Giá */}
      <div className="flex items-center gap-3 mb-5">
        <span className="text-3xl font-bold">$260</span>
        <span className="text-3xl text-gray-400 line-through">$300</span>
        <span className="bg-red-100 text-red-500 px-3 py-1 rounded-full text-sm">
          -40%
        </span>
      </div>

      {/* Mô tả */}
      <p className="text-gray-600 mb-6 pb-6 border-b">
        This graphic t-shirt which is perfect for any occasion. Crafted from a soft and
        breathable fabric, it offers superior comfort and style.
      </p>

      {/* Chọn màu */}
      <div className="pb-6 border-b mb-6">
        <p className="text-gray-600 mb-4">Select Colors</p>
        <div className="flex gap-3">
          {colors.map((color) => (
            <button
              key={color}
              onClick={() => setSelectedColor(color)}
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ backgroundColor: color }}
            >
              {selectedColor === color && (
                <span className="text-white text-lg">✓</span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Chọn size */}
      <div className="pb-6 border-b mb-6">
        <p className="text-gray-600 mb-4">Choose Size</p>
        <div className="flex flex-wrap gap-3">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`px-6 py-3 rounded-full ${
                selectedSize === size
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-600'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Số lượng + Add to Cart */}
      <div className="flex gap-4">
        {/* Nút tăng/giảm số lượng */}
        <div className="flex items-center bg-gray-100 rounded-full px-4 py-3 gap-4">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="text-xl"
          >
            −
          </button>
          <span className="font-medium">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="text-xl"
          >
            +
          </button>
        </div>

        {/* Nút Add to Cart */}
        <button className="flex-1 bg-black text-white rounded-full py-3 font-medium hover:bg-gray-800">
          Add to Cart
        </button>
      </div>
    </div>
  )
}