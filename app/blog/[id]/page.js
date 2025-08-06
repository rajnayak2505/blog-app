'use client'

import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React, { use, useEffect, useState } from 'react'

const page = ({ params }) => {
    const { id } = use(params);
    const [data, setData] = useState(null);

    const fetchBlogData = async () => {
        const response = await axios.get('/api/blog', {
            params: { id: id }
        })
        setData(response.data);
    };

    useEffect(() => {
        fetchBlogData()
    }, [])

    return (
        <>
            <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>
                <div className='flex justify-between items-center '>
                    <Link href="/" className='text-4xl font-bold italic'>blogger</Link>
                </div>
                <div className='text-center my-10 '>
                    <h1 className='text-2xl sm:text-3xl font-semibold max-w-[700px] mx-auto'>{data?.title}</h1>
                    <p className='my-10'>{data?.author}</p>
                    <div className="flex justify-center">
                        {data?.image ? (
                            <Image
                                src={data.image}
                                alt={data.title || 'blog image'}
                                width={500}
                                height={300}
                            />
                        ) : null}
                    </div>
                </div>
            </div>
            <div className='flex justify-center my-5 mx-auto max-w-[800px] font-semibold text-center'>
                <p className=''>{data?.description}</p>
            </div>
        </>
    )
}

export default page