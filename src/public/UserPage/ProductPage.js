import React, { useContext, useEffect } from 'react'
import FreeDeliveryIcon from "../../assets/FreeDeliveryIcon.png"
import RatingStar from "../../assets/RatingStar.png"
import { DContext } from '../../Store/MyContext'
import { useNavigate } from 'react-router'

export default function ProductPage() {
    const { productDatas, setProductDatas, cartProducts, setCartProducts } = useContext(DContext)
    const navigate = useNavigate()
    
    const url = process.env.REACT_APP_URL

    useEffect(() => {
        getProductsData()
    }, [])
    
    const getProductsData = async () => {
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
    
    const ratings = [1,2,3,4]

  return (
      <div className='mx-20 mt-10'>
          <h1 className='text-[30px] font-semibold italic text-blue-800'>All Products</h1>
          <hr className="border-t border-0 border-gray-400 w-full my-5" />

          <ul className='flex justify-between flex-wrap'>
              {
                  productDatas.map(eachItem => (
                      <li key={eachItem.productId} className='min-w-[30%] bg-slate-50 shadow-2xl shadow-gray-700 rounded-md p-3 m-2'>
                          <div onClick={() => navigate(`/productDetail/${eachItem.productId}`)}>
                              <img className='h-[200px] w-full' src={`${url}/${eachItem.image.filePath}`} alt={eachItem.name} />
                              <h2 className='text-gray-500 font-semibold text-[15px]'>{eachItem.brandName}</h2>
                              <p className='font-bold'>{eachItem.name}</p>
                              <div className='flex'>
                                  <p className='font-semibold text-gray-600'>Price: <span className='line-through'>{eachItem.originalPrice}</span></p>
                                  <p className='ml-3 text-blue-800 font-semibold'>{eachItem.price}</p>
                                  <p className='ml-3 text-green-900 font-semibold'>{eachItem.discount}% discount</p>
                              </div>
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
                          <div className='flex justify-end'>
                              <button onClick={() => clickAddtoCartBtn(eachItem)} className='w-[150px] bg-gradient-to-t from-cyan-800 to-sky-500 focus:from-indigo-800 focus:to-violet-900 font-semibold p-2 rounded-[5px] text-white'>Add to Cart</button>
                          </div>
                      </li>
                  ))
              }
          </ul>
           
      </div>
  )
}
