import React from 'react'
import UserHeader from './UserHeader'
import UserFooter from './UserFooter'
import UserShoppingCart from "../../assets/UserShoopingCart.png"
import ShopImage from "../../assets/ShopImage.png"

export default function ProductsPage() {
  return (
      <>
        <UserHeader />
          
          <div className='bg-blue-100 min-h-[100vh] p-3'>
              <div className='flex justify-between mx-20'>
                  <div className="h-[400px] w-[50%] bg-cover bg-center flex flex-col justify-center items-center" style={{ backgroundImage: `url(${ShopImage})` }}>
                      <h2 className='text-blue-800 italic font-semibold text-[25px] mt-28'>Shop All the Products</h2>
                      <p className='text-gray-700 text-[15px] font-semibold'>Find Everything You Need, ALl in One Place</p>
                  </div>
                  <img className='h-[400px] w-[40%]' src={UserShoppingCart} alt="cart" />
              </div>
          </div>

        <UserFooter/>
      </>
  )
}
