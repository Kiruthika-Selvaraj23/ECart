import React, { useContext, useState } from 'react'
import UserHeader from './UserHeader'
import UserFooter from './UserFooter'
import CartPageBanner from "../../assets/CartPageBgImage.jpg"
import EmptyCart from "../../assets/EmptyCart.png";
import FreeDeliveryIcon from "../../assets/FreeDeliveryIcon.png"
import RatingStar from "../../assets/RatingStar.png"
import { DContext } from '../../Store/MyContext'
import { useNavigate } from 'react-router';

export default function CartPage() {
    const [orderStatus, setOrderStatus] = useState()
    const [orderId, setOrderId] = useState()

    const navigate = useNavigate()
    const { cartProducts, setCartProducts } = useContext(DContext)
    const url = process.env.REACT_APP_URL

    const removeCartItem = (id) => {
        const filterCartProducts = cartProducts.filter(eachItem => eachItem.productId !== id)
        console.log(filterCartProducts)
        setCartProducts(filterCartProducts)
    }

    const placeOrder = async (productId, quantity) => {
        try {
            const options = {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ productId: productId, productQuantity: quantity})
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
      <>
          <UserHeader />
          <div className='bg-gradient-to-tr from-blue-100 to-white min-h-[100vh]'>
              
              {
                  cartProducts.length === 0 ? (
                      <div className='flex flex-col justify-center items-center pt-10'>
                          <h1 className='text-center text-[20px] sm:text-[25px] lg:text-[30px] font-semibold italic text-blue-900'>Your Cart is Empty!!</h1>
                          <div className='mt-4'>
                              <button onClick={() => navigate("/userShopPage")} className='text-[13px] sm:text-[15px] bg-gradient-to-t from-blue-950 to-sky-400 p-2 text-white font-semibold rounded-[5px]'>Continue Shopping</button>
                          </div>
                          <img className='h-[300px] sm:h-[400px] lg:h-[500px]' src={EmptyCart} alt="empty cart" />
                      </div>) : (
                          <div>
                            <div className='relative h-[400px] w-full'>
                                <img className='h-full w-full object-cover' src={CartPageBanner} alt="Banner" />
                                <div className='absolute inset-0 mx-10 lg:mx-20 flex flex-col justify-center mb-44 sm:mb-32'>
                                    <h1 className='text-white font-semibold text-[30px] lg:text-[40px] italic'>Shopping Cart</h1>
                                    <p className='text-gray-600 font-semibold text-[17px] lg:text-[23px] mt-1'>Rewiew Your Selection and Proceed to Checkout</p>
                                    <div className='mt-4'>
                                          <button onClick={() => navigate("/userShopPage")} className='text-[13px] sm:text-[15px] bg-slate-50 p-2 text-gray-700 font-semibold rounded-[5px]'>Continue Shopping</button>
                                    </div>
                                </div>
                              </div>
                              
                              <div className='mx-5 sm:mx-10 lg:mx-20 p-3'>
                                  <h1 className='text-[30px] italic text-gray-700 font-semibold'>My Cart</h1>
                                  <ul className='flex justify-between flex-wrap my-8'>
                                      {
                                          cartProducts.map(eachItem => (
                                              <li className='max-w-[90%] sm:max-w-[45%] lg:min-w-[30%] bg-slate-50 shadow-2xl shadow-gray-700 rounded-md p-3 m-2'>
                                                  <div className='flex justify-end'>
                                                      <svg className=' bg-red-500 rounded-full h-[17px] w-[17px] lg:h-[20px] lg:w-[20px]' onClick={() => removeCartItem(eachItem.productId)} xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960" fill="white"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
                                                  </div>
                                                  <img className='h-[170px] lg:h-[200px] w-full mt-2' src={`${url}/${eachItem.image.filePath}`} alt={eachItem.name} />
                                                  <h2 className='text-gray-500 font-semibold text-[13px] lg:text-[15px]'>{eachItem.brandName}</h2>
                                                  <p className='font-bold'>{eachItem.name}</p>
                                                  <div className='flex'>
                                                      <p className='font-semibold text-gray-600'>Price: <span className='line-through'>{eachItem.price}</span></p>
                                                      <p className='ml-3 text-blue-800 font-semibold'>{eachItem.originalPrice}</p>
                                                      <p className='hidden lg:block ml-3 text-green-900 font-semibold'>{eachItem.discount}% discount</p>
                                                  </div>
                                                  <p className='block lg:hidden text-green-900 font-semibold'>{eachItem.discount}% discount</p>
                                                  <div className='mt-2 flex'>
                                                      <p className='font-semibold text-gray-600 mr-3'>Ratings: </p>
                                                      {ratings.map(eachItem => (<img className='h-[20px]' src={RatingStar} alt="star" />))}
                                                  </div>
                                                  <p className='font-semibold text-gray-600 mr-3'>Quantity : {eachItem.quantity}</p>
                                                  <div className='lg:flex lg:justify-between mt-3 lg:mt-5'>
                                                      <div className='flex'>
                                                          <img className='h-[20px]' src={FreeDeliveryIcon} alt="free delivery" />
                                                          <p className='font-semibold text-gray-500 ml-2'>Free Delivery</p>
                                                      </div>
                                                      <div className='sm:mt-2 lg:mt-0'>
                                                          <button onClick={() => placeOrder(eachItem.productId, eachItem.quantity)} className='mt-2 sm:mt-0 w-[150px] bg-gradient-to-t from-cyan-800 to-sky-500 focus:from-indigo-800 focus:to-violet-900 font-semibold p-2 rounded-[5px] text-white'>Buy Now</button>
                                                      </div>
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
                          </div>)
              }

          </div>
          <UserFooter/>
      </>
  )
}
