import React, { useContext } from 'react'
import ECartLogo from "../assets/ECartLogo.png"
import { DContext } from '../Store/MyContext'

export default function Header() {
    const { setRegisterCard, setRegisterForm, setLoginForm } = useContext(DContext)

    const clickRegisterBtn = () => {
        setRegisterCard(true)
        setRegisterForm(false)
        setLoginForm(false)
    }

    const clickLoginBtn = () => {
        setRegisterCard(false)
        setRegisterForm(false)
        setLoginForm(true)
    }

    return (
        <header>
            <div className='bg-blue-950 text-white flex justify-between items-center h-[90px] px-5 sm:px-10'>
                <img className="h-[30px] sm:h-[35px] lg:h-[40px]" src={ECartLogo} alt="logo" />
                <div className='w-[35%] sm:w-[25%] lg:w-[10%] flex justify-between items-center lg:mr-4'>
                    <button onClick={() => clickRegisterBtn()} className='lg:mr-3 text-[13px] sm:text-[15px]  bg-white text-black rounded-[3px] p-2'>Register</button>
                    <button onClick={() => clickLoginBtn()} className=' text-[13px] sm:text-[15px] bg-white text-black rounded-[3px] p-2'>Login</button>
                </div>
            </div>
        </header>
    )
}
