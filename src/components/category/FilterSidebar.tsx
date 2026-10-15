'use client'

import { useState } from 'react'

const categories = ['T-shirts', 'Shorts', 'Shirts', 'Hoodie', 'Jeans']
const colors = [
  { name: 'green', value: '#00C12B' },
  { name: 'red', value: '#F50606' },
  { name: 'yellow', value: '#F5DD06' },
  { name: 'orange', value: '#F57906' },
  { name: 'blue', value: '#06CAF5' },
  { name: 'blue-dark', value: '#063AF5' },
  { name: 'purple', value: '#7D06F5' },
  { name: 'pink', value: '#F506A4' },
  { name: 'white', value: '#FFFFFF' },
  { name: 'black', value: '#000000' },
]
const sizes = [
  'XX-Small', 'X-Small', 'Small', 'Medium', 'Large',
  'X-Large', 'XX-Large', '3X-Large', '4X-Large',
]
const dressStyles = ['Casual', 'Formal', 'Party', 'Gym']

export default function FilterSidebar() {
  const [selectedColor, setSelectedColor] = useState('#00C12B')
  const [selectedSize, setSelectedSize] = useState('Large')

  return (
    <div className="border border-gray-200 rounded-2xl p-5">
      
      <div className="flex justify-between items-center pb-5 border-b border-gray-200 mb-5">
        <h3 className="text-xl font-bold">Filters</h3>
        <span>⚙</span>
      </div>

      
      <div className="pb-5 border-b border-gray-200 mb-5">
        <ul className="flex flex-col gap-4">
          {categories.map((cat) => (
            <li
              key={cat}
              className="flex justify-between items-center text-gray-600 cursor-pointer hover:text-black"
            >
              {cat}
              <span>›</span>
            </li>
          ))}
        </ul>
      </div>

    
      <div className="pb-5 border-b border-gray-200 mb-5">
        <h4 className="font-bold mb-4 flex justify-between items-center">
          Price <span>▼</span>
        </h4>
        <input
          type="range"
          min="50"
          max="200"
          className="w-full"
        />
        <div className="flex justify-between text-sm text-gray-600 mt-2">
          <span>$50</span>
          <span>$200</span>
        </div>
      </div>

     
      <div className="pb-5 border-b border-gray-200 mb-5">
        <h4 className="font-bold mb-4 flex justify-between items-center">
          Colors <span>▼</span>
        </h4>
        <div className="grid grid-cols-5 gap-3">
          {colors.map((color) => (
            <button
              key={color.name}
              onClick={() => setSelectedColor(color.value)}
              className="w-8 h-8 rounded-full flex items-center justify-center border"
              style={{ backgroundColor: color.value }}
            >
              {selectedColor === color.value && (
                <span className="text-white text-sm">✓</span>
              )}
            </button>
          ))}
        </div>
      </div>

     
      <div className="pb-5 border-b border-gray-200 mb-5">
        <h4 className="font-bold mb-4 flex justify-between items-center">
          Size <span>▼</span>
        </h4>
        <div className="flex flex-wrap gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`px-4 py-2 rounded-full text-sm ${
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

     
      <div className="pb-5 border-b border-gray-200 mb-5">
        <h4 className="font-bold mb-4 flex justify-between items-center">
          Dress Style <span>▼</span>
        </h4>
        <ul className="flex flex-col gap-4">
          {dressStyles.map((style) => (
            <li
              key={style}
              className="flex justify-between items-center text-gray-600 cursor-pointer hover:text-black"
            >
              {style}
              <span>›</span>
            </li>
          ))}
        </ul>
      </div>

    
      <button className="w-full bg-black text-white rounded-full py-3 font-medium hover:bg-gray-800">
        Apply Filter
      </button>
    </div>
  )
}