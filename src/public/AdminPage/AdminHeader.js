import React from 'react'
import ECartLogo from "../../assets/ECartLogo.png"
import { useNavigate } from 'react-router'

export default function AdminHeader() {
    const navigate = useNavigate()

    const clickLogoutBtn = async () => {
        const options = {
            method: "DELETE",
            credentials: "include",
        }
        const url = process.env.REACT_APP_URL
        const response = await fetch(`${url}/logout`, options)

        const data = await response.json()
        if (data.success) {
            alert(data.message)
            navigate("/")
        } else {
            alert(data.message)
        }
    }

    return (
        <footer>
            <div className='fixed w-full bg-blue-950 text-white flex justify-between items-center h-[75px] px-10'>
                <img className='h-[40px]' src={ECartLogo} alt="logo" />
                <div className='flex justify-between w-[50%]'>
                    <ul className='w-[80%] flex justify-around items-center text-[23px] text-white font-semibold'>
                        <li onClick={() => navigate("/adminsHomePage")}>Home</li>
                        <li onClick={() => navigate("/adminProductsPage")}>Products</li>
                        <li onClick={() => navigate("/customerDatasPage")}>Users</li>
                        <li className='flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 -960 960 960" width="34px" fill="white"><path d="M367-527q-47-47-47-113t47-113q47-47 113-47t113 47q47 47 47 113t-47 113q-47 47-113 47t-113-47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm296.5-343.5Q560-607 560-640t-23.5-56.5Q513-720 480-720t-56.5 23.5Q400-673 400-640t23.5 56.5Q447-560 480-560t56.5-23.5ZM480-640Zm0 400Z" /></svg>
                            <p className='text-white text-[20px] ml-2 mt-0.5'>Admin</p>
                        </li>
                    </ul>
                    <div>
                        <button onClick={() => clickLogoutBtn()} className='bg-white  text-black rounded-[3px] p-2'>Log Out</button>
                    </div>
                </div>
            </div>
        </footer>
    )
}
