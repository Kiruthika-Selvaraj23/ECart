import React, { useContext, useState } from 'react'
import { DContext } from '../Store/MyContext'

export default function UpdateUser() {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [contactNo, setContact] = useState("")
    const [nameErr, setNameErr] = useState("")
    const [passwordErr, setPwdErr] = useState("")
    const [emailErr, setEmailErr] = useState("")
    const [contactNoErr, setContactNoErr] = useState("")

    const { userDetails } = useContext(DContext)

    const submitUpdatedUser = async (event) => {
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

            if (isValid) {
                const options = {
                    method: "PUT",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ userName: name, pwd: password, emailId: email, mobileNo: contactNo })
                }
                const fetchData = await fetch(`${url}/updateUser/${userDetails.personId}`, options)
                const data = await fetchData.json()
                if (data.success) {
                    alert(data.message)
                    setName("")
                    setPassword("")
                    setEmail("")
                    setContact("")
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
        <div className='mt-7'>
            <h1 className='text-[30px] font-semibold'>Update User</h1>
            <form onSubmit={(event) => submitUpdatedUser(event)} className='flex flex-col mb-7'>
                <label htmlFor='name'>Name:</label>
                <input onChange={(event) => setName(event.target.value)} value={name} type="text" id='name' className='bg-blue-200 w-[20%]' />
                <p className='text-red-900 font-semibold'>{nameErr}</p>
                <label htmlFor='pass'>Password:</label>
                <input onChange={(event) => setPassword(event.target.value)} value={password} type="password" id='pass' className='bg-blue-200 w-[20%]' />
                <p className='text-red-900 font-semibold'>{passwordErr}</p>
                <label htmlFor='email'>Email Id:</label>
                <input onChange={(event) => setEmail(event.target.value)} value={email} type="email" id='email' className='bg-blue-200 w-[20%]' />
                <p className='text-red-900 font-semibold'>{emailErr}</p>
                <label htmlFor='mobileNo'>Mobile Number:</label>
                <input onChange={(event) => setContact(event.target.value)} value={contactNo} type="text" id='mobileNo' className='bg-blue-200 w-[20%]' />
                <p className='text-red-900 font-semibold'>{contactNoErr}</p>
                <div>
                    <button type='submit' className='bg-blue-600 p-2 rounded-[5px] text-white mt-3'>Submit</button>
                </div>
            </form>
        </div>
    )
}
