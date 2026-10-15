'use client'

import { useState } from 'react'

export default function Pagination() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 10

  // Tạo mảng số trang [1, 2, 3, ..., 10]
  const pages = []
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i)
  }

  return (
    <div className="flex justify-between items-center border-t border-gray-200 pt-6 mt-8">
    
      <button
        onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
        className="border border-gray-200 rounded-lg px-4 py-2 flex items-center gap-2 hover:bg-gray-100"
      >
        ← Previous
      </button>


      <div className="flex gap-2">
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`w-10 h-10 rounded-lg ${
              currentPage === page
                ? 'bg-gray-200 font-medium'
                : 'text-gray-500 hover:bg-gray-100'
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      
      <button
        onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
        className="border border-gray-200 rounded-lg px-4 py-2 flex items-center gap-2 hover:bg-gray-100"
      >
        Next →
      </button>
    </div>
  )
}