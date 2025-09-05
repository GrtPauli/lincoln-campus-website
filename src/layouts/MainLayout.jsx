import React from 'react'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'

export default function MainLayout({ children }) {
  return (
    <div>
        <Navbar/>
            <div className='pt-16 max-md:pt-18 max-sm:pt-16'>
                {children}
            </div>
        <Footer/>
    </div>
  )
}
