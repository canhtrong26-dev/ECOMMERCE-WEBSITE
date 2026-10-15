import Image from 'next/image'

const products = [
  {
    id: 1,
    name: 'T-shirt with Tape Details',
    image: '/images/769b9d60ff941dde9bc0e54431b8d8fe3182f5e9.png',
    price: 120,
    rating: 4.5,
  },
  {
    id: 2,
    name: 'Skinny Fit Jeans',
    image: '/images/345742c27cc557f42cf1d489f7cc811856b90e9f.png',
    price: 240,
    oldPrice: 260,
    rating: 3.5,
  },
  {
    id: 3,
    name: 'Checkered Shirt',
    image: '/images/bbf411c25fc84f87eeac1062fbe47f49c192d4f2.png',
    price: 180,
    rating: 4.5,
  },
  {
    id: 4,
    name: 'Sleeve Striped T-shirt',
    image: '/images/d40da9a3a7234235e66d6695d9d7098fc3289872.png',
    price: 130,
    oldPrice: 160,
    rating: 4.5,
  },
]

export default function NewArrivals() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10">
          NEW ARRIVALS
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col">
              <div className="bg-gray-100 rounded-2xl overflow-hidden mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full h-80 object-cover"
                />
              </div>

              <h3 className="font-bold text-lg mb-2">{product.name}</h3>

              <div className="flex items-center gap-2 mb-2">
                <span className="text-yellow-400">
                  {'★'.repeat(Math.floor(product.rating))}
                  {'☆'.repeat(5 - Math.floor(product.rating))}
                </span>
                <span className="text-sm text-gray-600">
                  {product.rating}/5
                </span>
              </div>

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

        <div className="text-center mt-10">
          <button className="border border-gray-300 rounded-full px-12 py-3 font-medium hover:bg-gray-100">
            View All
          </button>
        </div>
      </div>
    </section>
  )
}