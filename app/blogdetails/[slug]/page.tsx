import React from 'react'
import { client, urlFor } from '../../lib/sanity'
import { FullBlog } from '../../lib/interface'
import Image from 'next/image'
import { PortableText, } from '@portabletext/react'

async function getData(slug: string) {
  const query = `
    *[_type == 'blog' && slug.current == $slug][0] {
      "currentSlug": slug.current,
      title,
      content,
      titleImage
    }
  `;

  const data = await client.fetch(query, { slug });
  return data;
}

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const resolvedParams = await params; // Resolve the params if they are a Promise
  const data: FullBlog = await getData(resolvedParams.slug);
  return (
    <section className='lg:px-12 px-6 py-12 flex-col flex items-center justify-center'>
        <h1 className='lg:text-3xl  text-lg  tracking-tight font-bold mt-4'>{data.title}</h1>

        <Image
        src={urlFor(data.titleImage).url()}
        alt=""
        width={700}
        height={500}
        priority
        className="object-cover mt-8 rounded-lg"
      />

      <div className='mt-8 prose prose-sm lg:prose-xl prose-li:marker:text-custom-purple'>
        <PortableText value={data.content} />
      </div>
    </section>
  )
}

export default page
