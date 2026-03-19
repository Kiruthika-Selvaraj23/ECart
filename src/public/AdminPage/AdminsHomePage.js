import React from 'react'
import AdminHeader from './AdminHeader'
import AdminFooter from './AdminFooter'
import AdminHomeImage from "../../assets/AdminHomeImage.jpeg"
import FreeDelivery from "../../assets/Freedelivery.png"
import Payment from "../../assets/SecurePayment.png"
import EasyReturn from "../../assets/EasyReturn.png"
import CustomerSupport from "../../assets/CallSupport.png"
import ManageProducts from "../../assets/ManageProducts.png"
import CustomerManagement from '../../assets/CustomerManagement.png'
import SalesReport from "../../assets/SalesReport.jpeg"
import EasyOrder from "../../assets/EasyOrder.png"
import ProductManagement from "../../assets/ProductManagement.png"
import SalesRevenue from "../../assets/Sales&Revenue.png"
import SecureReliable from "../../assets/Secure&Reliable.png"


export default function AdminsHomePage() {
  return (
      <>
          <AdminHeader />
          <div className='bg-gradient-to-tr from-blue-100 to-white min-h-[100vh] p-3'>
              <div className='mx-3 sm:mx-8 lg:mx-20 mt-[60px] sm:mt-[70px] lg:mt-[75px]'>
                  <div className='flex justify-between'>
                      <div className='flex flex-col justify-center'>
                          <h1 className='text-[22px] sm:text-[25px] lg:text-[30px] font-bold italic'>Welcome to <span className='text-blue-900'>eCart</span> Admin!</h1>
                          <p className='text-[16px] sm:text-[18px] lg:text-[20px] font-semibold text-gray-600'>Effectiently manage your e-commerce store with ECart. Monitor, track and grow your business</p>
                      </div>
                      <img className='hidden sm:block h-[250x] lg:h-[300px] w-[50%] lg:w-[60%]' src={AdminHomeImage} alt='admin' />
                  </div>

                  <ul className='flex justify-between flex-wrap my-5'>
                      <li className='p-3 bg-blue-200 rounded-md min-w-[25%] m-3'>
                          <img className='h-[70px] sm:h-[80px] lg:h-[100px] w-full' src={ManageProducts} alt="products" />
                          <h1 className='text-blue-800 text-[16px] sm:text-[18px] lg:text-[20px] font-semibold'>Manage Products</h1>
                          <p className='text-gray-600 text-[13px] lg:text-[15px] font-semibold'>500+ total products</p>
                          <button className='text-[13px] sm:text-[15px] lg:text-[17px] my-2 lg:my-3 text-white bg-gradient-to-t from-blue-600 to-blue-500 border-0 p-2 rounded-sm font-semibold '>View Products</button>
                      </li>

                      <li className='p-3 bg-green-200 rounded-md min-w-[25%] m-3'>
                          <img className='h-[70px] sm:h-[80px] lg:h-[100px] w-full' src={CustomerManagement} alt="customers" />
                          <h1 className='text-green-800 text-[16px] sm:text-[18px] lg:text-[20px] font-semibold'>Customer Management</h1>
                          <p className='text-gray-600 text-[13px] lg:text-[15px] font-semibold'>1000+ registered Customers</p>
                          <button className='text-[13px] sm:text-[15px] lg:text-[17px] my-3 text-white bg-gradient-to-t from-green-600 to-green-500 border-0 p-2 rounded-sm font-semibold '>View Customers</button>
                      </li>

                      <li className='p-3 bg-orange-200 rounded-md min-w-[25%] m-3'>
                          <img className='h-[70px] sm:h-[80px] lg:h-[100px] w-full' src={SalesReport} alt="reports" />
                          <h1 className='text-orange-800 text-[16px] sm:text-[18px] lg:text-[20px] font-semibold'>Sales Reports</h1>
                          <p className='text-gray-600 text-[13px] lg:text-[15px] font-semibold'>INR 1,20,987 in sales this week</p>
                          <button className='text-[13px] sm:text-[15px] lg:text-[17px] my-3 text-white bg-gradient-to-t from-orange-600 to-orange-500 border-0 p-2 rounded-sm font-semibold '>View Reports</button>
                      </li>
                  </ul>

                  <div>
                      <h1 className='text-blue-700 text-[19px] sm:text-[22px] lg:text-[25px] font-semibold'>Manage Your Store with ECart</h1>
                      <p className='text-gray-600 text-[13px] sm:text-[15px] lg:text-[17px] font-semibold'>ECart helps you easily manage your online store with powerful tools to optimize sales and streamline operations.</p>

                      <ul className='flex justify-between flex-wrap my-3 sm:my-5'>
                          <li className='p-3 bg-white rounded-md max-w-[42%] sm:max-w-[40%] lg:min-w-[25%] m-3'>
                              <img className='h-[60px] sm:h-[100px] lg:h-[130px] w-full' src={EasyOrder} alt="products" />
                              <h1 className='text-gray-800 text-[15px] sm:text-[18px] lg:text-[20px] font-semibold'>Easy Order Manage..</h1>
                              <p className='text-gray-600 text-[12px] sm:text-[13px] lg:text-[15px] font-semibold'>Track and update orders seamlessly.</p>
                          </li>

                          <li className='p-3 bg-orange-200 rounded-md max-w-[40%] lg:min-w-[25%] m-3'>
                              <img className='h-[60px] sm:h-[100px] lg:h-[130px] w-full' src={ProductManagement} alt="products" />
                              <h1 className='text-blue-800 text-[15px] sm:text-[18px] lg:text-[20px] font-semibold'>Product Management</h1>
                              <p className='text-gray-600 text-[12px] sm:text-[13px] lg:text-[15px] font-semibold'>Add, update and organize products.</p>
                          </li>

                          <li className='p-3 bg-green-200 rounded-md max-w-[40%] lg:min-w-[25%] m-3'>
                              <img className='h-[60px] sm:h-[100px] lg:h-[130px] w-full' src={SalesRevenue} alt="products" />
                              <h1 className='text-green-800 text-[15px] sm:text-[18px] lg:text-[20px] font-semibold'>Sales & Revenue Analysis</h1>
                              <p className='text-gray-600 text-[12px] sm:text-[13px] lg:text-[15px] font-semibold'>Monitor sales and revenue performance.</p>
                          </li>

                          <li className='p-3 bg-blue-200 rounded-md max-w-[40%] lg:min-w-[25%] m-3'>
                              <img className='h-[60px] sm:h-[100px] lg:h-[130px] w-full' src={SecureReliable} alt="products" />
                              <h1 className='text-orange-800 text-[15px] sm:text-[18px] lg:text-[20px] font-semibold'>Secure & Reliable</h1>
                              <p className='text-gray-600 text-[12px] sm:text-[13px] lg:text-[15px] font-semibold'>Ensure secure transactions</p>
                          </li>
                      </ul>

                      <div className='my-9 text-center'>
                          <h1 className='text-blue-700 text-[19px] sm:text-[22px] lg:text-[25px] font-semibold'>Empower Your Business with ECart</h1>
                          <p className='text-gray-600 text-[13px] sm:text-[15px] lg:text-[17px] font-semibold'>Empower Your Business with the powerful and easy-to-use admin tools of ECart.</p>
                          <div className='flex justify-between flex-wrap lg:flex-nowrap mt-4'>
                              <div className='flex justify-center w-[80%] sm:w-[42%] lg:w-[35%] xl:w-[25%] bg-white p-2 rounded-md shadow-2xl shadow-slate-700 m-2'>
                                  <img className='h-[40px] sm:h-[50px] lg:h-[60px]' src={FreeDelivery} alt="free delivery" />
                                  <div className='min-w-[70%] ml-3 lg:ml-5'>
                                      <h1 className='text-blue-500 font-semibold text-[15px] sm:text-[16px] lg:text-[18px]'>Free Shipping</h1>
                                      <p className='text-gray-600 text-[12px] sm:text-[13px] lg:text-[15px] mt-2'>On Orders Over Rs 500/-</p>
                                  </div>
                              </div>
                              <div className='flex justify-center w-[80%] sm:w-[42%] lg:w-[35%] xl:w-[25%] bg-white p-2 rounded-md shadow-2xl shadow-slate-700 m-2'>
                                  <img className='h-[30px] lg:h-[40px] mt-2' src={Payment} alt="free delivery" />
                                  <div className='min-w-[70%] ml-3 lg:ml-5'>
                                      <h1 className='text-blue-500 font-semibold  text-[15px] sm:text-[16px] lg:text-[18px]'>Secure Paymnet</h1>
                                      <p className='text-gray-600 text-[12px] sm:text-[13px] lg:text-[15px] mt-2'>100% Safe and Secure</p>
                                  </div>
                              </div>
                              <div className='flex justify-center w-[80%] sm:w-[42%] lg:w-[35%] xl:w-[25%] bg-white p-2 rounded-md shadow-2xl shadow-slate-700 m-2'>
                                  <img className='h-[30px] lg:h-[40px] mt-2' src={EasyReturn} alt="free delivery" />
                                  <div className='min-w-[70%] ml-3 lg:ml-5'>
                                      <h1 className='text-blue-500 font-semibold  text-[15px] sm:text-[16px] lg:text-[18px]'>Easy Return</h1>
                                      <p className='text-gray-600 text-[12px] sm:text-[13px] lg:text-[15px] mt-2'>7 Days Return</p>
                                  </div>
                              </div>
                              <div className='flex justify-center w-[80%] sm:w-[42%] lg:w-[35%] xl:w-[25%] bg-white p-2 rounded-md shadow-2xl shadow-slate-700 m-2'>
                                  <img className='h-[30px] lg:h-[40px] mt-2' src={CustomerSupport} alt="free delivery" />
                                  <div className='min-w-[70%] ml-3 lg:ml-5'>
                                      <h1 className='text-blue-500 font-semibold  text-[15px] sm:text-[16px] lg:text-[18px]'>24/7 Support</h1>
                                      <p className='text-gray-600 text-[12px] sm:text-[13px] lg:text-[15px] mt-2'>Customer Care</p>
                                  </div>
                              </div>
                        </div>
                      </div>

                  </div>
                  
             </div>
          </div>
          <AdminFooter/>
      </>
  )
}
