import Link from 'next/link'

const footerLinks = [
  {
    title: 'COMPANY',
    links: ['About', 'Features', 'Works', 'Career'],
  },
  {
    title: 'HELP',
    links: ['Customer Support', 'Delivery Details', 'Terms & Conditions', 'Privacy Policy'],
  },
  {
    title: 'FAQ',
    links: ['Account', 'Manage Deliveries', 'Orders', 'Payments'],
  },
  {
    title: 'RESOURCES',
    links: ['Free eBooks', 'Development Tutorial', 'How to - Blog', 'Youtube Playlist'],
  },
]

export default function Footer() {
  return (
    <footer>
     
      <section className="bg-black py-10 relative -mb-20 mx-4 rounded-3xl">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            STAY UPTO DATE ABOUT <br />
            OUR LATEST OFFERS
          </h2>

          <form className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Enter your email address"
              className="bg-white rounded-full px-6 py-3 outline-none"
            />
            <button
              type="submit"
              className="bg-white text-black rounded-full px-6 py-3 font-medium"
            >
              Subscribe to Newsletter
            </button>
          </form>
        </div>
      </section>

     
      <div className="bg-[#F0F0F0] pt-32 pb-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-10">
          
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-3xl font-bold mb-4">SHOP.CO</h3>
              <p className="text-gray-600 text-sm mb-6">
                We have clothes that suits your style and which you&apos;re proud to wear. From women to men.
              </p>
             
              <div className="flex gap-3">
                <Link href="#" aria-label="Twitter" className="w-8 h-8 border rounded-full flex items-center justify-center">𝕏</Link>
                <Link href="#" aria-label="Facebook" className="w-8 h-8 border rounded-full flex items-center justify-center">f</Link>
                <Link href="#" aria-label="Instagram" className="w-8 h-8 border rounded-full flex items-center justify-center">📷</Link>
                <Link href="#" aria-label="Github" className="w-8 h-8 border rounded-full flex items-center justify-center">▶</Link>
              </div>
            </div>

           
            {footerLinks.map((column) => (
              <div key={column.title}>
                <h4 className="font-bold tracking-widest mb-4">{column.title}</h4>
                <ul className="flex flex-col gap-3">
                  {column.links.map((link) => (
                    <li key={link}>
                      <Link href="#" className="text-gray-600 hover:text-black">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

       
          <hr className="border-gray-300 mb-6" />

         
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              Shop.co © 2000-2023, All Rights Reserved
            </p>
            <div className="flex gap-2">
              <span className="bg-white px-3 py-1 rounded text-sm font-bold">VISA</span>
              <span className="bg-white px-3 py-1 rounded text-sm font-bold">MC</span>
              <span className="bg-white px-3 py-1 rounded text-sm font-bold">PayPal</span>
              <span className="bg-white px-3 py-1 rounded text-sm font-bold">Pay</span>
              <span className="bg-white px-3 py-1 rounded text-sm font-bold">GPay</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}