import './globals.css'
import { Inter, Figtree, Glass_Antiqua } from 'next/font/google'
import Navbar from '@components/base/navbar'
import Footer from '@components/base/footer/footer'
import ContactUs from '@components/base/contactUs/contactUs'

const inter = Inter({ subsets: ['latin'] })
const figtree = Figtree({
  subsets: ['latin'],
  variable: '--font-text'
})
const glass = Glass_Antiqua({
  subsets: ['latin'],
  variable: '--font-heading',
  weight:'400',
})

export const metadata = {
  title: 'Promo Brick',
  description: 'Promo Brick is one of the leading manufacturers of brick making in Pakistan. They are making hundreds of design in bricks manufacturing.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${glass.variable} ${figtree.variable} ${inter.className} overflow-x-hidden max-w-screen font-text bg-bg`}>
        <Navbar />
        {children}
        <ContactUs />
        <Footer />
      </body>
    </html>
  )
}
