import React from 'react'
import SummerCollections from "../../assets/SummerShopping.png"
import TechGadgets from "../../assets/TechGadgets.png"
import KitchenSets from "../../assets/KitchenSets.png"
import Sports from "../../assets/Sports.png"
import LimitedOffer from "../../assets/LimitedOffer.png"
import NewArrivals from "../../assets/NewArrivals.png"
import SeasonalDeals from "../../assets/SeasonalDeals.png"
import StayUpdate from "../../assets/StayUpdated.png"
import Bell from "../../assets/Bell.png"


export default function Collections() {
  return (
    <div className='mx-20 my-12'>
      <h1 className='text-blue-900 text-[25px] font-semibold italic'>Featured Collections</h1>
      <hr className='bg-gray-500 w-full h-[1.5px] my-7' />
      <ul className='flex justify-between'>
        <li className='bg-orange-50 rounded-md p-3 text-center m-2 max-w-[30%]'>
          <img className='w-full h-[200px]' src={SummerCollections} alt="summer collections" />
          <h2 className='text-[20px] text-gray-700 font-semibold'>Summer Collections</h2>
          <button className='p-2 text-white rounded-[5px] font-semibold bg-gradient-to-t from-blue-800 to-blue-500 my-4'>Shop Now</button>
        </li>
        <li className='bg-blue-200 rounded-md p-3 text-center m-2 max-w-[30%]'>
          <img className='w-full h-[200px]' src={TechGadgets} alt="summer collections" />
          <h2 className='text-[20px] text-gray-700 font-semibold'>Tech Gadgets</h2>
          <button className='p-2 text-white rounded-[5px] font-semibold bg-gradient-to-t from-blue-800 to-blue-500 my-4'>Shop Now</button>
        </li>
        <li className='bg-yellow-50 rounded-md p-3 text-center m-2 max-w-[30%]'>
          <img className='w-full h-[200px]' src={KitchenSets} alt="summer collections" />
          <h2 className='text-[20px] text-gray-700 font-semibold'>Cozy Home Selection</h2>
          <button className='p-2 text-white rounded-[5px] font-semibold bg-gradient-to-t from-blue-800 to-blue-500 my-4'>Shop Now</button>
        </li>
        <li className='bg-green-50 rounded-md p-3 text-center m-2 max-w-[30%]'>
          <img className='w-full h-[200px]' src={Sports} alt="summer collections" />
          <h2 className='text-[20px] text-gray-700 font-semibold'>Fitness & Sports</h2>
          <button className='p-2 text-white rounded-[5px] font-semibold bg-gradient-to-t from-blue-800 to-blue-500 my-4'>Shop Now</button>
        </li>
      </ul>
      
      <h1 className='text-blue-900 text-[25px] font-semibold italic mt-7'>Today's Hightlights</h1>
      <hr className='bg-gray-500 w-full h-[1.5px] my-7' />
      <ul className='flex justify-between'>
        <li className='bg-orange-50 flex justify-between p-3 rounded-md max-w-[30%] m-3'>
          <div className='flex flex-col justify-center items-center'>
            <h2 className='text-[25px] font-semibold text-gray-800'>Limited Offers</h2>
            <button className='text-orange-600 border-[1px] border-orange-600 p-2 rounded-full my-4'>Grab Now</button>
          </div>
          <img className='w-[50%] h-[170px]' src={LimitedOffer} alt="limited offers" />
        </li>
        <li className='bg-blue-200 flex justify-between p-3 rounded-md max-w-[30%] m-3'>
          <div className='flex flex-col justify-center items-center'>
            <h2 className='text-[25px] font-semibold text-gray-800'>New Arrivals</h2>
            <button className='text-blue-900 border-[1px] border-blue-900 p-2 rounded-full my-4'>Explore them</button>
          </div>
          <img className='w-[50%] h-[170px]' src={NewArrivals} alt="limited offers" />
        </li>
        <li className='bg-green-50 flex justify-between p-3 rounded-md max-w-[30%] m-3'>
          <div className='flex flex-col justify-center items-center'>
            <h2 className='text-[25px] font-semibold text-gray-800'>Seasonal Deals</h2>
            <button className='text-green-900 border-[1px] border-green-900 p-2 rounded-full my-4'>Shop Now</button>
          </div>
          <img className='w-[50%] h-[170px]' src={SeasonalDeals} alt="limited offers" />
        </li>
      </ul>

      <div className='flex justify-between px-10 my-7 border-[1px] border-dotted border-gray-800 p-3'>
        <div className='flex'>
          <img className='h-[50px]' src={StayUpdate} alt="stay updated" />
          <div className='ml-3'>
            <h2 className='text-gray-800 text-[20px] font-semibold italic'>Stay Updated!</h2>
            <p className='text-gray-600 text-[15px] font-semibold mt-2'>Get the latest deals directly in your inbox.</p>
          </div>
        </div>
        <div className='flex'>
          <input className='h-[40px] w-[400px] p-3 focus:bg-blue-100 mt-4 mr-2 rounded-sm' type="email" placeholder='Enter your email' />
          <button className='group p-2 text-white rounded-[5px] font-semibold bg-blue-700 my-4 flex'>Subscribe
             <img className='h-[23px] ml-1 hidden group-hover:inline-block ' src={Bell} alt="bell" />
          </button>
        </div>
      </div>
    </div>
  )
}
