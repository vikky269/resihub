import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className='bg-custom-gradient pb-16 lg:flex lg:justify-between lg:px-6 lg:items-center'>

      <div className='mx-4 lg:w-1/2 relative'>
        <div className='hero flex  space-x-3 rounded-full items-center '>
          <Image src='/fire.png' alt='logo' width={20} height={30} />
          <span>We are launching soon</span>
        </div>
   
        <div className='absolute lg:top-0 top-6 left-56 lg:left-64 mt-4'>
          <Image src='/cursorclick.png' alt='logo' width={50} height={50} />
        </div>

        <div className='mt-8 lg:mt-4'>
          <h1 className='text'>Where Community Thrives: Deals, Discussions, etc.</h1>
        </div>

        <div className='mt-6'>
          <h3 className='hero-subtext'>Bringing local residential stakeholders together for a stronger, connected neighborhood.</h3>
        </div>


        {/** waitlist */}

        <div className='mt-6'>

          <h3 className='waitlist'>Join the waiting list, to get exclusive early access</h3>


          <form className="waitlist-form">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="waitlist-input"
            />
            <button
              type="submit"
              className="waitlist-btn"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

          
        
          {/** hero image */}
      <div className="mt-12 mx-4 relative flex justify-center items-center h-[500px] lg:h-[600px]  lg:w-1/2">

        <Image
          src="/Hero.png"
          alt="hero"
          width={500}
          height={500}
         className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 lg:h-[700px] lg:w-[600px]"
        />
        <Image
          src="/hero2.png"
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
