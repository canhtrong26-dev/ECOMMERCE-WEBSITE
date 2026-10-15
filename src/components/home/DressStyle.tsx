import Image from 'next/image'

const styles = [
  { name: 'Casual', image: '/images/a.png', span: 'lg:col-span-2' },
  { name: 'Formal', image: '/images/b.png', span: 'lg:col-span-3' },
  { name: 'Party', image: '/images/c.png', span: 'lg:col-span-3' },
  { name: 'Gym', image: '/images/d.png', span: 'lg:col-span-2' },
]

export default function DressStyle() {
  return (
    <section className="py-16 bg-[#F2F0F1]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-3xl p-10">
          
          <h2 className="text-4xl font-bold text-center mb-10">
            BROWSE BY DRESS STYLE
          </h2>
         
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {styles.map((style) => (
              <div
                key={style.name}
                className={`${style.span} relative  rounded shadow-lg h-80`}
              >
                
                <h3 className="absolute top-6 left-6 text-2xl font-bold z-10">
                  {style.name}
                </h3>

                <Image
                  src={style.image}
                  alt={style.name}
                  fill
                  className="object-cover  object-right"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}