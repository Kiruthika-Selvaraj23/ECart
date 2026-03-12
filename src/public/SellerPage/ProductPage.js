import React, { useContext } from 'react'
import SellerHeader from './SellerHeader'
import SellerFooter from './SellerFooter'
import { DContext } from '../../Store/MyContext'

export default function ProductPage() {
    const { userDetails } = useContext(DContext)
    console.log(userDetails.companyName)

  return (
      <>
          <SellerHeader />
          <div className='bg-gradient-to-tr from-blue-100 to-white min-h-[100vh] p-5'>
              <div className='mt-[90px] mx-20'>
                  <div className='flex justify-between'>
                      <div>
                          <h1 className='text-[30px] font-bold text-blue-800'>Your Products</h1>
                          <p className='text-gray-700 font-semibold text-[17px] mt-2'>Manage and update all your products in one place</p>
                      </div>
                      <div>
                          <button className='p-2 text-white rounded-[5px] font-semibold bg-gradient-to-t from-blue-800 to-blue-500 my-4'>Add Product +</button>
                      </div>
                  </div>

                  <div className='mt-7'>
                      <h1 className='text-[30px] mt-2 text-blue-950 font-semibold'>CompanyName: {userDetails?.companyName}</h1>
                      <hr className='border-t-[1px] border-gray-300 my-4'/>
                  </div>
                </div>
          </div>
          <SellerFooter/>
      </>
  )
}
