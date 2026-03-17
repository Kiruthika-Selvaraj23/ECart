import React, { useEffect, useState } from 'react'
import UserHeader from './UserHeader'
import UserFooter from './UserFooter'
import OrderPageGiftBox from "../../assets/OrderPageGiftBox.png"
import NoOrderImage from "../../assets/NoOrderImage.png"
import { useNavigate } from 'react-router'

export default function UserOrderPage() {
    const [orderDatas, setOrderDatas] = useState([])
     
    const navigate = useNavigate()
    
    useEffect(() => {
        getOrderDatas()
    },[])

    const url = process.env.REACT_APP_URL
    const getOrderDatas = async() => {
        try {
            const options = {
                method: "GET",
                credentials: "include"
            }
            const response = await fetch(`${url}/getParticularUserOrder`, options)
            const data = await response.json()
            if (data.success) {
                setOrderDatas(data.orderedProducts)
            } 
            else {
                alert(data.message)
            }
        }
        catch (err) {
            alert("Trouble in getting order details")
        }
    }

    const renderOrderedItems = () => (
        <ul className='flex flex-col my-7'>
            {
                orderDatas.map((eachItem) => (
                    <li className='bg-white min-w-[90%] lg:w-[70%] m-3 rounded-md shadow-2xl shadow-slate-600'>
                        <div className='flex justify-between p-3'>
                            <div className='flex min-w-[40%]'>
                                <img className='h-[80px] lg:h-[100px] min-w-[30%]' src={`${url}/${eachItem.product.image.filePath}`} alt={eachItem.product.name} />
                                <div className='ml-5'>
                                    <p className='text-[14px] lg:text-[18px] font-semibold text-gray-500'>{eachItem.product.brandName}</p>
                                    <h1 className='font-bold text-[16px] lg:text-[20px] text-blue-950 mt-1'>{eachItem.product.name}</h1>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center text-[15px] lg:text-[18px]'>
                                <p className='text-green-800 font-semibold '>₹{eachItem.totalPrice}</p>
                                <p className='text-gray-800 font-semibold'>Quantity: {eachItem.totalQuantity}</p>
                            </div>

                            <div className='flex flex-col justify-center'>
                                <button onClick={() => navigate(`/productDetail/${eachItem.product.productId}`)} className='text-[13px] sm:text-[15px] lg:text-[17px] border-[2px] border-gray-400 text-gray-700 p-1 rounded-[4px]'>View Details</button>
                            </div>
                        </div>

                        <p className='text-[13px] sm:text-[15px] lg:text-[17px] text-gray-700 font-semibold bg-gray-200 p-1 pl-2 rounded-md'>Placed On: {new Date(eachItem.createdAt).toLocaleDateString()}</p>
                    </li>
                ))
            }
        </ul>
    )


  return (
      <>
          <UserHeader />
          <div className='bg-gradient-to-tr from-blue-100 to-white min-h-[100vh] p-5'>
              <div className='sm:mx-10 lg:mx-20'>
                  
                  <div className='flex flex-col sm:flex-row justify-between'>
                      <div>
                          <h1 className='text-[20px] sm:text-[25px] lg:text-[35px] font-bold text-blue-900'>My Orders</h1> 
                          <p className='text-[15px] sm:text-[17px] lg:text-[20px] font-semibold text-gray-700'>Track and manage all your orders in one place</p>
                      </div>
                      <div className='mt-2 sm:mt-0 w-[70%] sm:w-[60%] lg:w-[40%] bg-cyan-200 p-3 rounded-md flex shadow-2xl shadow-cyan-700'>
                          <div>
                              <h2 className='text-cyan-700 text-[15px] sm:text-[17px] lg:text-[20px] font-semibold'>Get 5% Off on your next order!</h2>
                              <button onClick={() => navigate("/userShopPage")} className='text-[13px] sm:text-[15px] lg:text-[17px] bg-cyan-600 mt-3 text-white font-semibold border-0 rounded-[3px] p-2'>Shop Now</button>
                          </div>
                              <img className='h-[130px] sm:h-[150px] lg:h-[200px] w-[50%]' src={OrderPageGiftBox} alt="gift box" />
                      </div>
                  </div>
                    
                  {
                      orderDatas.length !== 0 ? renderOrderedItems() : (
                          <div className='my-6 sm:my-10 flex flex-col justify-center items-center'>
                              <h2 className='text-[20px] sm:text-[30px] font-bold'>No Orders Yet, Order Something!</h2>
                              <img className="h-[300px] sm:h-[400px] lg:h-[500px]" src={NoOrderImage} alt="no order" />
                          </div>
                      )
                  }
              
              </div>
          </div>
          <UserFooter/>
      </>
  )
}
