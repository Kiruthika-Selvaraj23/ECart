import InstagramLogo from "../../assets/InstagramLogo.png"
import FacebookLogo from "../../assets/FacebookLogo.png"
import TwitterLogo from "../../assets/TwitterLogo.png"
import GPay from "../../assets/GPay.png"
import Paytm from "../../assets/Paytm.png"
import CashonDelivery from "../../assets/CashonDelivery.png"
import { useNavigate } from "react-router"

export default function SellerFooter() {
    const navigate = useNavigate()
    return (
        <footer className='bg-blue-950'>
            <div className=' mx-3 sm:mx-8 lg:mx-20 p-3 text-white flex flex-col sm:flex-row justify-between'>
                <div className="mb-2 sm:mb-0">
                    <h2 className='font-semibold italic text-[15px] sm:text-[17px] lg:text-[20px] mb-1 sm:mb-3'>Quick Links</h2>
                    <p onClick={() => navigate("/sellerHomePage")} className='text-[13px] sm:text-[15px] text-slate-300'>Home</p>
                    <p onClick={() => navigate("/sellerProductsPage")} className='text-[13px] sm:text-[15px] text-slate-300'>Products</p>
                    <p onClick={() => navigate("/userOrderPage")} className='text-[13px] sm:text-[15px] text-slate-300'>Orders</p>
                </div>

                <div className="mb-2 sm:mb-0">
                    <h2 className='font-semibold italic text-[15px] sm:text-[17px] lg:text-[20px]  mb-1 sm:mb-3'>Customer Services</h2>
                    <p className='text-[13px] sm:text-[15px] text-slate-300'>Help Center</p>
                    <p className='text-[13px] sm:text-[15px] text-slate-300'>Shipping info</p>
                    <p className='text-[13px] sm:text-[15px] text-slate-300'>Return Policy</p>
                </div>
                <div className='mb-2 sm:mb-0 flex flex-col'>
                    <h2 className='font-semibold italic text-[15px] sm:text-[17px] lg:text-[20px]  mb-1 sm:mb-5'>Follow Us</h2>
                    <div className='flex sm:justify-between items-center'>
                        <img className='h-[22px] sm:h-[25px] lg:h-[30px]' src={FacebookLogo} alt="facebook" />
                        <img className='h-[22px] sm:h-[25px] lg:h-[30px] mx-2' src={TwitterLogo} alt="twitter" />
                        <img className='h-[22px] sm:h-[25px] lg:h-[30px]' src={InstagramLogo} alt="instagram" />
                    </div>
                </div>
                <div className="mb-2 sm-mb-0">
                    <h2 className='font-semibold italic text-[15px] sm:text-[17px] lg:text-[20px]  mb-1 sm:mb-5'>Payment Methods</h2>
                    <div className='flex sm:justify-between items-center'>
                        <img className='h-[22px] sm:h-[25px] lg:h-[30px]' src={GPay} alt="facebook" />
                        <img className='h-[22px] sm:h-[25px] lg:h-[30px] mx-2' src={Paytm} alt="twitter" />
                        <img className='h-[32px] sm:h-[35px] lg:h-[40px]' src={CashonDelivery} alt="instagram" />
                    </div>
                </div>
            </div>
        </footer>
    )
}
