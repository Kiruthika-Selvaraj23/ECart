import React from 'react'
import UserHeader from './UserHeader'
import UserFooter from './UserFooter'
import ShopImage from "../../assets/ShopImage.png"
import CheckIcon from "../../assets/CheckIcon.png"
import ProductPage from './ProductPage'

export default function ShopPage() {
  return (
      <>
        <UserHeader />
      <div className='bg-gradient-to-tr from-blue-100 to-white min-h-[100vh] p-3'>
        <div className='flex justify-between mx-3 sm:mx-8 lg:mx-20 mt-[60px] sm:mt-[70px] lg:mt-[75px]'>
                  <div className="hidden h-[400px] min-w-[55%] bg-cover bg-center sm:flex flex-col justify-center items-center" style={{ backgroundImage: `url(${ShopImage})` }}>
                      <h2 className='text-blue-800 italic font-semibold text-[18px] lg:text-[25px]'>Shop All the Products</h2>
                      <p className='text-gray-700 text-[9px] lg:text-[13px] xl:text-[15px] font-semibold'>Find Everything You Need, All in One Place</p>
                  </div>
          
                  <div className='p-3 text-center sm:max-w-[45%]'>
                      <h2 className='text-sky-600 font-semibold text-[20px] lg:text-[40px] italic'>Discover Amazing Products</h2>
                      <p className='text-gray-500 font-semibold text-[15px] lg:text-[20px]'>Browse our wide collection of quality products across different categories. Find the perfect items for your needs with great deals and fast delivery.</p>
                      <button className='text-[13px] sm:text-[15px] bg-gradient-to-l from-sky-950 to-blue-600 w-[130px] lg:w-[150px] font-semibold p-2 rounded-[5px] text-white mt-5'> Start Shopping</button>
                      <ul className='flex justify-between mt-6'>
                        <li className='flex'>
                          <img className='h-[22px] lg:h-[25px]' src={CheckIcon} alt="check" />
                          <p className='text-[13px] lg:text-[15px] font-semibold text-gray-800'>Curated Quality Products</p>
                        </li>
                        <li className='flex'>
                          <img className='h-[22px] lg:h-[25px]' src={CheckIcon} alt="check" />
                          <p className='text-[13px] lg:text-[15px] font-semibold text-gray-800'>Trusted by Happy Shoppers</p>
                        </li>
                        <li className='flex'>
                          <img className='h-[22px] lg:h-[25px]' src={CheckIcon} alt="check" />
                          <p className='text-[13px] lg:text-[15px] font-semibold text-gray-800'>Smmoth & Secure Checkout</p>
                        </li>
                      </ul>
                  </div>
              
        </div>
        <ProductPage/>
          </div>
        <UserFooter/>
      </>
  )
}
