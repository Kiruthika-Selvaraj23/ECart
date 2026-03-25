import { useContext, useEffect, useState } from 'react'
import ECartLogo from "../../assets/ECartLogo.png"
import { DContext } from '../../Store/MyContext'
import { useNavigate } from 'react-router'
import "../../index.css"

export default function UserHeader() {
    const [isOpen, setIsOpen] = useState(false);

    // Close menu on scroll
    useEffect(() => {
        const handleScroll = () => {
            setIsOpen(false);
        };

        if (isOpen) {
            window.addEventListener("scroll", handleScroll);
        }

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isOpen]);
    
    const { userDetails, cartProducts } = useContext(DContext)
    const navigate = useNavigate()

    const clickLogoutBtn = async () => {
            const options = {
                method: "DELETE",
                credentials: "include",
            }
            const url = process.env.REACT_APP_URL
        const response = await fetch(`${url}/api/logout`, options)
    

            const data = await response.json()
            if (data.success) {
                alert(data.message)
                navigate("/")
            } else {
                alert(data.message)
            }
    }

    return (
        <header>
            <div className='fixed z-50 w-full bg-blue-950 text-white flex justify-between items-center h-[60px] sm:h-[70px] lg:h-[75px] px-5 sm:px-10 lg:px-20'>
                <div className='min-w-[45%]'>
                    <img className='h-[30px] sm:h-[35px] lg:h-[40px]' src={ECartLogo} alt="logo" />
                </div>
                <div className='hidden lg:flex lg:justify-between lg:min-w-[52%]'>
                    <ul className='lg:w-[80%] flex justify-around items-center text-[23px] text-white font-semibold'>
                        <li onClick={() => navigate("/userHomePage")}>Home</li>
                        <li onClick={() => navigate("/userShopPage")}>Shop</li>
                        <li onClick={() => navigate("/cartPage")} className='relative'>Cart 
                            {cartProducts.length !== 0 ? (<p className='absolute top-0 left-12 text-white bg-red-500 rounded-full pl-[6px] pr-[6px] pb-6 h-[20px] text-[16px]'>{cartProducts.length}</p>) : null}
                        </li>
                        <li onClick={() => navigate("/userOrderPage")}>My Orders</li>
                        <li className='flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 -960 960 960" width="34px" fill="white"><path d="M367-527q-47-47-47-113t47-113q47-47 113-47t113 47q47 47 47 113t-47 113q-47 47-113 47t-113-47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm296.5-343.5Q560-607 560-640t-23.5-56.5Q513-720 480-720t-56.5 23.5Q400-673 400-640t23.5 56.5Q447-560 480-560t56.5-23.5ZM480-640Zm0 400Z" /></svg>
                            <p className='text-white text-[20px] ml-2 mt-0.5'>{userDetails.name}</p>
                        </li>
                    </ul>
                    <div>
                        <button onClick={() => clickLogoutBtn()} className='bg-white  text-black rounded-[3px] p-2'>Log Out</button>
                    </div>
                </div>

                <div>
                    {/* Hamburger (Mobile Only) */}
                    <label className="hamburger mt-2 lg:hidden">
                        <input
                            type="checkbox"
                            checked={isOpen}
                            onChange={() => setIsOpen(!isOpen)}
                        />
                        <svg viewBox="0 0 32 32">
                            <path
                                className="w-3 h-3 line line-top-bottom"
                                d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                            ></path>
                            <path className="line" d="M7 16 27 16"></path>
                        </svg>
                    </label>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`lg:hidden absolute top-full right-0 w-[30%] z-50
                    bg-white shadow-lg
                    transform transition-all duration-1000 ease-in-out rounded-tl-md rounded-bl-md
                    ${isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"}`}
                            >
                    <nav className="flex flex-col text-[15px] font-semibold text-gray-600 space-y-2 p-4">
                        <p onClick={() => navigate("/userHomePage")}>Home</p>
                        <p onClick={() => navigate("/userShopPage")}>Shop</p>
                        <p onClick={() => navigate("/cartPage")} className='relative'>Cart
                            {cartProducts.length !== 0 ? (<p className='absolute -top-1 left-8 text-white bg-red-500 rounded-full pl-[6px] pr-[6px] h-[17px] text-[11px]'>{cartProducts.length}</p>) : null}
                        </p>
                        <p onClick={() => navigate("/userOrderPage")}>My Orders</p>
                        <div>
                            <button onClick={() => clickLogoutBtn()} className='bg-blue-950 text-[15px] text-white rounded-[3px] p-2'>Log Out</button>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}
