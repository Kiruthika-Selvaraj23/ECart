import React, { useContext, useState } from 'react'
import { DContext } from '../../Store/MyContext'
import LoginImage from "../../assets/LoginImage.png"
import { useNavigate } from 'react-router'

export default function Login() {
    const [loginMail, setLoginMail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")
    const [loginEmailErr, setLoginEmailErr] = useState("")
    const [loginPwdErr, setLoginPwdErr] = useState("")

    const navigate = useNavigate() 
    const { setUserDetails} = useContext(DContext)

    const submitLoginForm = async (event) => {
        event.preventDefault()
        const url = process.env.REACT_APP_URL
        try {
            let isValid = true
            if (loginMail === "") {
                setLoginEmailErr("*Email Id is Mandatory")
                isValid = false
            } else {
                setLoginEmailErr("")
            }
            if (loginPassword === "") {
                setLoginPwdErr("*Password is Mandotary")
                isValid = false
            } else {
                setLoginPwdErr("")
            }

            if (isValid) {
                const options = {
                    method: "POST",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ userMailId: loginMail, pwd: loginPassword })
                }
                const fetchData = await fetch(`${url}/login`, options)
                const data = await fetchData.json()
                
                if (data.success) {
                    setUserDetails(data.UserData)
                    alert(data.message)
                    setLoginMail("")
                    setLoginPassword("")
                    if (data.UserData.role === "user") {
                        return navigate("/userHomePage")
                    }
                    if (data.UserData.role === "seller") {
                        return navigate("/sellerHomePage")
                    }
                    if (data.UserData.role === "admin") {
                        return navigate("/adminsHomePage")
                    }
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
            <div className='flex p-3 bg-white rounded-md min-w-[80%] sm:max-w-[80%] lg:min-w-[55%] my-7'>
                <img className='hidden sm:block h-[300px] lg:h-[350px] w-[60%]' src={LoginImage} alt="regiter" />
                <div className='w-[80%] sm:w-[58%]'>
                    <h1 className='text-[20px] sm:text-[25px] lg:text-[30px] text-blue-700 italic font-semibold'>Login</h1>
                    <form onSubmit={(event) => submitLoginForm(event)} className='flex flex-col mb-7'>
                        <label className='text-gray-600 text-[15px] lg:text-[17px] font-semibold my-3' htmlFor='email'>Email Id:</label>
                        <input onChange={(event) => setLoginMail(event.target.value)} value={loginMail} type="email" id='email' className='border-t-0 border-b-2 border-l-0 border-r-0 outline-none' />
                        <p className='text-red-900 font-semibold'>{loginEmailErr}</p>
                        <label className='text-gray-600 text-[15px] lg:text-[17px] font-semibold my-3' htmlFor='email'>Password:</label>
                        <input onChange={(event) => setLoginPassword(event.target.value)} value={loginPassword} type="password" id='pass' className='border-t-0 border-b-2 border-l-0 border-r-0 outline-none' />
                        <p className='text-red-900 font-semibold'>{loginPwdErr}</p>
                        <div>
                            <button type='submit' className='text-[13px] sm:text-[15px] lg:text-[17px] bg-gradient-to-t from-blue-950 to-blue-500 w-[70px] sm:w-[100px] font-semibold p-2 rounded-[5px] text-white mt-5'>Login</button>
                        </div>
                    </form>
               </div>
            </div>
        </div>
    )
}
