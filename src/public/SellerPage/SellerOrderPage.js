import { useEffect, useState } from 'react'
import SellerHeader from './SellerHeader'
import SellerFooter from './SellerFooter'
import SellerOrderImage from "../../assets/SellerOrderImage.png"
import NoOrderImage from "../../assets/NoOrderImage.png"

export default function SellerOrderPage() {
    const [orderDetails, setOrderDetails] = useState([])

    const url = process.env.REACT_APP_URL
    useEffect(() => {
        getCompanyOrders()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[url])
    const getCompanyOrders = async () => {
        try {
            const options = {
                method: "GET",
                credentials: "include"
            }
            const response = await fetch(`${url}/api/getParticularCompanyOrders`, options)
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
                    <li className='bg-white w-[100%] xl:w-[70%] m-3 rounded-md shadow-2xl shadow-slate-600'>
                        <div className='sm:flex sm:justify-between p-3'>
                            <div className='lg:flex min-w-[30%] lg:min-w-[40%]'>
                                <img className='h-[70px] sm:h-[80px] lg:h-[100px] min-w-[50%] sm:min-w-[30%]' src={`${url}/${eachItem.product.image.filePath}`} alt={eachItem.product.name} />
                                <div className='lg:ml-5'>
                                    <p className='text-[12px] sm:text-[14px] lg:text-[18px] font-semibold text-gray-500'>{eachItem.product.brandName}</p>
                                    <h1 className='font-bold text-[14px] sm:text-[16px] lg:text-[20px] text-blue-950 mt-1'>{eachItem.product.name}</h1>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center text-[14px] sm:text-[16px] lg:text-[20px]'>
                                <p className='text-green-800 font-semibold'>₹{eachItem.totalPrice}</p>
                                <p className='text-gray-800 font-semibold '>Quantity: {eachItem.totalQuantity}</p>
                            </div>

                            <div className='mt-2 sm:mt-0 sm:flex sm:flex-col sm:justify-center'>
                                <button className='text-[13px] sm:text-[15px] lg:text-[17px] border-[2px] border-gray-400 text-gray-700 p-1 rounded-[4px]'>Mark as Shipped</button>
                            </div>

                            <div className='mt-2 sm:mt-0 sm:flex sm:flex-col sm:justify-center'>
                                <button className='text-[13px] sm:text-[15px] lg:text-[17px] border-[2px] border-red-400 text-red-400 p-1 rounded-[4px]'>Cancel Order</button>
                            </div>
                        </div>

                        <div className='flex bg-gray-200 p-1 pl-2 rounded-md text-[12px] sm:text-[14px] lg:text-[18px]'>
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
          <div className='bg-gradient-to-tr from-blue-100 to-white min-h-[100vh] p-3'>
              <div className=' mx-3 sm:mx-8 lg:mx-20 mt-[60px] sm:mt-[70px] lg:mt-[75px]'>
                  <div className='flex justify-between'>
                      <div className='flex flex-col justify-center'>
                          <h1 className='text-blue-900 text-[20px] sm:text-[25px] lg:text-[30px] font-bold italic'>Order Details</h1>
                          <p className='text-gray-600 text-[16px] sm:text-[18px] lg:text-[20px] font-semibold'>Review and manage the details of your company orders. Update the status, track shipping and communicate with customers.</p>
                      </div>
                      <img className="hidden sm:block h-[200px] lg:h-[300px] w-[50%] lg:w-[60%]" src={SellerOrderImage} alt='order' />
                  </div>

                  <div className='mt-4'>
                      <h2 className='font-semibold text-[18px] sm:text-[20px] lg:text-[25px] text-gray-600'>Orders</h2>
                      <hr className='border-t-[1px] border-gray-300 my-4' />

                       {
                         orderDetails.length !== 0 ? renderCompanyOrders() : (
                                <div className='my-7 lg:my-10 flex flex-col justify-center items-center'>
                                    <h2 className='text-[25px] lg:text-[30px] font-bold'>No Orders Yet!!</h2>
                                    <img className="h-[400px] lg:h-[500px]" src={NoOrderImage} alt="no order" />
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
