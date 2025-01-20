import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between py-8 px-6 items-center bg-custom-gradient lg:px-12'>
      <Image src='/logo.png' alt='logo' width={110} height={30} />
       <div className='hidden lg:block'>
         <ul className='flex space-x-12 '>
           <Link href='/'>Home</Link>
           <Link href='/features'>Features</Link>
           <Link href='/blog'>Blog</Link>
         </ul>
       </div>
       <button className='bg-custom-purple rounded-lg text-white px-4 py-2 font-semibold hidden lg:block'>Contact us</button>
      <Image src='/menuicon.png' alt='logo' width={24} height={15} className='lg:hidden'/>
    </nav>
  )
}

export default Navbar
