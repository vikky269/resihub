import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <section className='bg-custom-gradient w-full lg:mt-12 mt-6 lg:px-12 px-8 py-12' id='contact'>
          <div className='flex flex-col space-y-6 items-start lg:flex-row lg:justify-between lg:items-center'>
              <div className='flex flex-col max-w-lg'>
                  <Image src='/resihub2.png' alt='' width={130} height={80} className='object-cover' />
                  <p className='text-[#232323] font-normal text-lg lg:text-xl'>Bringing local residential stakeholders together for a stronger, connected neighborhood.</p>
              </div>

              {/** social media icons */}
              <div className='flex space-x-4 cursor-pointer'>
                    <Image src='/mail.png' alt='' width={50} height={50} className='object-cover' />
                    <Image src='/instagram.png' alt='' width={50} height={50} className='object-cover' />
                    <Image src='/linkedin.png' alt='' width={50} height={50} className='object-cover' />
              </div>
          </div>
    </section>
  )
}

export default Footer
