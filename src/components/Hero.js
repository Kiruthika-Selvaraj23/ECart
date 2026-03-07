import React, { useState } from 'react'
import "../App.css"

export default function Hero() {
  const [productsData, setProductsData] = useState([])

  const url = process.env.REACT_APP_URL
  const getProductsData = async () => {
    try {
      const options = {
        method: "GET",
        credentials: 'include'
      }
      const fetchData = await fetch(`${url}/getProducts`, options)
      const data = await fetchData.json()
      if (data.success) {
        alert(data.message)
        setProductsData(data.productDetails)
      } else {
        alert(data.message)
      }
     }
      catch(err)
      {
        console.log("Trouble in connecting the server", err)
      }
  }

  return (
      <div className='bg-slate-50 p-3 pb-7 min-h-[100vh]'>
      <div className=' flex flex-col justify-start items-center'>
        <h1 className='text-center text-[30px] font-semibold'>Products Data</h1>
        <button onClick={() => getProductsData()} className='bg-blue-600 p-2 rounded-[5px] text-white mt-3'>Get Products Data</button>
      </div>
      <div>
        <h2 className='text-[25px] font-semibold'>Products</h2>
        <ul className='flex justify-between flex-wrap'>
          {
            productsData.map(eachItem => (
              <li className='bg-white shadow-2xl shadow-gray-800 p-3 max-w-[30%] mt-5 rounded-md'>
                <h1 className='text-[20px] font-semibold'>{eachItem.name}</h1>
                <p className='text-gray-600'>{eachItem.desc}</p>
                <p>Price: {eachItem.price}</p>
                <p>Quantity: {eachItem.quantity}</p>
              </li>
            ))
          }
        </ul>
      </div>
      
    </div>
  )
}
