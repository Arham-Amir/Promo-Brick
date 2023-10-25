import { Link as Lin } from "react-scroll";
import Link from "next/link";

const Nav_Links = (props = {}) => {

  return (<>
    <section className={`${props.className} font-text`}>
      <section className={`${props.childClass1} flex`}>
        <Link href='/' className={`${props.childClass2} ${props.path=="/"? 'text-themeColor' : 'text-black'} hover:bg-themeColor hover:text-white rounded-2xl px-5 py-3 transition-all duration-100 ease-in-out cursor-pointer`} onClick={() => { document.body.classList.remove('overflow-hidden'); props.showHam?.() }}>HOME</Link>
        <Lin className={`${props.childClass2} hover:bg-themeColor hover:text-white rounded-2xl px-5 py-3 transition-all duration-100 ease-in-out cursor-pointer`} to="contactus" spy={true} smooth={true} duration={500} onClick={() => { document.body.classList.remove('overflow-hidden'); props.showHam?.() }}>BUSINESS</Lin>
        <li tabIndex={0}>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
        <Lin className={`${props.childClass2} hover:bg-themeColor hover:text-white rounded-2xl px-5 py-3 transition-all duration-100 ease-in-out cursor-pointer`} to="contactus" spy={true} smooth={true} duration={500} onClick={() => { document.body.classList.remove('overflow-hidden'); props.showHam?.() }}>GALLERY</Lin>
      </section>
      <section className={`${props.childClass1} flex`}>
        <Lin className={`${props.childClass2} hover:bg-themeColor hover:text-white rounded-2xl px-5 py-3 transition-all duration-100 ease-in-out cursor-pointer`} to="about" spy={true} smooth={true} duration={500} onClick={() => { document.body.classList.remove('overflow-hidden'); props.showHam?.() }}>ABOUT</Lin>
        <Lin className={`${props.childClass2} ${!props.small ? 'bg-themeColor': 'hover:bg-themeColor'} text-white rounded-2xl px-5 py-3 transition-all duration-100 ease-in-out cursor-pointer`} to="contactus" spy={true} smooth={true} duration={500} onClick={() => { document.body.classList.remove('overflow-hidden'); props.showHam?.() }}>CONTACT-US</Lin>
      </section>
    </section>
  </>
  );
}

export default Nav_Links;
