import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Subscribe from '../Subscribe/Subscribe'

const Hero = () => {
  return (
    <section className='bg-custom-gradient pt-4 pb-16 md:flex lg:flex lg:justify-between px-1 lg:px-6 lg:items-center'>

      <div className='mx-4 lg:w-1/2 relative'>
        <div className='hero flex  space-x-2 rounded-full items-center px-4'>
          <Image src='/fire.png' alt='logo' width={30} height={40}  />
          <span className='text-xl'>We are launching soon</span>
        </div>
   
        <div className='absolute lg:top-4 top-10 left-64 lg:left-80 mt-4'>
          <Image src='/cursorclick.png' alt='logo' width={50} height={50} />
        </div>

        <div className='mt-12 lg:mt-6'>
          <h1 className='text'>Where Community Thrives: Deals, Discussions, etc.</h1>
        </div>

        <div className='mt-6'>
          <h3 className='hero-subtext'>Bringing local residential stakeholders together for a stronger, connected neighborhood.</h3>
        </div>


        {/** waitlist */}

        <div className='mt-6'>

          <h3 className='waitlist'>Join the waiting list, to get exclusive early access</h3>


           <Subscribe />


          <div className='flex space-x-6 cursor-pointer mt-10'>
           <Link href='/'>
             <Image src='/mail.png' alt='' width={50} height={50} className='object-cover' />
           </Link>
            <Link href='/'>
              <Image src='/instagram.png' alt='' width={50} height={50} className='object-cover' />
            </Link>
            <Link href='/'>
              <Image src='/linkedin.png' alt='' width={50} height={50} className='object-cover' />
            </Link>
          </div>
        </div>
      </div>

          
        
          {/** hero image */}
      <div className="mt-12 mx-4 relative flex justify-center items-center h-[500px] lg:h-[600px]  lg:w-1/2">

        <Image
          src="/heroimg.png"
          alt="hero"
          width={500}
          height={500}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 lg:h-[700px] lg:w-[600px]"
        />
        <Image
          src="/bg.png"
          alt="hero"
          width={500}
          height={500}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 ]"
        />

      </div>


    </section>
  )
}

export default Hero
