"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'

const Navbar = () => {

  const [isopen, setisopen] = useState(false)

  const togglemenu = () => {
    setisopen(!isopen)
  }
 
  return (
    <nav className='flex justify-between relative py-4 lg:py-8 px-6 items-center bg-custom-gradient lg:px-12'>
       <Link href='/'>
           <Image src='/resihub2.png' alt='logo' width={140} height={50} />
       </Link>
       

       <div className='hidden md:block lg:block'>
         <ul className='flex space-x-12'>
           <Link className='hover:text-custom-purple' href='/'>Home</Link>
           <Link className='hover:text-custom-purple' href='/#features'>Features</Link>
           <Link  className='hover:text-custom-purple' href='/blog'>Blog</Link>
         </ul>
       </div>
       
       <Link href='#contact'>
          <button className='bg-custom-purple rounded-lg text-white px-4 py-2 font-semibold hidden transform transition-transform duration-200 ease-in-out hover:translate-y-[-2px] hover:shadow-md md:block lg:block'>Contact us</button>
       </Link>
      

      {/* Mobile Menu */}
      <div className="md:hidden cursor-pointer">
       <div className=''>
        {isopen ? ( <Image src='/close2.png' alt='logo' className='z-50' width={40} height={40} onClick={togglemenu}/>) : (
           <Image src='/menuicon.png' alt='logo' className='z-50' width={24} height={15} onClick={togglemenu} />
        )}
       </div>

       {/* Menu Items */}

        {isopen && (
          <div
          className={`absolute top-[100%] w-[85%] min-h-screen left-0 bg-[#2218A8] text-white text-2xl z-20 pt-16 font-medium font-title ${isopen ? "animate-slideIn" : "animate-slideOut"}`} >
            <ul className="cursor-pointer flex flex-col items-center gap-12 justify-center">
              <Link href="/" className="cursor-pointer" onClick={togglemenu}>
                Home
              </Link>
              <Link href="/#features" className="cursor-pointer" onClick={togglemenu}>
                Features
              </Link>
              <Link href="/blog" className="cursor-pointer" onClick={togglemenu}>
                Blog
              </Link>
              <Link href="#contact" className="cursor-pointer" onClick={togglemenu}>
                Contact
              </Link>
            </ul>
          </div>
        )}

      </div>
    </nav>
  )
}

export default Navbar
