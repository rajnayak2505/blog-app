import { auth, signIn } from '@/auth';
import LoginForm from '@/components/clientComponents/LoginForm';
import { redirect } from 'next/navigation';
import Link from 'next/link'
import React from 'react'
import { ToastContainer } from 'react-toastify';

const Page = async() => {

  const session = await auth();
  if(session?.user) redirect("/")
  return (
    <div className='flex justify-center items-center h-[100vh]'>
      <ToastContainer theme="dark"/>
      <div className='border border-gray-300 p-5 rounded-md'>
        <LoginForm />
        <p className='text-center'>Or</p>
        <form action={async() =>{
          "use server"
          await signIn("google")
        }}>
          <button type='submit' className='py-2 px-2 font-bold bg-white text-black w-[100%] border rounded-md cursor-pointer'>Sign In With Google</button>
        </form>
        <Link href="/signup" className='text-center inline-block mt-2'>Don&apos;t have an account? <span className='text-blue-600 font-bold'>Sign Up</span></Link>
      </div>
    </div>
  )
}

export default Page