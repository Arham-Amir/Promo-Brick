'use client'
import Nav_Logo from "@components/base/nav_logo";
import Nav_Links from "@components/base/nav_links";
import { Link as Lin } from "react-scroll";
import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";


const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  // const [ham, showHam] = useState(false);
  // const navRef = useRef(null);
  // const navRef2 = useRef(null);
  const path = usePathname();
  useEffect(() => {
    setDropdownOpen(false);
  }, [path])
  // useEffect(() => {
  //   const observer = new IntersectionObserver(entries => {
  //     entries.forEach(entry => {
  //       if (entry.isIntersecting) {
  //         navRef2.current.classList.remove('block')
  //         navRef2.current.classList.add('hidden')
  //       } else {
  //         navRef2.current.classList.remove('hidden')
  //         navRef2.current.classList.add('block')
  //       }
  //     });
  //   }, {
  //     root: null,
  //     rootMargin: '0px',
  //     threshold: 0
  //   });

  //   if (navRef.current) {
  //     observer.observe(navRef.current);
  //   }

  //   return () => {
  //     if (navRef.current) {
  //       observer.unobserve(navRef.current);
  //     }
  //   };
  // }, [])
  // useEffect(() => {
  //   if (ham) {
  //     document.body.classList.add('overflow-hidden');
  //   } else {
  //     document.body.classList.remove('overflow-hidden');
  //   }
  //   return () => {
  //     document.body.classList.remove('overflow-hidden');
  //   };
  // }, [ham]);

  return (
    <>
      {/* <section ref={navRef} className={`${ham ? 'h-[14vh]' : 'h-[14vh]'} ${path=="/"? 'bg-bg' : 'bg-bg'} flex flex-col z-50 w-screen`}>
      <nav className="h-full w-full 2xl:h-28 text-black py-3 lg:pl-8 lg:pr-12 xl:pl-10 xl:pr-24 sm:px-10 xs:px-4 lg:text-md 2xl:text-xl 3xl:text-2xl flex items-center justify-between font-sans relative">
        <Nav_Logo></Nav_Logo>
        <Nav_Links path={path} childClass1 = "gap-3" childClass2="px-3 py-1" className='xs:hidden md:flex md:justify-between w-full md:gap-7 lg:gap-12 font-semibold' />
        <section onClick={() => { showHam(!ham) }} className="z-30 md:hidden xs:flex flex-col items-end justify-center gap-2 pr-4" >
          <p className={`${ham ? 'w-6 rotate-[495deg] translate-y-[10px]' : 'w-8'}  transition-all duration-500 p-[1px] bg-black`}></p>
          <p className={`w-6 p-[1px] transition-all duration-500 bg-black ${ham ? 'opacity-0' : 'opacity-100'} transform ${ham ? '-translate-y-10' : 'translate-y-0'}`}></p>
          <p className={`${ham ? 'w-6 rotate-[405deg] -translate-y-[10px]' : 'w-4'} transition-all duration-500
          p-[1px] bg-black`}></p>
        </section>
      </nav>
      <Nav_Links path={path} childClass1 = "flex-col gap-10 items-center" childClass2="px-3 py-1" showHam={() => showHam(false)}
        className={`${ham ? 'flex' : 'hidden'}
        xs:fixed xs:top-[14vh] z-50 w-full xs:h-[86vh] transition-all duration-500 justify-center flex-col items-center gap-10 xs:bg-white`} />
    </section>
    <section ref={navRef2} className="bg-black w-screen h-[7vh] fixed top-0 z-40 xs:text-[7px] md:text-sm">
      <Nav_Links path={path} childClass2="p-3" small='true' className="text-white flex items-center justify-center "></Nav_Links>
    </section> */
      }
      <div className="navbar bg-bg h-[12vh] z-30">
        <div className="navbar-start flex-row-reverse md:flex-row justify-between md:justify-start w-full md:w-1/2">
          <div className="dropdown z-30">
            <label tabIndex={0} className="btn btn-ghost md:hidden" onClick={toggleDropdown}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} onClick={()=> setIsDropdownOpen(false)}
             className={`z-30 menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ${isDropdownOpen ? 'block' : 'hidden'} right-0`}>
              <li className="cursor-pointer hover:scale-110 transition duration-100 hover:text-themeColor">
                <Link href="/">Home</Link></li>
              <li >
                <a className="cursor-pointer hover:scale-110 transition duration-100 hover:text-themeColor">Products</a>
                <ul className="p-2 z-30">
                  <li><Link href="/page2" className="cursor-pointer min-w-fit hover:scale-110 transition duration-100 hover:text-themeColor">Buildings Bricks</Link></li>
                  <li><Link href="/page3" className="cursor-pointer min-w-fit hover:scale-110 transition duration-100 hover:text-themeColor">Facing Bricks</Link></li>
                  <li><Link href="/page4" className="cursor-pointer min-w-fit hover:scale-110 transition duration-100 hover:text-themeColor">Brick Slips</Link></li>
                  <li><Link href="/page5" className="cursor-pointer min-w-fit hover:scale-110 transition duration-100 hover:text-themeColor">Clay Tiles</Link></li>
                  <li><Link href="/page6" className="cursor-pointer min-w-fit hover:scale-110 transition duration-100 hover:text-themeColor">Pots</Link></li>
                </ul>
              </li>
              <li className="cursor-pointer hover:scale-110 transition duration-100 hover:text-themeColor"><Link href="/gallery">Gallery</Link></li>
              <li className="cursor-pointer hover:scale-110 transition duration-100 hover:text-themeColor"><Link href="/about">About</Link></li>
              <li className="cursor-pointer hover:scale-110 transition duration-100 hover:text-themeColor"><Lin to="contactus" spy={true} smooth={true} duration={500} >Contact Us</Lin></li>
              <li><a href="https://www.promodevelopers.com" target="blank" className="py-3 text-white flex items-center justify-center h-fit bg-themeColor rounded-xl">Construct with us</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Promo Brick</a>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="cursor-pointer hover:scale-110 transition duration-100 hover:text-themeColor"><Link href="/">Home</Link></li>
            <li tabIndex={0} className="">
              <details {...(dropdownOpen == false ? { open: true } : {})}>
                <summary onClick={() => setDropdownOpen(!dropdownOpen)} className="cursor-pointer  hover:scale-110 transition duration-100 hover:text-themeColor">Products</summary>
                {dropdownOpen && (<ul className="p-2 z-30 min-w-max">
                  <li ><Link href="/page2" onClick={() => setDropdownOpen(false)} className="cursor-pointer min-w-fit hover:scale-110 transition duration-100 hover:text-themeColor">Buildings Bricks</Link></li>
                  <li ><Link href="/page3" onClick={() => setDropdownOpen(false)} className="cursor-pointer min-w-fit hover:scale-110 transition duration-100 hover:text-themeColor">Facing Bricks</Link></li>
                  <li ><Link href="/page5" onClick={() => setDropdownOpen(false)} className="cursor-pointer min-w-fit hover:scale-110 transition duration-100 hover:text-themeColor">Clay Tiles</Link></li>
                  <li ><Link href="/page4" onClick={() => setDropdownOpen(false)} className="cursor-pointer min-w-fit hover:scale-110 transition duration-100 hover:text-themeColor">Brick Slips</Link></li>
                  <li ><Link href="/page6" onClick={() => setDropdownOpen(false)} className="cursor-pointer min-w-fit hover:scale-110 transition duration-100 hover:text-themeColor">Pots</Link></li>
                </ul>)}
              </details>
            </li>
            <li className="cursor-pointer hover:scale-110 transition duration-100 hover:text-themeColor"><Link href="/gallery">Gallery</Link></li>
            <li className="cursor-pointer hover:scale-110 transition duration-100 hover:text-themeColor"><Link href="/about">About</Link></li>
            <li className="cursor-pointer hover:scale-110 transition duration-100 hover:text-themeColor"><Lin to="contactus" spy={true} smooth={true} duration={500} >Contact Us</Lin></li>
          </ul>
        </div>
        <div className="hidden md:flex navbar-end">
          <a href="https://www.promodevelopers.com" target="blank" className="btn text-white bg-themeColor rounded-xl">Construct with us</a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
