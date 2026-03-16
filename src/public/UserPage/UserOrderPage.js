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
                    <li className='bg-white w-[70%] m-3 rounded-md shadow-2xl shadow-slate-600'>
                        <div className='flex justify-between p-3'>
                            <div className='flex min-w-[40%]'>
                                <img className='h-[100px] min-w-[30%]' src={`${url}/${eachItem.product.image.filePath}`} alt={eachItem.product.name} />
                                <div className='ml-5'>
                                    <p className='font-semibold text-gray-500'>{eachItem.product.brandName}</p>
                                    <h1 className='font-bold text-[18px] text-blue-950 mt-1'>{eachItem.product.name}</h1>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center'>
                                <p className='text-green-800 font-semibold text-[18px]'>₹{eachItem.totalPrice}</p>
                                <p className='text-gray-800 font-semibold text-[18px]'>Quantity: {eachItem.totalQuantity}</p>
                            </div>

                            <div className='flex flex-col justify-center'>
                                <button onClick={() => navigate(`/productDetail/${eachItem.product.productId}`)} className='border-[2px] border-gray-400 text-gray-700 p-1 rounded-[4px]'>View Details</button>
                            </div>
                        </div>

                        <p className='text-gray-700 font-semibold bg-gray-200 p-1 pl-2 rounded-md'>Placed On: {new Date(eachItem.createdAt).toLocaleDateString()}</p>
                    </li>
                ))
            }
        </ul>
    )


  return (
      <>
          <UserHeader />
          <div className='bg-gradient-to-tr from-blue-100 to-white min-h-[100vh] p-5'>
              <div className='mx-20'>
                  
                  <div className='flex justify-between'>
                      <div>
                          <h1 className='text-[35px] font-bold text-blue-900'>My Orders</h1> 
                          <p className='text-[20px] font-semibold text-gray-700'>Track and manage all your orders in one place</p>
                      </div>
                      <div className='w-[40%] bg-cyan-200 p-3 rounded-md flex shadow-2xl shadow-cyan-700'>
                          <div>
                              <h2 className='text-cyan-700 text-[20px] font-semibold'>Get 5% Off on your next order!</h2>
                              <button onClick={() => navigate("/userShopPage")} className='bg-cyan-600 mt-3 text-white font-semibold border-0 rounded-[3px] p-2'>Shop Now</button>
                          </div>
                              <img className='h-[200px] w-[50%]' src={OrderPageGiftBox} alt="gift box" />
                      </div>
                  </div>
                    
                  {
                      orderDatas.length !== 0 ? renderOrderedItems() : (
                          <div className='my-10 flex flex-col justify-center items-center'>
                              <h2 className='text-[30px] font-bold'>No Orders Yet, Order Something!</h2>
                              <img className="h-[500px]" src={NoOrderImage} alt="no order" />
                          </div>
                      )
                  }
              
              </div>
          </div>
          <UserFooter/>
      </>
  )
}
