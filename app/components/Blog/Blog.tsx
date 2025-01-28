import React from 'react'
import {client, urlFor} from '../../lib/sanity'
import { SimpleBlog } from '@/app/lib/interface'
import Image from 'next/image'
import Link from 'next/link'


export const revalidate = 30

async function getData() {
    const query = `*[_type == 'blog' ] | order(_createdAt desc)[0...3]{
  title,
    smallDescription,
    "currentSlug":slug.current,
    titleImage
}`

const data = await client.fetch(query)
return data
}

const Blog = async() => {
    const data : SimpleBlog[] = await getData()
    console.log(data)
  return (
    <section className='mt-12 p-6 lg:p-12'>
       <h3 className='feat-text text-center'>Blog Post</h3>
        <p className='feat-subtext text-center mt-4'>Bringing local residential stakeholders together for a stronger, connected neighborhood.</p>

        {/** blog posts */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 justify-center items-center'>
            {data.map((blog, index) => (
                <div key={index} className='bg-white shadow-sm rounded-lg'>
                    <Image src={urlFor(blog.titleImage).url()} alt='' width={500} height={500} className='object-cover'/>
                     <div className='flex space-x-5 p-6 items-center'>
                      <span className='text-[#1a1a1a] text-sm font-bold font-roboto py-2 px-2 bg-[#F4F4F4] rounded-md'>Current Events</span>
                       <h3 className='text-[#1a1a1a] text-sm font-bold font-roboto'>5 min read</h3>
                     </div>
                    <div className='p-6 mt-[-32px]'>
                        <h3 className='text-xl font-bold text-[#1A1A1A] mb-2 line-clamp-2'>{blog.title}</h3>
                        <p className='text-[#1a1a1a] line-clamp-3 text-sm'>{blog.smallDescription}</p>
                        <Link href={`/blogdetails/${blog.currentSlug}`} className='flex space-x-4 text-left text-sm font-roboto font-normal mt-4 w-fit'>
                            <span className='text-[#1a1a1a] '>Read More</span>
                        <img src="/readmore.png" alt="" />
                        </Link>
                    </div>
                </div>
            ))}
        </div>

        <Link href='/blog' className='flex justify-center mt-8'>
        <button className="bg-slate-500 text-white py-2 px-4 rounded-md transform transition-transform duration-200 ease-in-out hover:translate-y-[-2px] hover:shadow-md">
          See all Blogs
        </button>
        </Link>
    </section>
  )
}

export default Blog
