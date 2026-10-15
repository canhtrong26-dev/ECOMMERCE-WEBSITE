import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Breadcrumb from '@/components/product/Breadcrumb'
import ProductGrid from '@/components/category/ProductGrid'
import FilterSidebar from '@/components/category/FilterSidebar'
import Pagination from '@/components/category/Pagination'
export default function CategoryPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Casual' },
  ]

  return (
    <>
      <Header />
      <main>
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumb items={breadcrumbItems} />

          <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8 mb-10">
            {/* Cột trái - Filter */}
            <aside>
              <FilterSidebar />
            </aside>

            {/* Cột phải */}
            <div>
              {/* Header: Tiêu đề + Sort */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
                <h2 className="text-3xl font-bold">Casual</h2>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span>Showing 1-10 of 100 Products</span>
                  <div className="flex items-center gap-2">
                    <span>Sort by:</span>
                    <select className="bg-transparent font-medium text-black outline-none cursor-pointer">
                      <option value="popular">Most Popular</option>
                      <option value="low-high">Price: Low to High</option>
                      <option value="high-low">Price: High to Low</option>
                      <option value="newest">Newest</option>
                    </select>
                  </div>
                </div>
              </div>

              <ProductGrid />

              {/* Pagination placeholder */}
              <div className="bg-green-100 p-4 rounded-2xl mt-8">
                <p className="text-gray-600">
                 <Pagination /> 
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}