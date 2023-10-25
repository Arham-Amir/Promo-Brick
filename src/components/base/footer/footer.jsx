import React from 'react'
import { BsTelephone } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
export default function Footer() {
  return (
    <div className="bg-gradient-to-br from-[#0c0c0c] to-[#393939] text-xs w-screen border-t-4 border-white">
      <section className='flex justify-center items-center h-full'>
        <div className="px-16 flex flex-wrap text-white justify-between items-start min-h-max w-full py-10 overflow-hidden text-sm">
          <div className='md:w-1/4 xs:w-1/2 '>
            <img className="mx-auto object-contain h-[200px]" src="Images/nav_logo.gif" alt="Logo" />
          </div>
          <div className="md:w-1/4 mt-9 md:mt-0 xs:w-1/2 flex flex-col items-start p-10" >
            <h2 className="mb-4 text-2xl font-bold">Address</h2>
            <p className="mt-2 w-3/5 leading-6">
              60-J block, DHA EME sector, Multan road, Lahore, Pakistan</p>
          </div>
          <div className="md:w-1/4 mt-9 md:mt-0 xs:w-1/2 flex flex-col items-start p-10" >
            <h2 className="mb-4 text-2xl font-bold">Follow</h2>
            <ul>
              <li className="mt-3 hover:text-themeColor hover:cursor-pointer">Facebook</li>
              <li className="mt-3 hover:text-themeColor hover:cursor-pointer">LinkedIn</li>
              <li className="mt-3 hover:text-themeColor hover:cursor-pointer">Instagram</li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mt-9 md:mt-0 xs:w-1/2 flex flex-col items-start p-10" >
            <h2 className="mb-4 text-2xl font-bold">Contact Us</h2>
            <div className="mt-3">
              <BsTelephone className="inline" />
              <span className="ml-2 hover:text-themeColor hover:cursor-pointer">+923004439445</span>
            </div>
            <div className="mt-3">
              <AiOutlineMail className="inline" />
              <span className="ml-2 hover:text-themeColor hover:cursor-pointer">info@promobricks.com</span>
            </div>
          </div>
        </div>
      </section>
      <hr className="hidden lg:block w-11/12 mx-auto bg-slate-300" />
      <section className='grid grid-cols-2 md:grid-cols-4 place-items-center items-center px-20 pb-3 lg:pb-0 gap-5 md:gap-10 '>
        <a target='blank' className='ms:h-[200px] w-fit md:w-[200px]' href="https://www.promogroup.com.pk/"><img className='h-full object-contain hover:-translate-y-4 transition-all duration-200 cursor-pointer drop-shadow-[0_20px_20px_rgba(255,255,255,0.30)]' src="/logos/promogroup.gif" alt="Image" /></a>
        <a target='blank' className='ms:h-[200px] w-fit md:w-[200px]' href="https://www.promodevelopers.com/"><img className='h-full object-contain hover:-translate-y-4 transition-all duration-200 cursor-pointer drop-shadow-[0_20px_20px_rgba(255,255,255,0.30)]' src="/logos/promodevelopers.gif" alt="Image" /></a>
        <a target='blank' className='ms:h-[200px] w-fit md:w-[200px]' href="https://www.promogarlic.com/"><img className='h-full object-contain hover:-translate-y-4 transition-all duration-200 cursor-pointer drop-shadow-[0_20px_20px_rgba(255,255,255,0.30)]' src="/logos/promogarlic.gif" alt="Image" /></a>
        <a target='blank' className='ms:h-[200px] w-fit md:w-[200px]' href="https://www.promofarms.com/"><img className='h-full object-contain hover:-translate-y-4 transition-all duration-200 cursor-pointer drop-shadow-[0_20px_20px_rgba(255,255,255,0.30)]' src="/logos/promofarms.gif" alt="Image" /></a>
      </section>
      <div className="p-5 px-10 bg-black flex justify-between text-white">
        <div>&copy; 2023 Promo Brick Ltd | Privacy Notice | Terms & Conditions</div>
        <div>Built by FurmTech</div>
      </div>
    </div>
  )
}
