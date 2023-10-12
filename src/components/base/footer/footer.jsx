import React from 'react'
import { BsTelephone } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
export default function Footer() {
  return (
    <div className="bg-gray-800 text-xs">
        <div>
            <img className="mx-auto h-28 py-2" src="Images/nav_logo.gif" alt="Logo"/>
        </div>
        <hr className="mx-5 outline-white"/>
        <div className="px-16 flex flex-wrap text-white justify-between w-full py-24 overflow-hidden">
            <div className="w-full md:w-1/4 mt-9 md:mt-0 sm:w-1/2">
                <h2 className="mb-4 text-2xl font-bold">Contact Us</h2>
                <div className="mt-3">
                    <BsTelephone className="inline"/>
                    <span className="ml-2 hover:text-orange-700 hover:cursor-pointer">00000000000</span>
                </div>
                <div className="mt-3">
                    <AiOutlineMail className="inline"/>
                    <span className="ml-2 hover:text-orange-700 hover:cursor-pointer">info@promobricks.com</span>
                </div>
            </div>
            <div className="w-1/2 md:w-1/4 mt-9 md:mt-0 sm:w-1/2">
                <h2 className="mb-4 text-2xl font-bold">Address</h2>
                <p className="mt-2">Lorem, ipsum.</p>
                <p className="mt-2">lorem</p>
                <p className="mt-2">loremok</p>
                <p className="mt-2">loremipsum</p>
                <p className="mt-2">lorem doc</p>
            </div>
            <div className="w-1/2 md:w-1/4 mt-9 md:mt-0 sm:w-1/2">
                <h2 className="mb-4 text-2xl font-bold">Follow</h2>
                <ul>
                    <li className="mt-3 hover:text-orange-700 hover:cursor-pointer">Facebook</li>
                    <li className="mt-3 hover:text-orange-700 hover:cursor-pointer">LinkedIn</li>
                    <li className="mt-3 hover:text-orange-700 hover:cursor-pointer">Instagram</li>
                    <li className="mt-3 hover:text-orange-700 hover:cursor-pointer">Twitter</li>
                </ul>
            </div>
            <div className="w-1/2 md:w-1/4 mt-9 md:mt-0 sm:w-1/2">
                <h2 className="mb-4 text-2xl font-bold">Useful Info</h2>
                <ul>
                    <li className="mt-3 hover:text-orange-700 hover:cursor-pointer">News & Events</li>
                    <li className="mt-3 hover:text-orange-700 hover:cursor-pointer">Contact</li>
                    <li className="mt-3 hover:text-orange-700 hover:cursor-pointer">Guidance</li>
                    <li className="mt-3 hover:text-orange-700 hover:cursor-pointer">Imperial HQ</li>
                    <li className="mt-3 hover:text-orange-700 hover:cursor-pointer">Ethical Standards</li>
                </ul>
            </div>
        </div>
        <div className="mt-3 p-5 bg-black flex justify-between text-white">
           <div>Promo Brick Ltd ©2023 | Privacy Notice | Terms & Conditions</div>
           <div>Built by FurmTech</div>
        </div>
    </div>
  )
}
