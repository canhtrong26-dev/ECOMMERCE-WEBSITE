'use client'

import Image from 'next/image'
import { useState } from 'react'

const images = [
  '/images/769b9d60ff941dde9bc0e54431b8d8fe3182f5e9.png',
  '/images/345742c27cc557f42cf1d489f7cc811856b90e9f.png',
  '/images/bbf411c25fc84f87eeac1062fbe47f49c192d4f2.png',
]

export default function ProductGallery() {
  const [selectedImage, setSelectedImage] = useState(images[0])

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4">

      <div className="flex md:flex-col gap-4">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(img)}
            className={`bg-gray-100 rounded-2xl overflow-hidden w-24 h-24 md:w-32 md:h-32 ${
              selectedImage === img ? 'border-2 border-black' : ''
            }`}
          >
            <Image
              src={img}
              alt={`Thumbnail ${index + 1}`}
              width={128}
              height={128}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      <div className="bg-gray-100 rounded-2xl overflow-hidden flex-1 h-96 md:h-[500px]">
        <Image
          src={selectedImage}
          alt="Product"
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  )
}