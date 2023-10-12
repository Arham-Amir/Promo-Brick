'use client'
import { useRouter } from 'next/navigation'

const Nav_LinksMob = ({ abc, className }) => {
  const router = useRouter()
  function handleClick(e, url) {
    abc()
    router.push(url)
  }

  return (<>
    <section className={`${className} lg:nav_links`}>
      <button className='relative' onClick={(e) => { handleClick(e, "/") }}>HOME </button>
      <button className='relative' onClick={(e) => { handleClick(e, "#businesses") }}>Blogs</button>
      <button className='relative' onClick={(e) => { handleClick(e, "#about") }}>ABOUT</button>
      <button className='relative' onClick={(e) => { handleClick(e, "#contactus") }}>CONTACT-US</button>
    </section>
  </>
  );
}

export default Nav_LinksMob;
