import React from 'react'
import WideProducts from "../../accets/WideProducts.png"
import AffordablePrices from "../../accets/AffordablePrices.png"
import FastDelivery from "../../accets/FastDelivery.png"


export default function WhyChooseUs() {
  return (
     <div className='mx-20 mt-9'>
                <h2 className='text-[20px] text-blue-800 font-semibold mb-5'>Why Choose Us?</h2>
                <div className='flex justify-around'>
                    <div className='bg-white p-3 max-w-[30%] rounded-md shadow-2xl shadow-slate-700'>
                        <img className='h-[180px] w-full' src={WideProducts} alt="products" />
                        <h1 className='text-black italic font-semibold text-[20px]'>Wide Product Range</h1>
                        <p className='text-[15px] text-gray-600 font-semibold mt-2'>Explore a huge collection of products across multiple categories.</p>
                    </div>
                    <div className='bg-white p-3 max-w-[30%] rounded-md shadow-2xl shadow-slate-700'>
                        <img className='h-[180px] w-[80%]' src={AffordablePrices} alt="price" />
                        <h1 className='text-black italic font-semibold text-[20px]'>Affordable Prices</h1>
                        <p className='text-[15px] text-gray-600 font-semibold mt-2'>Get the best deals and discounts on every purchase.</p>
                    </div>
                    <div className='bg-white p-3 max-w-[30%] rounded-md shadow-2xl shadow-slate-700'>
                        <img className='h-[180px] w-[80%]' src={FastDelivery} alt="delivery" />
                        <h1 className='text-black italic font-semibold text-[20px]'>Fast Delivery</h1>
                        <p className='text-[15px] text-gray-600 font-semibold mt-2'>Quick and reliable shipping to your doorstep</p>
                    </div>
                </div>
      </div>
  )
}
