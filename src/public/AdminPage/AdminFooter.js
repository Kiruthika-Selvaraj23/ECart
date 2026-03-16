import InstagramLogo from "../../assets/InstagramLogo.png"
import FacebookLogo from "../../assets/FacebookLogo.png"
import TwitterLogo from "../../assets/TwitterLogo.png"
import ECartLogo from "../../assets/ECartLogo.png"
import { useNavigate } from "react-router"

export default function AdminFooter() {
    const navigate = useNavigate()

    return (
        <footer className='bg-blue-950'>
            <div className='mx-20 p-3 text-white flex justify-between'>
                <div className="max-w-[30%]">
                    <img className='h-[35px]' src={ECartLogo} alt="logo" />
                    <p className='text-[15px] text-slate-300 mt-2'>Manage your e-commerce platform effectiently with ECart. View reports, manage products, and track orders, seamlessly.</p>
                </div>
                <div>
                    <h2 className='font-semibold italic text-[20px] mb-3'>Quick Links</h2>
                    <p onClick={() => navigate("/adminsHomePage")} className='text-[15px] text-slate-300'>Home</p>
                    <p onClick={() => navigate("/adminProductsPage")} className='text-[15px] text-slate-300'>Products</p>
                    <p onClick={() => navigate("/customerDatasPage")} className='text-[15px] text-slate-300'>Orders</p>
                </div>

                <div>
                    <h2 className='font-semibold italic text-[20px] mb-3'>Support</h2>
                    <p className='text-[15px] text-slate-300'>Help Center</p>
                    <p className='text-[15px] text-slate-300'>Contact Us</p>
                    <p className='text-[15px] text-slate-300'>Privacy Policy</p>
                    <p className='text-[15px] text-slate-300'>Terms of Service</p>
                </div>
                <div className='flex flex-col'>
                    <h2 className='font-semibold italic text-[20px] mb-5'>Stay Connected</h2>
                    <div className='flex justify-between items-center'>
                        <img className='h-[30px]' src={FacebookLogo} alt="facebook" />
                        <img className='h-[30px] mx-2' src={TwitterLogo} alt="twitter" />
                        <img className='h-[30px]' src={InstagramLogo} alt="instagram" />
                    </div>
                </div>
               
            </div>
        </footer>
    )
}
