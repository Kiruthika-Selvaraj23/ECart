import Shipping from "../assets/Shipping.png"
import Deals from "../assets/Deals.png"
import SecurePayment from "../assets/Secure.png"

export default function Footer() {
  return (
      <footer>
          <div className='flex justify-around p-5'>
              <div className='flex m-1'>
                  <img className='h-[40px] w-[40px] sm:h-[50px] md:h-[60px] sm:w-[50px] md:w-[60px]' src={Shipping} alt="free shipping" />
                  <div className='ml-1 sm:ml-3'>
                      <h1 className='text-blue-600 font-semibold  text-[15px] sm:text-[17px] md:text-[20px]'>Free Shipping</h1>
                      <p className='text-gray-600 font-semibold text-[10px] sm:text-[13px] md:text-[15px]'>On All Orders</p>
                  </div>
              </div>
              <div className='w-[2px] h-[70px] sm:h-[80px] bg-gray-700'></div>
              <div className='flex m-1'>
                  <img className='h-[40px] w-[40px] sm:h-[50px] md:h-[60px] sm:w-[50px] md:w-[60px]' src={Deals} alt="free shipping" />
                  <div className='ml-1 sm:ml-3'>
                      <h1 className='text-blue-600 font-semibold text-[15px] sm:text-[17px] md:text-[20px]'>Best Deals</h1>
                      <p className='text-gray-600 font-semibold text-[10px] sm:text-[13px] md:text-[15px]'>Save Big Every Day</p>
                  </div>
              </div>
              <div className='w-[2px] h-[70px] sm:h-[80px] bg-gray-700'></div>
              <div className='flex m-1'>
                  <img className='h-[40px] w-[40px] sm:h-[50px] md:h-[60px] sm:w-[50px] md:w-[60px]' src={SecurePayment} alt="free shipping" />
                  <div className='ml-1 sm:ml-3'>
                      <h1 className='text-blue-600 font-semibold text-[15px] sm:text-[17px] md:text-[20px]'>Secure Payments</h1>
                      <p className='text-gray-600 font-semibold text-[10px] sm:text-[13px] md:text-[15px]'>Safe and Reliable</p>
                  </div>
              </div>
              
          </div>
    </footer>
  )
}
