import Image from 'next/image'
import React from 'react'

const Choose = () => {
  return (
    <section className='bg-custom-gradient mt-8 flex flex-col space-y-20 lg:flex-row lg:justify-between lg:items-center px-8 lg:px-12 py-6'>
        {/**left content */}
          <div className='max-w-2xl'>
              <h3 className='feat-text mb-8'>Why Choose ResiHub?</h3>
              <span className='font-normal text-[#1a1a1a] text-md lg:text-lg leading-7'>Experience smarter living with a connected community, simplified communication, 
                and local insights at your fingertips.</span>

                <div>
                    <div className='checkbox-parent'>
                         <div className='checkbox'>
                                <img src='/Vector.png' alt='check' className='vector'/>
                         </div>
                        <span className='font-normal text-[#1a1a1a] md:text-sm text-[15px] xl:text-lg lg:text-[16px] leading-7'>Stay informed about safety alerts and neighborhood events, ensuring you’re always in the loop.</span>
                    </div>
                  <div className='checkbox-parent '>
                     <div className='checkbox'>
                                <img src='/Vector.png' alt='check' className='vector'/>
                         </div>
                      <span className='font-normal text-[#1a1a1a] md:text-sm  text-[15px] xl:text-lg lg:text-[16px] leading-7'>Build relationships with neighbors and foster a sense of belonging through active discussions and shared experiences.</span>
                  </div>
                    <div className='checkbox-parent'>
                        <div className='checkbox'>
                                <img src='/Vector.png' alt='check' className='vector'/>
                         </div>
                        <span className='font-normal text-[#1a1a1a] md:text-sm  text-[15px] xl:text-lg lg:text-[16px] leading-7'>Simplify communication with property managers and resolve building issues effortlessly, saving time and hassle.</span>
                    </div>
                    <div className='checkbox-parent'>
                          <div className='checkbox'>
                                <img src='/Vector.png' alt='check' className='vector'/>
                         </div>
                        <span className='font-normal text-[#1a1a1a] md:text-sm  text-[15px] xl:text-lg lg:text-[16px]  leading-7'>Access reliable local services and exclusive offers, making daily life easier and more enjoyable.</span>
                    </div>
                </div>
          </div>
       {/**right content */}
         <div className='cursor-pointer'>
          <Image src='/choose.png' alt='choose' width={500} height={500} />
         </div>
    </section>
  )
}

export default Choose
