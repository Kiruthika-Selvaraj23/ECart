import { useEffect, useState } from 'react'
import AdminHeader from './AdminHeader'
import AdminFooter from './AdminFooter'
import Profile from "../../assets/Profile.png"

export default function CustomerDatas() {
    const [customerDetails, setCustomerDetails] = useState([])
    const [sellerDetails, setSellerDetails] = useState([])


    useEffect(() => {
        getUserDatas()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
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
          <div className='bg-gradient-to-tr from-blue-100 to-white min-h-[100vh] p-3'>
              <div className='mx-3 sm:mx-8 lg:mx-20 mt-[60px] sm:mt-[70px] lg:mt-[75px]'>
                  <h2 className='text-blue-900 text-[20px] sm:text-[25px] lg:text-[30px] font-semibold'>Customer / User Datas</h2>
                  <hr className='border-t-[1px] border-gray-300 my-4' />
                  <ul className='flex flex-col'>
                      <li className='hidden sm:block bg-gradient-to-b from-blue-50 to-blue-300 m-3 rounded-[5px]'>
                          <div className='flex justify-between text-[15px] sm:text-[17px] lg:text-[20px] text-blue-800 font-semibold max-w-[90%] mx-3 shadow-2xl shadow-blue-300'>
                              <h2 className='min-w-[25%] text-center m-3'>Profile</h2>
                              <h2 className='min-w-[20%] text-center m-3 '>Role</h2>
                              <h2 className='min-w-[20%] text-center m-3'>Email Id</h2>
                              <h2 className='min-w-[20%] text-center m-3'>Contact No</h2>
                         </div>
                      </li>
                      {
                          customerDetails.map(eachUser => (
                              <li className='bg-white p-3 m-3 sm:flex sm:justify-between rounded-[5px] shadow-2xl shadow-slate-600 sm:shadow-none'>
                                  <div className='lg:flex min-w-[25%]'>
                                      <img className='h-[40px] lg:h-[50px]' src={Profile} alt="profile" />
                                      <div className='lg:ml-3 text-[15px] lg:text-[17px]'>
                                          <p className='font-semibold text-blue-700'>Person Id: <span className='text-gray-700'>{eachUser.personId}</span></p>
                                          <p className='font-semibold text-blue-700 mt-2'>Customer Name: <span className='text-gray-700'>{eachUser.name}</span></p>
                                          <button onClick={() => deleteUser(eachUser.personId)} className='hidden sm:block lg:hidden text-[13px] sm:text-[15px] w-[100px] xl:w-[100px] border-2 border-red-600 text-red-600 p-1 lg:p-2 rounded-sm h-[35px] lg:h-[40px] mt-3'>Delete User</button>
                                      </div>
                                 </div>
                                  <p className='text-[15px] lg:text-[17px] text-blue-700 sm:text-gray-700 font-semibold sm:min-w-[20%] sm:text-center mt-3'><span className='text-gray-700 inline sm:hidden'>Role: </span>{eachUser.role}</p>
                                  <p className='text-[15px] lg:text-[17px] text-blue-700 sm:text-gray-700 font-semibold min-w-[20%] sm:text-center mt-3'><span className='text-gray-700 inline sm:hidden'>Email Id: </span>{eachUser.email}</p>
                                  <p className='text-[15px] lg:text-[17px] text-blue-700 sm:text-gray-700 font-semibold min-w-[20%] sm:text-center mt-3'><span className='text-gray-700 inline sm:hidden'>Contact No: </span>{eachUser.contactNo}</p>
                                  <button onClick={() => deleteUser(eachUser.personId)} className='block sm:hidden lg:block text-[13px] sm:text-[15px] w-[100px] xl:w-[100px] border-2 border-red-600 text-red-600 p-1 sm:p-2 rounded-sm h-[30px] sm:h-[40px] mt-3'>Delete User</button>
                              </li>
                          ))
                      }
                      {
                          sellerDetails.map(eachUser => (
                              <li className='bg-white p-3 m-3 sm:flex sm:justify-between rounded-[5px]'>
                                  <div className='lg:flex min-w-[25%]'>
                                      <img className='h-[40px] lg:h-[50px]' src={Profile} alt="profile" />
                                      <div className='lg:ml-3  text-[15px] lg:text-[17px]'>
                                          <p className='font-semibold text-blue-700'>Person Id: <span className='text-gray-700'>{eachUser.personId}</span></p>
                                          <p className='font-semibold text-blue-700 mt-2'>Customer Name: <span className='text-gray-700'>{eachUser.name}</span></p>
                                          <button onClick={() => deleteUser(eachUser.personId)} className='hidden sm:block lg:hidden text-[13px] sm:text-[15px] w-[100px] xl:w-[100px] border-2 border-red-600 text-red-600 p-1 lg:p-2 rounded-sm h-[35px] lg:h-[40px] mt-3'>Delete User</button>
                                      </div>
                                  </div>
                                  <p className=' text-[15px] lg:text-[17px] text-blue-700 sm:text-gray-700 font-semibold min-w-[20%] sm:text-center mt-3'><span className='text-gray-700 inline sm:hidden'>Role: </span>{eachUser.role}</p>
                                  <p className=' text-[15px] lg:text-[17px] text-blue-700 sm:text-gray-700 font-semibold min-w-[20%] sm:text-center mt-3'><span className='text-gray-700 inline sm:hidden'>Email Id: </span>{eachUser.email}</p>
                                  <p className=' text-[15px] lg:text-[17px] text-blue-700 sm:text-gray-700 font-semibold min-w-[20%] sm:text-center mt-3'><span className='text-gray-700 inline sm:hidden'>Contact No: </span>{eachUser.contactNo}</p>
                                  <button onClick={() => deleteUser(eachUser.personId)} className='block sm:hidden lg:block text-[13px] sm:text-[15px] w-[120px] xl:w-[100px] border-2 border-red-600 text-red-600 p-1 sm:p-2 rounded-sm h-[30px] sm:h-[40px] mt-3'>Delete User</button>
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
