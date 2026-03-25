import {useContext, useEffect, useState } from 'react'
import UserHeader from './UserHeader'
import UserFooter from './UserFooter'
import { useParams } from 'react-router'
import RatingStar from "../../assets/RatingStar.png"
import { DContext } from '../../Store/MyContext'


export default function ProductDetailPage() {
    const [productDetails, setProductDetails] = useState([])


    const { id } = useParams()
    const url = process.env.REACT_APP_URL
    const { cartProducts, setCartProducts} = useContext(DContext)
    console.log("detail",productDetails)
   
    const ratings = [1, 2, 3, 4]
    
    useEffect(() => {
        getProductDetails()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
     
    const getProductDetails = async () => {
        try {
            const options = {
                method: "GET",
                credentials: "include"
            }
            const response = await fetch(`${url}/api/getProductDetails/${id}`, options)
            const data = await response.json()
            if (data.success) {
                setProductDetails(data.detailedProduct)
                console.log(data.detailedProduct)
            } else {
                alert(data.success)
            }
        } 
        catch (err) {
            alert("Err in getting products", err)
        }
    }

    const clickAddtoCartBtn = (cartItem) => {
        const findItem = cartProducts.find(item => item.productId === cartItem.productId)
        if (findItem) {
            setCartProducts(prev => {
                const updateItem = prev.map(eachItem => {
                    if (eachItem.productId === findItem.productId) {
                        return eachItem = { ...eachItem, quantity: eachItem.quantity + 1 }
                    }
                    else {
                        return eachItem = { ...eachItem }
                    }
                })
                return updateItem
            })
        }
        else {
            const addProduct = { ...cartItem, quantity: 1 }
            setCartProducts(prev => [...prev, addProduct])
        }
    }

  return (
      <>
          <UserHeader />
          <div className='bg-gradient-to-tr from-blue-100 to-white min-h-[100vh] p-3'>
              <div className='mx-3 sm:mx-8 lg:mx-20 mt-[60px] sm:mt-[70px] lg:mt-[75px]'>
                  <p className='text-gray-600 font-semibold'>Home / Shop / Products</p>
                      <div className='sm:flex my-7'>
                      <img className='h-[250px] sm:h-[280px] lg:h-[400px] w-[80%] sm:w-[45%]' src={`${url}/${productDetails?.image?.filePath}`} alt={productDetails?.name} />
                      <div className='sm:ml-10'>
                          <p className='text-gray-500 font-semibold'>{productDetails?.sellerCompanyName}</p>
                          <h1 className='text-blue-950 font-semibold text-[20px] sm:text-[25px] lg:text-[30px] italic'>{productDetails?.name}</h1>
                          <div className='mt-2 flex text-[13px] sm:text-[15px] lg:text-[17px]'>
                              {ratings.map(eachItem => (<img className='h-[20px]' src={RatingStar} alt="star" />))}
                              <p className='font-semibold text-gray-700 ml-2'>4.0 <span className='text-gray-500'>{`(431)`}</span>  </p>
                              <p className='bg-blue-200 text-blue-800 w-[100px] rounded-full p-1 text-center text-[13px] lg:text-[15px] ml-3'>Best Seller</p>
                          </div>
                          <div className='flex mt-2'>
                              <p className='text-[16px] sm:text-[20px] lg:text-[25px] font-bold text-gray-900'>{productDetails?.price}</p>
                              <p className='text-[13px] sm:text-[15px] text-center w-[70px] sm:w-[100px] font-semibold text-gray-600 bg-gray-200 h-[30px] rounded-md ml-3 mt-1 pt-1'>{productDetails?.originalPrice}</p>
                              <p className='hidden lg:block text-[15px] text-center w-[80px] font-semibold text-red-800 bg-red-100 h-[30px] rounded-md ml-3 mt-1 pt-1'>{productDetails?.discount}% OFF</p>
                          </div>
                          <p className='block lg:hidden text-[13px] sm:text-[15px] text-center w-[80px] font-semibold text-red-800 bg-red-100 h-[30px] rounded-md mt-1 pt-1'>{productDetails?.discount}% OFF</p>
                          <div className='mt-2'>
                              {productDetails?.quantity !== 0 ? (
                                  <div className='flex'>
                                    <div className='flex p-1 text-green-800 bg-green-100 h-[30px] w-[100px] sm:w-[150px] lg:w-[100px]'>
                                        <svg className='h-[24px] w-[24px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="green"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg>
                                        <p className='font-semibold text-[15px] lg:text-[17px] ml-1'>In Stock</p>
                                      </div>
                                      <p className='text-[14px] sm:text-[16px] lg:text-[20px] text-gray-600 font-semibold ml-3'>Free Delivery within 1 Week</p>
                                  </div>
                              ) : (
                                      <p className='font-semibold text-[15px] lg:text-[20px] ml-1'>No Stock</p>
                              )}
                          </div>
                          <p className='text-gray-700 text-[14px] sm:text-[16px] lg:text-[18px] font-semibold my-2'>{productDetails?.desc}</p>
                          <div className='lg:flex lg:justify-between w-[45%] sm:w-[70%] lg:w-[75%] xl:w-[60%] 2xl:w-[50%] mt-2'>
                              <div className='bg-white rounded-md shadow-2xl shadow-gray-900 p-2 flex'>
                                  <svg className='h-[22px] w-[22px] sm:h-[24px] sm:w-[24px]' xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960" fill="gray"><path d="M440-183v-274L200-596v274l240 139Zm80 0 240-139v-274L520-457v274Zm-40-343 237-137-237-137-237 137 237 137ZM160-252q-19-11-29.5-29T120-321v-318q0-22 10.5-40t29.5-29l280-161q19-11 40-11t40 11l280 161q19 11 29.5 29t10.5 40v318q0 22-10.5 40T800-252L520-91q-19 11-40 11t-40-11L160-252Zm320-228Z" /></svg>
                                  <p className='text-[13px] sm:text-[15px] text-gray-500 font-semibold ml-1'>7 Days Return</p>
                              </div>
                              <div className='bg-white rounded-md shadow-2xl shadow-gray-900 p-2 flex mt-2 lg:mt-0'>
                                  <svg className='h-[22px] w-[22px] sm:h-[24px] sm:w-[24px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="gray"><path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm0-80h480v-400H240v400Zm296.5-143.5Q560-327 560-360t-23.5-56.5Q513-440 480-440t-56.5 23.5Q400-393 400-360t23.5 56.5Q447-280 480-280t56.5-23.5ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240-160v-400 400Z" /></svg>
                                  <p className='text-[13px] sm:text-[15px] text-gray-500 font-semibold ml-1'>Secure Payment</p>
                              </div>
                          </div> 
                          <button onClick={() => clickAddtoCartBtn(productDetails)} className='text-[13px] sm:text-[15px] lg:text-[17px] sm:w-[120px] lg:w-[150px] mt-4 bg-gradient-to-t from-cyan-800 to-sky-500 focus:from-indigo-800 focus:to-violet-900 font-semibold p-2 rounded-[5px] text-white'>Add to Cart</button>
                      </div>

                      </div>
              </div>

          </div>
          <UserFooter/>
      </>
  )
}
