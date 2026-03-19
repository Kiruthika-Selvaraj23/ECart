import React, { useContext, useEffect, useState } from 'react'
import FreeDeliveryIcon from "../../assets/FreeDeliveryIcon.png"
import RatingStar from "../../assets/RatingStar.png"
import { DContext } from '../../Store/MyContext'
import { useNavigate } from 'react-router'

export default function ProductPage() {
    const [productDatas, setProductDatas] = useState([])
    const [orderStatus, setOrderStatus] = useState()
    const [orderId, setOrderId] = useState()

    const {cartProducts, setCartProducts } = useContext(DContext)
    const navigate = useNavigate()
    
    const url = process.env.REACT_APP_URL

    useEffect(() => {
        getProductsData()
    }, [])
    
    const getProductsData = async () => {
        try {
            const url = process.env.REACT_APP_URL
            const options = {
                method: "GET",
                credentials: "include"
            }
            const response = await fetch(`${url}/getProducts`, options)
            const data = await response.json()
            if (data.success) {
                setProductDatas(data.productDetails)
            }
            else {
                alert(data.message)
            }
        } catch (err) {
            alert("Trouble in getting products")
        }
    }

    const clickAddtoCartBtn = (cartItem) => {
        const findItem = cartProducts.find(item => item.productId === cartItem.productId)
        if (findItem) {
            setCartProducts(prev => {
                const updateItem = prev.map(eachItem => {
                    if (eachItem.productId === findItem.productId) {
                        return eachItem = {...eachItem, quantity: eachItem.quantity+1}
                    } 
                    else {
                        return eachItem = {...eachItem}
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

    const placeOrder = async (productId) => {
        try {
            const options = {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ productId: productId, productQuantity: "1" })
            }
            const response = await fetch(`${url}/order`, options)
            const data = await response.json()
            if (data.success) {
                setOrderStatus(data.message)
                setOrderId(productId)
            }
            else {
              alert(data.message)
            }
        }
        catch (err) {
            alert("Trouble in placing order, Try again!")
        }
    }
    
    const ratings = [1,2,3,4]

  return (
      <div className='mx-3 sm:mx-8 lg:mx-20 mt-10'>
          <h1 className='text-[20px] lg:text-[30px] font-semibold italic text-blue-800'>All Products</h1>
          <hr className="border-t border-0 border-gray-400 w-full my-3 sm:my-5" />

          <ul className='flex justify-between flex-wrap'>
              {
                  productDatas.map(eachItem => (
                      <li key={eachItem.productId} className='max-w-[90%] sm:max-w-[45%] lg:min-w-[30%] bg-slate-50 shadow-2xl shadow-gray-700 rounded-md p-3 m-2'>
                          <div onClick={() => navigate(`/productDetail/${eachItem.productId}`)}>
                              <img className='h-[170px] lg:h-[200px] w-full' src={`${url}/${eachItem.image.filePath}`} alt={eachItem.name} />
                              <h2 className='text-gray-500 font-semibold text-[13px] lg:text-[15px]'>{eachItem.brandName}</h2>
                              <p className='font-bold'>{eachItem.name}</p>
                              <div className='flex text-[15px] lg:text-[17px]'>
                                  <p className='font-semibold text-gray-600'>Price: <span className='line-through'>{eachItem.originalPrice}</span></p>
                                  <p className='ml-3 text-blue-800 font-semibold'>{eachItem.price}</p>
                                  <p className='sm:hidden lg:block ml-3 text-green-900 font-semibold'>{eachItem.discount}% discount</p>
                              </div>
                              <p className='block lg:hidden text-green-900 font-semibold'>{eachItem.discount}% discount</p>
                              <div className='mt-2 flex'>
                                  <p className='font-semibold text-gray-600 mr-3'>Ratings: </p>
                                  {ratings.map(eachItem => (<img className='h-[20px]' src={RatingStar} alt="star" />))}
                              </div>
                              <div className='flex justify-between mt-3'>
                                  <div className='flex'>
                                      <img className='h-[20px]' src={FreeDeliveryIcon} alt="free delivery" />
                                      <p className='font-semibold text-gray-500 ml-2'>Free Delivery</p>
                                  </div>
                                  </div>
                          </div>
                          <div className='flex justify-end mt-3'>
                              <button onClick={() => clickAddtoCartBtn(eachItem)} className='w-[90px] text-[13px] lg:text-[17px] lg:w-[120px] bg-gradient-to-t from-cyan-800 to-sky-500 focus:from-indigo-800 focus:to-violet-900 font-semibold p-2 rounded-[5px] text-white'>Add to Cart</button>
                              <button onClick={() => placeOrder(eachItem.productId)} className='ml-3 w-[90px] text-[13px] lg:text-[17px] lg:w-[120px] bg-gradient-to-b from-cyan-800 to-sky-500 focus:from-green-700 focus:to-green-950 font-semibold p-2 rounded-[5px] text-white'>Buy Now</button>
                          </div>

                          {
                              orderStatus && orderId === eachItem.productId ? (
                                  <div className='flex my-3 justify-center bg-green-200 rounded-[5px]'>
                                      <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" fill="green"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg>
                                      <p className='text-green-800 font-semibold ml-1 text-[15px]'>{orderStatus}</p>
                              </div>
                              ) : null
                          }

                      </li>
                  ))
              }
          </ul>
           
      </div>
  )
}
