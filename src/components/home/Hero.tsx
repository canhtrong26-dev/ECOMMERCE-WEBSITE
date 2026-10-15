import Image from 'next/image'

export default function Hero() {
  return (
    <section className="bg-[#F2F0F1]">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        <div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            FIND CLOTHES <br />
            THAT MATCHES <br />
            YOUR STYLE
          </h1>

          <p className="text-gray-600 mb-8 max-w-md">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of style.
          </p>

          <button className="bg-black text-white px-12 py-3 rounded-full font-medium hover:bg-gray-800">
            Shop Now
          </button>

       
          <div className="flex gap-8 mt-10">
            <div>
              <h3 className="text-3xl font-bold">200+</h3>
              <p className="text-sm text-gray-600">International Brands</p>
            </div>
            <div className="border-l pl-8">
              <h3 className="text-3xl font-bold">2,000+</h3>
              <p className="text-sm text-gray-600">High-Quality Products</p>
            </div>
            <div className="border-l pl-8">
              <h3 className="text-3xl font-bold">30,000+</h3>
              <p className="text-sm text-gray-600">Happy Customers</p>
            </div>
          </div>
        </div>

        
              
        <div className="relative ">
        <Image
            src="/images/b26fea69ccfd8aa5825862cdb9604a4fb4930464.jpg"
            alt="Fashion models"
            width={600}
            height={400}
            className="w-full h-auto"
        />

       
        <Image
            src="/images/Vector (2).png"
            alt=""
            width={104}
            height={104}
            className="absolute top-8 right-0"
        />

       
        <Image
            src="/images/33.png"
            alt=""
            width={56}
            height={56}
            className="absolute top-1/3 left-0"
        />
        </div>
      </div>
    </section>
  )
}