import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BlogItem = ({id, image, title, description, category }) => {
    return (
        <>
            <div className='max-w-[330px] sm:max-w-[300px] bg-white border border-black hover:shadow-[-7px_7px_0px_#000]'>
                <Link href={`blog/${id}`}>
                    <Image
                        src={image}
                        alt="Placeholder"
                        width={400}
                        height={400}
                        unoptimized
                    />
                    <p className='ml-5 mt-5 inline-block bg-black text-white text-sm p-2'>{category}</p>
                    <div className='p-5'>
                        <h5 className='mb-2 text-lg font-medium tracking-tight text-gray-900'>{title}</h5>
                        <p className='mb-3 text-sm tracking-tight text-gray-700'>{description}</p>
                        <div className='inline-flex items-center py-2 font-semibold text-center'>
                            Read more...
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default BlogItem