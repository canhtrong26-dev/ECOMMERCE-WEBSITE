import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Breadcrumb from '@/components/product/Breadcrumb'
import ProductGallery from '@/components/product/ProductGallery'
import ProductInfo from '@/components/product/ProductInfo'
import ProductTabs from '@/components/product/ProductTabs'
import YouMightLike from '@/components/product/YouMightLike'

export default function ProductDetail() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Shop', href: '/shop' },
    { label: 'Men', href: '/shop/men' },
    { label: 'T-shirts' },
  ]

  return (
    <>
      <Header />
      <main>
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumb items={breadcrumbItems} />

          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <ProductGallery />
            <ProductInfo />
          </div>

       
          <div className="mb-10">
            <ProductTabs />
          </div>

          
          <YouMightLike />
        </div>
      </main>
      <Footer />
    </>
  )
}