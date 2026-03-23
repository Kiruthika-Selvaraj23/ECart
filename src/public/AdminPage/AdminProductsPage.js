import { useEffect, useState } from 'react'
import AdminHeader from './AdminHeader'
import AdminFooter from './AdminFooter'
import FreeDeliveryIcon from "../../assets/FreeDeliveryIcon.png"
import RatingStar from "../../assets/RatingStar.png"


export default function AdminProductsPage() {
    const [productDatas, setProductDatas] = useState([])
    const [showProductFrom, setProductForm] = useState(false)

    const [brandName, setBrandName] = useState("")
    const [productName, setProductName] = useState("")
    const [desc, setDesc] = useState("")
    const [mrp, setMrp] = useState("")
    const [originalPrice, setOriginalPrice] = useState("")
    const [discount, setDiscount] = useState("")
    const [quantity, setQuantity] = useState(0)
    const [productImage, setProductImage] = useState(null)
    const [editProductId, setEditProductId] = useState(null)
    const [productPrevImg, setProductPrevImg] = useState(true)

    const [brandNameErr, setBrandNameErr] = useState("")
    const [productNameErr, setProductNameErr] = useState("")
    const [descErr, setDescErr] = useState("")
    const [mrpErr, setMrpErr] = useState("")
    const [originalPriceErr, setOriginalPriceErr] = useState("")
    const [discountErr, setDiscountErr] = useState("")
    const [quantityErr, setQuantityErr] = useState("")
    const [productImageErr, setProductImageErr] = useState(null)

    

    const url = process.env.REACT_APP_URL
    
        useEffect(() => {
            getProductsData()
        }, [])
        
        const getProductsData = async () => {
            try {
                const url = process.env.REACT_APP_URL
                const options = {
                    method: "GET",
                    credentials: "include"
                }
                const response = await fetch(`${url}/getProducts`, options)
                const data = await response.json()
                if (data.success) {
                    setProductDatas(data.productDetails)
                }
                else {
                    alert(data.message)
                }
            } catch (err) {
                alert("Trouble in getting products")
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
                getProductsData()
            } else {
                alert(data.message)
            }
        } catch (err) {
            alert("Trouble in updating products")
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
        setBrandNameErr("")
        setProductNameErr("")
        setDescErr("")
        setMrpErr("")
        setOriginalPriceErr("")
        setDiscountErr("")
        setQuantityErr("")
        setProductImageErr("")
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
                getProductsData()
            } else {
                alert(data.message)
            }
        } catch (err) {
            alert("Trouble in deleting product")
        }
    }


    const renderProductForm = () => (
        <div id="addProduct-form" className='bg-slate-50 p-5 rounded-md shadow-2xl shadow-gray-700 mt-7 mb-10'>
            <h2 className='text-[20px] sm:text-[22px] lg:text-[25px] font-semibold text-gray-800'>Add New Product</h2>
            <p className='text-[13px] lg:text-[15px] font-semibold text-gray-600 mt-2'>Fill in the details below to add a new product.</p>
            <hr className='border-t-[1px] border-gray-300 my-4' />

            <form>
                <h2 className='text-[16px] sm:text-[18px] lg:text-[20px] font-semibold text-gray-800'>Product Information</h2>
                <div className='my-3'>
                    <label className='text-[15px] inline-block min-w-[150px] font-semibold text-gray-600 mt-2' htmlFor='brandName'>Brand Name:</label>
                    <input onChange={(event) => setBrandName(event.target.value)} value={brandName} className='text-[15px] ml-5 pl-2 p-[2px] w-[90%] sm:min-w-[70%] outline-none border-[1px] border-gray-400 rounded-[4px]' id="brandName" placeholder='Enter Brand name' type='text' />
                </div>
                <p className='text-red-900 font-semibold ml-44'>{brandNameErr}</p>

                <div className='my-3'>
                    <label className='text-[15px] inline-block min-w-[150px] font-semibold text-gray-600 mt-2' htmlFor='productName'>Product Name:</label>
                    <input onChange={(event) => setProductName(event.target.value)} value={productName} className='text-[15px] ml-5 pl-2 p-[2px]  w-[90%] sm:min-w-[70%] outline-none border-[1px] border-gray-400 rounded-[4px]' id="productName" placeholder='Enter product name' type='text' />
                </div>
                <p className='text-red-900 font-semibold ml-44'>{productNameErr}</p>

                <div className='my-3 lg:flex lg:justify-start'>
                    <label className='text-[15px] inline-block min-w-[150px] font-semibold text-gray-600 mt-2' htmlFor='desc'>Description:</label>
                    <textarea onChange={(event) => setDesc(event.target.value)} value={desc} row="40" col="5" className='text-[15px] ml-5 pl-2 p-[2px]  w-[90%] sm:min-w-[70%] outline-none border-[1px] border-gray-400 rounded-[4px]' id="desc" placeholder='Enter description' type='text' />
                </div>
                <p className='text-red-900 font-semibold ml-44'>{descErr}</p>
                <hr className='border-t-[1px] border-gray-300 my-4' />

                <h2 className='text-[16px] sm:text-[18px] lg:text-[20px] font-semibold text-gray-800'>Pricing</h2>
                <div className='my-3'>
                    <label className='text-[15px] inline-block min-w-[150px] font-semibold text-gray-600 mt-2' htmlFor='MRP'>MRP:</label>
                    <input onChange={(event) => setMrp(event.target.value)} value={mrp} className='text-[15px] ml-5 pl-2 p-[2px]  w-[90%] sm:min-w-[70%] outline-none border-[1px] border-gray-400 rounded-[4px]' id="MRP" placeholder='Enter MRP' type='text' />
                </div>
                <p className='text-red-900 font-semibold ml-44'>{mrpErr}</p>

                <div className='my-3'>
                    <label className='text-[15px] inline-block min-w-[150px] font-semibold text-gray-600 mt-2' htmlFor='originalPrice'>Original Price:</label>
                    <input onChange={(event) => setOriginalPrice(event.target.value)} value={originalPrice} className='text-[15px] ml-5 pl-2 p-[2px]  w-[90%] sm:min-w-[70%] outline-none border-[1px] border-gray-400 rounded-[4px]' id="originalPrice" placeholder='Enter original price' type='text' />
                </div>
                <p className='text-red-900 font-semibold ml-44'>{originalPriceErr}</p>

                <div className='my-3'>
                    <label className='text-[15px] inline-block min-w-[150px] font-semibold text-gray-600 mt-2' htmlFor='discount'>Discount:</label>
                    <input onChange={(event) => setDiscount(event.target.value)} value={discount} className='text-[15px] ml-5 pl-2 p-[2px]  w-[90%] sm:min-w-[70%] outline-none border-[1px] border-gray-400 rounded-[4px]' id="discount" placeholder='Enter discount' type='text' />
                </div>
                <p className='text-red-900 font-semibold ml-44'>{discountErr}</p>
                <hr className='border-t-[1px] border-gray-300 my-4' />

                <h2 className='text-[16px] sm:text-[18px] lg:text-[20px] font-semibold text-gray-800'>Quantity</h2>
                <div className='my-3'>
                    <label className='text-[15px] inline-block min-w-[150px] font-semibold text-gray-600 mt-2' htmlFor='stock'>Stock Quantity:</label>
                    <input onChange={(event) => setQuantity(event.target.value)} value={quantity} className='text-[15px] ml-5 pl-2 p-[2px]  w-[90%] sm:min-w-[70%] outline-none border-[1px] border-gray-400 rounded-[4px]' id="stock" placeholder='Enter stock' type='number' />
                </div>
                <p className='text-red-900 font-semibold ml-44'>{quantityErr}</p>
                <hr className='border-t-[1px] border-gray-300 my-4' />

                <h2 className='text-[16px] sm:text-[18px] lg:text-[20px] font-semibold text-gray-800'>Product Image</h2>
                {
                    productPrevImg ? <img className='ml-5 h-[100px] sm:h-[150px] lg:h-[200px] w-[50%] sm:w-[30%] my-3' src={`${url}/${productImage}`} alt="product" /> : null
                }
                <div className='my-3'>
                    <input onChange={(event) => { setProductImage(event.target.files[0]); setProductPrevImg(false) }} className='text-[15px] ml-5 pl-4 p-[2px] w-[83%] outline-none border-[1px] border-gray-400 rounded-[4px] file:bg-blue-900 file:text-white
                     file:text-[13px] sm:file:text-[15px] lg:file:text-[17px] file:border-0 file:rounded-sm file:h-[35px] file:font-semibold file:my-2' type='file' />
                </div>
                <p className='text-red-900 font-semibold ml-44'>{productImageErr}</p>
            </form>
            <div className='flex justify-end mt-4'>
                <button onClick={() => clickCancenlBtn()} className='text-[13px] sm:text-[15px] lg:text-[17px] border-[1px] border-gray-400 p-2 rounded-[4px] text-gray-700 font-semibold'>Cancel</button>
                <button onClick={() => updateProduct()} className='text-[13px] sm:text-[15px] lg:text-[17px] ml-5 p-2 text-white rounded-[5px] font-semibold bg-gradient-to-t from-blue-800 to-blue-500'>Save</button>
            </div>

        </div>
    )


    const ratings = [1, 2, 3, 4]

    
  return (
      <>
          <AdminHeader />
          <div className='bg-gradient-to-tr from-blue-100 to-white min-h-[100vh] p-3'>
              <div className='mx-3 sm:mx-8 lg:mx-20 mt-[60px] sm:mt-[70px] lg:mt-[75px]'>
                  <h1 className='text-blue-700 text-[22px] sm:text-[25px] lg:text-[30px] italic font-semibold'>Manage Products</h1>
                  <p className='text-gray-600 text-[13px] sm:text-[15px] lg:text-[17px] font-semibold'>View, manage and organize your product inventory all in one place.</p>
                  <p className='text-gray-600 text-[13px] sm:text-[15px] lg:text-[17px] font-semibold'>Easily edit existing onces, and keep track of your stock.</p>

                  {showProductFrom ? renderProductForm() : null}

                  <ul className='flex justify-between flex-wrap my-6 lg:my-9'>
                      {
                          productDatas.map(eachItem => (
                              <li key={eachItem.productId} className='max-w-[90%] sm:max-w-[42%] lg:min-w-[30%] bg-slate-50 shadow-2xl shadow-gray-700 rounded-md p-3 m-2'>
                                  <div >
                                      <img className='h-[140px] sm:h-[150px] lg:h-[200px] w-full' src={`${url}/${eachItem.image.filePath}`} alt={eachItem.name} />
                                      <p className='text-[14px] sm:text-[15px] lg:text-[17px] text-gray-700 font-semibold my-2'>Seller Company Name: <span className='text-blue-950'>{eachItem.sellerCompanyName}</span></p>
                                      <h2 className='text-gray-500 font-semibold text-[12px] sm:text-[13px] lg:text-[15px]'>{eachItem.brandName}</h2>
                                      <p className='text-[15px] sm:text-[16px] lg:text-[18px] font-bold'>{eachItem.name}</p>
                                      <div className='flex text-[15px] sm:text-[16px] lg:text-[18px]'>
                                          <p className='font-semibold text-gray-600'>Price: <span className='line-through'>{eachItem.originalPrice}</span></p>
                                          <p className='ml-3 text-blue-800 font-semibold'>{eachItem.price}</p>
                                          <p className='hidden lg:block ml-3 text-green-900 font-semibold'>{eachItem.discount}% discount</p>
                                      </div>
                                      <p className='block lg:hidden text-[15px] sm:text-[16px] lg:text-[18px] text-green-900 font-semibold'>{eachItem.discount}% discount</p>
                                      <div className='mt-2 flex text-[15px] sm:text-[16px] lg:text-[18px]'>
                                          <p className='font-semibold text-gray-600 mr-3'>Ratings: </p>
                                          {ratings.map(eachItem => (<img className='h-[20px]' src={RatingStar} alt="star" />))}
                                      </div>
                                      <div className='flex justify-between mt-3 text-[15px] sm:text-[16px] lg:text-[18px]'>
                                          <div className='flex'>
                                              <img className='h-[18px] lg:h-[20px]' src={FreeDeliveryIcon} alt="free delivery" />
                                              <p className='font-semibold text-gray-500 ml-2'>Free Delivery</p>
                                          </div>
                                      </div>
                                  </div>
                                  <div className='flex flex-col lg:flex-row sm:justify-end mt-3'>
                                      <a href='#addProduct-form'>
                                          <button onClick={() => clickEditProductBtn(eachItem)} className='text-[13px] sm:text-[15px] lg:text-[17px] w-[100px] sm:w-[150px] bg-gradient-to-t from-cyan-800 to-sky-500 focus:from-indigo-800 focus:to-violet-900 font-semibold p-2 rounded-[5px] text-white'>Edit Product</button>
                                      </a>
                                      <button onClick={() => deleteProduct(eachItem.productId)} className='text-[13px] sm:text-[15px] lg:text-[17px] mt-2 lg:mt-0 lg:ml-2  w-[110px] sm:w-[150px] bg-gradient-to-r from-red-800 to-red-400 focus:from-indigo-800 focus:to-violet-900 font-semibold p-2 rounded-[5px] text-white'>Delete Product</button>
                                  </div>

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
