import React, { useEffect, useState } from 'react'
import SellerHeader from './SellerHeader'
import SellerFooter from './SellerFooter'
import SellerOrderImage from "../../assets/SellerOrderImage.png"
import NoOrderImage from "../../assets/NoOrderImage.png"

export default function SellerOrderPage() {
    const [orderDetails, setOrderDetails] = useState([])

    useEffect(() => {
        getCompanyOrders()
    },[])

    const url = process.env.REACT_APP_URL
    const getCompanyOrders = async () => {
        try {
            const options = {
                method: "GET",
                credentials: "include"
            }
            const response = await fetch(`${url}/getParticularCompanyOrders`, options)
            const data = await response.json()
            if (data.success) {
                setOrderDetails(data.orderDetails)
            }
            else {
                alert(data.message)
            }
        }
        catch (err) {
            alert("Trouble in getting company orders")
        }
    }


    const renderCompanyOrders = () => (
        <ul>
            {
                orderDetails.map(eachItem => (
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
                                <button className='border-[2px] border-gray-400 text-gray-700 p-1 rounded-[4px]'>Mark as Shipped</button>
                            </div>

                            <div className='flex flex-col justify-center'>
                                <button className='border-[2px] border-red-400 text-red-400 p-1 rounded-[4px]'>Cancel Order</button>
                            </div>
                        </div>

                        <div className='flex bg-gray-200 p-1 pl-2 rounded-md'>
                            <p className='text-gray-700 font-semibold'>User mail id: {eachItem.userEmailId}</p>
                            <p className='text-gray-700 font-semibold ml-5'>Ordered On: {new Date(eachItem.createdAt).toLocaleDateString()}</p>
                        </div>

                    </li>
                ))
            }  
        </ul>
    )

  return (
      <>
          <SellerHeader/>
          <div className='bg-gradient-to-tr from-blue-100 to-white min-h-[100vh] p-5'>
              <div className='mx-20 mt-[90px]'>
                  <div className='flex justify-between'>
                      <div className='flex flex-col justify-center'>
                          <h1 className='text-blue-900 text-[30px] font-bold italic'>Order Details</h1>
                          <p className='text-gray-600 text-[20px] font-semibold'>Review and manage the details of your company orders. Update the status, track shipping and communicate with customers.</p>
                      </div>
                      <img className="h-[300px] w-[60%]" src={SellerOrderImage} alt='order' />
                  </div>

                  <div>
                      <h2 className='font-semibold text-[25px] text-gray-600'>Orders</h2>
                      <hr className='border-t-[1px] border-gray-300 my-4' />

                       {
                         orderDetails.length !== 0 ? renderCompanyOrders() : (
                                <div className='my-10 flex flex-col justify-center items-center'>
                                    <h2 className='text-[30px] font-bold'>No Orders Yet!!</h2>
                                    <img className="h-[500px]" src={NoOrderImage} alt="no order" />
                                </div>
                            )
                        }
                  </div>
              </div>
          </div>
          <SellerFooter/>
      </>
  )
}
