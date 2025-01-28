import Image from 'next/image'
import React from 'react'

const Choose = () => {
  return (
    <section className='bg-custom-gradient mt-8 flex flex-col space-y-20 lg:flex-row lg:justify-between lg:items-center px-8 lg:px-12 py-8 lg:py-0'>
        {/**left content */}
          <div className='max-w-2xl'>
              <h3 className='feat-text mb-8'>Why Choose ResiHub?</h3>
              <span className='font-normal text-[#1a1a1a] text-md lg:text-lg leading-7'>Experience smarter living with a connected community, simplified communication, 
                and local insights at your fingertips.</span>

               
        <div className="space-y-6 mt-8">
          {/* First Feature */}
          <div className="flex items-center gap-4">
            <div className="w-6 h-6 flex-shrink-0 bg-custom-purple rounded-md flex items-center justify-center">
              <img src="/Vector.png" alt="Check" className="w-4 h-4" />
            </div>
            <span className="text-[#1a1a1a] leading-7 text-[15px] md:text-sm xl:text-lg">
              Stay informed about safety alerts and neighborhood events, ensuring you’re always in the loop.
            </span>
          </div>
          {/* Second Feature */}
          <div className="flex items-center gap-4">
            <div className="w-6 h-6 flex-shrink-0 bg-custom-purple rounded-md flex items-center justify-center">
              <img src="/Vector.png" alt="Check" className="w-4 h-4" />
            </div>
            <span className="text-[#1a1a1a] leading-7 text-[15px] md:text-sm xl:text-lg">
              Build relationships with neighbors and foster a sense of belonging through active discussions and shared experiences.
            </span>
          </div>
          {/* Third Feature */}
          <div className="flex items-center gap-4">
            <div className="w-6 h-6 flex-shrink-0 bg-custom-purple rounded-md flex items-center justify-center">
              <img src="/Vector.png" alt="Check" className="w-4 h-4" />
            </div>
            <span className="text-[#1a1a1a] leading-7 text-[15px] md:text-sm xl:text-lg">
              Simplify communication with property managers and resolve building issues effortlessly, saving time and hassle.
            </span>
          </div>
          {/* Fourth Feature */}
          <div className="flex items-center gap-4">
            <div className="w-6 h-6 flex-shrink-0 bg-custom-purple rounded-md flex items-center justify-center">
              <img src="/Vector.png" alt="Check" className="w-4 h-4" />
            </div>
            <span className="text-[#1a1a1a] leading-7 text-[15px] md:text-sm xl:text-lg">
              Access reliable local services and exclusive offers, making daily life easier and more enjoyable.
            </span>
          </div>
        </div>


          </div>
       {/**right content */}
         <div className='cursor-pointer'>
          <Image src='/why.png' alt='choose' width={1200} height={2000} />
         </div>
    </section>
  )
}

export default Choose
