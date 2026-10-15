import Header from '@/components/layout/Header'
import Hero from '@/components/home/Hero'
import BrandLogos from '@/components/home/BrandLogos'
import NewArrivals from '@/components/home/NewArrivals'
import TopSelling from '@/components/home/TopSelling'
import DressStyle from '@/components/home/DressStyle'
import Customers from '@/components/home/Customers'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BrandLogos />
        <NewArrivals />
        <TopSelling />
        <DressStyle />
        <Customers />
      </main>
      <Footer />
    </>
  )
}