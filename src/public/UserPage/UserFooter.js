import React from 'react'
import InstagramLogo from "../../assets/InstagramLogo.png"
import FacebookLogo from "../../assets/FacebookLogo.png"
import TwitterLogo from "../../assets/TwitterLogo.png"
import GPay from "../../assets/GPay.png"
import Paytm from "../../assets/Paytm.png"
import CashonDelivery from "../../assets/CashonDelivery.png"

export default function UserFooter() {
  return (
      <footer className='bg-blue-950'>
          <div className='mx-20 p-3 text-white flex justify-between'>
              <div>
                  <h2 className='font-semibold italic text-[20px] mb-3'>Quick Links</h2>
                  <p className='text-[15px] text-slate-300'>Home</p>
                  <p className='text-[15px] text-slate-300'>Shop</p>
                  <p className='text-[15px] text-slate-300'>Cart</p>
              </div>

              <div>
                  <h2 className='font-semibold italic text-[20px] mb-3'>Customer Services</h2>
                  <p className='text-[15px] text-slate-300'>Help Center</p>
                  <p className='text-[15px] text-slate-300'>Shipping</p>
                  <p className='text-[15px] text-slate-300'>Returns</p>
              </div>
              <div className='flex flex-col'>
                  <h2 className='font-semibold italic text-[20px] mb-5'>Follow Us</h2>
                  <div className='flex justify-between items-center'>
                      <img className='h-[30px]' src={FacebookLogo} alt="facebook" />
                      <img className='h-[30px] mx-2' src={TwitterLogo} alt="twitter" />
                      <img className='h-[30px]' src={InstagramLogo} alt="instagram" />
                  </div> 
              </div>
              <div>
                  <h2 className='font-semibold italic text-[20px]'>Payment Methods</h2>
                  <div className='flex justify-between items-center'>
                      <img className='h-[30px]' src={GPay} alt="facebook" />
                      <img className='h-[70px] mx-2' src={Paytm} alt="twitter" />
                      <img className='h-[40px]' src={CashonDelivery} alt="instagram" />
                  </div> 
              </div>
          </div>
    </footer>
  )
}
