'use client'
import { Link as Lin } from "react-scroll";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import LazyImage from "./lazyImage";


const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const path = usePathname();
  useEffect(() => {
    setDropdownOpen(false);
  }, [path])

  return (
    <div className="navbar bg-bg h-[12vh] z-30">
      <div className="navbar-start flex-row-reverse md:flex-row justify-between md:justify-start w-full md:w-1/2">
        <div className="dropdown z-30">
          <label tabIndex={0} className="btn btn-ghost md:hidden" onClick={toggleDropdown}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} onClick={() => setIsDropdownOpen(false)}
            className={`z-30 menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ${isDropdownOpen ? 'block' : 'hidden'} right-0`}>
            <li className={`${path == '/' ? 'font-bold text-themeColor' : 'font-normal'} cursor-pointer hover:scale-110 transition duration-100 hover:text-themeColor`}>
              <Link href="/">Home</Link></li>
            <li >
              <a className={`${path == "/page2" || path == "/page3" || path == "/page4" || path == "/page5" || path == "/page6" ? 'font-bold text-themeColor' : 'font-normal'} cursor-pointer hover:scale-110 transition duration-100 hover:text-themeColor`}>Products</a>
              <ul className="p-2 z-30">
                <li><Link href="/page2" className="cursor-pointer min-w-fit hover:scale-110 transition duration-100 hover:text-themeColor">Buildings Bricks</Link></li>
                <li><Link href="/page3" className="cursor-pointer min-w-fit hover:scale-110 transition duration-100 hover:text-themeColor">Facing Bricks</Link></li>
                <li><Link href="/page5" className="cursor-pointer min-w-fit hover:scale-110 transition duration-100 hover:text-themeColor">Clay Tiles</Link></li>
                <li><Link href="/page4" className="cursor-pointer min-w-fit hover:scale-110 transition duration-100 hover:text-themeColor">Brick Slips</Link></li>
                <li><Link href="/page6" className="cursor-pointer min-w-fit hover:scale-110 transition duration-100 hover:text-themeColor">Pots</Link></li>
              </ul>
            </li>
            <li className={`${path == '/gallery' ? 'font-bold text-themeColor' : 'font-normal'} cursor-pointer hover:scale-110 transition duration-100 hover:text-themeColor`}><Link href="/gallery">Gallery</Link></li>
            {/* <li className={`cursor-pointer hover:scale-110 transition duration-100 hover:text-themeColor`}><Link href="/about">About</Link></li> */}
            <li className={`cursor-pointer hover:scale-110 transition duration-100 hover:text-themeColor`}><Lin to="contactus" spy={true} smooth={true} duration={500} >Contact Us</Lin></li>
            <li><a href="https://www.promodevelopers.com" target="blank" className="py-3 text-white flex items-center justify-center h-fit bg-themeColor rounded-xl">Construct with us</a></li>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          <LazyImage className="h-full w-fit object-contain mr-1" src="/images/nav_logo.gif" />
          Promo Brick
        </Link>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1">
          <li className={`${path == '/' ? 'scale-110 font-bold text-themeColor' : 'scale-100 font-normal'} cursor-pointer hover:scale-110 transition duration-100 hover:text-themeColor`}><Link href="/">Home</Link></li>
          <li tabIndex={0} className="">
            <details {...(dropdownOpen == false ? { open: true } : {})}>
              <summary className={`${path == "/page2" || path == "/page3" || path == "/page4" || path == "/page5" || path == "/page6" ? 'scale-110 font-bold text-themeColor' : 'scale-100 font-normal'} cursor-pointer  hover:scale-110 transition duration-100 hover:text-themeColor`} onClick={() => setDropdownOpen(!dropdownOpen)} >Products</summary>
              {dropdownOpen && (<ul className="p-2 z-30 min-w-max">
                <li ><Link href="/page2" onClick={() => setDropdownOpen(false)} className="cursor-pointer min-w-fit hover:scale-110 transition duration-100 hover:text-themeColor">Buildings Bricks</Link></li>
                <li ><Link href="/page3" onClick={() => setDropdownOpen(false)} className="cursor-pointer min-w-fit hover:scale-110 transition duration-100 hover:text-themeColor">Facing Bricks</Link></li>
                <li ><Link href="/page5" onClick={() => setDropdownOpen(false)} className="cursor-pointer min-w-fit hover:scale-110 transition duration-100 hover:text-themeColor">Clay Tiles</Link></li>
                <li ><Link href="/page4" onClick={() => setDropdownOpen(false)} className="cursor-pointer min-w-fit hover:scale-110 transition duration-100 hover:text-themeColor">Brick Slips</Link></li>
                <li ><Link href="/page6" onClick={() => setDropdownOpen(false)} className="cursor-pointer min-w-fit hover:scale-110 transition duration-100 hover:text-themeColor">Pots</Link></li>
              </ul>)}
            </details>
          </li>
          <li className={`${path == '/gallery' ? 'scale-110 font-bold text-themeColor' : 'scale-100 font-normal'} cursor-pointer hover:scale-110 transition duration-100 hover:text-themeColor`}><Link href="/gallery">Gallery</Link></li>
          {/* <li className={`cursor-pointer hover:scale-110 transition duration-100 hover:text-themeColor`}><Link href="/about">About</Link></li> */}
          <li className={`cursor-pointer hover:scale-110 transition duration-100 hover:text-themeColor`}><Lin to="contactus" spy={true} smooth={true} duration={500} >Contact Us</Lin></li>
        </ul>
      </div>
      <div className="hidden md:flex navbar-end">
        <a href="https://www.promodevelopers.com" target="blank" className="btn text-white bg-themeColor rounded-xl">Construct with us</a>
      </div>
    </div>
  );
}

export default Navbar;
