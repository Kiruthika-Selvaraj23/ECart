import React, { useContext } from 'react'
import UserHeader from './UserHeader'
import UserFooter from './UserFooter'
import { useParams } from 'react-router'
import { DContext } from '../../Store/MyContext'
import RatingStar from "../../assets/RatingStar.png"


export default function ProductDetailPage() {
    const { productDatas } = useContext(DContext)
    const { id } = useParams()
    const url = process.env.REACT_APP_URL
    const productDetail = productDatas.find(item => item.productId === Number(id))
   
    const ratings = [1,2,3,4]
  return (
      <>
          <UserHeader />
          <div className='bg-gradient-to-tr from-blue-100 to-white min-h-[100vh] p-5'>
              <div className='mx-20'>
                  <p className='text-gray-600 font-semibold'>Home / Shop / Products</p>
                      <div className='flex my-7'>
                      <img className='h-[400px] w-[45%]' src={`${url}/${productDetail?.image?.filePath}`} alt={productDetail?.name} />
                      <div className='ml-10'>
                          <p className='text-gray-500 font-semibold'>{productDetail.sellerCompanyName}</p>
                          <h1 className='text-blue-950 font-semibold text-[30px] italic'>{productDetail.name}</h1>
                          <div className='mt-2 flex'>
                              {ratings.map(eachItem => (<img className='h-[20px]' src={RatingStar} alt="star" />))}
                              <p className='font-semibold text-gray-700 ml-2'>4.0 <span className='text-gray-500'>{`(431)`}</span>  </p>
                              <p className='bg-blue-200 text-blue-800 rounded-full p-2 text-[15px] ml-3'>Best Seller</p>
                          </div>
                          <p className='text-gray-700 font-semibold'>{productDetail.desc}</p>
                      </div>

                      </div>
              </div>

          </div>
          <UserFooter/>
      </>
  )
}
