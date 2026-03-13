import React, { useContext, useEffect, useState } from 'react'
import SellerHeader from './SellerHeader'
import SellerFooter from './SellerFooter'
import { DContext } from '../../Store/MyContext'

export default function ProductPage() {
    const [companyProducts, setCompanyProducts] = useState([])
    const [showProductFrom, setProductForm] = useState(false)
    const [brandName, setBrandName] = useState("")
    const [productName, setProductName] = useState("")
    const [desc, setDesc] = useState("")
    const [mrp, setMrp] = useState("")
    const [originalPrice, setOriginalPrice] = useState("")
    const [discount, setDiscount] = useState("")
    const [quantity, setQuantity] = useState(0)
    const [productImage, setProductImage] = useState(null)
    const [btnName, setBtnName] = useState("Add Product")
    const [editProductId, setEditProductId] = useState(null)
    const [productPrevImg, setProductPrevImg] = useState(true)
     
    const { userDetails } = useContext(DContext)

    useEffect(() => {
        getCompanyProducts()
    },[])

    const url = process.env.REACT_APP_URL
    const getCompanyProducts = async () => {
        try {
            const option = {
                method: "GET",
                credentials: "include"
            }
            const response = await fetch(`${url}/getCompanyProducts`, option)
            const data = await response.json()
            if (data.success) {
                setCompanyProducts(data.companyProducts)
            }
            else {
                alert(data.message)
            }
        } catch (err) {
            alert("Err in getting company producs")
        }
    }

    const submitProduct = async () => {
        try {
            const formData = new FormData()
            formData.append("brandName", brandName)
            formData.append("productName", productName)
            formData.append("productDesc", desc)
            formData.append("currentPrice", mrp)
            formData.append("productOriginalPrice", originalPrice)
            formData.append("discount", discount)
            formData.append("productQuantity", quantity)
            formData.append("product", productImage)

            const options = {
                method: "POST",
                credentials: "include",
                body: formData
            }
            const response = await fetch(`${url}/product`, options)
            const data = await response.json()
            if (data.success) {
                alert("Product posted successfully")
                setBrandName("")
                setProductName("")
                setDesc("")
                setMrp("")
                setOriginalPrice("")
                setDiscount("")
                setQuantity(0)
                setProductImage(null)
                getCompanyProducts()
            }
            else {
                alert(data.message)
            }
        }
        catch (err) {
            alert("Trouble in Posting Product")
        }
    }

    const updateProduct = async () => {
        try {
            const formData = new FormData()
            formData.append("brandName", brandName)
            formData.append("productName", productName)
            formData.append("productDesc", desc)
            formData.append("currentPrice", mrp)
            formData.append("productOriginalPrice", originalPrice)
            formData.append("discount", discount)
            formData.append("productQuantity", quantity)
            formData.append("product", productImage)

            const options = {
                method: "PUT",
                credentials: "include",
                body: formData
            }
            const response = await fetch(`${url}/updateProduct/${editProductId}`, options)
            const data = await response.json()
            if (data.success) {
                alert("Product updated successfully")
                setBrandName("")
                setProductName("")
                setDesc("")
                setMrp("")
                setOriginalPrice("")
                setDiscount("")
                setQuantity(0)
                setProductImage(null)
                setBtnName("Add Product")
                getCompanyProducts()
            } else {
                alert(data.message)
            }
        } catch (err) {
            alert("Trouble in updating products")
        }
    }

    const deleteProduct = async (productId) => {
        try {
            const options = {
                method: "DELETE",
                credentials: "include"
            }
            const response = await fetch(`${url}/deleteProduct/${productId}`, options)
            const data = await response.json()
            if (data.success) {
                alert(data.message)
                getCompanyProducts()
            } else {
                alert(data.message)
            }
      } catch(err){
        alert("Trouble in deleting product")
      }
    }

  
    const clickFormBtn = () => {
        if (btnName === "Add Product") {
            submitProduct()
        } else if (btnName === "Save") {
            updateProduct()
        }
    }

    const clickEditProductBtn = (item) => {
        setProductForm(true)
        setBrandName(item.brandName)
        setProductName(item.name)
        setDesc(item.desc)
        setMrp(item.price)
        setOriginalPrice(item.originalPrice)
        setDiscount(item.discount)
        setQuantity(item.quantity)
        setProductImage(item.image.filePath)    
        setBtnName("Save")
        setEditProductId(item.productId)
        setProductPrevImg(true)
    }

    const clickCancenlBtn = () => {
        setProductForm(false)
        setBrandName("")
        setProductName("")
        setDesc("")
        setMrp("")
        setOriginalPrice("")
        setDiscount("")
        setQuantity(0)
        setProductImage(null)
        setBtnName("Add Product")
    }

    const renderProductForm = () => (
        <div id="addProduct-form" className='bg-slate-50 p-5 rounded-md shadow-2xl shadow-gray-700 mt-7 mb-10'>
            <h2 className='text-[25px] font-semibold text-gray-800'>Add New Product</h2>
            <p className='text-[15px] font-semibold text-gray-600 mt-2'>Fill in the details below to add a new product.</p>
            <hr className='border-t-[1px] border-gray-300 my-4' />

            <form>
                <h2 className='text-[20px] font-semibold text-gray-800'>Product Information</h2>
                <div className='my-3'>
                    <label className='text-[15px] inline-block min-w-[150px] font-semibold text-gray-600 mt-2' htmlFor='brandName'>Brand Name:</label>
                    <input onChange={(event) => setBrandName(event.target.value)} value={brandName} className='ml-5 pl-2 p-[2px] w-[70%] outline-none border-[1px] border-gray-400 rounded-[4px]' id="brandName" placeholder='Enter Brand name' type='text' />
                </div>

                <div className='my-3'>
                    <label className='text-[15px] inline-block min-w-[150px] font-semibold text-gray-600 mt-2' htmlFor='productName'>Product Name:</label>
                    <input onChange={(event) => setProductName(event.target.value)} value={productName} className='ml-5 pl-2 p-[2px] min-w-[70%] outline-none border-[1px] border-gray-400 rounded-[4px]' id="productName" placeholder='Enter product name' type='text' />
                </div>

                <div className='my-3 flex justify-start'>
                    <label className='text-[15px] inline-block min-w-[150px] font-semibold text-gray-600 mt-2' htmlFor='desc'>Description:</label>
                    <textarea onChange={(event) => setDesc(event.target.value)} value={desc} row="40" col="5" className='ml-5 pl-2 p-[2px] min-w-[70%] outline-none border-[1px] border-gray-400 rounded-[4px]' id="desc" placeholder='Enter description' type='text' />
                </div>
                <hr className='border-t-[1px] border-gray-300 my-4' />

                <h2 className='text-[20px] font-semibold text-gray-800'>Pricing</h2>
                <div className='my-3'>
                    <label className='text-[15px] inline-block min-w-[150px] font-semibold text-gray-600 mt-2' htmlFor='MRP'>MRP:</label>
                    <input onChange={(event) => setMrp(event.target.value)} value={mrp} className='ml-5 pl-2 p-[2px] w-[70%] outline-none border-[1px] border-gray-400 rounded-[4px]' id="MRP" placeholder='Enter MRP' type='text' />
                </div>

                <div className='my-3'>
                    <label className='text-[15px] inline-block min-w-[150px] font-semibold text-gray-600 mt-2' htmlFor='originalPrice'>Original Price:</label>
                    <input onChange={(event) => setOriginalPrice(event.target.value)} value={originalPrice} className='ml-5 pl-2 p-[2px] min-w-[70%] outline-none border-[1px] border-gray-400 rounded-[4px]' id="originalPrice" placeholder='Enter original price' type='text' />
                </div>

                <div className='my-3'>
                    <label className='text-[15px] inline-block min-w-[150px] font-semibold text-gray-600 mt-2' htmlFor='discount'>Discount:</label>
                    <input onChange={(event) => setDiscount(event.target.value)} value={discount} className='ml-5 pl-2 p-[2px] min-w-[70%] outline-none border-[1px] border-gray-400 rounded-[4px]' id="discount" placeholder='Enter discount' type='text' />
                </div>
                <hr className='border-t-[1px] border-gray-300 my-4' />

                <h2 className='text-[20px] font-semibold text-gray-800'>Quantity</h2>
                <div className='my-3'>
                    <label className='text-[15px] inline-block min-w-[150px] font-semibold text-gray-600 mt-2' htmlFor='stock'>Stock Quantity:</label>
                    <input onChange={(event) => setQuantity(event.target.value)} value={quantity} className='ml-5 pl-2 p-[2px] w-[70%] outline-none border-[1px] border-gray-400 rounded-[4px]' id="stock" placeholder='Enter stock' type='number' />
                </div>
                <hr className='border-t-[1px] border-gray-300 my-4' />

                <h2 className='text-[20px] font-semibold text-gray-800'>Product Image</h2>
                {
                    productPrevImg ? <img className='ml-5 h-[200px] w-[30%] my-3' src={`${url}/${productImage}`} alt="product"/> : null
                }
                <div className='my-3'>
                    <input onChange={(event) => { setProductImage(event.target.files[0]);  setProductPrevImg(false)}} className='ml-5 pl-4 p-[2px] w-[83%] outline-none border-[1px] border-gray-400 rounded-[4px] file:bg-blue-900 file:text-white
                    file:border-0 file:rounded-sm file:h-[35px] file:font-semibold file:my-2'  type='file' />
                </div>
            </form>
            <div className='flex justify-end mt-4'>
                <button onClick={() => clickCancenlBtn()} className='border-[1px] border-gray-400 p-2 rounded-[4px] text-gray-700 font-semibold'>Cancel</button>
                <button onClick={() => clickFormBtn()} className='ml-5 p-2 text-white rounded-[5px] font-semibold bg-gradient-to-t from-blue-800 to-blue-500'>{btnName}</button>
            </div>

        </div>
    )


  return (
      <>
          <SellerHeader />
          <div className='bg-gradient-to-tr from-blue-100 to-white min-h-[100vh] p-5'>
              <div className='mt-[90px] mx-20'>
                  <div className='flex justify-between'>
                      <div>
                          <h1 className='text-[30px] font-bold text-blue-800'>Your Products</h1>
                          <p className='text-gray-700 font-semibold text-[17px] mt-2'>Manage and update all your products in one place</p>
                      </div>
                      <div>
                          <button onClick={() => {setProductForm(true); setProductPrevImg(false) }} className='p-2 text-white rounded-[5px] font-semibold bg-gradient-to-t from-blue-800 to-blue-500 my-4'>Add Product +</button>
                      </div>
                  </div>

                  <div className='mt-7'>
                      <h1 className='text-[30px] mt-2 text-blue-950 font-semibold'>CompanyName: {userDetails?.companyName}</h1>
                      <hr className='border-t-[1px] border-gray-300 my-4'/>
                  </div>

                  {showProductFrom ? renderProductForm() : null}

                  <div>
                      <h2 className='text-[20px] font-semibold text-gray-600 mb-4'>Your Company Products :-</h2>
                      <ul className='flex justify-between flex-wrap'>
                          {
                              companyProducts.map(eachItem => (
                                  <li key={eachItem.productId} className='min-w-[30%] bg-slate-50 shadow-2xl shadow-gray-700 rounded-md p-3 m-2'>
                                      <div>
                                          <img className='h-[200px] w-full' src={`${url}/${eachItem.image.filePath}`} alt={eachItem.name} />
                                          <h2 className='text-gray-500 font-semibold text-[15px]'>{eachItem.brandName}</h2>
                                          <p className='font-bold'>{eachItem.name}</p>
                                          <div className='flex'>
                                              <p className='font-semibold text-gray-600'>Price: <span className='line-through'>{eachItem.originalPrice}</span></p>
                                              <p className='ml-3 text-blue-800 font-semibold'>{eachItem.price}</p>
                                              <p className='ml-3 text-green-900 font-semibold'>{eachItem.discount}% discount</p>
                                          </div>
                                          <p className='font-semibold text-gray-600'>Quantity: <span className='text-black'>{eachItem.quantity}</span></p>

                                      </div>
                                      <div className='flex flex-col items-end mt-2'>
                                          <button onClick={() => clickEditProductBtn(eachItem)} className='w-[150px] bg-gradient-to-t from-cyan-800 to-sky-500 focus:from-indigo-800 focus:to-violet-900 font-semibold p-2 rounded-[5px] text-white'>Edit Product</button>
                                          <button onClick={() => deleteProduct(eachItem.productId)} className=' mt-2 w-[150px] bg-gradient-to-r from-red-800 to-red-400 focus:from-indigo-800 focus:to-violet-900 font-semibold p-2 rounded-[5px] text-white'>Delete Product</button>
                                      </div>

                                  </li>
                              ))
                          }
                      </ul>

                  </div>
                  
                </div>
          </div>
          <SellerFooter/>
      </>
  )
}
