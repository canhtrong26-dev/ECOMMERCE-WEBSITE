const reviews = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    content: `"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."`,
  },
  {
    id: 2,
    name: 'Alex K.',
    rating: 5,
    content: `"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions."`,
  },
  {
    id: 3,
    name: 'James L.',
    rating: 5,
    content: `"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends."`,
  },
]

export default function Customers() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
       
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-4xl font-bold">OUR HAPPY CUSTOMERS</h2>
          <div className="flex gap-4">
            <button aria-label="Previous" className="text-2xl">←</button>
            <button aria-label="Next" className="text-2xl">→</button>
          </div>
        </div>

     
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="border border-gray-200 rounded-2xl p-8"
            >
           
              <div className="text-yellow-400 text-xl mb-4">
                {'★'.repeat(review.rating)}
              </div>

              <h3 className="font-bold mb-3 flex items-center gap-1">
                {review.name}
                <span className="text-green-500">✓</span>
              </h3>

            
              <p className="text-gray-600 leading-relaxed">
                {review.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}