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
      <div className='bg-gradient-to-tr from-blue-100 to-white min-h-[100vh] p-5'>
        <div className='flex justify-between mx-20'>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='text-[40px] font-bold text-blue-900'>Welcome to <span className='text-blue-700'>eCART</span></h1>
            <p className='text-[20px] text-gray-700 my-3'>Discover Quality Products for Every Need</p>
            <button className='bg-gradient-to-t from-blue-950 to-blue-400 w-[100px] font-semibold p-2 rounded-[5px] text-white mt-5'>ShopNow</button>
          </div>
          <img className='h-[300px] w-[65%]' src={CartImage} alt="cartImage" />
        </div>

        <div className='flex justify-between my-9'>
          <div className='flex justify-center w-[20%] bg-white p-2 rounded-md shadow-2xl shadow-slate-700'>
            <img className='h-[60px]' src={FreeDelivery} alt="free delivery" />
            <div className='ml-5'>
              <h1 className='text-blue-500 font-semibold text-[18px]'>Free Shipping</h1>
              <p className='text-gray-600 text-[15px] mt-2'>On Orders Over Rs 500/-</p>
            </div>
          </div>
          <div className='flex justify-center w-[20%] bg-white p-2 rounded-md shadow-2xl shadow-slate-700'>
            <img className='h-[40px] mt-2' src={Payment} alt="free delivery" />
            <div className='ml-5'>
              <h1 className='text-blue-500 font-semibold text-[18px]'>Secure Paymnet</h1>
              <p className='text-gray-600 text-[15px] mt-2'>100% Safe and Secure</p>
            </div>
          </div>
          <div className='flex justify-center w-[20%] bg-white p-2 rounded-md shadow-2xl shadow-slate-700'>
            <img className='h-[40px] mt-2' src={EasyReturn} alt="free delivery" />
            <div className='ml-5'>
              <h1 className='text-blue-500 font-semibold text-[18px]'>Easy Return</h1>
              <p className='text-gray-600 text-[15px] mt-2'>7 Days Return</p>
            </div>
          </div>
          <div className='flex justify-center w-[20%] bg-white p-2 rounded-md shadow-2xl shadow-slate-700'>
            <img className='h-[40px] mt-2' src={CustomerSupport} alt="free delivery" />
            <div className='ml-5'>
              <h1 className='text-blue-500 font-semibold text-[18px]'>24/7 Support</h1>
              <p className='text-gray-600 text-[15px] mt-2'>Customer Care</p>
            </div>
          </div>
        </div>

        <Collections />
      </div>
      <UserFooter/>
    </>
  )
}
