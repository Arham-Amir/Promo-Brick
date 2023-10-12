import { Link as Lin } from "react-scroll";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Nav_Links = (props = {}) => {
  const path = usePathname();
  return (<>
    <section className={`${props.className}`}>
      <section className={`${props.childClass1} flex`}>
        <Link href='/' className={`${props.childClass2} hover:bg-themeColor transition-all duration-100 ease-in-out cursor-pointer`} onClick={() => { document.body.classList.remove('overflow-hidden'); props.showHam?.() }}>HOME</Link>
        <Lin className={`${props.childClass2} hover:bg-themeColor transition-all duration-100 ease-in-out cursor-pointer`} to="contactus" spy={true} smooth={true} duration={500} onClick={() => { document.body.classList.remove('overflow-hidden'); props.showHam?.() }}>BUSINESS</Lin>
        <Lin className={`${props.childClass2} hover:bg-themeColor transition-all duration-100 ease-in-out cursor-pointer`} to="contactus" spy={true} smooth={true} duration={500} onClick={() => { document.body.classList.remove('overflow-hidden'); props.showHam?.() }}>GALLERY</Lin>
      </section>
      <section className={`${props.childClass1} flex`}>
        <Lin className={`${props.childClass2} hover:bg-themeColor transition-all duration-100 ease-in-out cursor-pointer`} to="about" spy={true} smooth={true} duration={500} onClick={() => { document.body.classList.remove('overflow-hidden'); props.showHam?.() }}>ABOUT</Lin>
        <Lin className={`${props.childClass2} hover:bg-themeColor transition-all duration-100 ease-in-out cursor-pointer`} to="contactus" spy={true} smooth={true} duration={500} onClick={() => { document.body.classList.remove('overflow-hidden'); props.showHam?.() }}>CONTACT-US</Lin>
      </section>
    </section>
  </>
  );
}

export default Nav_Links;
