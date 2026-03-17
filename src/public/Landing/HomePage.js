import React, { useContext} from 'react'
import "../../App.css"
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { DContext } from '../../Store/MyContext'
import Register from './Register'
import WhyChooseUs from './WhyChooseUs'
import Login from './Login'


export default function HomePage() {
    const { registrationCardDatas, showRegiserCard, setRegisterCard, showRegisterFrom, setRegisterForm, setCompanyInput, 
        showLoginForm, setLoginForm, setRole } = useContext(DContext)

    const clickRegistartion = (id) => {
        setRegisterCard(false)
        setRegisterForm(true)
        setCompanyInput(id)
        setRole(id)
    }

    const clickStartShopping = () => {
        setRegisterCard(false)
        setRegisterForm(false)
        setLoginForm(true)
    }

    const renderRegistrationCard = () => (
        <ul className='flex flex-col md:flex-row justify-center items-center my-10'>
            {
                registrationCardDatas.map(eachItem => (
                    <li key={eachItem.id} className='bg-slate-100 p-3 rounded-md shadow-2xl shadow-gray-600 max-w-[80%] sm:max-w-[60%] md:max-w-[45%] lg:max-w-[35%] m-4'>
                        <img className='h-[200px] sm:h-[250px] w-full' src={eachItem.image} alt="seller" />
                        <h1 className='text-blue-700 font-semibold italic text-[15px] sm:text-[20px] text-center mb-3'>{eachItem.heading}</h1>
                        <p className='text-gray-600 font-semibold text-[13px] sm:text-[15px] mb-5'>{eachItem.desc}</p>
                        <div className='flex justify-center items-center'>
                            <button onClick={() => clickRegistartion(eachItem.id)} className='text-[12px] sm:text-[15px] bg-blue-900 text-white rounded-[3px] p-2 font-semibold'>Register Now</button>
                        </div>
                    </li>
                ))
           }
       </ul>
   )

    return (
        <section>
            <Header/>
            <div className="bg-blue-50 min-h-[100vh] p-3">

                <div className='text-center mt-7'>
                    <h1 className='text-[30px] sm:text-[40px] md:text-[50px] text-blue-950 font-bold italic'>Welcome to eCart!</h1>
                    <p className='text-[15px] sm:text-[17px] md:text-[20px] text-blue-900 font-semibold mt-2'>Your Non-Stop Online Shopping Destination</p>
                    <p className='text-[15px] sm:text-[17px] md:text-[20px] text-blue-900 font-semibold mt-2'>Shop thousands of products, enjoy exclusive deals, and experience fast and secure delivery with ECart.</p>
                    <ul className='flex justify-center items-center text-gray-500 text-[12px] sm:text-[15px] font-semibold'>
                        <li className='m-5'>Discover Amazing Deals</li>
                        <li className='w-[2px] h-[25px] bg-gray-700'></li>
                        <li className='m-5'>Quick & Hassle-Free Delivery</li>
                        <li className='w-[2px] h-[25px] bg-gray-700'></li>
                        <li className='m-5'>Trusted Shopping Experience</li>
                    </ul>
                    <div className='flex justify-center items-center mt-5'>
                        <button onClick={() => clickStartShopping()} className='text-[12px] sm:text-[15px] bg-blue-950 text-white rounded-[3px] p-2 font-semibold'>Start Shopping</button>
                    </div>
                </div>

                {showRegiserCard || showRegisterFrom || showLoginForm ? null: <WhyChooseUs/>} 
                {showRegiserCard ? renderRegistrationCard() : null}
                {showRegisterFrom ? <Register /> : null}
                {showLoginForm ? <Login/> : null}
            </div>  
            <Footer/>
      </section>
  )
}
