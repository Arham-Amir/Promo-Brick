import Link from "next/link";

const Nav_Logo = () => {
  return (
    <div className=" md:pl-0 h-full">
      <Link href='/' className=""><img src='/images/nav_logo.gif' className="h-full scale-150 object-contain" alt="Company Logo Image for Navbar" /></Link>
    </div>
  );
}

export default Nav_Logo;
