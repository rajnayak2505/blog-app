import { auth } from '@/auth';
import Link from 'next/link'
import React from 'react'
import SignOutButton from './clientComponents/SignOutButton';

const Header = async () => {
    const session = await auth()
    const user = session?.user;

    return (
        <div className='py-5 px-5 md:px-12 lg:px-28'>
            <div className='flex justify-between items-center'>
                <Link href="/" className='text-4xl font-bold italic'>blogger</Link>
                <div className='flex gap-2 items-center mt-[10px]'>
                    <Link href="/admin/addBlog" className='flex items-center gap-2 mr-2 font-medium py-1 px-3 sm:px-6 border border-solid -border-black shadow-[-7px_7px_0px_#000] cursor-pointer'>Post your blogs</Link>
                    {
                        !user ?
                            <div className='flex gap-5'>
                                <Link href="login" className='flex items-center gap-2 font-medium py-2 hover:bg-white hover:text-black border-black px-3 sm:px-6 border border-solid rounded-md bg-black text-white cursor-pointer transition-colors duration-400'>Log In</Link>
                                <Link href="/signup" className='flex items-center gap-2 font-medium py-2 hover:bg-white hover:text-black border-black px-3 sm:px-6 border border-solid rounded-md bg-black text-white cursor-pointer transition-colors duration-400'>Sign Up</Link>
                            </div> :
                            <div className='relative'>
                                <p className='absolute top-[-23px] w-[220px] text-[13px] font-bold '>Welcome! {session?.user?.name}</p>
                                <div className='flex gap-2'>
                                    <SignOutButton />
                                </div>
                            </div>
                    }
                </div>
            </div>
            <div className='text-center my-8'>
                <h1 className='text-3xl sm:text-5xl font-medium'>Latest Blogs</h1>
                <p className='mt-10 max-w-[740px] m-auto text-xs sm:text-base'>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsumLorem ipsum Lorem ipsum</p>
                <form className='flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border  border-black shadow-[-7px_7px_0px_#000]'>
                    <input type='email' placeholder='Enter your email' className='pl-4 outline-none' />
                    <button type='submit' className='border-l border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white'>Sunscribe</button>
                </form>
            </div>
        </div>
    )
}

export default Header