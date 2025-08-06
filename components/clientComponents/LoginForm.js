'use client'
import credentialsLogin from '@/app/server/login';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react'
import { toast } from 'react-toastify';

const LoginForm = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";
  const router = useRouter()
  return (
    <div>
      <form action={async (formData) => {
        const email = formData.get("email");
        const password = formData.get("password");

        if (!email || !password) {
          return toast.error("Please provide all fields")
        }

        const loading = toast.loading("Loggin in")

        // await credentialsLogin(formData)
        const isError = await credentialsLogin(email, password)

        if (!isError) {
          toast.success("Login Successfull!",{id: loading});
          router.refresh()
        }

        else{toast.error(String(isError,{id: loading}))};

      }}
      >
        <h1 className='font-medium text-2xl mb-5'>Sign In</h1>
        <input className='p-2 border border-gray-300 mb-5 rounded-md w-[100%]' name="email" type="email" placeholder='Email' />
        <br />
        <input className='p-2 border border-gray-300 mb-5 rounded-md w-[100%]' name="password" type="password" placeholder='Password' />
        <br />
        <button type='submit' className='py-2 px-2 bg-black text-white w-[100%] border rounded-md cursor-pointer'>Sign In</button>

      </form>
    </div>
  )
}

export default LoginForm