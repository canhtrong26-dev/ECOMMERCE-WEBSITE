'use client'

import { useState } from 'react'

const tabs = ['Product Details', 'Rating & Reviews', 'FAQs']

const reviews = [
  {
    id: 1,
    name: 'Samantha D.',
    rating: 5,
    content: `"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."`,
    date: 'August 14, 2023',
  },
  {
    id: 2,
    name: 'Alex M.',
    rating: 4,
    content: `"The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a graphic designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me."`,
    date: 'August 15, 2023',
  },
  {
    id: 3,
    name: 'Ethan R.',
    rating: 5,
    content: `"This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt."`,
    date: 'August 16, 2023',
  },
  {
    id: 4,
    name: 'Olivia P.',
    rating: 5,
    content: `"As a UI/UX designer, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out."`,
    date: 'August 17, 2023',
  },
  {
    id: 5,
    name: 'Liam K.',
    rating: 4,
    content: `"This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion."`,
    date: 'August 18, 2023',
  },
  {
    id: 6,
    name: 'Ava H.',
    rating: 5,
    content: `"I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter."`,
    date: 'August 19, 2023',
  },
]

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState('Rating & Reviews')

  return (
    <div>
      {/* Tab headers */}
      <div className="flex border-b border-gray-200 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-4 text-center text-lg ${
              activeTab === tab
                ? 'border-b-2 border-black font-medium'
                : 'text-gray-500'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Nội dung tab */}
      {activeTab === 'Product Details' && (
        <div className="py-6">
          <p className="text-gray-600">
            Nội dung Product Details sẽ hiển thị ở đây.
          </p>
        </div>
      )}

      {activeTab === 'Rating & Reviews' && (
        <div>
          {/* Header: Tổng reviews + nút filter + Write review */}
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold">
              All Reviews{' '}
              <span className="text-gray-500 text-base font-normal">(451)</span>
            </h3>
            <div className="flex gap-3">
              <button className="bg-gray-100 rounded-full px-4 py-2 text-sm">
                Latest ▼
              </button>
              <button className="bg-black text-white rounded-full px-6 py-2 text-sm">
                Write a Review
              </button>
            </div>
          </div>

          {/* Grid 2 cột card review */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="border border-gray-200 rounded-2xl p-6"
              >
                {/* Sao */}
                <div className="text-yellow-400 mb-3">
                  {'★'.repeat(review.rating)}
                </div>

                {/* Tên + tick */}
                <h4 className="font-bold mb-2 flex items-center gap-1">
                  {review.name}
                  <span className="text-green-500">✓</span>
                </h4>

                {/* Nội dung */}
                <p className="text-gray-600 mb-4">{review.content}</p>

                {/* Ngày đăng */}
                <p className="text-gray-500 text-sm">Posted on {review.date}</p>
              </div>
            ))}
          </div>

          {/* Nút Load More */}
          <div className="text-center mt-8">
            <button className="border border-gray-300 rounded-full px-12 py-3 font-medium hover:bg-gray-100">
              Load More Reviews
            </button>
          </div>
        </div>
      )}

      {activeTab === 'FAQs' && (
        <div className="py-6">
          <p className="text-gray-600">
            Câu hỏi thường gặp sẽ hiển thị ở đây.
          </p>
        </div>
      )}
    </div>
  )
}