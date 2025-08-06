import React from 'react'

const BlogTableItem = ({title, author, date, deleteBlog, blogId}) => {

    const blogDate = new Date(date)
  return (
    <tr className='bg-white border-b'>
        <th scope='row' className='items-center gap-3 hidden sm:flex px-6 py-4 font-semibold text-gray-900 whitespace-nowrap'>
            {author? author:"no author"}
        </th>
        <td className='px-6 py-4 '>
            {title? title:"no title"}
        </td>
        <td className='px-6 py-4 '>
            {blogDate.toDateString()}
        </td>
        <td onClick={()=> deleteBlog(blogId)} className='px-6 py-4 cursor-pointer text-xl'>
            ❌
        </td>
    </tr>
  )
}

export default BlogTableItem