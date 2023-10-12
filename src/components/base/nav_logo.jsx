import Link from "next/link";

const Nav_Logo = () => {
  return (
    <div className=" md:pl-0 md:absolute md:left-1/2 md:-translate-x-1/2 h-full">
      <Link href='/' className=""><img src='/images/nav_logo.gif' className="h-full object-contain" alt="Company Logo Image for Navbar" /></Link>
    </div>
  );
}

export default Nav_Logo;
