'use client'
import Nav_Logo from "@components/base/nav_logo";
import Nav_Links from "@components/base/nav_links";
import { useEffect, useState, useRef } from "react";

const Navbar = () => {
  const [ham, showHam] = useState(false);
  const navRef = useRef(null);
  const navRef2 = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navRef2.current.classList.remove('block')
          navRef2.current.classList.add('hidden')
        } else {
          navRef2.current.classList.remove('hidden')
          navRef2.current.classList.add('block')
        }
      });
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0
    });

    if (navRef.current) {
      observer.observe(navRef.current);
    }

    return () => {
      if (navRef.current) {
        observer.unobserve(navRef.current);
      }
    };
  }, [])
  useEffect(() => {
    if (ham) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [ham]);

  return (<>
    <section ref={navRef} className={`bg-black ${ham ? 'h-[14vh]' : 'h-[14vh]'}  flex flex-col z-50 w-screen backdrop-blur-[1px]`}>
      <nav className="bg-white h-full w-full 2xl:h-28 text-black py-3 lg:pl-8 lg:pr-12 xl:pl-10 xl:pr-24 sm:px-10 xs:px-4 lg:text-md 2xl:text-xl 3xl:text-2xl flex items-center justify-between font-sans relative">
        <Nav_Logo></Nav_Logo>
        <Nav_Links childClass1 = "gap-3" childClass2="px-3 py-1" className='xs:hidden md:flex md:justify-between w-full md:gap-7 lg:gap-12 font-semibold' />
        <section onClick={() => { showHam(!ham) }} className="z-30 md:hidden xs:flex flex-col items-end justify-center gap-2 pr-4" >
          <p className={`${ham ? 'w-6 rotate-[495deg] translate-y-[10px]' : 'w-8'}  transition-all duration-500 p-[1px] bg-black`}></p>
          <p className={`w-6 p-[1px] transition-all duration-500 bg-black ${ham ? 'opacity-0' : 'opacity-100'} transform ${ham ? '-translate-y-10' : 'translate-y-0'}`}></p>
          <p className={`${ham ? 'w-6 rotate-[405deg] -translate-y-[10px]' : 'w-4'} transition-all duration-500
          p-[1px] bg-black`}></p>
        </section>
      </nav>
      <Nav_Links childClass1 = "flex-col gap-10 items-center" childClass2="px-3 py-1" showHam={() => showHam(false)}
        className={`${ham ? 'flex' : 'hidden'}
        xs:fixed xs:top-[14vh] z-50 w-full xs:h-[86vh] transition-all duration-500 justify-center flex-col items-center gap-10 xs:bg-white`} />
    </section>
    <section ref={navRef2} className="bg-black w-screen fixed top-0 z-40 xs:text-[7px] md:text-sm">
      <Nav_Links childClass2="p-3" className="text-white flex items-center justify-center "></Nav_Links>
    </section>
  </>
  );
}

export default Navbar;
