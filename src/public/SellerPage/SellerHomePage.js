import React from 'react'
import SellerHeader from './SellerHeader'
import SellerFooter from './SellerFooter'
import HomeSellerImage from "../../assets/HomeSellerImage.png"
import StartSelling from "../../assets/StartSelling.png"
import SellingTips from "../../assets/SellingTips.png"
import GrowBusiness from "../../assets/GrowBusiness.png"
import { useNavigate } from 'react-router'

export default function SellerHomePage() {
  const navigate = useNavigate()
  return (
    <>
      <SellerHeader />
      <div className='bg-gradient-to-tr from-blue-100 to-white min-h-[100vh] p-5'>
        <div className='flex justify-between mx-5 sm:mx-10 lg:mx-20 pt-[80px] sm:py-[20px]'>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='text-[20px] sm:text-[30px] lg:text-[40px] font-bold text-blue-900'>Welcome to <span className='text-blue-700'>Seller Pannel</span></h1>
            <p className='text-[15px] sm:text-[17px] lg:text-[20px] text-center text-gray-700 my-3'>Manage your products, track orders, and grow your business from one place.</p>
          </div>
          <img className='hidden sm:block sm:h-[300px] lg:h-[400px] w-[55%] sm:w-[60%] lg:w-[65%]' src={HomeSellerImage} alt="seller" />
        </div>

        <div className='flex justify-between flex-wrap lg:flex-nowrap mx-5 sm:mx-10 lg:mx-20'>
          <div className='w-[80%] sm:w-[45%] lg:w-[30%] m-3 lg:m-0 bg-blue-200 p-2 rounded-md shadow-2xl shadow-slate-700'>
            <img className='h-[140px] sm:h-[150px] lg:h-[200px]' src={StartSelling} alt="start selling" />
            <div className='ml-5'>
              <h1 className='text-blue-500 font-semibold text-[16px] sm:text-[18px]'>Start Selling</h1>
              <p className='text-gray-600 text-[13px] sm:text-[15px] mt-2 mb-2 font-semibold'>Add and manage products effortlessly with our easy-to-use tools.</p>
            </div>
          </div>
          <div className='w-[80%] sm:w-[45%] lg:w-[30%] m-3 lg:m-0 bg-blue-200 p-2 rounded-md shadow-2xl shadow-slate-700'>
            <img className='h-[140px] sm:h-[150px] lg:h-[200px]' src={SellingTips} alt="start selling" />
            <div className='ml-5'>
              <h1 className='text-blue-500 font-semibold text-[16px] sm:text-[18px]'>Selling Tips</h1>
              <p className='text-gray-600 text-[13px] sm:text-[15px] mt-2 mb-2 font-semibold'>Add high Quality images and detailed descriptions to attract more buyers.</p>
            </div>
          </div>
          <div className='w-[80%] sm:w-[45%] lg:w-[30%] m-3 lg:m-0 bg-blue-200 p-2 rounded-md shadow-2xl shadow-slate-700'>
            <img className='h-[140px] sm:h-[150px] lg:h-[200px]' src={GrowBusiness} alt="start selling" />
            <div className='ml-5'>
              <h1 className='text-blue-500 font-semibold text-[16px] sm:text-[18px]'>Grow Business</h1>
              <p className='text-gray-600 text-[13px] sm:text-[15px] mt-2 mb-2 font-semibold'>Utilize marketing and analytics to expand and succeed.</p>
            </div>
          </div>
        </div>

        <div className='flex justify-center my-7'>
          <button onClick={() => navigate("/sellerProductsPage")} className='text-[13px] sm:text-[15px] lg:text-[17px] p-2 text-white rounded-[5px] font-semibold bg-gradient-to-t from-blue-800 to-blue-500 my-4'>Add Product +</button>
        </div>
      </div>
      <SellerFooter/>
    </>
  )
}
