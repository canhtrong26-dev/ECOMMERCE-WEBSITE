export default function OrderSummary() {
  const subtotal = 565
  const discount = 113
  const deliveryFee = 15
  const total = subtotal - discount + deliveryFee

  return (
    <div className="border border-gray-200 rounded-2xl p-5">
    
      <h2 className="text-xl font-bold mb-5">Order Summary</h2>

    
      <div className="flex flex-col gap-5 mb-5">
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-bold text-lg">${subtotal}</span>
        </div>

     
        <div className="flex justify-between">
          <span className="text-gray-600">Discount (-20%)</span>
          <span className="font-bold text-lg text-red-500">-${discount}</span>
        </div>

      
        <div className="flex justify-between">
          <span className="text-gray-600">Delivery Fee</span>
          <span className="font-bold text-lg">${deliveryFee}</span>
        </div>
      </div>

    
      <div className="border-t border-gray-200 mb-5"></div>

      
      <div className="flex justify-between items-center mb-6">
        <span className="text-lg">Total</span>
        <span className="font-bold text-2xl">${total}</span>
      </div>

    
      <div className="flex gap-3 mb-5">
        <input
          type="text"
          placeholder="🎟  Add promo code"
          className="flex-1 bg-gray-100 rounded-full px-4 py-3 text-sm outline-none"
        />
        <button className="bg-black text-white rounded-full px-6 py-3 font-medium hover:bg-gray-800">
          Apply
        </button>
      </div>

      
      <button className="w-full bg-black text-white rounded-full py-4 font-medium flex items-center justify-center gap-2 hover:bg-gray-800">
        Go to Checkout
        <span>→</span>
      </button>
    </div>
  )
}