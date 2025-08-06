import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <div className='flex flex-col bg-slate-100 '>
      <div className='px-2 sm:pl-14 py-3 border border-black'>
        <Link href="/" className='text-3xl italic font-bold'>blogger</Link>
      </div>
      <div className='w-28 sm:w-80 h-[100vh] relative py-12 border border-black'>
        <div className='w-[50%] sm:w-[80%] absolute right-0'>
          <Link href='/admin/addBlog' className='flex items-center border border-black gap-3 font-medium px-3 py-2 shadow-[-7px_7px_0px_#000] cursor-pointer'>
            <p>Add blogs [+]</p>
          </Link>
          <Link href='/admin/blogList' className='mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 shadow-[-7px_7px_0px_#000] cursor-pointer'>
            <p>Blog lists</p>
          </Link>
          <Link href='/admin/subscriptions' className='mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 shadow-[-7px_7px_0px_#000] cursor-pointer'>
            <p>Subscriptions</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Sidebar