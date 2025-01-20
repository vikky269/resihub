import React from 'react'
import Blog from '../components/Blog/Blog'

export const revalidate = 30

const BlogPage = () => {
  return (
    <section>
       <Blog />
    </section>
  )
}

export default BlogPage
