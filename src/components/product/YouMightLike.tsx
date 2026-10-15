import Image from 'next/image'

const products = [
  {
    id: 101,
    name: 'Polo with Contrast Trims',
    image: '/images/769b9d60ff941dde9bc0e54431b8d8fe3182f5e9.png',
    price: 212,
    oldPrice: 242,
    rating: 4.0,
  },
  {
    id: 102,
    name: 'Gradient Graphic T-shirt',
    image: '/images/345742c27cc557f42cf1d489f7cc811856b90e9f.png',
    price: 145,
    rating: 3.5,
  },
  {
    id: 103,
    name: 'Polo with Tipping Details',
    image: '/images/bbf411c25fc84f87eeac1062fbe47f49c192d4f2.png',
    price: 180,
    rating: 4.5,
  },
  {
    id: 104,
    name: 'Black Striped T-shirt',
    image: '/images/d40da9a3a7234235e66d6695d9d7098fc3289872.png',
    price: 120,
    oldPrice: 150,
    rating: 5.0,
  },
]

export default function YouMightLike() {
  return (
    <section className="py-16 border-t border-gray-200">
      <h2 className="text-4xl font-bold text-center mb-10">
        YOU MIGHT ALSO LIKE
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col">
            {/* Ảnh */}
            <div className="bg-gray-100 rounded-2xl overflow-hidden mb-4">
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
                className="w-full h-80 object-cover"
              />
            </div>

            {/* Tên */}
            <h3 className="font-bold text-lg mb-2">{product.name}</h3>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-2">
              <span className="text-yellow-400">
                {'★'.repeat(Math.floor(product.rating))}
                {'☆'.repeat(5 - Math.floor(product.rating))}
              </span>
              <span className="text-sm text-gray-600">
                {product.rating}/5
              </span>
            </div>

            {/* Giá */}
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold">${product.price}</span>
              {product.oldPrice && (
                <span className="text-2xl text-gray-400 line-through">
                  ${product.oldPrice}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}