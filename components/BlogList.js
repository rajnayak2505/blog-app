'use client'
import React, { useEffect, useState } from 'react'
import BlogItem from './BlogItem'
import axios from 'axios';

const BlogList = () => {
  const [menu, setMenu] = useState('All')

  const [blogs, setBlogs] = useState();

  const getBlogs = async () => {
    const response = await axios.get('/api/blog')
    setBlogs(response.data.blogs);
  };

  useEffect(() => {
    getBlogs();
  }, []);


  return (
    <>
      <div className='flex justify-center gap-6 my-10'>
        <button onClick={() => setMenu('All')} className={menu === "All" ? 'bg-black text-white py-1 px-4 rounded-sm' : ""}>All</button>
        <button onClick={() => setMenu('Tech')} className={menu === "Tech" ? 'bg-black text-white py-1 px-4 rounded-sm' : ""}>Tech</button>
        <button onClick={() => setMenu('Lifestyle')} className={menu === "Lifestyle" ? 'bg-black text-white py-1 px-4 rounded-sm' : ""}>Lifestyle</button>
        <button onClick={() => setMenu('Start‑up')} className={menu === "Start‑up" ? 'bg-black text-white py-1 px-4 rounded-sm' : ""}>Start-up</button>
        <button onClick={() => setMenu('Business')} className={menu === "Business" ? 'bg-black text-white py-1 px-4 rounded-sm' : ""}>Business</button>
      </div>
      <div className='flex justify-around flex-wrap gap-1 gap-y-10 mb-16 xl:mx-24'>
        {blogs && blogs.length > 0 &&
          blogs.filter(item => menu === "All" ? true : item.category === menu)
            .map(item => (
              <BlogItem
                key={item._id}
                id={item._id}
                category={item.category}
                title={item.title}
                description={item.description}
                image={item.image}
              />
            ))
        }
      </div>
    </>
  )
}

export default BlogList