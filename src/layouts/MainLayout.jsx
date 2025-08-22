import React from 'react'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'

export default function MainLayout({ children }) {
  return (
    <div>
        <Navbar/>
            <div className='pt-28 max-md:pt-32 max-sm:pt-40'>
                {children}
            </div>
        <Footer/>
    </div>
  )
}
