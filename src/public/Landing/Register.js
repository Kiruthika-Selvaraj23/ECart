import React, { useContext, useState } from 'react'
import RegisterImage from "../../assets/RegisterImage.jpg"
import { DContext } from '../../Store/MyContext'

export default function Register() {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [contactNo, setContact] = useState("")
    const [nameErr, setNameErr] = useState("")
    const [passwordErr, setPwdErr] = useState("")
    const [emailErr, setEmailErr] = useState("")
    const [contactNoErr, setContactNoErr] = useState("")
    const [companyName, setCompanyName] = useState("")
    const [companyErr, setCompanyErr] = useState("")

    const { showCompanyInput, role, setRegisterForm, setLoginForm } = useContext(DContext)


    const submitRegister = async (event) => {
        event.preventDefault()
        const url = process.env.REACT_APP_URL
        try {
            let isValid = true
            if (name === "") {
                setNameErr("*Enter Your Name")
                isValid = false
            } else {
                setNameErr("")
            }
            if (password === "") {
                setPwdErr("*Enter Your Password")
                isValid = false
            } else {
                setPwdErr("")
            }
            if (email === "") {
                setEmailErr("*Enter Your email")
                isValid = false
            } else {
                setEmailErr("")
            }
            if (contactNo === "") {
                setContactNoErr("*Enter Your ContactNo")
                isValid = false
            } else {
                setContactNoErr("")
            }
            if (role=== "seller" && companyName === "") {
                setCompanyErr("*Enter Your Company Name")
                isValid = false
            } else {
                setCompanyErr("")
            }
            
            if (isValid) {
                let body = { userName: name, pwd: password, emailId: email, mobileNo: contactNo, role: role }
                if (role === "seller") {
                    body.companyName = companyName
                }

                const options = {
                    method: "POST",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(body)
                }
                const fetchData = await fetch(`${url}/enroll`, options)
                const data = await fetchData.json()
                if (data.success) {
                    alert(data.message)
                    setName("")
                    setPassword("")
                    setEmail("")
                    setContact("")
                    setCompanyName("")
                    setRegisterForm(false)
                    setLoginForm(true)
                } else {
                    alert(data.message)
                }
            }
        }
        catch (err) {
            console.log("Trouble in connecting the server", err)
        }
    }

        
    return (
        <div className='flex justify-center items-center'>
            <div className='flex p-3 bg-white rounded-md min-w-[55%] my-7'>
                <img className='h-[500px] w-[60%]' src={RegisterImage} alt="regiter" />
                <div className='w-[58%]'>
                    <h1 className='text-[30px] text-blue-700 italic font-semibold'>Register</h1>
                    <form onSubmit={(event) => submitRegister(event)} className='flex flex-col mb-7'>
                        <label className='text-gray-600 text-[15px] font-semibold my-3' htmlFor='name'>Name:</label>
                        <input onChange={(event) => setName(event.target.value)} value={name} type="text" id='name' className='border-t-0 border-b-2 border-l-0 border-r-0 outline-none' />
                        <p className='text-red-900 font-semibold'>{nameErr}</p>
                        <label className='text-gray-600 text-[15px] font-semibold my-3' htmlFor='pass'>Password:</label>
                        <input onChange={(event) => setPassword(event.target.value)} value={password} type="password" id='pass' className='border-t-0 border-b-2 border-l-0 border-r-0 outline-none' />
                        <p className='text-red-900 font-semibold'>{passwordErr}</p>
                        <label className='text-gray-600 text-[15px] font-semibold my-3'  htmlFor='email'>Email Id:</label>
                        <input onChange={(event) => setEmail(event.target.value)} value={email} type="email" id='email' className='border-t-0 border-b-2 border-l-0 border-r-0 outline-none' />
                        <p className='text-red-900 font-semibold'>{emailErr}</p>
                        <label className='text-gray-600 text-[15px] font-semibold my-3' htmlFor='mobileNo'>Mobile Number:</label>
                        <input onChange={(event) => setContact(event.target.value)} value={contactNo} type="text" id='mobileNo' className='border-t-0 border-b-2 border-l-0 border-r-0 outline-none' />
                        <p className='text-red-900 font-semibold'>{contactNoErr}</p>
                        {showCompanyInput === "seller" ?
                            (<>
                                <label className='text-gray-600 text-[15px] font-semibold my-3' htmlFor='mobileNo'>Company Name:</label>
                                <input onChange={(event) => setCompanyName(event.target.value)} value={companyName} type="text" id='mobileNo' className='border-t-0 border-b-2 border-l-0 border-r-0 outline-none' />
                                <p className='text-red-900 font-semibold'>{companyErr}</p>
                            </>) : null}
                        <div>
                            <button type='submit' className='bg-gradient-to-t from-blue-950 to-blue-500 w-[100px] font-semibold p-2 rounded-[5px] text-white mt-5'>Submit</button>
                        </div>
                    </form>
                 </div>
           </div>
        </div>
  )
}
