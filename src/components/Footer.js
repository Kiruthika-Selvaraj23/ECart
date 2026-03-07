import React from 'react'
import Shipping from "../accets/Shipping.png"
import Deals from "../accets/Deals.png"
import SecurePayment from "../accets/Secure.png"

export default function Footer() {
  return (
      <footer>
          <div className='flex justify-around p-5'>
              <div className='flex'>
                  <img className='h-[60px] w-[60px]' src={Shipping} alt="free shipping" />
                  <div className='ml-3'>
                      <h1 className='text-blue-600 font-semibold text-[20px]'>Free Shipping</h1>
                      <p className='text-gray-600 font-semibold text-[15px]'>On All Orders</p>
                  </div>
              </div>
              <div className='w-[2px] h-[80px] bg-gray-700'></div>
              <div className='flex'>
                  <img className='h-[60px] w-[60px]' src={Deals} alt="free shipping" />
                  <div className='ml-3'>
                      <h1 className='text-blue-600 font-semibold text-[20px]'>Best Deals</h1>
                      <p className='text-gray-600 font-semibold text-[15px]'>Save Big Every Day</p>
                  </div>
              </div>
              <div className='w-[2px] h-[80px] bg-gray-700'></div>
              <div className='flex'>
                  <img className='h-[60px] w-[60px]' src={SecurePayment} alt="free shipping" />
                  <div className='ml-3'>
                      <h1 className='text-blue-600 font-semibold text-[20px]'>Secure Payments</h1>
                      <p className='text-gray-600 font-semibold text-[15px]'>Safe and Reliable</p>
                  </div>
              </div>
              
          </div>
    </footer>
  )
}
