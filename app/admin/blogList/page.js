'use client'
import BlogTableItem from '@/components/adminComponents/BlogTableItem'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const BlogListPage = () => {
  const [blogs, setBlogs] = useState([]);

  const getBlogs = async() => {
    const response = await axios.get('/api/blog')
    setBlogs(response.data.blogs)
  };

    const deleteBlog = async(blogId) => {
    const response = await axios.delete('/api/blog', {
      params:{id:blogId}
    })
    toast.success(response.data.msg);
     getBlogs(); // update after deletion of blog
  };

  useEffect(() => {
    getBlogs();
  },[])

  return (
    <div className='flex-1 pt-5 px-5sm:pt-12 sm:pl-16'>
      <h1>All Blogs</h1>
      <div className='relative h-[80vh] max-w-[850px] overflow-x-auto mt-4 border border-gray-400 scorllbar-hide'>
          <table className='w-full text-sm text-gray-500 '>
            <thead className='text-sm text-gray-700 text-left uppercase bg-gray-50'>
              <tr>
                <th scope='col' className='hidden sm:block px-6 py-3'>
                  Author Name
                </th>
                <th scope='col' className='px-6 py-3'>
                  Blog Title
                </th>
                <th scope='col' className='px-6 py-3'>
                  Blog Date
                </th>
                <th scope='col' className='px-6 py-3'>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((item)=> {
                return <BlogTableItem key={item._id} blogId={item._id} title={item.title} author={item.author} date={item.date} deleteBlog={deleteBlog}/>
              })}
            </tbody>
          </table>
      </div>

    </div>
  )
}

export default BlogListPage