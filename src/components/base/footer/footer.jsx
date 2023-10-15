import React from 'react'
import { BsTelephone } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
export default function Footer() {
  return (
    <div className="bg-gray-800 text-xs w-screen">
      <div className="px-16 flex flex-wrap text-white justify-between items-center w-full py-10 overflow-hidden text-sm">
        <div className='md:w-1/4 xs:w-1/2 '>
          <img className="mx-auto object-contain h-[200px]" src="Images/nav_logo.gif" alt="Logo" />
        </div>
        <div className="md:w-1/4 mt-9 md:mt-0 xs:w-1/2">
          <h2 className="mb-4 text-2xl font-bold">Address</h2>
          <p className="mt-2 w-3/5 leading-6">
            60-J block, DHA EME sector, Multan road, Lahore, Pakistan</p>
        </div>
        <div className="md:w-1/4 mt-9 md:mt-0 xs:w-1/2">
          <h2 className="mb-4 text-2xl font-bold">Follow</h2>
          <ul>
            <li className="mt-3 hover:text-orange-700 hover:cursor-pointer">Facebook</li>
            <li className="mt-3 hover:text-orange-700 hover:cursor-pointer">LinkedIn</li>
            <li className="mt-3 hover:text-orange-700 hover:cursor-pointer">Instagram</li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 mt-9 md:mt-0 xs:w-1/2">
          <h2 className="mb-4 text-2xl font-bold">Contact Us</h2>
          <div className="mt-3">
            <BsTelephone className="inline" />
            <span className="ml-2 hover:text-orange-700 hover:cursor-pointer">+923004439445</span>
          </div>
          <div className="mt-3">
            <AiOutlineMail className="inline" />
            <span className="ml-2 hover:text-orange-700 hover:cursor-pointer">info@promobricks.com</span>
          </div>
        </div>
      </div>
      <hr className="mx-auto w-11/12 outline-white" />
      <section className='flex justify-between items-center px-20 gap-10 h-[200px]'>
        <a target='blank' className='h-full' href="https://www.promogroup.com.pk/"><img className='h-full object-contain hover:-translate-y-4 transition-all duration-200 cursor-pointer' src="/logos/promogroup.gif" alt="" /></a>
        <a target='blank' className='h-full' href="https://www.promodevelopers.com/"><img className='h-full object-contain hover:-translate-y-4 transition-all duration-200 cursor-pointer' src="/logos/promodevelopers.gif" alt="" /></a>
        <a target='blank' className='h-full' href="https://www.promogarlic.com/"><img className='h-full object-contain hover:-translate-y-4 transition-all duration-200 cursor-pointer' src="/logos/promogarlic.gif" alt="" /></a>
        <a target='blank' className='h-full' href="https://www.promofarms.com/"><img className='h-full object-contain hover:-translate-y-4 transition-all duration-200 cursor-pointer' src="/logos/promofarms.gif" alt="" /></a>
      </section>
      <div className="p-5 px-10 bg-black flex justify-between text-white">
        <div>Promo Brick Ltd ©2023 | Privacy Notice | Terms & Conditions</div>
        <div>Built by FurmTech</div>
      </div>
    </div>
  )
}
