import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar/navbar'
import Footer from '@/components/footer/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'BlogApp',
  description: 'Next.js Blog-App',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    
    <body className={inter.className}>
    <div className='container'>
      <Navbar/>
      {children}
      <Footer/>
      </div>
      </body>
    </html>
  )
}