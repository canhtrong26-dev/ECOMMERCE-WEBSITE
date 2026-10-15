import Image from 'next/image'

const brands = [
  { name: 'Versace', logo: '/images/Vector (3).png' },
  { name: 'Zara', logo: '/images/Vector (4).png' },
  { name: 'Gucci', logo: '/images/Vector (5).png' },
  { name: 'Prada', logo: '/images/Vector (6).png' },
  { name: 'Calvin Klein', logo: '/images/Vector (7).png' },
]

export default function BrandLogos() {
  return (
    <section className="bg-black py-7">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center gap-8">
          {brands.map((brand) => (
            <Image
              key={brand.name}
              src={brand.logo}
              alt={brand.name}
              width={150}
              height={40}
              className="object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  )
}