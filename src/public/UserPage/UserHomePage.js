import React from 'react'
import "../../App.css"
import UserHeader from './UserHeader'
import Collections from "./Collections.js"
import CartImage from "../../assets/ShoppingCart.png"
import FreeDelivery from "../../assets/Freedelivery.png"
import Payment from "../../assets/SecurePayment.png"
import EasyReturn from "../../assets/EasyReturn.png"
import CustomerSupport from "../../assets/CallSupport.png"
import UserFooter from './UserFooter.js'

export default function HomePage() {
  return (
    <>
      <UserHeader/>
      <div className='bg-gradient-to-tr from-blue-100 to-white min-h-[100vh] p-3'>
        <div className='sm:flex sm:justify-between mx-3 sm:mx-8 lg:mx-20 mt-[60px] sm:mt-[70px] lg:mt-[75px]'>
          <div className='sm:flex sm:flex-col sm:justify-center sm:items-center'>
            <h1 className='text-[25px] sm:text-[30px] lg:text-[40px] font-bold text-blue-900'>Welcome to <span className='text-blue-700'>eCART</span></h1>
            <p className='text-[15px] sm:text-[17px] lg:text-[20px] text-gray-700 my-3 font-semibold'>Discover Quality Products for Every Need</p>
            <button className='text-[13px] sm:text-[15px] lg:text-[17px] bg-gradient-to-t from-blue-950 to-blue-400 w-[80px] sm:w-[100px] font-semibold p-2 rounded-[5px] text-white mt-2 sm:mt-5'>Shop Now</button>
          </div>
          <img className='hidden sm:block h-[250px] lg:h-[300px] w-[65%]' src={CartImage} alt="cartImage" />
        </div>

        <div className='flex justify-between flex-wrap lg:flex-nowrap my-5 sm:my-9 mx-10 sm:mx-0'>
          <div className='flex justify-center w-[80%] sm:w-[40%] md:w-[30%] md:h-[100px] lg:h-[130px] xl:h-[100px] lg:w-[20%] m-2 bg-white p-2 rounded-md shadow-2xl shadow-slate-700'>
            <img className='h-[50px] sm:h-[60px]' src={FreeDelivery} alt="free delivery" />
            <div className='min-w-[70%] ml-3 sm:ml-5'>
              <h1 className='text-blue-500 font-semibold text-[15px] sm:text-[18px]'>Free Shipping</h1>
              <p className='text-gray-600 text-[13px] sm:text-[15px] mt-2'>On Orders Over Rs 500/-</p>
            </div>
          </div>
          <div className='flex justify-center w-[80%] sm:w-[40%] md:w-[30%] md:h-[100px] lg:h-[130px] lg:w-[20%] xl:h-[100px] m-2 bg-white p-2 rounded-md shadow-2xl shadow-slate-700'>
            <img className='h-[35px] sm:h-[40px] mt-2' src={Payment} alt="free delivery" />
            <div className='min-w-[70%] ml-3 sm:ml-5'>
              <h1 className='text-blue-500 font-semibold text-[15px] sm:text-[18px]'>Secure Paymnet</h1>
              <p className='text-gray-600 text-[13px] sm:text-[15px] mt-2'>100% Safe and Secure</p>
            </div>
          </div>
          <div className='flex justify-center w-[80%] sm:w-[40%] md:w-[30%] md:h-[100px] lg:h-[130px] lg:w-[20%] xl:h-[100px] m-2 bg-white p-2 rounded-md shadow-2xl shadow-slate-700'>
            <img className='h-[35px] sm:h-[40px] mt-2' src={EasyReturn} alt="free delivery" />
            <div className='min-w-[70%] ml-3 sm:ml-5'>
              <h1 className='text-blue-500 font-semibold text-[15px] sm:text-[18px]'>Easy Return</h1>
              <p className='text-gray-600 text-[13px] sm:text-[15px] mt-2'>7 Days Return</p>
            </div>
          </div>
          <div className='flex justify-center w-[80%] sm:w-[40%] md:w-[30%] md:h-[100px] lg:h-[130px] m-2 lg:w-[20%] xl:h-[100px] bg-white p-2 rounded-md shadow-2xl shadow-slate-700'>
            <img className='h-[35px] sm:h-[40px] mt-2' src={CustomerSupport} alt="free delivery" />
            <div className='min-w-[70%] ml-3 sm:ml-5'>
              <h1 className='text-blue-500 font-semibold text-[15px] sm:text-[18px]'>24/7 Support</h1>
              <p className='text-gray-600 text-[13px] sm:text-[15px] mt-2'>Customer Care</p>
            </div>
          </div>
        </div>

        <Collections />
      </div>
      <UserFooter/>
    </>
  )
}
