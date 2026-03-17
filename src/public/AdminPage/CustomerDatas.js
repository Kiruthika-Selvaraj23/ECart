import React, { useEffect, useState } from 'react'
import AdminHeader from './AdminHeader'
import AdminFooter from './AdminFooter'
import Profile from "../../assets/Profile.png"

export default function CustomerDatas() {
    const [customerDetails, setCustomerDetails] = useState([])
    const [sellerDetails, setSellerDetails] = useState([])

    useEffect(() => {
        getUserDatas()
    },[])

    const url = process.env.REACT_APP_URL
    const getUserDatas = async () => {
        try {
            const options = {
                method: "GET",
                credentials: "include"
            }
            const response = await fetch(`${url}/getUsers`, options)
            const data = await response.json()
            if (data.success) {
                const filterCustomerDatas = data.userDetails.filter(eachUser => eachUser.role === "user")
                setCustomerDetails(filterCustomerDatas)
                const filterSellerDatas = data.userDetails.filter(eachUser => eachUser.role === "seller")
                setSellerDetails(filterSellerDatas)
            }
            else {
                alert(data.message)
            }
        }
        catch (err) {
            alert("Trouble in getting user details")
        }
    }

    const deleteUser = async (personId) => {
        try {
            const option = {
                method: "DELETE",
                credentials: "include"
            }
            const response = await fetch(`${url}/deleteUser/${personId}`, option)
            const data = await response.json()
            if (data.success) {
                alert(data.message)
                getUserDatas()
            }
            else {
                alert(data.message)
            }
        }
        catch (err) {
            alert("Trouble in deleting user details")
        }
    }

  return (
      <>
          <AdminHeader />
          <div className='bg-gradient-to-tr from-blue-100 to-white min-h-[100vh] p-5'>
              <div className='mt-[90px] mx-20'>
                  <h2 className='text-blue-900 text-[30px] font-semibold'>Customer/User Datas</h2>
                  <hr className='border-t-[1px] border-gray-300 my-4' />
                  <ul className='flex flex-col'>
                      <li className='bg-gradient-to-b from-blue-50 to-blue-300 m-3 rounded-[5px]'>
                          <div className='flex justify-between text-[20px] text-blue-800 font-semibold max-w-[90%] mx-3 shadow-2xl shadow-blue-300'>
                              <h2 className='min-w-[25%] text-center m-3'>Profile</h2>
                              <h2 className=' min-w-[20%] text-center m-3 '>Role</h2>
                              <h2 className=' min-w-[20%] text-center m-3'>Email Id</h2>
                              <h2 className=' min-w-[20%] text-center m-3'>Contact No</h2>
                         </div>
                      </li>
                      {
                          customerDetails.map(eachUser => (
                              <li className='bg-white p-3 m-3 flex justify-between rounded-[5px]'>
                                  <div className='flex min-w-[25%]'>
                                      <img className='h-[50px]' src={Profile} alt="profile" />
                                      <div className='ml-3'>
                                          <p className='font-semibold text-[17px] text-blue-700'>Person Id: <span className='text-gray-700'>{eachUser.personId}</span></p>
                                          <p className='font-semibold text-[17px] text-blue-700 mt-2'>Customer Name: <span className='text-gray-700'>{eachUser.name}</span></p>
                                      </div>
                                 </div>
                                  <p className='text-[17px] text-gray-700 font-semibold min-w-[20%] text-center mt-3'>{eachUser.role}</p>
                                  <p className='text-[17px] text-gray-700 font-semibold min-w-[20%] text-center mt-3'>{eachUser.email}</p>
                                  <p className='text-[17px] text-gray-700 font-semibold min-w-[20%] text-center mt-3'>{eachUser.contactNo}</p>
                                  <button onClick={() => deleteUser(eachUser.personId)} className='border-2 border-red-600 text-red-600 p-2 rounded-sm h-[40px] mt-3'>Delete User</button>
                              </li>
                          ))
                      }
                      {
                          sellerDetails.map(eachUser => (
                              <li className='bg-white p-3 m-3 flex justify-between rounded-[5px]'>
                                  <div className='flex min-w-[25%]'>
                                      <img className='h-[50px]' src={Profile} alt="profile" />
                                      <div className='ml-3'>
                                          <p className='font-semibold text-[17px] text-blue-700'>Person Id: <span className='text-gray-700'>{eachUser.personId}</span></p>
                                          <p className='font-semibold text-[17px] text-blue-700 mt-2'>Customer Name: <span className='text-gray-700'>{eachUser.name}</span></p>
                                      </div>
                                  </div>
                                  <p className='text-[17px] text-gray-700 font-semibold min-w-[20%] text-center mt-3'>{eachUser.role}</p>
                                  <p className='text-[17px] text-gray-700 font-semibold min-w-[20%] text-center mt-3'>{eachUser.email}</p>
                                  <p className='text-[17px] text-gray-700 font-semibold min-w-[20%] text-center mt-3'>{eachUser.contactNo}</p>
                                  <button nClick={() => deleteUser(eachUser.personId)} className='border-2 border-red-600 text-red-600 p-2 rounded-sm h-[40px] mt-3'>Delete User</button>
                              </li>
                          ))
                      }
                  </ul>
                  
              </div>
          </div>
          <AdminFooter/>
      </>
  )
}
